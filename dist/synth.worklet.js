// src/junox/smoothMoves.js
class SmoothMoves {
  constructor(value, sampleRate2, fc = 5) {
    this.b1 = -Math.exp(-2 * fc * Math.PI / sampleRate2);
    this.a0 = 1 + this.b1;
    this.targetValue = value;
    this.isStarted = false;
    this.z1 = 0;
    this.reset();
  }
  setValue(value, useSmoothing) {
    this.targetValue = value;
    if (!this.isStarted || !useSmoothing) {
      this.reset();
      return;
    }
  }
  reset() {
    this.z1 = this.targetValue * this.a0 - this.targetValue;
    this.isStarted = false;
  }
  getNextValue() {
    this.isStarted = true;
    const xout = this.targetValue * this.a0 - this.z1;
    this.z1 = this.b1 * xout;
    return xout;
  }
}

// src/junox/dco.js
class Juno60DCO {
  constructor(sampleRate2) {
    this.sampleRate = sampleRate2;
    this.currentPhase = 0;
    this.phaseIncrement = 0;
    this.pulseWidth = 0.5;
    this.pulsePositive = 1;
    this.pulseNegative = -1;
    this.pulseHeight = 1;
    this.subOutput = 1;
  }
  noteOn(noteNumber) {
    const noteFrequency = Math.pow(2, (noteNumber - 69) / 12) * 442;
    this.phaseIncrement = noteFrequency / this.sampleRate;
    this.currentPhase = 1.1;
  }
  render(detuneFactor, pulseWidth, sawLevel, pulseLevel, subLevel) {
    const phaseIncrement = this.phaseIncrement * detuneFactor;
    const origPhase = this.currentPhase;
    this.currentPhase += phaseIncrement;
    if (this.currentPhase > 1) {
      this.currentPhase -= 1;
      this.pulseWidth = 0.5 - 0.45 * pulseWidth;
      this.pulsePositive = 1 - pulseWidth * 0.95;
      this.pulseNegative = -1;
      this.pulseHeight = 0.45 * (this.pulsePositive - this.pulseNegative);
    }
    let newSawOutput = 0;
    if (sawLevel > 0) {
      newSawOutput = this.currentPhase + this.currentPhase - 1;
      newSawOutput -= this.calcPolyBLEP2(this.currentPhase, phaseIncrement, 1);
    }
    let newPulseOutput = 0;
    if (pulseLevel > 0) {
      newPulseOutput = this.currentPhase > this.pulseWidth ? this.pulsePositive *= 0.998 : this.pulseNegative *= 0.998;
      newPulseOutput -= this.calcPolyBLEP2(this.currentPhase, phaseIncrement, this.pulseHeight);
      const x = this.currentPhase - this.pulseWidth;
      newPulseOutput += this.calcPolyBLEP2(x < 0 ? x + 1 : x, phaseIncrement, this.pulseHeight);
    }
    let newSubOutput = this.subOutput *= 0.998;
    let y = this.currentPhase - 0.5;
    if (y < phaseIncrement && y > -phaseIncrement) {
      if (y < 0) {
        y += 1;
      }
      const origSubOutput = newSubOutput;
      if (this.currentPhase >= 0.5 && origPhase < 0.5) {
        this.subOutput = newSubOutput = newSubOutput > 0 ? -1 : 1;
      }
      newSubOutput -= this.calcPolyBLEP2(y, phaseIncrement, origSubOutput);
    }
    return newSawOutput * sawLevel + newPulseOutput * pulseLevel + newSubOutput * subLevel;
  }
  calcPolyBLEP2(phase, inc, height) {
    let result = 0;
    if (phase < inc) {
      const t = phase / inc;
      result = height * (t + t - t * t - 1);
    } else if (phase + inc > 1) {
      const t = (phase - 1) / inc;
      result = height * (t * t + (t + t) + 1);
    }
    return result;
  }
}

// src/junox/abstractEnvelope.js
class AbstractEnvelope {
  constructor(segments) {
    this._segments = segments;
    this._currentPhase = -1;
    this._currentValue = 0;
  }
  isFinished() {
    return this._currentPhase === -1;
  }
  isReleased() {
    return this.currentPhase !== 0 && this.currentPhase !== 1;
  }
  isShuttingDown() {
    return this.currentPhase === this._segments.length - 1;
  }
  trigger() {
    this._currentPhase = 0;
    for (let segment of this._segments) {
      segment.reset();
    }
  }
  release() {
    if (this._currentPhase !== -1) {
      this._currentPhase = this._segments.length - 2;
    }
  }
  shutdown() {
    if (this._currentPhase !== -1) {
      this._currentPhase = this._segments.length - 1;
    }
  }
  reset() {
    this._currentPhase = -1;
    this._currentValue = 0;
    for (let i = 0; i < this._segments.length; i++) {
      this._segments[i].reset();
    }
  }
  render() {
    while (this._currentPhase !== -1 && this._currentPhase < this._segments.length) {
      const segment = this._segments[this._currentPhase];
      const nextValue = segment.process(this._currentValue);
      if (segment.isComplete(nextValue)) {
        this._currentPhase++;
        if (this._currentPhase >= this._segments.length) {
          this._currentValue = 0;
          this._currentPhase = -1;
        }
      } else {
        this._currentValue = nextValue;
        break;
      }
    }
    return this._currentValue;
  }
}
class AttackSegment {
  constructor(sampleRate2, attackTCO, target, isSustainAtEnd) {
    this._sampleRate = sampleRate2;
    this._attackTCO = attackTCO;
    this._attackCoeff = 0;
    this._attackOffset = 0;
    this._isSustainAtEnd = isSustainAtEnd;
    this.target = target;
  }
  setDuration(duration) {
    const samples = this._sampleRate * duration;
    this._attackCoeff = Math.exp(-Math.log((1 + this._attackTCO) / this._attackTCO) / samples);
    this._attackOffset = (1 + this._attackTCO) * (1 - this._attackCoeff);
  }
  reset() {
  }
  process(previousValue) {
    const result = previousValue * this._attackCoeff + this._attackOffset;
    return result > this.target && this._isSustainAtEnd ? this.target : result;
  }
  isComplete(value) {
    return value > this.target;
  }
}
class DecaySegment {
  constructor(sampleRate2, decayTCO, target, isSustainAtEnd) {
    this._sampleRate = sampleRate2;
    this._decayTCO = decayTCO;
    this._decayCoeff = 0;
    this._decayOffset = 0;
    this._isSustainAtEnd = isSustainAtEnd;
    this.target = target;
  }
  setDuration(seconds) {
    const samples = this._sampleRate * seconds;
    this._decayCoeff = Math.exp(-Math.log((1 + this._decayTCO) / this._decayTCO) / samples);
    this._decayOffset = (this.target - this._decayTCO) * (1 - this._decayCoeff);
  }
  reset() {
  }
  process(previousValue) {
    const result = previousValue * this._decayCoeff + this._decayOffset;
    return result < this.target && this._isSustainAtEnd ? this.target : result;
  }
  isComplete(value) {
    return value <= this.target && !this._isSustainAtEnd || value < 0.02;
  }
}
class DelaySegment {
  constructor(sampleRate2) {
    this._sampleRate = sampleRate2;
    this._delaySampleCount = 0;
    this._currentRemaining = 0;
  }
  setDuration(duration) {
    const delaySampleCount = this._sampleRate * duration | 0;
    this._currentRemaining += delaySampleCount - this._delaySampleCount;
    this._delaySampleCount = delaySampleCount;
  }
  reset() {
    this._currentRemaining = this._delaySampleCount;
  }
  process(previousValue) {
    this._currentRemaining--;
    return previousValue;
  }
  isComplete() {
    return this._currentRemaining <= 0;
  }
}
class ShutdownSegment {
  constructor(sampleRate2, seconds) {
    this._shutdownRate = 1 / (seconds * sampleRate2);
  }
  reset() {
  }
  process(previousValue) {
    const result = previousValue - this._shutdownRate;
    return this.value < 0 ? 0 : result;
  }
  isComplete(value) {
    return value <= 0;
  }
}

// src/junox/utils.js
function fastTanh(x) {
  if (x < -3) {
    return -1;
  } else if (x > 3) {
    return 1;
  }
  const xSquared = x * x;
  return x * (27 + xSquared) / (27 + 9 * xSquared);
}
function interpolatedLookup(value, table) {
  if (value <= 0) {
    return table[0];
  }
  if (value >= 1) {
    return table[table.length - 1];
  }
  value *= table.length - 1;
  const index = value | 0;
  const factor = value - index;
  if (factor === 0) {
    return table[index];
  }
  return table[index] * (1 - factor) + table[index + 1] * factor;
}

// src/junox/juno60Envelope.js
const curveFromAttackSliderToDuration = [1e-3, 0.03, 0.24, 0.65, 3.25];
const curveFromDecaySliderToDuration = [2e-3, 0.096, 0.984, 4.449, 19.783];
const curveFromReleaseSliderToDuration = [2e-3, 0.096, 0.984, 4.449, 19.783];
class Juno60Envelope extends AbstractEnvelope {
  constructor(sampleRate2) {
    super([
      new AttackSegment(sampleRate2, 0.632, 1, false),
      new DecaySegment(sampleRate2, 0.025, 0, true),
      new DecaySegment(sampleRate2, 0.025, 0, false),
      new ShutdownSegment(sampleRate2, 1e-3)
    ]);
    this._attack = this._segments[0];
    this._decay = this._segments[1];
    this._release = this._segments[2];
    this._shutdown = this._segments[3];
  }
  setValues(attackDuration, decayDuration, sustainLevel, releaseDuration) {
    this._attack.setDuration(attackDuration);
    this._decay.target = Math.max(0.02, sustainLevel);
    this._decay.setDuration(decayDuration);
    this._release.setDuration(this._decay.target <= 0.02 ? 0.01 : releaseDuration);
  }
  setValuesFromSliders(attackSlider, decaySlider, sustainSlider, releaseSlider) {
    const attackDuration = interpolatedLookup(attackSlider, curveFromAttackSliderToDuration);
    const decayDuration = interpolatedLookup(decaySlider, curveFromDecaySliderToDuration);
    const releaseDuration = interpolatedLookup(releaseSlider, curveFromReleaseSliderToDuration);
    this.setValues(attackDuration, decayDuration, sustainSlider, releaseDuration);
  }
}

// src/junox/mooglpf.js
class MoogLowPassFilter {
  constructor(sampleRate2) {
    this.cutoffToNormalizedFactor = 1.16 * 2 / sampleRate2;
    this.resonance = 0;
    this.reset();
  }
  reset() {
    this._in1 = 0;
    this._in2 = 0;
    this._in3 = 0;
    this._in4 = 0;
    this._out1 = 0;
    this._out2 = 0;
    this._out3 = 0;
    this._out4 = 0;
  }
  trigger(initialExcite) {
    this._out4 += initialExcite;
  }
  render(input, fc) {
    let f = fc * this.cutoffToNormalizedFactor;
    if (f > 1.16) {
      f = 1.16;
    }
    const fSquare = f * f;
    const fb = this.resonance * (1 - 0.15 * fSquare);
    const f1 = 1 - f;
    input -= this._out4 * fb;
    input *= 0.35013 * fSquare * fSquare;
    this._out1 = input + 0.3 * this._in1 + f1 * this._out1;
    this._in1 = input;
    this._out2 = this._out1 + 0.3 * this._in2 + f1 * this._out2;
    this._in2 = this._out1;
    this._out3 = this._out2 + 0.3 * this._in3 + f1 * this._out3;
    this._in3 = this._out2;
    this._out4 = this._out3 + 0.3 * this._in4 + f1 * this._out4;
    this._in4 = this._out3;
    return this._out4;
  }
}

// src/junox/noise.js
class Noise {
  constructor(sampleRate2, fc = 5e3) {
    this._b1 = -Math.exp(-2 * fc * Math.PI / sampleRate2);
    this._a0 = 1 + this._b1;
    this._z1 = 0;
  }
  render() {
    const xin = Math.random() * 2 - 1;
    const xout = xin * this._a0 - this._z1;
    this._z1 = this._b1 * xout;
    return xout;
  }
}

// src/junox/voice.js
class Voice {
  constructor({patch, sampleRate: sampleRate2}) {
    this.patch = patch;
    this.sampleRate = sampleRate2;
    this.note = -1;
    this.velocity = 0;
    this.filterNoteFactor = 0;
    this.dco = new Juno60DCO(sampleRate2);
    this.noise = new Noise(sampleRate2, 5e3);
    this.modEnv = new Juno60Envelope(sampleRate2);
    this.ampEnv = new Juno60Envelope(sampleRate2);
    this.moogVCF = new MoogLowPassFilter(sampleRate2);
  }
  render(lfoOut, detuneFactor, pwmDepth, sawLevel, pulseLevel, subLevel, noiseLevel, filterCutoff, filterResonance, filterEnvMod, lfoDetuneOctaves, filterKeyMod) {
    const modEnvOut = this.modEnv.render();
    const ampEnvOut = this.ampEnv.render();
    let pulseWidth = pwmDepth;
    if (this.patch.dco.pwmMod === "l") {
      pulseWidth *= lfoOut * 0.5 + 0.5;
    } else if (this.patch.dco.pwmMod === "e") {
      pulseWidth *= modEnvOut;
    }
    let dcoOut = this.dco.render(detuneFactor, pulseWidth, sawLevel, pulseLevel, subLevel);
    if (noiseLevel > 0) {
      dcoOut += this.noise.render() * noiseLevel;
    }
    const cutoffDetuneOctave = filterCutoff * 200 / 12;
    const envDetuneOctaves = modEnvOut * filterEnvMod * 12;
    const keyboardDetuneOctaves = filterKeyMod * this.filterNoteFactor;
    const resonanceDetuneOctaves = this.patch.vcf.resonance;
    let vcfCutoffValue = cutoffDetuneOctave + lfoDetuneOctaves * ampEnvOut + keyboardDetuneOctaves + envDetuneOctaves + resonanceDetuneOctaves;
    if (vcfCutoffValue < 8) {
      let vcfGainBodge = (8 - vcfCutoffValue) * 0.125;
      dcoOut *= 1 + vcfGainBodge * 3;
    }
    let cutoffFrequency = 7.8 * Math.pow(2, vcfCutoffValue);
    cutoffFrequency = fixLpfCutoff(cutoffFrequency);
    this.moogVCF.resonance = filterResonance * 3.99;
    const vcfOut = this.moogVCF.render(dcoOut, cutoffFrequency);
    return this.velocity * vcfOut * ampEnvOut;
  }
  noteOn(note, velocity) {
    if (note !== this.note || this.isFinished()) {
      this.note = note;
      this.dco.noteOn(note);
      this.modEnv.reset();
      this.ampEnv.reset();
      this.moogVCF.reset();
      const c4 = 60;
      const fiveOctaves = 5 * 12;
      this.filterNoteFactor = 5 * ((this.note - c4) / fiveOctaves);
    }
    if (!this.patch.dco.saw && !this.patch.dco.pulse && !this.patch.dco.subAmount && !this.patch.dco.noise) {
      const initialExcite = this.patch.vcf.resonance * this.patch.vcf.resonance * 0.2;
      this.moogVCF.trigger(initialExcite);
    }
    this.velocity = velocity;
    this.updatePatch(this.patch);
    this.modEnv.trigger();
    this.ampEnv.trigger();
  }
  noteOff() {
    this.modEnv.release();
    this.ampEnv.release();
  }
  isFinished() {
    return this.ampEnv.isFinished();
  }
  updatePatch(patch) {
    const env = patch.env;
    this.modEnv.setValuesFromSliders(env.attack, env.decay, env.sustain, env.release);
    if (patch.vcaType !== "env") {
      this.ampEnv.setValuesFromSliders(env.attack, env.decay, env.sustain, env.release);
    } else {
      this.ampEnv.setValues(247e-5, 57e-4, 0.98, 57e-4);
    }
    this.patch = patch;
  }
}
function fixLpfCutoff(fc) {
  if (fc < 1e4) {
    return fc * interpolatedLookup(2e-3 * fc, lpfCutoffCorrections);
  }
  return fc;
}
const lpfCutoffCorrections = [
  1,
  4,
  1.364446108,
  1.30021398,
  1.291615494,
  1.288268551,
  1.264147018,
  1.225067204,
  1.207675563,
  1.214457029,
  1.197350752,
  1.170175889,
  1.165266155,
  1.147560592,
  1.125353785,
  1.111233998,
  1.0918184,
  1.067975101,
  1.04060779,
  1.026150863,
  1.022347836,
  1
];

// src/junox/ringBuffer.js
class RingBuffer {
  constructor(maxBufferSize) {
    this.buffer = new Float32Array(maxBufferSize);
    this.writeIndex = 0;
    this.maxBufferSize = maxBufferSize;
  }
  ringBufferIndex(index) {
    if (index < 0) {
      return index + this.maxBufferSize;
    }
    if (index >= this.maxBufferSize) {
      return index - this.maxBufferSize;
    }
    return index;
  }
  readSample(readOffset) {
    const readIndex = this.ringBufferIndex(this.writeIndex - readOffset);
    const indexA = Math.floor(readIndex);
    const fractional = readIndex - indexA;
    const indexB = this.ringBufferIndex(indexA + 1);
    return this.buffer[indexA] * (1 - fractional) + this.buffer[indexB] * fractional;
  }
  writeSample(input) {
    this.buffer[this.writeIndex] = input;
    this.writeIndex = (this.writeIndex + 1) % this.maxBufferSize;
  }
  reset() {
    this.buffer.fill(0);
  }
}

// src/junox/simpleSinglePoleFilter.js
class SimpleSinglePoleFilter {
  constructor(sampleRate2, fc = 5) {
    this._piOverSampleRate = Math.PI / sampleRate2;
    this._a0 = 1;
    this._b1 = 0;
    this._z1 = 0;
    this.setCutoff(fc);
  }
  reset() {
    this._z1 = 0;
  }
  renderLP(xin) {
    const xout = xin * this._a0 + this._z1;
    this._z1 = -this._b1 * xout;
    return xout;
  }
  renderHP(xin) {
    return xin - this.renderLP(xin);
  }
  setCutoff(fc) {
    this._b1 = -Math.exp(-2 * fc * this._piOverSampleRate);
    this._a0 = 1 + this._b1;
  }
}

// src/junox/chorus.js
class Chorus {
  constructor(sampleRate2) {
    this.leftOutput = 0;
    this.rightOutput = 0;
    this._sampleRate = sampleRate2;
    this._isUsed = false;
    this._nextChorusMode = 0;
    this._ringBuffer = new RingBuffer(Math.trunc(sampleRate2 * 6e-3));
    this._preFilter = new SimpleSinglePoleFilter(sampleRate2, 7237);
    this._postLeftFilter = new SimpleSinglePoleFilter(sampleRate2, 10644);
    this._postRightFilter = new SimpleSinglePoleFilter(sampleRate2, 10644);
    this._dryCurrent = 1;
    this._dryChange = 0;
    this._dryTarget = 1;
    this._lfoValue = 0;
    this._lfoIncrement = 0.01;
    this._maxLeftOffset = 0;
    this._averageLeftSamples = 0;
    this._maxRightOffset = 0;
    this._averageRightSamples = 0;
  }
  render(input) {
    this._isUsed = true;
    let dry = this._dryCurrent;
    if (this._dryChange !== 0) {
      dry += this._dryChange;
      if (dry > 1) {
        dry = 1;
        this._dryChange = 0;
        this.update(this._nextChorusMode);
      } else if (dry < this._dryTarget && this._dryChange < 0) {
        dry = this._dryTarget;
        this._dryChange = 0;
      }
      this._dryCurrent = dry;
    }
    if (dry === 1) {
      this.leftOutput = input;
      this.rightOutput = input;
      return;
    }
    let lfoValue = this._lfoValue + this._lfoIncrement;
    if (lfoValue > 1) {
      lfoValue = 2 - lfoValue;
      this._lfoIncrement = -this._lfoIncrement;
    } else if (lfoValue < -1) {
      lfoValue = -2 - lfoValue;
      this._lfoIncrement = -this._lfoIncrement;
    }
    this._lfoValue = lfoValue;
    const dryOutput = input * dry;
    const wetFactor = 1 - dry;
    const leftDelaySamples = this._averageLeftSamples + lfoValue * this._maxLeftOffset;
    const leftDelayedValue = this._ringBuffer.readSample(leftDelaySamples);
    this.leftOutput = dryOutput + this._postLeftFilter.renderLP(leftDelayedValue * wetFactor);
    const rightDelaySamples = this._averageRightSamples + lfoValue * this._maxRightOffset;
    const rightDelayedValue = this._ringBuffer.readSample(rightDelaySamples);
    this.rightOutput = dryOutput + this._postRightFilter.renderLP(rightDelayedValue * wetFactor);
    this._ringBuffer.writeSample(this._preFilter.renderLP(this._applySaturation(input)));
  }
  reset() {
    this._ringBuffer.reset();
    this._preFilter.reset();
    this._postLeftFilter.reset();
    this._postRightFilter.reset();
    this._isUsed = false;
  }
  update(chorusMode) {
    if (this._dryCurrent < 1 && !this._isUsed) {
      this._dryChange = 5e-4;
      this._dryTarget = 1;
      this._nextChorusMode = chorusMode;
    } else {
      switch (chorusMode) {
        case 1:
          this._updateValues(0.513, 0.44, 154e-5, 515e-5, 151e-5, 54e-4, true);
          break;
        case 2:
          this._updateValues(0.863, 0.44, 154e-5, 515e-5, 151e-5, 54e-4, true);
          break;
        case 3:
          this._updateValues(9.75, 0.44, 322e-5, 356e-5, 328e-5, 365e-5, false);
          break;
        default:
          this._updateValues(0.513, 1, 154e-5, 515e-5, 151e-5, 54e-4, true);
          this._ringBuffer.reset();
          break;
      }
    }
  }
  _applySaturation(input) {
    return input;
  }
  _updateValues(freq, dry, minLeftDelay, maxLeftDelay, minRightDelay, maxRightDelay, isStereo) {
    const averageLeftDelay = (minLeftDelay + maxLeftDelay) * 0.5;
    const maxLeftOffset = maxLeftDelay - averageLeftDelay;
    this._averageLeftSamples = averageLeftDelay * this._sampleRate;
    this._maxLeftOffset = maxLeftOffset * this._sampleRate;
    const averageRightDelay = (minRightDelay + maxRightDelay) * 0.5;
    const maxRightOffset = maxRightDelay - averageRightDelay;
    this._averageRightSamples = averageRightDelay * this._sampleRate;
    this._maxRightOffset = maxRightOffset * this._sampleRate * (isStereo ? -1 : 1);
    this._dryTarget = dry;
    if (!this._isUsed) {
      this._dryChange = dry;
    }
    this._dryChange = (dry - this._dryCurrent) / 1e3;
    this._lfoIncrement = Math.sign(this._lfoIncrement) * 4 * freq / this._sampleRate;
  }
}

// src/junox/lfo.js
class LFO {
  constructor(sampleRate2) {
    this._oneOverSampleRate = 1 / sampleRate2;
    this._phaseIncrement = 0;
    this.currentPhase = 1;
    this.currentValue = 0;
    this.isRestarted = false;
    this.waveform = "triangle";
  }
  reset() {
    this.currentPhase = 1;
    this.currentValue = 0;
  }
  render() {
    this.isRestarted = false;
    this.currentPhase += this._phaseIncrement;
    if (this.currentPhase > 1) {
      this.isRestarted = true;
      this.currentPhase -= 1;
    }
    let value = 0;
    switch (this.waveform) {
      case "none":
        value = 0;
        break;
      case "sine":
        value = Math.sin(this.currentPhase * 2 * Math.PI);
        break;
      case "square":
        value = this.currentPhase > 0.5 ? -1 : 1;
        break;
      case "random":
        value = this.isRestarted ? Math.random() * 2 - 1 : this.currentValue;
        break;
      case "noise":
        value = Math.random() * 2 - 1;
        break;
      default:
        value = this.currentPhase * 4;
        if (value > 1) {
          value = 2 - value;
        }
        if (value < -1) {
          value = -2 - value;
        }
        break;
    }
    return this.currentValue = value;
  }
  setRate(frequency) {
    this._phaseIncrement = frequency * this._oneOverSampleRate;
  }
}

// src/junox/lfoWithEnvelope.js
class LFOWithEnvelope extends LFO {
  constructor(sampleRate2) {
    super(sampleRate2);
    const segments = [
      this._delay = new DelaySegment(sampleRate2),
      this._attack = new AttackSegment(sampleRate2, 0.03, 1, true),
      this._release = new DecaySegment(sampleRate2, 0.025, 0, false),
      this._shutdown = new ShutdownSegment(sampleRate2, 1e-3)
    ];
    this._release.setDuration(0.1);
    this._env = new AbstractEnvelope(segments);
  }
  isActive() {
    return !this._env.isFinished();
  }
  trigger() {
    if (!this.isActive()) {
      this.currentPhase = 1;
      this.currentValue = 0;
    }
    if (this._env.isFinished() || !this._env.isReleased()) {
      this._env.trigger();
    }
  }
  release() {
    this._env.release();
  }
  shutdown() {
    this._env.shutdown();
  }
  reset() {
    super.reset();
    this._env.reset();
  }
  render() {
    if (!this.isActive()) {
      return 0;
    }
    const envValue = this._env.render();
    if (envValue === 0) {
      return 0;
    }
    return envValue * super.render();
  }
  setValues(frequency, delayDuration, attackDuration) {
    this.setRate(frequency);
    this._delay.setDuration(delayDuration);
    this._attack.setDuration(attackDuration);
  }
}

// src/junox/junox.js
const synthStatus = {
  SILENT: 0,
  NOTES_ACTIVE: 4
};
class Junox {
  constructor({patch, sampleRate: sampleRate2, polyphony}) {
    this.patch = patch;
    this.sampleRate = sampleRate2;
    this.maxVoices = polyphony;
    this.voices = [];
    this.status = synthStatus.SILENT;
    this.parameters = [
      this.bendAmountParam = new SmoothMoves(0, sampleRate2),
      this.dcoBendDepthParam = new SmoothMoves(1, sampleRate2),
      this.pitchLfoModDepthParam = new SmoothMoves(0, sampleRate2),
      this.pwmDepthParam = new SmoothMoves(0, sampleRate2),
      this.sawLevelParam = new SmoothMoves(0, sampleRate2),
      this.pulseLevelParam = new SmoothMoves(0, sampleRate2),
      this.subLevelParam = new SmoothMoves(0, sampleRate2),
      this.noiseLevelParam = new SmoothMoves(0, sampleRate2),
      this.filterCutoffParam = new SmoothMoves(0, sampleRate2),
      this.filterResonanceParam = new SmoothMoves(0, sampleRate2),
      this.filterBendDepthParam = new SmoothMoves(1, sampleRate2),
      this.filterEnvModParam = new SmoothMoves(0, sampleRate2),
      this.filterLfoModParam = new SmoothMoves(0, sampleRate2),
      this.filterKeyModParam = new SmoothMoves(0, sampleRate2),
      this.vcaGainFactorParam = new SmoothMoves(0, sampleRate2)
    ];
    this.lfo = new LFOWithEnvelope(sampleRate2);
    this.lfo.waveform = "sine";
    this.hpf = new SimpleSinglePoleFilter(sampleRate2);
    this.chorus = new Chorus(sampleRate2);
    this.update();
  }
  noteOn(note, velocity) {
    this.status = synthStatus.NOTES_ACTIVE;
    const voiceIndex = this.voices.findIndex((voice2) => voice2.note === note);
    if (voiceIndex >= 0) {
      this.voices[voiceIndex].noteOn(note, velocity);
      return;
    }
    if (!this.voices.length && this.patch.lfo.autoTrigger) {
      this.lfo.trigger();
    }
    const newVoice = new Voice({patch: this.patch, sampleRate: this.sampleRate});
    newVoice.noteOn(note, velocity);
    if (this.voices.length < this.maxVoices) {
      this.voices.push(newVoice);
      return;
    }
    this.voices[0] = newVoice;
  }
  noteOff(note) {
    this.voices.forEach((voice2) => voice2.note === note && !voice2.isFinished() && voice2.noteOff());
  }
  pitchBend(value) {
    this.bendAmountParam.setValue(value);
  }
  lfoTrigger() {
    this.lfo.trigger();
  }
  lfoRelease() {
    this.lfo.release();
  }
  render(outL, outR) {
    if (this.status === synthStatus.SILENT) {
      return;
    }
    this.status--;
    this.voices = this.voices.filter((voice2) => !voice2.isFinished());
    if (this.voices.length) {
      this.status = synthStatus.NOTES_ACTIVE;
    }
    for (let i = 0; i < outL.length; i++) {
      const bendAmount = this.bendAmountParam.getNextValue();
      const dcoBendDepth = this.dcoBendDepthParam.getNextValue();
      const pwmDepth = this.pwmDepthParam.getNextValue();
      const pitchLfoModDepth = this.pitchLfoModDepthParam.getNextValue();
      const sawLevel = this.sawLevelParam.getNextValue();
      const pulseLevel = this.pulseLevelParam.getNextValue();
      const subLevel = this.subLevelParam.getNextValue();
      const noiseLevel = this.noiseLevelParam.getNextValue();
      const filterCutoff = this.filterCutoffParam.getNextValue();
      const filterResonance = this.filterResonanceParam.getNextValue();
      const filterBendDepth = this.filterBendDepthParam.getNextValue();
      const filterEnvMod = this.filterEnvModParam.getNextValue();
      const filterLfoMod = this.filterLfoModParam.getNextValue();
      const filterKeyMod = this.filterKeyModParam.getNextValue();
      const vcaGainFactor = this.vcaGainFactorParam.getNextValue();
      if (i === 0) {
      }
      const lfoOut = this.lfo.render();
      const dcoDetuneOctaves = lfoOut * pitchLfoModDepth * 0.25 + bendAmount * dcoBendDepth * 7 / 12;
      let dcoDetuneFactor = this.patch.dco.range;
      if (dcoDetuneOctaves !== 0) {
        dcoDetuneFactor *= Math.pow(2, dcoDetuneOctaves);
      }
      const filterDetuneOctaves = bendAmount * filterBendDepth * 4 + filterLfoMod * lfoOut * 3;
      let monoOut = 0;
      for (let v = 0; v < this.voices.length; v++) {
        const voice2 = this.voices[v];
        if (!voice2.isFinished()) {
          monoOut += voice2.render(lfoOut, dcoDetuneFactor, pwmDepth, sawLevel, pulseLevel, subLevel, noiseLevel, filterCutoff, filterResonance, filterEnvMod, filterDetuneOctaves, filterKeyMod);
        }
      }
      if (this.patch.hpf > 0) {
        let lowPassOut = this.hpf.renderLP(monoOut);
        if (this.patch.hpf < 0.25) {
          lowPassOut *= this.patch.hpf * 4;
        }
        monoOut -= lowPassOut;
      }
      monoOut *= vcaGainFactor;
      monoOut = fastTanh(3 * monoOut);
      this.chorus.render(monoOut);
      outL[i] = this.chorus.leftOutput;
      outR[i] = this.chorus.rightOutput;
    }
    if (this.status === synthStatus.SILENT) {
      let fadeLevel = 1;
      const fadeStep = fadeLevel / outL.length;
      for (let i = 0; i < outL.length; i++) {
        outL[i] *= fadeLevel;
        outR[i] *= fadeLevel;
        fadeLevel -= fadeStep;
      }
      if (this.patch.lfo.autoTrigger) {
        this.lfo.reset();
      }
      this.hpf.reset();
      this.chorus.reset();
      for (let i = 0; i < this.parameters.length; i++) {
        this.parameters[i].reset();
      }
    }
  }
  setValue(path, value) {
    const pathSegments = path.split(".");
    if (pathSegments.length) {
      let target = this.patch;
      for (let i = 0; i < pathSegments.length - 1; i++) {
        target = target[pathSegments[i]] || (target[pathSegments[i]] = {});
      }
      target[pathSegments[pathSegments.length - 1]] = value;
      this.update();
    }
  }
  update() {
    let isActive = false;
    for (let v = 0; v < this.voices.length; v++) {
      const voice2 = this.voices[v];
      voice2.updatePatch(this.patch);
      isActive = isActive || !voice2.isFinished();
    }
    let sawLevel = this.patch.dco.saw ? 0.2 : 0;
    let pulseLevel = this.patch.dco.pulse ? 0.2 : 0;
    let subLevel = this.patch.dco.sub ? this.patch.dco.subAmount * 0.195 : 0;
    let noiseLevel = this.patch.dco.noise * 0.21;
    let mixFactor = sawLevel + pulseLevel + subLevel + noiseLevel;
    if (mixFactor > 0.26) {
      mixFactor = 0.26 / (0.26 + (mixFactor - 0.26) * 0.3);
      pulseLevel *= mixFactor;
      sawLevel *= mixFactor;
      subLevel *= mixFactor;
      noiseLevel *= mixFactor;
    }
    this.sawLevelParam.setValue(sawLevel, isActive);
    this.pulseLevelParam.setValue(pulseLevel, isActive);
    this.subLevelParam.setValue(subLevel, isActive);
    this.noiseLevelParam.setValue(noiseLevel, isActive);
    this.pitchLfoModDepthParam.setValue(this.patch.dco.lfo, isActive);
    this.pwmDepthParam.setValue(this.patch.dco.pwm, isActive);
    const envModDirection = this.patch.vcf.modPositive ? 1 : -1;
    this.filterCutoffParam.setValue(this.patch.vcf.frequency, isActive);
    this.filterResonanceParam.setValue(this.patch.vcf.resonance, isActive);
    this.filterEnvModParam.setValue(this.patch.vcf.envMod * envModDirection, isActive);
    this.filterLfoModParam.setValue(this.patch.vcf.lfoMod, isActive);
    this.filterKeyModParam.setValue(this.patch.vcf.keyMod, isActive);
    this.chorus.update(this.patch.chorus);
    setLfoValuesFromSliders(this.lfo, this.patch.lfo.frequency, this.patch.lfo.delay);
    setHpfValuesFromSliders(this.hpf, this.patch.hpf);
    const vcaGainFactor = Math.pow(1.2589, this.patch.vca * 10) * 0.1;
    this.vcaGainFactorParam.setValue(vcaGainFactor, isActive);
  }
  panic() {
    this.voices = [];
  }
}
const curveFromLfoRateSliderToFreq = [0.3, 0.85, 3.39, 11.49, 22.22];
const curveFromLfoDelaySliderToDelay = [0, 0.0639, 0.85, 1.2, 2.685];
const curveFromLfoDelaySliderToAttack = [1e-3, 0.053, 0.188, 0.348, 1.15];
function setLfoValuesFromSliders(lfo2, rateSlider, delaySlider) {
  const frequency = interpolatedLookup(rateSlider, curveFromLfoRateSliderToFreq);
  const delayDuration = interpolatedLookup(delaySlider, curveFromLfoDelaySliderToDelay);
  const attackDuration = interpolatedLookup(delaySlider, curveFromLfoDelaySliderToAttack);
  lfo2.setValues(frequency, delayDuration, attackDuration);
}
const curveFromHpfSliderToFreq = [140, 250, 520, 1220];
function setHpfValuesFromSliders(hpf, rateSlider) {
  const frequency = interpolatedLookup(rateSlider, curveFromHpfSliderToFreq);
  hpf.setCutoff(frequency);
}

// src/synth.constants.js
const NOTE_ON = "note-on";
const NOTE_OFF = "note-off";
const SET_PARAM = "set-param";
const SET_PATCH = "set-patch";
const LFO_TRIGGER_ON = "lfo-trigger-on";
const LFO_TRIGGER_OFF = "lfo-trigger-off";
const PITCH_BEND = "pitch-bend";
const PANIC = "panic";

// src/synth.worklet.js
class JunoxWorker extends AudioWorkletProcessor {
  constructor(options) {
    super();
    this.synth = new Junox({
      patch: options.processorOptions.patch,
      polyphony: options.processorOptions.polyphony,
      sampleRate: sampleRate || 48e3
    });
    this.port.onmessage = this.handleMessage.bind(this);
  }
  handleMessage(event) {
    if (event.data.action === NOTE_ON) {
      this.synth.noteOn(event.data.note, event.data.velocity);
    } else if (event.data.action === NOTE_OFF) {
      this.synth.noteOff(event.data.note);
    } else if (event.data.action === PITCH_BEND) {
      this.synth.pitchBend(event.data.value);
    } else if (event.data.action === SET_PARAM) {
      this.synth.setValue(event.data.name, event.data.value);
    } else if (event.data.action === SET_PATCH) {
      this.synth.patch = event.data.patchData;
      this.synth.update();
    } else if (event.data.action === LFO_TRIGGER_ON) {
      this.synth.lfoTrigger();
    } else if (event.data.action === LFO_TRIGGER_OFF) {
      this.synth.lfoRelease();
    } else if (event.data.action === PANIC) {
      this.synth.panic();
    } else {
      console.log("Unmanaged message", JSON.stringify(event.data));
    }
  }
  process(inputs, outputs) {
    const output = outputs[0];
    this.synth.render(output[0], output[1]);
    return true;
  }
}
registerProcessor("junox-synth", JunoxWorker);
//# sourceMappingURL=synth.worklet.js.map
