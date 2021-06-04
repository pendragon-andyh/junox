var Junox = (() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // dist/synth.node.mjs
  var synth_node_exports = {};
  __export(synth_node_exports, {
    Juno60FactoryPatchesA: () => Juno60FactoryPatchesA,
    SynthWorkletNode: () => SynthWorkletNode,
    createJuno60: () => createJuno60,
    defaultPatch: () => defaultPatch
  });
  var NOTE_ON = "note-on";
  var NOTE_OFF = "note-off";
  var SET_PARAM = "set-param";
  var SET_PATCH = "set-patch";
  var ALL_NOTES_OFF = "all-notes-off";
  var LFO_TRIGGER_ON = "lfo-trigger-on";
  var LFO_TRIGGER_OFF = "lfo-trigger-off";
  var PITCH_BEND = "pitch-bend";
  var Juno60FactoryPatchesA = [
    {
      name: "Strings 1",
      vca: 0.5,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.6, delay: 0 },
      dco: { range: 1, saw: true, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "l", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.7, resonance: 0, modPositive: true, envMod: 0, lfoMod: 0, keyMod: 1 },
      env: { attack: 0.4, decay: 0, sustain: 1, release: 0.45 },
      chorus: 1
    },
    {
      name: "Strings 2",
      vca: 0.3,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.4, delay: 0 },
      dco: { range: 1, saw: true, pulse: true, sub: false, subAmount: 0, noise: 0, pwm: 0.6, pwmMod: "l", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.7, resonance: 0, modPositive: true, envMod: 0, lfoMod: 0, keyMod: 1 },
      env: { attack: 0.4, decay: 0, sustain: 1, release: 0.45 },
      chorus: 2
    },
    {
      name: "Strings 3",
      vca: 0.3,
      vcaType: "env",
      lfo: { autoTrigger: false, frequency: 0.3, delay: 0.8 },
      dco: { range: 1, saw: true, pulse: true, sub: true, subAmount: 1, noise: 0, pwm: 0.7, pwmMod: "l", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.5, resonance: 0, modPositive: true, envMod: 0, lfoMod: 0, keyMod: 1 },
      env: { attack: 0.3, decay: 0, sustain: 1, release: 0.6 },
      chorus: 2
    },
    {
      name: "Organ 1",
      vca: 0.5,
      vcaType: "gate",
      lfo: { autoTrigger: true, frequency: 0.2, delay: 0.8 },
      dco: { range: 1, saw: false, pulse: true, sub: true, subAmount: 1, noise: 0, pwm: 0.5, pwmMod: "m", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.4, resonance: 0.6, modPositive: true, envMod: 0.45, lfoMod: 0, keyMod: 1 },
      env: { attack: 0, decay: 0, sustain: 0, release: 0 },
      chorus: 1
    },
    {
      name: "Organ 2",
      vca: 0.5,
      vcaType: "gate",
      lfo: { autoTrigger: true, frequency: 0.5, delay: 0.4 },
      dco: { range: 1, saw: false, pulse: true, sub: true, subAmount: 0.8, noise: 0, pwm: 0.55, pwmMod: "l", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.35, resonance: 0.55, modPositive: true, envMod: 0.4, lfoMod: 0, keyMod: 1 },
      env: { attack: 0, decay: 0.1, sustain: 0, release: 0.1 },
      chorus: 1
    },
    {
      name: "Organ 3",
      vca: 0.5,
      vcaType: "gate",
      lfo: { autoTrigger: true, frequency: 0.5, delay: 0.4 },
      dco: { range: 2, saw: false, pulse: true, sub: true, subAmount: 0.8, noise: 0, pwm: 0.55, pwmMod: "l", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.35, resonance: 0.55, modPositive: true, envMod: 0.35, lfoMod: 0, keyMod: 1 },
      env: { attack: 0, decay: 0.1, sustain: 0, release: 0.1 },
      chorus: 2
    },
    {
      name: "Brass",
      vca: 0.7,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.5, delay: 0.65 },
      dco: { range: 1, saw: true, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "m", lfo: 0.15 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0, resonance: 0, modPositive: true, envMod: 0.85, lfoMod: 0, keyMod: 0.4 },
      env: { attack: 0.25, decay: 0.4, sustain: 0.6, release: 0.2 },
      chorus: 1
    },
    {
      name: "Phase Brass",
      vca: 0.4,
      vcaType: "gate",
      lfo: { autoTrigger: true, frequency: 0.6, delay: 0 },
      dco: { range: 1, saw: true, pulse: true, sub: false, subAmount: 1, noise: 0, pwm: 1, pwmMod: "e", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.3, resonance: 0.1, modPositive: true, envMod: 0.55, lfoMod: 0, keyMod: 1 },
      env: { attack: 0.2, decay: 0.4, sustain: 0.4, release: 0.3 },
      chorus: 1
    },
    {
      name: "Piano 1",
      vca: 0.7,
      vcaType: "env",
      lfo: { autoTrigger: false, frequency: 0.6, delay: 0.3 },
      dco: { range: 1, saw: false, pulse: true, sub: false, subAmount: 0, noise: 0, pwm: 0.6, pwmMod: "m", lfo: 0.45 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.1, resonance: 0, modPositive: true, envMod: 0.7, lfoMod: 0, keyMod: 0.4 },
      env: { attack: 0, decay: 0.8, sustain: 0.15, release: 0.3 },
      chorus: 0
    },
    {
      name: "Piano 2",
      vca: 0.8,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.4, delay: 0 },
      dco: { range: 2, saw: false, pulse: true, sub: true, subAmount: 0.45, noise: 0, pwm: 0.4, pwmMod: "m", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.35, resonance: 0, modPositive: true, envMod: 0.25, lfoMod: 0.2, keyMod: 0.8 },
      env: { attack: 0, decay: 0.75, sustain: 0, release: 0.35 },
      chorus: 0
    },
    {
      name: "Celesta",
      vca: 0.6,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.35, delay: 0.6 },
      dco: { range: 1, saw: true, pulse: true, sub: false, subAmount: 1, noise: 0, pwm: 0.5, pwmMod: "e", lfo: 0 },
      hpf: 0.35,
      vcf: { type: "moog", frequency: 0.35, resonance: 0.8, modPositive: true, envMod: 0, lfoMod: 0, keyMod: 1 },
      env: { attack: 0, decay: 0.65, sustain: 0.2, release: 0.55 },
      chorus: 0
    },
    {
      name: "Mellow Piano",
      vca: 0.7,
      vcaType: "env",
      lfo: { autoTrigger: false, frequency: 0.5, delay: 0 },
      dco: { range: 1, saw: false, pulse: true, sub: false, subAmount: 1, noise: 0, pwm: 0.5, pwmMod: "m", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.3, resonance: 0, modPositive: true, envMod: 0.25, lfoMod: 0.1, keyMod: 0.9 },
      env: { attack: 0.1, decay: 0.75, sustain: 0.2, release: 0.85 },
      chorus: 1
    },
    {
      name: "Harpsichord 1",
      vca: 0.4,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.5, delay: 0.4 },
      dco: { range: 2, saw: false, pulse: true, sub: true, subAmount: 0.7, noise: 0, pwm: 0.3, pwmMod: "m", lfo: 0 },
      hpf: 0.35,
      vcf: { type: "moog", frequency: 0.3, resonance: 0, modPositive: true, envMod: 0.5, lfoMod: 0, keyMod: 0.7 },
      env: { attack: 0, decay: 0.6, sustain: 0.35, release: 0.25 },
      chorus: 1
    },
    {
      name: "Harpsichord 2",
      vca: 0.5,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.55, delay: 0.6 },
      dco: { range: 2, saw: false, pulse: true, sub: true, subAmount: 0.85, noise: 0, pwm: 0.2, pwmMod: "m", lfo: 0 },
      hpf: 0.35,
      vcf: { type: "moog", frequency: 0.5, resonance: 0.25, modPositive: true, envMod: 0.3, lfoMod: 0, keyMod: 1 },
      env: { attack: 0, decay: 0.5, sustain: 0.15, release: 0.5 },
      chorus: 2
    },
    {
      name: "Guitar",
      vca: 0.9,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.6, delay: 0.6 },
      dco: { range: 1, saw: false, pulse: true, sub: false, subAmount: 1, noise: 0, pwm: 0.6, pwmMod: "m", lfo: 0 },
      hpf: 0.65,
      vcf: { type: "moog", frequency: 0.3, resonance: 0, modPositive: true, envMod: 0.45, lfoMod: 0.15, keyMod: 0.5 },
      env: { attack: 0, decay: 0.55, sustain: 0.35, release: 0.65 },
      chorus: 0
    },
    {
      name: "Synthesizer Harp",
      vca: 0.6,
      vcaType: "env",
      lfo: { autoTrigger: false, frequency: 0.3, delay: 0.8 },
      dco: { range: 1, saw: true, pulse: false, sub: false, subAmount: 1, noise: 0, pwm: 0, pwmMod: "m", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.3, resonance: 0, modPositive: true, envMod: 0.5, lfoMod: 0, keyMod: 0.8 },
      env: { attack: 0, decay: 0.55, sustain: 0.3, release: 0.5 },
      chorus: 1
    },
    {
      name: "Bass 1",
      vca: 0.5,
      vcaType: "gate",
      lfo: { autoTrigger: true, frequency: 0.5, delay: 0.6 },
      dco: { range: 0.5, saw: true, pulse: true, sub: true, subAmount: 0.3, noise: 0, pwm: 0.5, pwmMod: "m", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.3, resonance: 0.25, modPositive: true, envMod: 0.35, lfoMod: 0, keyMod: 0 },
      env: { attack: 0, decay: 0.4, sustain: 0.1, release: 0.25 },
      chorus: 1
    },
    {
      name: "Bass 2",
      vca: 0.4,
      vcaType: "gate",
      lfo: { autoTrigger: true, frequency: 0.5, delay: 0.6 },
      dco: { range: 0.5, saw: true, pulse: true, sub: false, subAmount: 0.3, noise: 0, pwm: 0.5, pwmMod: "m", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.3, resonance: 0.5, modPositive: true, envMod: 0.45, lfoMod: 0, keyMod: 0.5 },
      env: { attack: 0, decay: 0.3, sustain: 0.35, release: 0.25 },
      chorus: 1
    },
    {
      name: "Clavichord 1",
      vca: 0.7,
      vcaType: "env",
      lfo: { autoTrigger: false, frequency: 0.6, delay: 0.25 },
      dco: { range: 0.5, saw: false, pulse: true, sub: false, subAmount: 0, noise: 0, pwm: 0.8, pwmMod: "m", lfo: 0.4 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0, resonance: 0.3, modPositive: true, envMod: 0.8, lfoMod: 0, keyMod: 0.6 },
      env: { attack: 0, decay: 0.5, sustain: 0.35, release: 0.15 },
      chorus: 1
    },
    {
      name: "Clavichord 2",
      vca: 1,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.1, delay: 0 },
      dco: { range: 0.5, saw: false, pulse: true, sub: false, subAmount: 1, noise: 0, pwm: 0.8, pwmMod: "m", lfo: 0 },
      hpf: 0.35,
      vcf: { type: "moog", frequency: 0.55, resonance: 0.7, modPositive: true, envMod: 0.2, lfoMod: 0.25, keyMod: 0.7 },
      env: { attack: 0, decay: 0.45, sustain: 0.2, release: 0.2 },
      chorus: 0
    },
    {
      name: "Pizzicato Sound 1",
      vca: 0.8,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.5, delay: 0.6 },
      dco: { range: 1, saw: false, pulse: true, sub: false, subAmount: 0.3, noise: 0, pwm: 0.35, pwmMod: "m", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.45, resonance: 0.3, modPositive: true, envMod: 0.3, lfoMod: 0.3, keyMod: 1 },
      env: { attack: 0, decay: 0.2, sustain: 0.35, release: 0.55 },
      chorus: 1
    },
    {
      name: "Pizzicato Sound 2",
      vca: 0.6,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.5, delay: 0.6 },
      dco: { range: 2, saw: false, pulse: true, sub: true, subAmount: 0.3, noise: 0, pwm: 0.2, pwmMod: "m", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.5, resonance: 0.3, modPositive: true, envMod: 0.3, lfoMod: 0, keyMod: 1 },
      env: { attack: 0, decay: 0.3, sustain: 0.3, release: 0.4 },
      chorus: 2
    },
    {
      name: "Xylophone",
      vca: 1,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.5, delay: 0 },
      dco: { range: 2, saw: false, pulse: false, sub: true, subAmount: 1, noise: 0, pwm: 0.5, pwmMod: "m", lfo: 0 },
      hpf: 0.35,
      vcf: { type: "moog", frequency: 0.4, resonance: 0.5, modPositive: true, envMod: 0.3, lfoMod: 0, keyMod: 0.6 },
      env: { attack: 0, decay: 0.35, sustain: 0, release: 0.35 },
      chorus: 0
    },
    {
      name: "Glockenspiel",
      vca: 0.9,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.5, delay: 0 },
      dco: { range: 2, saw: false, pulse: true, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "m", lfo: 0 },
      hpf: 0.35,
      vcf: { type: "moog", frequency: 0.45, resonance: 0.5, modPositive: true, envMod: 0.3, lfoMod: 0, keyMod: 0.6 },
      env: { attack: 0, decay: 0.3, sustain: 0.25, release: 0.5 },
      chorus: 0
    },
    {
      name: "Violine",
      vca: 0.7,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.6, delay: 0.6 },
      dco: { range: 1, saw: true, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "l", lfo: 0.2 },
      hpf: 0.35,
      vcf: { type: "moog", frequency: 0.65, resonance: 0, modPositive: true, envMod: 0, lfoMod: 0, keyMod: 1 },
      env: { attack: 0.4, decay: 0, sustain: 1, release: 0.4 },
      chorus: 0
    },
    {
      name: "Trumpet",
      vca: 0.7,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.25, delay: 0.65 },
      dco: { range: 1, saw: true, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "m", lfo: 0.15 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0, resonance: 0, modPositive: true, envMod: 0.85, lfoMod: 0, keyMod: 0.4 },
      env: { attack: 0.25, decay: 0.4, sustain: 0.6, release: 0.2 },
      chorus: 0
    },
    {
      name: "Horn",
      vca: 0.7,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.25, delay: 0.7 },
      dco: { range: 1, saw: true, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "m", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.2, resonance: 0, modPositive: true, envMod: 0.55, lfoMod: 0.2, keyMod: 0.4 },
      env: { attack: 0.4, decay: 0.5, sustain: 0.6, release: 0.3 },
      chorus: 0
    },
    {
      name: "Tuba",
      vca: 1,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.25, delay: 0.7 },
      dco: { range: 0.5, saw: true, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "m", lfo: 0.15 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.15, resonance: 0, modPositive: true, envMod: 0.6, lfoMod: 0, keyMod: 0.4 },
      env: { attack: 0.3, decay: 0.4, sustain: 0.4, release: 0.3 },
      chorus: 0
    },
    {
      name: "Flute",
      vca: 1,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.55, delay: 0.5 },
      dco: { range: 2, saw: true, pulse: false, sub: false, subAmount: 0, noise: 0.15, pwm: 0, pwmMod: "m", lfo: 0 },
      hpf: 0.35,
      vcf: { type: "moog", frequency: 0.5, resonance: 0, modPositive: true, envMod: 0, lfoMod: 0.2, keyMod: 0.6 },
      env: { attack: 0.2, decay: 0.6, sustain: 0.5, release: 0.25 },
      chorus: 0
    },
    {
      name: "Clarinet",
      vca: 0.6,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.5, delay: 0.65 },
      dco: { range: 1, saw: false, pulse: true, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "m", lfo: 0.15 },
      hpf: 0.35,
      vcf: { type: "moog", frequency: 0.5, resonance: 0.3, modPositive: true, envMod: 0.25, lfoMod: 0, keyMod: 0.6 },
      env: { attack: 0.25, decay: 0.6, sustain: 0.6, release: 0.25 },
      chorus: 0
    },
    {
      name: "Oboe",
      vca: 1,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.55, delay: 0.65 },
      dco: { range: 1, saw: false, pulse: true, sub: false, subAmount: 0, noise: 0, pwm: 0.65, pwmMod: "m", lfo: 0.15 },
      hpf: 1,
      vcf: { type: "moog", frequency: 0.45, resonance: 0.5, modPositive: true, envMod: 0.25, lfoMod: 0, keyMod: 0.5 },
      env: { attack: 0.2, decay: 0.6, sustain: 0.6, release: 0.25 },
      chorus: 0
    },
    {
      name: "English Horn",
      vca: 1,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.5, delay: 0.7 },
      dco: { range: 0.5, saw: false, pulse: true, sub: false, subAmount: 0, noise: 0, pwm: 0.65, pwmMod: "m", lfo: 0.2 },
      hpf: 1,
      vcf: { type: "moog", frequency: 0.5, resonance: 0.7, modPositive: true, envMod: 0, lfoMod: 0.15, keyMod: 0.5 },
      env: { attack: 0.2, decay: 0.6, sustain: 0.6, release: 0.25 },
      chorus: 0
    },
    {
      name: "Funny Cat",
      vca: 0.8,
      vcaType: "env",
      lfo: { autoTrigger: false, frequency: 0.6, delay: 0.2 },
      dco: { range: 1, saw: true, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "m", lfo: 0.3 },
      hpf: 0.35,
      vcf: { type: "moog", frequency: 0.15, resonance: 0.75, modPositive: true, envMod: 0.5, lfoMod: 0.2, keyMod: 0.5 },
      env: { attack: 0.25, decay: 0.4, sustain: 1, release: 0.1 },
      chorus: 0
    },
    {
      name: "Wah Brass",
      vca: 0.7,
      vcaType: "gate",
      lfo: { autoTrigger: false, frequency: 0.6, delay: 0.2 },
      dco: { range: 1, saw: true, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "m", lfo: 0.3 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.3, resonance: 0.7, modPositive: true, envMod: 0.45, lfoMod: 0, keyMod: 0.6 },
      env: { attack: 0.3, decay: 0.3, sustain: 0.4, release: 0.2 },
      chorus: 0
    },
    {
      name: "Phase Combination",
      vca: 0.3,
      vcaType: "env",
      lfo: { autoTrigger: false, frequency: 0.6, delay: 0.2 },
      dco: { range: 1, saw: true, pulse: true, sub: false, subAmount: 0, noise: 0, pwm: 0.8, pwmMod: "m", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.6, resonance: 0.2, modPositive: true, envMod: 0.3, lfoMod: 0, keyMod: 0.2 },
      env: { attack: 0, decay: 0.7, sustain: 0.2, release: 0.2 },
      chorus: 1
    },
    {
      name: "Reed 1",
      vca: 0.6,
      vcaType: "gate",
      lfo: { autoTrigger: false, frequency: 0.6, delay: 0.2 },
      dco: { range: 1, saw: false, pulse: true, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "m", lfo: 0.4 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.1, resonance: 0.6, modPositive: true, envMod: 0.7, lfoMod: 0, keyMod: 0.5 },
      env: { attack: 0, decay: 0.85, sustain: 0.5, release: 0.1 },
      chorus: 1
    },
    {
      name: "Popcorn",
      vca: 0.8,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0, delay: 0 },
      dco: { range: 2, saw: false, pulse: false, sub: true, subAmount: 1, noise: 0, pwm: 0, pwmMod: "m", lfo: 0 },
      hpf: 0.35,
      vcf: { type: "moog", frequency: 0.25, resonance: 0.2, modPositive: true, envMod: 0.55, lfoMod: 0, keyMod: 1 },
      env: { attack: 0, decay: 0.3, sustain: 0.2, release: 0 },
      chorus: 0
    },
    {
      name: "Reed 2",
      vca: 0.5,
      vcaType: "env",
      lfo: { autoTrigger: false, frequency: 0.3, delay: 0.8 },
      dco: { range: 2, saw: false, pulse: false, sub: true, subAmount: 1, noise: 0, pwm: 0, pwmMod: "m", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.2, resonance: 0, modPositive: true, envMod: 0.6, lfoMod: 0, keyMod: 0.8 },
      env: { attack: 0, decay: 0.55, sustain: 0.3, release: 0.6 },
      chorus: 1
    },
    {
      name: "Reed 3",
      vca: 0.6,
      vcaType: "env",
      lfo: { autoTrigger: false, frequency: 0.6, delay: 0.2 },
      dco: { range: 2, saw: false, pulse: false, sub: true, subAmount: 1, noise: 0, pwm: 0.5, pwmMod: "m", lfo: 0.2 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.3, resonance: 0.2, modPositive: true, envMod: 0.3, lfoMod: 0, keyMod: 1 },
      env: { attack: 0.25, decay: 0, sustain: 1, release: 0.2 },
      chorus: 0
    },
    {
      name: "PWM Chorus",
      vca: 0.2,
      vcaType: "env",
      lfo: { autoTrigger: false, frequency: 0.3, delay: 0 },
      dco: { range: 1, saw: false, pulse: true, sub: true, subAmount: 1, noise: 0, pwm: 0.5, pwmMod: "l", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.8, resonance: 0, modPositive: true, envMod: 0, lfoMod: 0, keyMod: 1 },
      env: { attack: 0.3, decay: 0, sustain: 1, release: 0.4 },
      chorus: 2
    },
    {
      name: "Synthesizer Organ",
      vca: 0.5,
      vcaType: "gate",
      lfo: { autoTrigger: true, frequency: 0.45, delay: 0.6 },
      dco: { range: 1, saw: false, pulse: true, sub: true, subAmount: 0.75, noise: 0, pwm: 0.65, pwmMod: "m", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.25, resonance: 0, modPositive: true, envMod: 0.5, lfoMod: 0.2, keyMod: 0.7 },
      env: { attack: 0, decay: 0.2, sustain: 0.5, release: 0.25 },
      chorus: 2
    },
    {
      name: "Effect Sound 1",
      vca: 0.7,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.45, delay: 0.6 },
      dco: { range: 2, saw: true, pulse: true, sub: true, subAmount: 0.7, noise: 0, pwm: 1, pwmMod: "m", lfo: 0.15 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.65, resonance: 0, modPositive: false, envMod: 0.45, lfoMod: 0, keyMod: 0.7 },
      env: { attack: 0, decay: 0.5, sustain: 0, release: 0.55 },
      chorus: 1
    },
    {
      name: "Effect Sound 2",
      vca: 0.4,
      vcaType: "gate",
      lfo: { autoTrigger: true, frequency: 0.55, delay: 0.9 },
      dco: { range: 1, saw: true, pulse: false, sub: true, subAmount: 0.65, noise: 0, pwm: 0.3, pwmMod: "l", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.65, resonance: 0.3, modPositive: false, envMod: 0.4, lfoMod: 0, keyMod: 0.1 },
      env: { attack: 0.65, decay: 0.55, sustain: 0.2, release: 0.65 },
      chorus: 1
    },
    {
      name: "Space Harp",
      vca: 0.6,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.55, delay: 0 },
      dco: { range: 1, saw: true, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "e", lfo: 0.2 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.65, resonance: 0.5, modPositive: true, envMod: 0.55, lfoMod: 0, keyMod: 1 },
      env: { attack: 0, decay: 0.8, sustain: 0.8, release: 0.9 },
      chorus: 1
    },
    {
      name: "Funk",
      vca: 0.2,
      vcaType: "gate",
      lfo: { autoTrigger: true, frequency: 0.3, delay: 0.25 },
      dco: { range: 1, saw: true, pulse: true, sub: true, subAmount: 1, noise: 0, pwm: 0.6, pwmMod: "m", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.75, resonance: 0.6, modPositive: false, envMod: 0.5, lfoMod: 0, keyMod: 0.45 },
      env: { attack: 0.6, decay: 0.5, sustain: 0, release: 0 },
      chorus: 1
    },
    {
      name: "Space Sound 1",
      vca: 0.3,
      vcaType: "gate",
      lfo: { autoTrigger: true, frequency: 0.6, delay: 0.7 },
      dco: { range: 1, saw: false, pulse: true, sub: true, subAmount: 1, noise: 0, pwm: 0.45, pwmMod: "m", lfo: 0.2 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.65, resonance: 0.7, modPositive: false, envMod: 0.55, lfoMod: 0, keyMod: 1 },
      env: { attack: 0, decay: 0.8, sustain: 0, release: 0.3 },
      chorus: 1
    },
    {
      name: "Mysterious Invention",
      vca: 0.5,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.6, delay: 0.8 },
      dco: { range: 1, saw: true, pulse: true, sub: false, subAmount: 1, noise: 0, pwm: 0.8, pwmMod: "e", lfo: 0.2 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.8, resonance: 0.7, modPositive: false, envMod: 0.6, lfoMod: 0.25, keyMod: 0 },
      env: { attack: 0, decay: 1, sustain: 0, release: 1 },
      chorus: 0
    },
    {
      name: "Space Sound 2",
      vca: 0.2,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.3, delay: 0.3 },
      dco: { range: 1, saw: true, pulse: true, sub: false, subAmount: 0.8, noise: 0, pwm: 0.6, pwmMod: "m", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.2, resonance: 0.85, modPositive: true, envMod: 0.6, lfoMod: 0, keyMod: 1 },
      env: { attack: 1, decay: 1, sustain: 1, release: 1 },
      chorus: 1
    },
    {
      name: "Percussive Sound 1",
      vca: 1,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0, delay: 0 },
      dco: { range: 2, saw: false, pulse: false, sub: false, subAmount: 0, noise: 1, pwm: 0, pwmMod: "e", lfo: 0 },
      hpf: 0.35,
      vcf: { type: "moog", frequency: 0.4, resonance: 1, modPositive: true, envMod: 0.15, lfoMod: 0, keyMod: 1 },
      env: { attack: 0, decay: 0.3, sustain: 0, release: 0.4 },
      chorus: 0
    },
    {
      name: "Percussive Sound 2",
      vca: 1,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0, delay: 0 },
      dco: { range: 1, saw: false, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "e", lfo: 0 },
      hpf: 0.35,
      vcf: { type: "moog", frequency: 0.5, resonance: 1, modPositive: false, envMod: 0.35, lfoMod: 0, keyMod: 1 },
      env: { attack: 0, decay: 0.3, sustain: 0, release: 0.4 },
      chorus: 0
    },
    {
      name: "Whistle",
      vca: 0.8,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.55, delay: 0.5 },
      dco: { range: 2, saw: false, pulse: false, sub: false, subAmount: 0, noise: 0.2, pwm: 0, pwmMod: "m", lfo: 0 },
      hpf: 0.35,
      vcf: { type: "moog", frequency: 0.35, resonance: 1, modPositive: true, envMod: 0.15, lfoMod: 0.2, keyMod: 1 },
      env: { attack: 0.3, decay: 0, sustain: 1, release: 0.1 },
      chorus: 0
    },
    {
      name: "Effect Sound 3",
      vca: 1,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.55, delay: 0.4 },
      dco: { range: 1, saw: false, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "e", lfo: 0 },
      hpf: 0.35,
      vcf: { type: "moog", frequency: 0.35, resonance: 1, modPositive: true, envMod: 0, lfoMod: 0.2, keyMod: 1 },
      env: { attack: 0, decay: 0.4, sustain: 0.55, release: 0.7 },
      chorus: 0
    },
    {
      name: "UFO",
      vca: 0.4,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.6, delay: 0 },
      dco: { range: 2, saw: false, pulse: false, sub: false, subAmount: 0, noise: 0.2, pwm: 0, pwmMod: "m", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0, resonance: 1, modPositive: true, envMod: 0.7, lfoMod: 0.4, keyMod: 1 },
      env: { attack: 0, decay: 0.6, sustain: 1, release: 0.8 },
      chorus: 1
    },
    {
      name: "Space Sound 3",
      vca: 0.5,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0.6, delay: 0 },
      dco: { range: 2, saw: false, pulse: false, sub: false, subAmount: 0, noise: 0.2, pwm: 0, pwmMod: "m", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.5, resonance: 1, modPositive: false, envMod: 0.4, lfoMod: 0, keyMod: 1 },
      env: { attack: 0, decay: 1, sustain: 0, release: 0.8 },
      chorus: 1
    },
    {
      name: "Surf",
      vca: 0.9,
      vcaType: "env",
      lfo: { autoTrigger: true, frequency: 0, delay: 0 },
      dco: { range: 1, saw: false, pulse: false, sub: false, subAmount: 1, noise: 1, pwm: 0, pwmMod: "e", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.6, resonance: 0, modPositive: true, envMod: 0, lfoMod: 0.6, keyMod: 1 },
      env: { attack: 0, decay: 0.4, sustain: 1, release: 0.8 },
      chorus: 0
    },
    {
      name: "Synthesizer Drum",
      vca: 0.6,
      vcaType: "env",
      lfo: { autoTrigger: false, frequency: 0, delay: 0 },
      dco: { range: 1, saw: false, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "e", lfo: 0 },
      hpf: 0,
      vcf: { type: "moog", frequency: 0.2, resonance: 1, modPositive: true, envMod: 0.4, lfoMod: 0, keyMod: 1 },
      env: { attack: 0, decay: 0.5, sustain: 0, release: 0.6 },
      chorus: 0
    }
  ];
  var synth_worklet_default = "data:text/plain;charset=utf-8;base64,Ly8gc3JjL2p1bm94L3Ntb290aE1vdmVzLmpzCnZhciBTbW9vdGhNb3ZlcyA9IGNsYXNzIHsKICBjb25zdHJ1Y3Rvcih2YWx1ZSwgc2FtcGxlUmF0ZTIsIGZjID0gNSkgewogICAgdGhpcy5iMSA9IC1NYXRoLmV4cCgtMiAqIGZjICogTWF0aC5QSSAvIHNhbXBsZVJhdGUyKTsKICAgIHRoaXMuYTAgPSAxICsgdGhpcy5iMTsKICAgIHRoaXMudGFyZ2V0VmFsdWUgPSB2YWx1ZTsKICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2U7CiAgICB0aGlzLnoxID0gMDsKICAgIHRoaXMucmVzZXQoKTsKICB9CiAgc2V0VmFsdWUodmFsdWUsIHVzZVNtb290aGluZykgewogICAgdGhpcy50YXJnZXRWYWx1ZSA9IHZhbHVlOwogICAgaWYgKCF0aGlzLmlzU3RhcnRlZCB8fCAhdXNlU21vb3RoaW5nKSB7CiAgICAgIHRoaXMucmVzZXQoKTsKICAgICAgcmV0dXJuOwogICAgfQogIH0KICByZXNldCgpIHsKICAgIHRoaXMuejEgPSB0aGlzLnRhcmdldFZhbHVlICogdGhpcy5hMCAtIHRoaXMudGFyZ2V0VmFsdWU7CiAgICB0aGlzLmlzU3RhcnRlZCA9IGZhbHNlOwogIH0KICBnZXROZXh0VmFsdWUoKSB7CiAgICB0aGlzLmlzU3RhcnRlZCA9IHRydWU7CiAgICBjb25zdCB4b3V0ID0gdGhpcy50YXJnZXRWYWx1ZSAqIHRoaXMuYTAgLSB0aGlzLnoxOwogICAgdGhpcy56MSA9IHRoaXMuYjEgKiB4b3V0OwogICAgcmV0dXJuIHhvdXQ7CiAgfQp9OwoKLy8gc3JjL2p1bm94L2Rjby5qcwp2YXIgSnVubzYwRENPID0gY2xhc3MgewogIGNvbnN0cnVjdG9yKHNhbXBsZVJhdGUyKSB7CiAgICB0aGlzLnNhbXBsZVJhdGUgPSBzYW1wbGVSYXRlMjsKICAgIHRoaXMuY3VycmVudFBoYXNlID0gMDsKICAgIHRoaXMucGhhc2VJbmNyZW1lbnQgPSAwOwogICAgdGhpcy5wdWxzZVdpZHRoID0gMC41OwogICAgdGhpcy5wdWxzZVBvc2l0aXZlID0gMTsKICAgIHRoaXMucHVsc2VOZWdhdGl2ZSA9IC0xOwogICAgdGhpcy5wdWxzZUhlaWdodCA9IDE7CiAgICB0aGlzLnN1Yk91dHB1dCA9IDE7CiAgfQogIG5vdGVPbihub3RlTnVtYmVyKSB7CiAgICBjb25zdCBub3RlRnJlcXVlbmN5ID0gTWF0aC5wb3coMiwgKG5vdGVOdW1iZXIgLSA2OSkgLyAxMikgKiA0NDI7CiAgICB0aGlzLnBoYXNlSW5jcmVtZW50ID0gbm90ZUZyZXF1ZW5jeSAvIHRoaXMuc2FtcGxlUmF0ZTsKICAgIHRoaXMuY3VycmVudFBoYXNlID0gMS4xOwogIH0KICByZW5kZXIoZGV0dW5lRmFjdG9yLCBwdWxzZVdpZHRoLCBzYXdMZXZlbCwgcHVsc2VMZXZlbCwgc3ViTGV2ZWwpIHsKICAgIGNvbnN0IHBoYXNlSW5jcmVtZW50ID0gdGhpcy5waGFzZUluY3JlbWVudCAqIGRldHVuZUZhY3RvcjsKICAgIGNvbnN0IG9yaWdQaGFzZSA9IHRoaXMuY3VycmVudFBoYXNlOwogICAgdGhpcy5jdXJyZW50UGhhc2UgKz0gcGhhc2VJbmNyZW1lbnQ7CiAgICBpZiAodGhpcy5jdXJyZW50UGhhc2UgPiAxKSB7CiAgICAgIHRoaXMuY3VycmVudFBoYXNlIC09IDE7CiAgICAgIHRoaXMucHVsc2VXaWR0aCA9IDAuNSAtIDAuNDUgKiBwdWxzZVdpZHRoOwogICAgICB0aGlzLnB1bHNlUG9zaXRpdmUgPSAxIC0gcHVsc2VXaWR0aCAqIDAuOTU7CiAgICAgIHRoaXMucHVsc2VOZWdhdGl2ZSA9IC0xOwogICAgICB0aGlzLnB1bHNlSGVpZ2h0ID0gMC40NSAqICh0aGlzLnB1bHNlUG9zaXRpdmUgLSB0aGlzLnB1bHNlTmVnYXRpdmUpOwogICAgfQogICAgbGV0IG5ld1Nhd091dHB1dCA9IDA7CiAgICBpZiAoc2F3TGV2ZWwgPiAwKSB7CiAgICAgIG5ld1Nhd091dHB1dCA9IHRoaXMuY3VycmVudFBoYXNlICsgdGhpcy5jdXJyZW50UGhhc2UgLSAxOwogICAgICBuZXdTYXdPdXRwdXQgLT0gdGhpcy5jYWxjUG9seUJMRVAyKHRoaXMuY3VycmVudFBoYXNlLCBwaGFzZUluY3JlbWVudCwgMSk7CiAgICB9CiAgICBsZXQgbmV3UHVsc2VPdXRwdXQgPSAwOwogICAgaWYgKHB1bHNlTGV2ZWwgPiAwKSB7CiAgICAgIG5ld1B1bHNlT3V0cHV0ID0gdGhpcy5jdXJyZW50UGhhc2UgPiB0aGlzLnB1bHNlV2lkdGggPyB0aGlzLnB1bHNlUG9zaXRpdmUgKj0gMC45OTggOiB0aGlzLnB1bHNlTmVnYXRpdmUgKj0gMC45OTg7CiAgICAgIG5ld1B1bHNlT3V0cHV0IC09IHRoaXMuY2FsY1BvbHlCTEVQMih0aGlzLmN1cnJlbnRQaGFzZSwgcGhhc2VJbmNyZW1lbnQsIHRoaXMucHVsc2VIZWlnaHQpOwogICAgICBjb25zdCB4ID0gdGhpcy5jdXJyZW50UGhhc2UgLSB0aGlzLnB1bHNlV2lkdGg7CiAgICAgIG5ld1B1bHNlT3V0cHV0ICs9IHRoaXMuY2FsY1BvbHlCTEVQMih4IDwgMCA/IHggKyAxIDogeCwgcGhhc2VJbmNyZW1lbnQsIHRoaXMucHVsc2VIZWlnaHQpOwogICAgfQogICAgbGV0IG5ld1N1Yk91dHB1dCA9IHRoaXMuc3ViT3V0cHV0ICo9IDAuOTk4OwogICAgbGV0IHkgPSB0aGlzLmN1cnJlbnRQaGFzZSAtIDAuNTsKICAgIGlmICh5IDwgcGhhc2VJbmNyZW1lbnQgJiYgeSA+IC1waGFzZUluY3JlbWVudCkgewogICAgICBpZiAoeSA8IDApIHsKICAgICAgICB5ICs9IDE7CiAgICAgIH0KICAgICAgY29uc3Qgb3JpZ1N1Yk91dHB1dCA9IG5ld1N1Yk91dHB1dDsKICAgICAgaWYgKHRoaXMuY3VycmVudFBoYXNlID49IDAuNSAmJiBvcmlnUGhhc2UgPCAwLjUpIHsKICAgICAgICB0aGlzLnN1Yk91dHB1dCA9IG5ld1N1Yk91dHB1dCA9IG5ld1N1Yk91dHB1dCA+IDAgPyAtMSA6IDE7CiAgICAgIH0KICAgICAgbmV3U3ViT3V0cHV0IC09IHRoaXMuY2FsY1BvbHlCTEVQMih5LCBwaGFzZUluY3JlbWVudCwgb3JpZ1N1Yk91dHB1dCk7CiAgICB9CiAgICByZXR1cm4gbmV3U2F3T3V0cHV0ICogc2F3TGV2ZWwgKyBuZXdQdWxzZU91dHB1dCAqIHB1bHNlTGV2ZWwgKyBuZXdTdWJPdXRwdXQgKiBzdWJMZXZlbDsKICB9CiAgY2FsY1BvbHlCTEVQMihwaGFzZSwgaW5jLCBoZWlnaHQpIHsKICAgIGxldCByZXN1bHQgPSAwOwogICAgaWYgKHBoYXNlIDwgaW5jKSB7CiAgICAgIGNvbnN0IHQgPSBwaGFzZSAvIGluYzsKICAgICAgcmVzdWx0ID0gaGVpZ2h0ICogKHQgKyB0IC0gdCAqIHQgLSAxKTsKICAgIH0gZWxzZSBpZiAocGhhc2UgKyBpbmMgPiAxKSB7CiAgICAgIGNvbnN0IHQgPSAocGhhc2UgLSAxKSAvIGluYzsKICAgICAgcmVzdWx0ID0gaGVpZ2h0ICogKHQgKiB0ICsgKHQgKyB0KSArIDEpOwogICAgfQogICAgcmV0dXJuIHJlc3VsdDsKICB9Cn07CgovLyBzcmMvanVub3gvYWJzdHJhY3RFbnZlbG9wZS5qcwp2YXIgQWJzdHJhY3RFbnZlbG9wZSA9IGNsYXNzIHsKICBjb25zdHJ1Y3RvcihzZWdtZW50cykgewogICAgdGhpcy5fc2VnbWVudHMgPSBzZWdtZW50czsKICAgIHRoaXMuX2N1cnJlbnRQaGFzZSA9IC0xOwogICAgdGhpcy5fY3VycmVudFZhbHVlID0gMDsKICB9CiAgaXNGaW5pc2hlZCgpIHsKICAgIHJldHVybiB0aGlzLl9jdXJyZW50UGhhc2UgPT09IC0xOwogIH0KICBpc1JlbGVhc2VkKCkgewogICAgcmV0dXJuIHRoaXMuY3VycmVudFBoYXNlICE9PSAwICYmIHRoaXMuY3VycmVudFBoYXNlICE9PSAxOwogIH0KICBpc1NodXR0aW5nRG93bigpIHsKICAgIHJldHVybiB0aGlzLmN1cnJlbnRQaGFzZSA9PT0gdGhpcy5fc2VnbWVudHMubGVuZ3RoIC0gMTsKICB9CiAgdHJpZ2dlcigpIHsKICAgIHRoaXMuX2N1cnJlbnRQaGFzZSA9IDA7CiAgICBmb3IgKGxldCBzZWdtZW50IG9mIHRoaXMuX3NlZ21lbnRzKSB7CiAgICAgIHNlZ21lbnQucmVzZXQoKTsKICAgIH0KICB9CiAgcmVsZWFzZSgpIHsKICAgIGlmICh0aGlzLl9jdXJyZW50UGhhc2UgIT09IC0xKSB7CiAgICAgIHRoaXMuX2N1cnJlbnRQaGFzZSA9IHRoaXMuX3NlZ21lbnRzLmxlbmd0aCAtIDI7CiAgICB9CiAgfQogIHNodXRkb3duKCkgewogICAgaWYgKHRoaXMuX2N1cnJlbnRQaGFzZSAhPT0gLTEpIHsKICAgICAgdGhpcy5fY3VycmVudFBoYXNlID0gdGhpcy5fc2VnbWVudHMubGVuZ3RoIC0gMTsKICAgIH0KICB9CiAgcmVzZXQoKSB7CiAgICB0aGlzLl9jdXJyZW50UGhhc2UgPSAtMTsKICAgIHRoaXMuX2N1cnJlbnRWYWx1ZSA9IDA7CiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3NlZ21lbnRzLmxlbmd0aDsgaSsrKSB7CiAgICAgIHRoaXMuX3NlZ21lbnRzW2ldLnJlc2V0KCk7CiAgICB9CiAgfQogIHJlbmRlcigpIHsKICAgIGxldCBjdXJyZW50UGhhc2UgPSB0aGlzLl9jdXJyZW50UGhhc2U7CiAgICB3aGlsZSAoY3VycmVudFBoYXNlID49IDAgJiYgY3VycmVudFBoYXNlIDwgdGhpcy5fc2VnbWVudHMubGVuZ3RoKSB7CiAgICAgIGNvbnN0IHNlZ21lbnQgPSB0aGlzLl9zZWdtZW50c1tjdXJyZW50UGhhc2VdOwogICAgICBjb25zdCBuZXh0VmFsdWUgPSBzZWdtZW50LnByb2Nlc3ModGhpcy5fY3VycmVudFZhbHVlKTsKICAgICAgaWYgKHNlZ21lbnQuaXNDb21wbGV0ZShuZXh0VmFsdWUpKSB7CiAgICAgICAgY3VycmVudFBoYXNlKys7CiAgICAgICAgaWYgKGN1cnJlbnRQaGFzZSA+PSB0aGlzLl9zZWdtZW50cy5sZW5ndGgpIHsKICAgICAgICAgIHRoaXMuX2N1cnJlbnRWYWx1ZSA9IDA7CiAgICAgICAgICBjdXJyZW50UGhhc2UgPSAtMTsKICAgICAgICB9CiAgICAgICAgdGhpcy5fY3VycmVudFBoYXNlID0gY3VycmVudFBoYXNlOwogICAgICB9IGVsc2UgewogICAgICAgIHRoaXMuX2N1cnJlbnRWYWx1ZSA9IG5leHRWYWx1ZTsKICAgICAgICBicmVhazsKICAgICAgfQogICAgfQogICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRWYWx1ZTsKICB9Cn07CnZhciBBdHRhY2tTZWdtZW50ID0gY2xhc3MgewogIGNvbnN0cnVjdG9yKHNhbXBsZVJhdGUyLCBhdHRhY2tUQ08sIHRhcmdldCwgaXNTdXN0YWluQXRFbmQpIHsKICAgIHRoaXMuX3NhbXBsZVJhdGUgPSBzYW1wbGVSYXRlMjsKICAgIHRoaXMuX2F0dGFja1RDTyA9IGF0dGFja1RDTzsKICAgIHRoaXMuX2F0dGFja0NvZWZmID0gMDsKICAgIHRoaXMuX2F0dGFja09mZnNldCA9IDA7CiAgICB0aGlzLl9pc1N1c3RhaW5BdEVuZCA9IGlzU3VzdGFpbkF0RW5kOwogICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7CiAgfQogIHNldER1cmF0aW9uKGR1cmF0aW9uKSB7CiAgICBjb25zdCBzYW1wbGVzID0gdGhpcy5fc2FtcGxlUmF0ZSAqIGR1cmF0aW9uOwogICAgdGhpcy5fYXR0YWNrQ29lZmYgPSBNYXRoLmV4cCgtTWF0aC5sb2coKDEgKyB0aGlzLl9hdHRhY2tUQ08pIC8gdGhpcy5fYXR0YWNrVENPKSAvIHNhbXBsZXMpOwogICAgdGhpcy5fYXR0YWNrT2Zmc2V0ID0gKDEgKyB0aGlzLl9hdHRhY2tUQ08pICogKDEgLSB0aGlzLl9hdHRhY2tDb2VmZik7CiAgfQogIHJlc2V0KCkgewogIH0KICBwcm9jZXNzKHByZXZpb3VzVmFsdWUpIHsKICAgIGNvbnN0IHJlc3VsdCA9IHByZXZpb3VzVmFsdWUgKiB0aGlzLl9hdHRhY2tDb2VmZiArIHRoaXMuX2F0dGFja09mZnNldDsKICAgIHJldHVybiByZXN1bHQgPiB0aGlzLnRhcmdldCAmJiB0aGlzLl9pc1N1c3RhaW5BdEVuZCA/IHRoaXMudGFyZ2V0IDogcmVzdWx0OwogIH0KICBpc0NvbXBsZXRlKHZhbHVlKSB7CiAgICByZXR1cm4gdmFsdWUgPiB0aGlzLnRhcmdldDsKICB9Cn07CnZhciBEZWNheVNlZ21lbnQgPSBjbGFzcyB7CiAgY29uc3RydWN0b3Ioc2FtcGxlUmF0ZTIsIGRlY2F5VENPLCB0YXJnZXQsIGlzU3VzdGFpbkF0RW5kKSB7CiAgICB0aGlzLl9zYW1wbGVSYXRlID0gc2FtcGxlUmF0ZTI7CiAgICB0aGlzLl9kZWNheVRDTyA9IGRlY2F5VENPOwogICAgdGhpcy5fZGVjYXlDb2VmZiA9IDA7CiAgICB0aGlzLl9kZWNheU9mZnNldCA9IDA7CiAgICB0aGlzLl9pc1N1c3RhaW5BdEVuZCA9IGlzU3VzdGFpbkF0RW5kOwogICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7CiAgfQogIHNldER1cmF0aW9uKHNlY29uZHMpIHsKICAgIGNvbnN0IHNhbXBsZXMgPSB0aGlzLl9zYW1wbGVSYXRlICogc2Vjb25kczsKICAgIHRoaXMuX2RlY2F5Q29lZmYgPSBNYXRoLmV4cCgtTWF0aC5sb2coKDEgKyB0aGlzLl9kZWNheVRDTykgLyB0aGlzLl9kZWNheVRDTykgLyBzYW1wbGVzKTsKICAgIHRoaXMuX2RlY2F5T2Zmc2V0ID0gKHRoaXMudGFyZ2V0IC0gdGhpcy5fZGVjYXlUQ08pICogKDEgLSB0aGlzLl9kZWNheUNvZWZmKTsKICB9CiAgcmVzZXQoKSB7CiAgfQogIHByb2Nlc3MocHJldmlvdXNWYWx1ZSkgewogICAgY29uc3QgcmVzdWx0ID0gcHJldmlvdXNWYWx1ZSAqIHRoaXMuX2RlY2F5Q29lZmYgKyB0aGlzLl9kZWNheU9mZnNldDsKICAgIHJldHVybiByZXN1bHQgPCB0aGlzLnRhcmdldCAmJiB0aGlzLl9pc1N1c3RhaW5BdEVuZCA/IHRoaXMudGFyZ2V0IDogcmVzdWx0OwogIH0KICBpc0NvbXBsZXRlKHZhbHVlKSB7CiAgICByZXR1cm4gdmFsdWUgPD0gdGhpcy50YXJnZXQgJiYgIXRoaXMuX2lzU3VzdGFpbkF0RW5kIHx8IHZhbHVlIDwgMC4wMjsKICB9Cn07CnZhciBEZWxheVNlZ21lbnQgPSBjbGFzcyB7CiAgY29uc3RydWN0b3Ioc2FtcGxlUmF0ZTIpIHsKICAgIHRoaXMuX3NhbXBsZVJhdGUgPSBzYW1wbGVSYXRlMjsKICAgIHRoaXMuX2RlbGF5U2FtcGxlQ291bnQgPSAwOwogICAgdGhpcy5fY3VycmVudFJlbWFpbmluZyA9IDA7CiAgfQogIHNldER1cmF0aW9uKGR1cmF0aW9uKSB7CiAgICBjb25zdCBkZWxheVNhbXBsZUNvdW50ID0gdGhpcy5fc2FtcGxlUmF0ZSAqIGR1cmF0aW9uIHwgMDsKICAgIHRoaXMuX2N1cnJlbnRSZW1haW5pbmcgKz0gZGVsYXlTYW1wbGVDb3VudCAtIHRoaXMuX2RlbGF5U2FtcGxlQ291bnQ7CiAgICB0aGlzLl9kZWxheVNhbXBsZUNvdW50ID0gZGVsYXlTYW1wbGVDb3VudDsKICB9CiAgcmVzZXQoKSB7CiAgICB0aGlzLl9jdXJyZW50UmVtYWluaW5nID0gdGhpcy5fZGVsYXlTYW1wbGVDb3VudDsKICB9CiAgcHJvY2VzcyhwcmV2aW91c1ZhbHVlKSB7CiAgICB0aGlzLl9jdXJyZW50UmVtYWluaW5nLS07CiAgICByZXR1cm4gcHJldmlvdXNWYWx1ZTsKICB9CiAgaXNDb21wbGV0ZSgpIHsKICAgIHJldHVybiB0aGlzLl9jdXJyZW50UmVtYWluaW5nIDw9IDA7CiAgfQp9Owp2YXIgU2h1dGRvd25TZWdtZW50ID0gY2xhc3MgewogIGNvbnN0cnVjdG9yKHNhbXBsZVJhdGUyLCBzZWNvbmRzKSB7CiAgICB0aGlzLl9zaHV0ZG93blJhdGUgPSAxIC8gKHNlY29uZHMgKiBzYW1wbGVSYXRlMik7CiAgfQogIHJlc2V0KCkgewogIH0KICBwcm9jZXNzKHByZXZpb3VzVmFsdWUpIHsKICAgIGNvbnN0IHJlc3VsdCA9IHByZXZpb3VzVmFsdWUgLSB0aGlzLl9zaHV0ZG93blJhdGU7CiAgICByZXR1cm4gdGhpcy52YWx1ZSA8IDAgPyAwIDogcmVzdWx0OwogIH0KICBpc0NvbXBsZXRlKHZhbHVlKSB7CiAgICByZXR1cm4gdmFsdWUgPD0gMDsKICB9Cn07CgovLyBzcmMvanVub3gvdXRpbHMubWpzCmZ1bmN0aW9uIGZhc3RUYW5oKHgpIHsKICBpZiAoeCA8IC0zKSB7CiAgICByZXR1cm4gLTE7CiAgfSBlbHNlIGlmICh4ID4gMykgewogICAgcmV0dXJuIDE7CiAgfQogIGNvbnN0IHhTcXVhcmVkID0geCAqIHg7CiAgcmV0dXJuIHggKiAoMjcgKyB4U3F1YXJlZCkgLyAoMjcgKyA5ICogeFNxdWFyZWQpOwp9CmZ1bmN0aW9uIGludGVycG9sYXRlZExvb2t1cCh2YWx1ZSwgdGFibGUpIHsKICBjb25zdCBpbmRleCA9IHZhbHVlIHwgMDsKICBjb25zdCBpbmRleE5leHQgPSBpbmRleCArIDE7CiAgY29uc3QgZmFjdG9yID0gdmFsdWUgLSBpbmRleDsKICBpZiAoaW5kZXggPCAwKSB7CiAgICByZXR1cm4gdGFibGVbMF07CiAgfQogIGlmIChpbmRleE5leHQgPj0gdGFibGUubGVuZ3RoKSB7CiAgICByZXR1cm4gdGFibGVbdGFibGUubGVuZ3RoIC0gMV07CiAgfQogIHJldHVybiB0YWJsZVtpbmRleF0gKiAoMSAtIGZhY3RvcikgKyB0YWJsZVtpbmRleE5leHRdICogZmFjdG9yOwp9CgovLyBzcmMvanVub3gvanVubzYwRW52ZWxvcGUuanMKdmFyIGN1cnZlRnJvbUF0dGFja1NsaWRlclRvRHVyYXRpb24gPSBbMWUtMywgMC4wMywgMC4yNCwgMC42NSwgMy4yNV07CnZhciBjdXJ2ZUZyb21EZWNheVNsaWRlclRvRHVyYXRpb24gPSBbMmUtMywgMC4wOTYsIDAuOTg0LCA0LjQ0OSwgMTkuNzgzXTsKdmFyIGN1cnZlRnJvbVJlbGVhc2VTbGlkZXJUb0R1cmF0aW9uID0gWzJlLTMsIDAuMDk2LCAwLjk4NCwgNC40NDksIDE5Ljc4M107CnZhciBKdW5vNjBFbnZlbG9wZSA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RFbnZlbG9wZSB7CiAgY29uc3RydWN0b3Ioc2FtcGxlUmF0ZTIpIHsKICAgIHN1cGVyKFsKICAgICAgbmV3IEF0dGFja1NlZ21lbnQoc2FtcGxlUmF0ZTIsIDAuNjMyLCAxLCBmYWxzZSksCiAgICAgIG5ldyBEZWNheVNlZ21lbnQoc2FtcGxlUmF0ZTIsIDAuMDI1LCAwLCB0cnVlKSwKICAgICAgbmV3IERlY2F5U2VnbWVudChzYW1wbGVSYXRlMiwgMC4wMjUsIDAsIGZhbHNlKSwKICAgICAgbmV3IFNodXRkb3duU2VnbWVudChzYW1wbGVSYXRlMiwgMWUtMykKICAgIF0pOwogICAgdGhpcy5fYXR0YWNrID0gdGhpcy5fc2VnbWVudHNbMF07CiAgICB0aGlzLl9kZWNheSA9IHRoaXMuX3NlZ21lbnRzWzFdOwogICAgdGhpcy5fcmVsZWFzZSA9IHRoaXMuX3NlZ21lbnRzWzJdOwogICAgdGhpcy5fc2h1dGRvd24gPSB0aGlzLl9zZWdtZW50c1szXTsKICB9CiAgc2V0VmFsdWVzKGF0dGFja0R1cmF0aW9uLCBkZWNheUR1cmF0aW9uLCBzdXN0YWluTGV2ZWwsIHJlbGVhc2VEdXJhdGlvbikgewogICAgdGhpcy5fYXR0YWNrLnNldER1cmF0aW9uKGF0dGFja0R1cmF0aW9uKTsKICAgIHRoaXMuX2RlY2F5LnRhcmdldCA9IE1hdGgubWF4KDAuMDIsIHN1c3RhaW5MZXZlbCk7CiAgICB0aGlzLl9kZWNheS5zZXREdXJhdGlvbihkZWNheUR1cmF0aW9uKTsKICAgIHRoaXMuX3JlbGVhc2Uuc2V0RHVyYXRpb24odGhpcy5fZGVjYXkudGFyZ2V0IDw9IDAuMDIgPyAwLjAxIDogcmVsZWFzZUR1cmF0aW9uKTsKICB9CiAgc2V0VmFsdWVzRnJvbVNsaWRlcnMoYXR0YWNrU2xpZGVyLCBkZWNheVNsaWRlciwgc3VzdGFpblNsaWRlciwgcmVsZWFzZVNsaWRlcikgewogICAgY29uc3QgYXR0YWNrRHVyYXRpb24gPSBpbnRlcnBvbGF0ZWRMb29rdXAoYXR0YWNrU2xpZGVyICogY3VydmVGcm9tQXR0YWNrU2xpZGVyVG9EdXJhdGlvbi5sZW5ndGgsIGN1cnZlRnJvbUF0dGFja1NsaWRlclRvRHVyYXRpb24pOwogICAgY29uc3QgZGVjYXlEdXJhdGlvbiA9IGludGVycG9sYXRlZExvb2t1cChkZWNheVNsaWRlciAqIGN1cnZlRnJvbURlY2F5U2xpZGVyVG9EdXJhdGlvbi5sZW5ndGgsIGN1cnZlRnJvbURlY2F5U2xpZGVyVG9EdXJhdGlvbik7CiAgICBjb25zdCByZWxlYXNlRHVyYXRpb24gPSBpbnRlcnBvbGF0ZWRMb29rdXAocmVsZWFzZVNsaWRlciAqIGN1cnZlRnJvbVJlbGVhc2VTbGlkZXJUb0R1cmF0aW9uLmxlbmd0aCwgY3VydmVGcm9tUmVsZWFzZVNsaWRlclRvRHVyYXRpb24pOwogICAgdGhpcy5zZXRWYWx1ZXMoYXR0YWNrRHVyYXRpb24sIGRlY2F5RHVyYXRpb24sIHN1c3RhaW5TbGlkZXIsIHJlbGVhc2VEdXJhdGlvbik7CiAgfQp9OwoKLy8gc3JjL2p1bm94L2xhZGRlckZpbHRlci5qcwp2YXIgTGFkZGVyRmlsdGVyID0gY2xhc3MgewogIGNvbnN0cnVjdG9yKHNhbXBsZVJhdGUyKSB7CiAgICB0aGlzLnJlc2V0KCk7CiAgICB0aGlzLm55cXVpc3RMaW1pdCA9IHNhbXBsZVJhdGUyICogMC41OwogICAgdGhpcy5waU92ZXJTYW1wbGVSYXRlID0gTWF0aC5QSSAvIHNhbXBsZVJhdGUyOwogIH0KICByZXNldCgpIHsKICAgIHRoaXMuejEgPSAwOwogICAgdGhpcy56MiA9IDA7CiAgICB0aGlzLnozID0gMDsKICAgIHRoaXMuejQgPSAwOwogIH0KICBjYWxjQ3V0b2ZmRmFjdG9yKGZjKSB7CiAgICBpZiAoZmMgPiB0aGlzLm55cXVpc3RMaW1pdCkgewogICAgICBmYyA9IHRoaXMubnlxdWlzdExpbWl0OwogICAgfQogICAgcmV0dXJuIE1hdGgudGFuKGZjICogdGhpcy5waU92ZXJTYW1wbGVSYXRlKTsKICB9CiAgdHJpZ2dlcihpbml0aWFsRXhjaXRlKSB7CiAgICB0aGlzLno0ICs9IGluaXRpYWxFeGNpdGU7CiAgfQogIHByb2Nlc3MoaW5wdXQsIGN1dG9mZkZhY3RvciwgcmVzb25hbmNlLCBtb2RlID0gbGFkZGVyRmlsdGVyTW9kZXMuTFBGNCkgewogICAgY29uc3Qgb25lT3Zlck9uZVBsdXNnID0gMSAvICgxICsgY3V0b2ZmRmFjdG9yKTsKICAgIGNvbnN0IGFscGhhID0gY3V0b2ZmRmFjdG9yICogb25lT3Zlck9uZVBsdXNnOwogICAgY29uc3QgYmV0YTQgPSBvbmVPdmVyT25lUGx1c2c7CiAgICBjb25zdCBiZXRhMyA9IGJldGE0ICogYWxwaGE7CiAgICBjb25zdCBiZXRhMiA9IGJldGEzICogYWxwaGE7CiAgICBjb25zdCBiZXRhMSA9IGJldGEyICogYWxwaGE7CiAgICBjb25zdCBmZWVkYmFjayA9IGJldGExICogdGhpcy56MSArIGJldGEyICogdGhpcy56MiArIGJldGEzICogdGhpcy56MyArIGJldGE0ICogdGhpcy56NDsKICAgIGNvbnN0IGsgPSA0ICogcmVzb25hbmNlOwogICAgY29uc3QgeGluID0gKGlucHV0IC0gayAqIGZlZWRiYWNrKSAvICgxICsgayAqIGFscGhhICogYWxwaGEgKiBhbHBoYSAqIGFscGhhKTsKICAgIGNvbnN0IGxwZjFJbiA9ICh4aW4gLSB0aGlzLnoxKSAqIGFscGhhOwogICAgY29uc3QgbHBmMU91dCA9IGxwZjFJbiArIHRoaXMuejE7CiAgICB0aGlzLnoxID0gbHBmMUluICsgbHBmMU91dDsKICAgIGNvbnN0IGxwZjJJbiA9IChscGYxT3V0IC0gdGhpcy56MikgKiBhbHBoYTsKICAgIGNvbnN0IGxwZjJPdXQgPSBscGYySW4gKyB0aGlzLnoyOwogICAgdGhpcy56MiA9IGxwZjJJbiArIGxwZjJPdXQ7CiAgICBjb25zdCBscGYzSW4gPSAobHBmMk91dCAtIHRoaXMuejMpICogYWxwaGE7CiAgICBjb25zdCBscGYzT3V0ID0gbHBmM0luICsgdGhpcy56MzsKICAgIHRoaXMuejMgPSBscGYzSW4gKyBscGYzT3V0OwogICAgY29uc3QgbHBmNEluID0gKGxwZjNPdXQgLSB0aGlzLno0KSAqIGFscGhhOwogICAgY29uc3QgbHBmNE91dCA9IGxwZjRJbiArIHRoaXMuejQ7CiAgICB0aGlzLno0ID0gbHBmNEluICsgbHBmNE91dDsKICAgIHJldHVybiBtb2RlWzRdICogbHBmNE91dCArIG1vZGVbM10gKiBscGYzT3V0ICsgbW9kZVsyXSAqIGxwZjJPdXQgKyBtb2RlWzFdICogbHBmMU91dCArIG1vZGVbMF0gKiB4aW47CiAgfQp9Owp2YXIgbGFkZGVyRmlsdGVyTW9kZXMgPSB7CiAgTFBGMjogRmxvYXQ2NEFycmF5LmZyb20oWzAsIDAsIDEsIDAsIDBdKSwKICBMUEY0OiBGbG9hdDY0QXJyYXkuZnJvbShbMCwgMCwgMCwgMCwgMV0pLAogIEJQRjI6IEZsb2F0NjRBcnJheS5mcm9tKFswLCAyLCAtMiwgMCwgMF0pLAogIEJQRjQ6IEZsb2F0NjRBcnJheS5mcm9tKFswLCAwLCA0LCAtOCwgNF0pLAogIEhQRjI6IEZsb2F0NjRBcnJheS5mcm9tKFsxLCAtMiwgMSwgMCwgMF0pLAogIEhQRjQ6IEZsb2F0NjRBcnJheS5mcm9tKFsxLCAtNCwgNiwgLTQsIDFdKQp9OwpsYWRkZXJGaWx0ZXJNb2Rlcy5hbGwgPSBbCiAgbGFkZGVyRmlsdGVyTW9kZXMuTFBGMiwKICBsYWRkZXJGaWx0ZXJNb2Rlcy5MUEY0LAogIGxhZGRlckZpbHRlck1vZGVzLkJQRjIsCiAgbGFkZGVyRmlsdGVyTW9kZXMuQlBGNCwKICBsYWRkZXJGaWx0ZXJNb2Rlcy5IUEYyLAogIGxhZGRlckZpbHRlck1vZGVzLkhQRjQKXTsKCi8vIHNyYy9qdW5veC9ub2lzZS5qcwp2YXIgTm9pc2UgPSBjbGFzcyB7CiAgY29uc3RydWN0b3Ioc2FtcGxlUmF0ZTIsIGZjID0gNWUzKSB7CiAgICB0aGlzLl9iMSA9IC1NYXRoLmV4cCgtMiAqIGZjICogTWF0aC5QSSAvIHNhbXBsZVJhdGUyKTsKICAgIHRoaXMuX2EwID0gMSArIHRoaXMuX2IxOwogICAgdGhpcy5fejEgPSAwOwogIH0KICByZW5kZXIoKSB7CiAgICBjb25zdCB4aW4gPSBNYXRoLnJhbmRvbSgpICogMiAtIDE7CiAgICBjb25zdCB4b3V0ID0geGluICogdGhpcy5fYTAgLSB0aGlzLl96MTsKICAgIHRoaXMuX3oxID0gdGhpcy5fYjEgKiB4b3V0OwogICAgcmV0dXJuIHhvdXQ7CiAgfQp9OwoKLy8gc3JjL2p1bm94L3ZvaWNlLmpzCnZhciBWb2ljZSA9IGNsYXNzIHsKICBjb25zdHJ1Y3Rvcih7IHBhdGNoLCBzYW1wbGVSYXRlOiBzYW1wbGVSYXRlMiB9KSB7CiAgICB0aGlzLnBhdGNoID0gcGF0Y2g7CiAgICB0aGlzLnNhbXBsZVJhdGUgPSBzYW1wbGVSYXRlMjsKICAgIHRoaXMubm90ZSA9IC0xOwogICAgdGhpcy52ZWxvY2l0eSA9IDA7CiAgICB0aGlzLmZpbHRlck5vdGVGYWN0b3IgPSAwOwogICAgdGhpcy5kY28gPSBuZXcgSnVubzYwRENPKHNhbXBsZVJhdGUyKTsKICAgIHRoaXMubm9pc2UgPSBuZXcgTm9pc2Uoc2FtcGxlUmF0ZTIsIDVlMyk7CiAgICB0aGlzLm1vZEVudiA9IG5ldyBKdW5vNjBFbnZlbG9wZShzYW1wbGVSYXRlMik7CiAgICB0aGlzLmFtcEVudiA9IG5ldyBKdW5vNjBFbnZlbG9wZShzYW1wbGVSYXRlMik7CiAgICB0aGlzLm1vb2dWQ0YgPSBuZXcgTGFkZGVyRmlsdGVyKHNhbXBsZVJhdGUyKTsKICB9CiAgcmVuZGVyKGxmb091dCwgZGV0dW5lRmFjdG9yLCBwd21EZXB0aCwgc2F3TGV2ZWwsIHB1bHNlTGV2ZWwsIHN1YkxldmVsLCBub2lzZUxldmVsLCBmaWx0ZXJDdXRvZmYsIGZpbHRlclJlc29uYW5jZSwgZmlsdGVyRW52TW9kLCBsZm9EZXR1bmVPY3RhdmVzLCBmaWx0ZXJLZXlNb2QpIHsKICAgIGNvbnN0IG1vZEVudk91dCA9IHRoaXMubW9kRW52LnJlbmRlcigpOwogICAgY29uc3QgYW1wRW52T3V0ID0gdGhpcy5hbXBFbnYucmVuZGVyKCk7CiAgICBsZXQgcHVsc2VXaWR0aCA9IHB3bURlcHRoOwogICAgaWYgKHRoaXMucGF0Y2guZGNvLnB3bU1vZCA9PT0gImwiKSB7CiAgICAgIHB1bHNlV2lkdGggKj0gbGZvT3V0ICogMC41ICsgMC41OwogICAgfSBlbHNlIGlmICh0aGlzLnBhdGNoLmRjby5wd21Nb2QgPT09ICJlIikgewogICAgICBwdWxzZVdpZHRoICo9IG1vZEVudk91dDsKICAgIH0KICAgIGxldCBkY29PdXQgPSB0aGlzLmRjby5yZW5kZXIoZGV0dW5lRmFjdG9yLCBwdWxzZVdpZHRoLCBzYXdMZXZlbCwgcHVsc2VMZXZlbCwgc3ViTGV2ZWwpOwogICAgaWYgKG5vaXNlTGV2ZWwgPiAwKSB7CiAgICAgIGRjb091dCArPSB0aGlzLm5vaXNlLnJlbmRlcigpICogbm9pc2VMZXZlbDsKICAgIH0KICAgIGNvbnN0IGN1dG9mZkRldHVuZU9jdGF2ZSA9IGZpbHRlckN1dG9mZiAqIDIwMCAvIDEyOwogICAgY29uc3QgZW52RGV0dW5lT2N0YXZlcyA9IG1vZEVudk91dCAqIGZpbHRlckVudk1vZCAqIDEyOwogICAgY29uc3Qga2V5Ym9hcmREZXR1bmVPY3RhdmVzID0gZmlsdGVyS2V5TW9kICogdGhpcy5maWx0ZXJOb3RlRmFjdG9yOwogICAgY29uc3QgcmVzb25hbmNlRGV0dW5lT2N0YXZlcyA9IHRoaXMucGF0Y2gudmNmLnJlc29uYW5jZSAqIDAuNTsKICAgIGNvbnN0IHZjZkN1dG9mZlZhbHVlID0gY3V0b2ZmRGV0dW5lT2N0YXZlICsgbGZvRGV0dW5lT2N0YXZlcyAqIGFtcEVudk91dCArIGtleWJvYXJkRGV0dW5lT2N0YXZlcyArIGVudkRldHVuZU9jdGF2ZXMgKyByZXNvbmFuY2VEZXR1bmVPY3RhdmVzOwogICAgY29uc3QgY3V0b2ZmRnJlcXVlbmN5ID0gNy44ICogTWF0aC5wb3coMiwgdmNmQ3V0b2ZmVmFsdWUpOwogICAgY29uc3QgdmNmT3V0ID0gdGhpcy5tb29nVkNGLnByb2Nlc3MoZGNvT3V0LCB0aGlzLm1vb2dWQ0YuY2FsY0N1dG9mZkZhY3RvcihjdXRvZmZGcmVxdWVuY3kpLCBmaWx0ZXJSZXNvbmFuY2UpOwogICAgcmV0dXJuIHRoaXMudmVsb2NpdHkgKiB2Y2ZPdXQgKiBhbXBFbnZPdXQ7CiAgfQogIG5vdGVPbihub3RlLCB2ZWxvY2l0eSkgewogICAgaWYgKG5vdGUgIT09IHRoaXMubm90ZSB8fCB0aGlzLmlzRmluaXNoZWQoKSkgewogICAgICB0aGlzLm5vdGUgPSBub3RlOwogICAgICB0aGlzLmRjby5ub3RlT24obm90ZSk7CiAgICAgIHRoaXMubW9kRW52LnJlc2V0KCk7CiAgICAgIHRoaXMuYW1wRW52LnJlc2V0KCk7CiAgICAgIHRoaXMubW9vZ1ZDRi5yZXNldCgpOwogICAgICBjb25zdCBjNCA9IDYwOwogICAgICBjb25zdCBmaXZlT2N0YXZlcyA9IDUgKiAxMjsKICAgICAgdGhpcy5maWx0ZXJOb3RlRmFjdG9yID0gNSAqICgodGhpcy5ub3RlIC0gYzQpIC8gZml2ZU9jdGF2ZXMpOwogICAgfQogICAgaWYgKCF0aGlzLnBhdGNoLmRjby5zYXcgJiYgIXRoaXMucGF0Y2guZGNvLnB1bHNlICYmICF0aGlzLnBhdGNoLmRjby5zdWJBbW91bnQgJiYgIXRoaXMucGF0Y2guZGNvLm5vaXNlKSB7CiAgICAgIGNvbnN0IGluaXRpYWxFeGNpdGUgPSB0aGlzLnBhdGNoLnZjZi5yZXNvbmFuY2UgKiB0aGlzLnBhdGNoLnZjZi5yZXNvbmFuY2UgKiAwLjAxOwogICAgICB0aGlzLm1vb2dWQ0YudHJpZ2dlcihpbml0aWFsRXhjaXRlKTsKICAgIH0KICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTsKICAgIHRoaXMudXBkYXRlUGF0Y2godGhpcy5wYXRjaCk7CiAgICB0aGlzLm1vZEVudi50cmlnZ2VyKCk7CiAgICB0aGlzLmFtcEVudi50cmlnZ2VyKCk7CiAgfQogIG5vdGVPZmYoKSB7CiAgICB0aGlzLm1vZEVudi5yZWxlYXNlKCk7CiAgICB0aGlzLmFtcEVudi5yZWxlYXNlKCk7CiAgfQogIGlzRmluaXNoZWQoKSB7CiAgICByZXR1cm4gdGhpcy5hbXBFbnYuaXNGaW5pc2hlZCgpOwogIH0KICB1cGRhdGVQYXRjaChwYXRjaCkgewogICAgY29uc3QgZW52ID0gcGF0Y2guZW52OwogICAgdGhpcy5tb2RFbnYuc2V0VmFsdWVzRnJvbVNsaWRlcnMoZW52LmF0dGFjaywgZW52LmRlY2F5LCBlbnYuc3VzdGFpbiwgZW52LnJlbGVhc2UpOwogICAgaWYgKHBhdGNoLnZjYVR5cGUgPT09ICJlbnYiKSB7CiAgICAgIHRoaXMuYW1wRW52LnNldFZhbHVlc0Zyb21TbGlkZXJzKGVudi5hdHRhY2ssIGVudi5kZWNheSwgZW52LnN1c3RhaW4sIGVudi5yZWxlYXNlKTsKICAgIH0gZWxzZSB7CiAgICAgIHRoaXMuYW1wRW52LnNldFZhbHVlcygyNDdlLTUsIDU3ZS00LCAwLjk4LCA1N2UtNCk7CiAgICB9CiAgICB0aGlzLnBhdGNoID0gcGF0Y2g7CiAgfQp9OwoKLy8gc3JjL2p1bm94L3JpbmdCdWZmZXIuanMKdmFyIFJpbmdCdWZmZXIgPSBjbGFzcyB7CiAgY29uc3RydWN0b3IobWF4QnVmZmVyU2l6ZSkgewogICAgdGhpcy5idWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KG1heEJ1ZmZlclNpemUpOwogICAgdGhpcy53cml0ZUluZGV4ID0gMDsKICAgIHRoaXMubWF4QnVmZmVyU2l6ZSA9IG1heEJ1ZmZlclNpemU7CiAgfQogIHJpbmdCdWZmZXJJbmRleChpbmRleCkgewogICAgaWYgKGluZGV4IDwgMCkgewogICAgICByZXR1cm4gaW5kZXggKyB0aGlzLm1heEJ1ZmZlclNpemU7CiAgICB9CiAgICBpZiAoaW5kZXggPj0gdGhpcy5tYXhCdWZmZXJTaXplKSB7CiAgICAgIHJldHVybiBpbmRleCAtIHRoaXMubWF4QnVmZmVyU2l6ZTsKICAgIH0KICAgIHJldHVybiBpbmRleDsKICB9CiAgcmVhZFNhbXBsZShyZWFkT2Zmc2V0KSB7CiAgICBjb25zdCByZWFkSW5kZXggPSB0aGlzLnJpbmdCdWZmZXJJbmRleCh0aGlzLndyaXRlSW5kZXggLSByZWFkT2Zmc2V0KTsKICAgIGNvbnN0IGluZGV4QSA9IE1hdGguZmxvb3IocmVhZEluZGV4KTsKICAgIGNvbnN0IGZyYWN0aW9uYWwgPSByZWFkSW5kZXggLSBpbmRleEE7CiAgICBjb25zdCBpbmRleEIgPSB0aGlzLnJpbmdCdWZmZXJJbmRleChpbmRleEEgKyAxKTsKICAgIHJldHVybiB0aGlzLmJ1ZmZlcltpbmRleEFdICogKDEgLSBmcmFjdGlvbmFsKSArIHRoaXMuYnVmZmVyW2luZGV4Ql0gKiBmcmFjdGlvbmFsOwogIH0KICB3cml0ZVNhbXBsZShpbnB1dCkgewogICAgdGhpcy5idWZmZXJbdGhpcy53cml0ZUluZGV4XSA9IGlucHV0OwogICAgdGhpcy53cml0ZUluZGV4ID0gKHRoaXMud3JpdGVJbmRleCArIDEpICUgdGhpcy5tYXhCdWZmZXJTaXplOwogIH0KICByZXNldCgpIHsKICAgIHRoaXMuYnVmZmVyLmZpbGwoMCk7CiAgfQp9OwoKLy8gc3JjL2p1bm94L3NpbXBsZVNpbmdsZVBvbGVGaWx0ZXIuanMKdmFyIFNpbXBsZVNpbmdsZVBvbGVGaWx0ZXIgPSBjbGFzcyB7CiAgY29uc3RydWN0b3Ioc2FtcGxlUmF0ZTIsIGZjID0gNSkgewogICAgdGhpcy5fcGlPdmVyU2FtcGxlUmF0ZSA9IE1hdGguUEkgLyBzYW1wbGVSYXRlMjsKICAgIHRoaXMuX2EwID0gMTsKICAgIHRoaXMuX2IxID0gMDsKICAgIHRoaXMuX3oxID0gMDsKICAgIHRoaXMuc2V0Q3V0b2ZmKGZjKTsKICB9CiAgcmVzZXQoKSB7CiAgICB0aGlzLl96MSA9IDA7CiAgfQogIHJlbmRlckxQKHhpbikgewogICAgY29uc3QgeG91dCA9IHhpbiAqIHRoaXMuX2EwICsgdGhpcy5fejE7CiAgICB0aGlzLl96MSA9IC10aGlzLl9iMSAqIHhvdXQ7CiAgICByZXR1cm4geG91dDsKICB9CiAgcmVuZGVySFAoeGluKSB7CiAgICByZXR1cm4geGluIC0gdGhpcy5yZW5kZXJMUCh4aW4pOwogIH0KICBzZXRDdXRvZmYoZmMpIHsKICAgIHRoaXMuX2IxID0gLU1hdGguZXhwKC0yICogZmMgKiB0aGlzLl9waU92ZXJTYW1wbGVSYXRlKTsKICAgIHRoaXMuX2EwID0gMSArIHRoaXMuX2IxOwogIH0KfTsKCi8vIHNyYy9qdW5veC9jaG9ydXMuanMKdmFyIENob3J1cyA9IGNsYXNzIHsKICBjb25zdHJ1Y3RvcihzYW1wbGVSYXRlMikgewogICAgdGhpcy5sZWZ0T3V0cHV0ID0gMDsKICAgIHRoaXMucmlnaHRPdXRwdXQgPSAwOwogICAgdGhpcy5fc2FtcGxlUmF0ZSA9IHNhbXBsZVJhdGUyOwogICAgdGhpcy5faXNVc2VkID0gZmFsc2U7CiAgICB0aGlzLl9uZXh0Q2hvcnVzTW9kZSA9IDA7CiAgICB0aGlzLl9yaW5nQnVmZmVyID0gbmV3IFJpbmdCdWZmZXIoTWF0aC50cnVuYyhzYW1wbGVSYXRlMiAqIDZlLTMpKTsKICAgIHRoaXMuX3ByZUZpbHRlciA9IG5ldyBTaW1wbGVTaW5nbGVQb2xlRmlsdGVyKHNhbXBsZVJhdGUyLCA3MjM3KTsKICAgIHRoaXMuX3Bvc3RMZWZ0RmlsdGVyID0gbmV3IFNpbXBsZVNpbmdsZVBvbGVGaWx0ZXIoc2FtcGxlUmF0ZTIsIDEwNjQ0KTsKICAgIHRoaXMuX3Bvc3RSaWdodEZpbHRlciA9IG5ldyBTaW1wbGVTaW5nbGVQb2xlRmlsdGVyKHNhbXBsZVJhdGUyLCAxMDY0NCk7CiAgICB0aGlzLl9kcnlDdXJyZW50ID0gMTsKICAgIHRoaXMuX2RyeUNoYW5nZSA9IDA7CiAgICB0aGlzLl9kcnlUYXJnZXQgPSAxOwogICAgdGhpcy5fbGZvVmFsdWUgPSAwOwogICAgdGhpcy5fbGZvSW5jcmVtZW50ID0gMC4wMTsKICAgIHRoaXMuX21heExlZnRPZmZzZXQgPSAwOwogICAgdGhpcy5fYXZlcmFnZUxlZnRTYW1wbGVzID0gMDsKICAgIHRoaXMuX21heFJpZ2h0T2Zmc2V0ID0gMDsKICAgIHRoaXMuX2F2ZXJhZ2VSaWdodFNhbXBsZXMgPSAwOwogIH0KICByZW5kZXIoaW5wdXQpIHsKICAgIHRoaXMuX2lzVXNlZCA9IHRydWU7CiAgICBsZXQgZHJ5ID0gdGhpcy5fZHJ5Q3VycmVudDsKICAgIGlmICh0aGlzLl9kcnlDaGFuZ2UgIT09IDApIHsKICAgICAgZHJ5ICs9IHRoaXMuX2RyeUNoYW5nZTsKICAgICAgaWYgKGRyeSA+IDEpIHsKICAgICAgICBkcnkgPSAxOwogICAgICAgIHRoaXMuX2RyeUNoYW5nZSA9IDA7CiAgICAgICAgdGhpcy51cGRhdGUodGhpcy5fbmV4dENob3J1c01vZGUpOwogICAgICB9IGVsc2UgaWYgKGRyeSA8IHRoaXMuX2RyeVRhcmdldCAmJiB0aGlzLl9kcnlDaGFuZ2UgPCAwKSB7CiAgICAgICAgZHJ5ID0gdGhpcy5fZHJ5VGFyZ2V0OwogICAgICAgIHRoaXMuX2RyeUNoYW5nZSA9IDA7CiAgICAgIH0KICAgICAgdGhpcy5fZHJ5Q3VycmVudCA9IGRyeTsKICAgIH0KICAgIGlmIChkcnkgPT09IDEpIHsKICAgICAgdGhpcy5sZWZ0T3V0cHV0ID0gaW5wdXQ7CiAgICAgIHRoaXMucmlnaHRPdXRwdXQgPSBpbnB1dDsKICAgICAgcmV0dXJuOwogICAgfQogICAgbGV0IGxmb1ZhbHVlID0gdGhpcy5fbGZvVmFsdWUgKyB0aGlzLl9sZm9JbmNyZW1lbnQ7CiAgICBpZiAobGZvVmFsdWUgPiAxIHx8IGxmb1ZhbHVlIDwgLTEpIHsKICAgICAgdGhpcy5fbGZvSW5jcmVtZW50ID0gLXRoaXMuX2xmb0luY3JlbWVudDsKICAgICAgbGZvVmFsdWUgPSB0aGlzLl9sZm9WYWx1ZSArIHRoaXMuX2xmb0luY3JlbWVudDsKICAgIH0KICAgIHRoaXMuX2xmb1ZhbHVlID0gbGZvVmFsdWU7CiAgICBjb25zdCBkcnlPdXRwdXQgPSBpbnB1dCAqIGRyeTsKICAgIGNvbnN0IHdldEZhY3RvciA9IDEgLSBkcnk7CiAgICBjb25zdCBsZWZ0RGVsYXlTYW1wbGVzID0gdGhpcy5fYXZlcmFnZUxlZnRTYW1wbGVzICsgbGZvVmFsdWUgKiB0aGlzLl9tYXhMZWZ0T2Zmc2V0OwogICAgY29uc3QgbGVmdERlbGF5ZWRWYWx1ZSA9IHRoaXMuX3JpbmdCdWZmZXIucmVhZFNhbXBsZShsZWZ0RGVsYXlTYW1wbGVzKTsKICAgIHRoaXMubGVmdE91dHB1dCA9IGRyeU91dHB1dCArIHRoaXMuX3Bvc3RMZWZ0RmlsdGVyLnJlbmRlckxQKGxlZnREZWxheWVkVmFsdWUgKiB3ZXRGYWN0b3IpOwogICAgY29uc3QgcmlnaHREZWxheVNhbXBsZXMgPSB0aGlzLl9hdmVyYWdlUmlnaHRTYW1wbGVzICsgbGZvVmFsdWUgKiB0aGlzLl9tYXhSaWdodE9mZnNldDsKICAgIGNvbnN0IHJpZ2h0RGVsYXllZFZhbHVlID0gdGhpcy5fcmluZ0J1ZmZlci5yZWFkU2FtcGxlKHJpZ2h0RGVsYXlTYW1wbGVzKTsKICAgIHRoaXMucmlnaHRPdXRwdXQgPSBkcnlPdXRwdXQgKyB0aGlzLl9wb3N0UmlnaHRGaWx0ZXIucmVuZGVyTFAocmlnaHREZWxheWVkVmFsdWUgKiB3ZXRGYWN0b3IpOwogICAgdGhpcy5fcmluZ0J1ZmZlci53cml0ZVNhbXBsZSh0aGlzLl9wcmVGaWx0ZXIucmVuZGVyTFAodGhpcy5fYXBwbHlTYXR1cmF0aW9uKGlucHV0KSkpOwogIH0KICByZXNldCgpIHsKICAgIHRoaXMuX3JpbmdCdWZmZXIucmVzZXQoKTsKICAgIHRoaXMuX3ByZUZpbHRlci5yZXNldCgpOwogICAgdGhpcy5fcG9zdExlZnRGaWx0ZXIucmVzZXQoKTsKICAgIHRoaXMuX3Bvc3RSaWdodEZpbHRlci5yZXNldCgpOwogICAgdGhpcy5faXNVc2VkID0gZmFsc2U7CiAgfQogIHVwZGF0ZShjaG9ydXNNb2RlKSB7CiAgICBpZiAodGhpcy5fZHJ5Q3VycmVudCA8IDEgJiYgIXRoaXMuX2lzVXNlZCkgewogICAgICB0aGlzLl9kcnlDaGFuZ2UgPSA1ZS00OwogICAgICB0aGlzLl9kcnlUYXJnZXQgPSAxOwogICAgICB0aGlzLl9uZXh0Q2hvcnVzTW9kZSA9IGNob3J1c01vZGU7CiAgICB9IGVsc2UgewogICAgICBzd2l0Y2ggKGNob3J1c01vZGUpIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICB0aGlzLl91cGRhdGVWYWx1ZXMoMC41MTMsIDAuNDQsIDE1NGUtNSwgNTE1ZS01LCAxNTFlLTUsIDU0ZS00LCB0cnVlKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlcygwLjg2MywgMC40NCwgMTU0ZS01LCA1MTVlLTUsIDE1MWUtNSwgNTRlLTQsIHRydWUpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAzOgogICAgICAgICAgdGhpcy5fdXBkYXRlVmFsdWVzKDkuNzUsIDAuNDQsIDMyMmUtNSwgMzU2ZS01LCAzMjhlLTUsIDM2NWUtNSwgZmFsc2UpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlcygwLjUxMywgMSwgMTU0ZS01LCA1MTVlLTUsIDE1MWUtNSwgNTRlLTQsIHRydWUpOwogICAgICAgICAgdGhpcy5fcmluZ0J1ZmZlci5yZXNldCgpOwogICAgICAgICAgYnJlYWs7CiAgICAgIH0KICAgIH0KICB9CiAgX2FwcGx5U2F0dXJhdGlvbihpbnB1dCkgewogICAgcmV0dXJuIGlucHV0OwogIH0KICBfdXBkYXRlVmFsdWVzKGZyZXEsIGRyeSwgbWluTGVmdERlbGF5LCBtYXhMZWZ0RGVsYXksIG1pblJpZ2h0RGVsYXksIG1heFJpZ2h0RGVsYXksIGlzU3RlcmVvKSB7CiAgICBjb25zdCBhdmVyYWdlTGVmdERlbGF5ID0gKG1pbkxlZnREZWxheSArIG1heExlZnREZWxheSkgKiAwLjU7CiAgICBjb25zdCBtYXhMZWZ0T2Zmc2V0ID0gbWF4TGVmdERlbGF5IC0gYXZlcmFnZUxlZnREZWxheTsKICAgIHRoaXMuX2F2ZXJhZ2VMZWZ0U2FtcGxlcyA9IGF2ZXJhZ2VMZWZ0RGVsYXkgKiB0aGlzLl9zYW1wbGVSYXRlOwogICAgdGhpcy5fbWF4TGVmdE9mZnNldCA9IG1heExlZnRPZmZzZXQgKiB0aGlzLl9zYW1wbGVSYXRlOwogICAgY29uc3QgYXZlcmFnZVJpZ2h0RGVsYXkgPSAobWluUmlnaHREZWxheSArIG1heFJpZ2h0RGVsYXkpICogMC41OwogICAgY29uc3QgbWF4UmlnaHRPZmZzZXQgPSBtYXhSaWdodERlbGF5IC0gYXZlcmFnZVJpZ2h0RGVsYXk7CiAgICB0aGlzLl9hdmVyYWdlUmlnaHRTYW1wbGVzID0gYXZlcmFnZVJpZ2h0RGVsYXkgKiB0aGlzLl9zYW1wbGVSYXRlOwogICAgdGhpcy5fbWF4UmlnaHRPZmZzZXQgPSBtYXhSaWdodE9mZnNldCAqIHRoaXMuX3NhbXBsZVJhdGUgKiAoaXNTdGVyZW8gPyAtMSA6IDEpOwogICAgdGhpcy5fZHJ5VGFyZ2V0ID0gZHJ5OwogICAgaWYgKCF0aGlzLl9pc1VzZWQpIHsKICAgICAgdGhpcy5fZHJ5Q2hhbmdlID0gZHJ5OwogICAgfQogICAgdGhpcy5fZHJ5Q2hhbmdlID0gKGRyeSAtIHRoaXMuX2RyeUN1cnJlbnQpIC8gMWUzOwogICAgdGhpcy5fbGZvSW5jcmVtZW50ID0gTWF0aC5zaWduKHRoaXMuX2xmb0luY3JlbWVudCkgKiA0ICogZnJlcSAvIHRoaXMuX3NhbXBsZVJhdGU7CiAgfQp9OwoKLy8gc3JjL2p1bm94L2xmby5qcwp2YXIgTEZPID0gY2xhc3MgewogIGNvbnN0cnVjdG9yKHNhbXBsZVJhdGUyKSB7CiAgICB0aGlzLl9vbmVPdmVyU2FtcGxlUmF0ZSA9IDEgLyBzYW1wbGVSYXRlMjsKICAgIHRoaXMuX3BoYXNlSW5jcmVtZW50ID0gMDsKICAgIHRoaXMuY3VycmVudFBoYXNlID0gMTsKICAgIHRoaXMuY3VycmVudFZhbHVlID0gMDsKICAgIHRoaXMuaXNSZXN0YXJ0ZWQgPSBmYWxzZTsKICAgIHRoaXMud2F2ZWZvcm0gPSAidHJpYW5nbGUiOwogIH0KICByZXNldCgpIHsKICAgIHRoaXMuY3VycmVudFBoYXNlID0gMTsKICAgIHRoaXMuY3VycmVudFZhbHVlID0gMDsKICB9CiAgcmVuZGVyKCkgewogICAgdGhpcy5pc1Jlc3RhcnRlZCA9IGZhbHNlOwogICAgdGhpcy5jdXJyZW50UGhhc2UgKz0gdGhpcy5fcGhhc2VJbmNyZW1lbnQ7CiAgICBpZiAodGhpcy5jdXJyZW50UGhhc2UgPiAxKSB7CiAgICAgIHRoaXMuaXNSZXN0YXJ0ZWQgPSB0cnVlOwogICAgICB0aGlzLmN1cnJlbnRQaGFzZSAtPSAxOwogICAgfQogICAgbGV0IHZhbHVlID0gMDsKICAgIHN3aXRjaCAodGhpcy53YXZlZm9ybSkgewogICAgICBjYXNlICJub25lIjoKICAgICAgICB2YWx1ZSA9IDA7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgInNpbmUiOgogICAgICAgIHZhbHVlID0gTWF0aC5zaW4odGhpcy5jdXJyZW50UGhhc2UgKiAyICogTWF0aC5QSSk7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgInNxdWFyZSI6CiAgICAgICAgdmFsdWUgPSB0aGlzLmN1cnJlbnRQaGFzZSA+IDAuNSA/IC0xIDogMTsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAicmFuZG9tIjoKICAgICAgICB2YWx1ZSA9IHRoaXMuaXNSZXN0YXJ0ZWQgPyBNYXRoLnJhbmRvbSgpICogMiAtIDEgOiB0aGlzLmN1cnJlbnRWYWx1ZTsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAibm9pc2UiOgogICAgICAgIHZhbHVlID0gTWF0aC5yYW5kb20oKSAqIDIgLSAxOwogICAgICAgIGJyZWFrOwogICAgICBkZWZhdWx0OgogICAgICAgIHZhbHVlID0gdGhpcy5jdXJyZW50UGhhc2UgKiA0OwogICAgICAgIGlmICh2YWx1ZSA+IDEpIHsKICAgICAgICAgIHZhbHVlID0gMiAtIHZhbHVlOwogICAgICAgIH0KICAgICAgICBpZiAodmFsdWUgPCAtMSkgewogICAgICAgICAgdmFsdWUgPSAtMiAtIHZhbHVlOwogICAgICAgIH0KICAgICAgICBicmVhazsKICAgIH0KICAgIHJldHVybiB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbHVlOwogIH0KICBzZXRSYXRlKGZyZXF1ZW5jeSkgewogICAgdGhpcy5fcGhhc2VJbmNyZW1lbnQgPSBmcmVxdWVuY3kgKiB0aGlzLl9vbmVPdmVyU2FtcGxlUmF0ZTsKICB9Cn07CgovLyBzcmMvanVub3gvbGZvV2l0aEVudmVsb3BlLmpzCnZhciBMRk9XaXRoRW52ZWxvcGUgPSBjbGFzcyBleHRlbmRzIExGTyB7CiAgY29uc3RydWN0b3Ioc2FtcGxlUmF0ZTIpIHsKICAgIHN1cGVyKHNhbXBsZVJhdGUyKTsKICAgIGNvbnN0IHNlZ21lbnRzID0gWwogICAgICB0aGlzLl9kZWxheSA9IG5ldyBEZWxheVNlZ21lbnQoc2FtcGxlUmF0ZTIpLAogICAgICB0aGlzLl9hdHRhY2sgPSBuZXcgQXR0YWNrU2VnbWVudChzYW1wbGVSYXRlMiwgMC4wMywgMSwgdHJ1ZSksCiAgICAgIHRoaXMuX3JlbGVhc2UgPSBuZXcgRGVjYXlTZWdtZW50KHNhbXBsZVJhdGUyLCAwLjAyNSwgMCwgZmFsc2UpLAogICAgICB0aGlzLl9zaHV0ZG93biA9IG5ldyBTaHV0ZG93blNlZ21lbnQoc2FtcGxlUmF0ZTIsIDFlLTMpCiAgICBdOwogICAgdGhpcy5fcmVsZWFzZS5zZXREdXJhdGlvbigwLjEpOwogICAgdGhpcy5fZW52ID0gbmV3IEFic3RyYWN0RW52ZWxvcGUoc2VnbWVudHMpOwogIH0KICBpc0FjdGl2ZSgpIHsKICAgIHJldHVybiAhdGhpcy5fZW52LmlzRmluaXNoZWQoKTsKICB9CiAgdHJpZ2dlcigpIHsKICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSB7CiAgICAgIHRoaXMuY3VycmVudFBoYXNlID0gMTsKICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSAwOwogICAgfQogICAgaWYgKHRoaXMuX2Vudi5pc0ZpbmlzaGVkKCkgfHwgIXRoaXMuX2Vudi5pc1JlbGVhc2VkKCkpIHsKICAgICAgdGhpcy5fZW52LnRyaWdnZXIoKTsKICAgIH0KICB9CiAgcmVsZWFzZSgpIHsKICAgIHRoaXMuX2Vudi5yZWxlYXNlKCk7CiAgfQogIHNodXRkb3duKCkgewogICAgdGhpcy5fZW52LnNodXRkb3duKCk7CiAgfQogIHJlc2V0KCkgewogICAgc3VwZXIucmVzZXQoKTsKICAgIHRoaXMuX2Vudi5yZXNldCgpOwogIH0KICByZW5kZXIoKSB7CiAgICBpZiAoIXRoaXMuaXNBY3RpdmUoKSkgewogICAgICByZXR1cm4gMDsKICAgIH0KICAgIGNvbnN0IGVudlZhbHVlID0gdGhpcy5fZW52LnJlbmRlcigpOwogICAgaWYgKGVudlZhbHVlID09PSAwKSB7CiAgICAgIHJldHVybiAwOwogICAgfQogICAgcmV0dXJuIGVudlZhbHVlICogc3VwZXIucmVuZGVyKCk7CiAgfQogIHNldFZhbHVlcyhmcmVxdWVuY3ksIGRlbGF5RHVyYXRpb24sIGF0dGFja0R1cmF0aW9uKSB7CiAgICB0aGlzLnNldFJhdGUoZnJlcXVlbmN5KTsKICAgIHRoaXMuX2RlbGF5LnNldER1cmF0aW9uKGRlbGF5RHVyYXRpb24pOwogICAgdGhpcy5fYXR0YWNrLnNldER1cmF0aW9uKGF0dGFja0R1cmF0aW9uKTsKICB9Cn07CgovLyBzcmMvanVub3gvanVub3guanMKdmFyIHN5bnRoU3RhdHVzID0gewogIFNJTEVOVDogMCwKICBOT1RFU19BQ1RJVkU6IDQKfTsKdmFyIEp1bm94ID0gY2xhc3MgewogIGNvbnN0cnVjdG9yKHsgcGF0Y2gsIHNhbXBsZVJhdGU6IHNhbXBsZVJhdGUyLCBwb2x5cGhvbnkgfSkgewogICAgdGhpcy5wYXRjaCA9IHBhdGNoOwogICAgdGhpcy5zYW1wbGVSYXRlID0gc2FtcGxlUmF0ZTI7CiAgICB0aGlzLm1heFZvaWNlcyA9IHBvbHlwaG9ueTsKICAgIHRoaXMudm9pY2VzID0gW107CiAgICB0aGlzLnN0YXR1cyA9IHN5bnRoU3RhdHVzLlNJTEVOVDsKICAgIHRoaXMucGFyYW1ldGVycyA9IFsKICAgICAgdGhpcy5iZW5kQW1vdW50UGFyYW0gPSBuZXcgU21vb3RoTW92ZXMoMCwgc2FtcGxlUmF0ZTIpLAogICAgICB0aGlzLmRjb0JlbmREZXB0aFBhcmFtID0gbmV3IFNtb290aE1vdmVzKDEsIHNhbXBsZVJhdGUyKSwKICAgICAgdGhpcy5waXRjaExmb01vZERlcHRoUGFyYW0gPSBuZXcgU21vb3RoTW92ZXMoMCwgc2FtcGxlUmF0ZTIpLAogICAgICB0aGlzLnB3bURlcHRoUGFyYW0gPSBuZXcgU21vb3RoTW92ZXMoMCwgc2FtcGxlUmF0ZTIpLAogICAgICB0aGlzLnNhd0xldmVsUGFyYW0gPSBuZXcgU21vb3RoTW92ZXMoMCwgc2FtcGxlUmF0ZTIpLAogICAgICB0aGlzLnB1bHNlTGV2ZWxQYXJhbSA9IG5ldyBTbW9vdGhNb3ZlcygwLCBzYW1wbGVSYXRlMiksCiAgICAgIHRoaXMuc3ViTGV2ZWxQYXJhbSA9IG5ldyBTbW9vdGhNb3ZlcygwLCBzYW1wbGVSYXRlMiksCiAgICAgIHRoaXMubm9pc2VMZXZlbFBhcmFtID0gbmV3IFNtb290aE1vdmVzKDAsIHNhbXBsZVJhdGUyKSwKICAgICAgdGhpcy5maWx0ZXJDdXRvZmZQYXJhbSA9IG5ldyBTbW9vdGhNb3ZlcygwLCBzYW1wbGVSYXRlMiksCiAgICAgIHRoaXMuZmlsdGVyUmVzb25hbmNlUGFyYW0gPSBuZXcgU21vb3RoTW92ZXMoMCwgc2FtcGxlUmF0ZTIpLAogICAgICB0aGlzLmZpbHRlckJlbmREZXB0aFBhcmFtID0gbmV3IFNtb290aE1vdmVzKDEsIHNhbXBsZVJhdGUyKSwKICAgICAgdGhpcy5maWx0ZXJFbnZNb2RQYXJhbSA9IG5ldyBTbW9vdGhNb3ZlcygwLCBzYW1wbGVSYXRlMiksCiAgICAgIHRoaXMuZmlsdGVyTGZvTW9kUGFyYW0gPSBuZXcgU21vb3RoTW92ZXMoMCwgc2FtcGxlUmF0ZTIpLAogICAgICB0aGlzLmZpbHRlcktleU1vZFBhcmFtID0gbmV3IFNtb290aE1vdmVzKDAsIHNhbXBsZVJhdGUyKSwKICAgICAgdGhpcy52Y2FHYWluRmFjdG9yUGFyYW0gPSBuZXcgU21vb3RoTW92ZXMoMCwgc2FtcGxlUmF0ZTIpCiAgICBdOwogICAgdGhpcy5sZm8gPSBuZXcgTEZPV2l0aEVudmVsb3BlKHNhbXBsZVJhdGUyKTsKICAgIHRoaXMubGZvLndhdmVmb3JtID0gInNpbmUiOwogICAgdGhpcy5ocGYgPSBuZXcgU2ltcGxlU2luZ2xlUG9sZUZpbHRlcihzYW1wbGVSYXRlMik7CiAgICB0aGlzLmNob3J1cyA9IG5ldyBDaG9ydXMoc2FtcGxlUmF0ZTIpOwogICAgdGhpcy51cGRhdGUoKTsKICB9CiAgbm90ZU9uKG5vdGUsIHZlbG9jaXR5KSB7CiAgICB0aGlzLnN0YXR1cyA9IHN5bnRoU3RhdHVzLk5PVEVTX0FDVElWRTsKICAgIGNvbnN0IHZvaWNlSW5kZXggPSB0aGlzLnZvaWNlcy5maW5kSW5kZXgoKHZvaWNlKSA9PiB2b2ljZS5ub3RlID09PSBub3RlKTsKICAgIGlmICh2b2ljZUluZGV4ID49IDApIHsKICAgICAgdGhpcy52b2ljZXNbdm9pY2VJbmRleF0ubm90ZU9uKG5vdGUsIHZlbG9jaXR5KTsKICAgICAgcmV0dXJuOwogICAgfQogICAgaWYgKCF0aGlzLnZvaWNlcy5sZW5ndGggJiYgdGhpcy5wYXRjaC5sZm8uYXV0b1RyaWdnZXIpIHsKICAgICAgdGhpcy5sZm8udHJpZ2dlcigpOwogICAgfQogICAgY29uc3QgbmV3Vm9pY2UgPSBuZXcgVm9pY2UoeyBwYXRjaDogdGhpcy5wYXRjaCwgc2FtcGxlUmF0ZTogdGhpcy5zYW1wbGVSYXRlIH0pOwogICAgbmV3Vm9pY2Uubm90ZU9uKG5vdGUsIHZlbG9jaXR5KTsKICAgIGlmICh0aGlzLnZvaWNlcy5sZW5ndGggPCB0aGlzLm1heFZvaWNlcykgewogICAgICB0aGlzLnZvaWNlcy5wdXNoKG5ld1ZvaWNlKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgdGhpcy52b2ljZXNbMF0gPSBuZXdWb2ljZTsKICB9CiAgbm90ZU9mZihub3RlKSB7CiAgICB0aGlzLnZvaWNlcy5mb3JFYWNoKCh2b2ljZSkgPT4gdm9pY2Uubm90ZSA9PT0gbm90ZSAmJiAhdm9pY2UuaXNGaW5pc2hlZCgpICYmIHZvaWNlLm5vdGVPZmYoKSk7CiAgfQogIHBpdGNoQmVuZCh2YWx1ZSkgewogICAgdGhpcy5iZW5kQW1vdW50UGFyYW0uc2V0VmFsdWUodmFsdWUpOwogIH0KICBsZm9UcmlnZ2VyKCkgewogICAgdGhpcy5sZm8udHJpZ2dlcigpOwogIH0KICBsZm9SZWxlYXNlKCkgewogICAgdGhpcy5sZm8ucmVsZWFzZSgpOwogIH0KICByZW5kZXIob3V0TCwgb3V0UikgewogICAgaWYgKHRoaXMuc3RhdHVzID09PSBzeW50aFN0YXR1cy5TSUxFTlQpIHsKICAgICAgcmV0dXJuOwogICAgfQogICAgdGhpcy5zdGF0dXMtLTsKICAgIHRoaXMudm9pY2VzID0gdGhpcy52b2ljZXMuZmlsdGVyKCh2b2ljZSkgPT4gIXZvaWNlLmlzRmluaXNoZWQoKSk7CiAgICBpZiAodGhpcy52b2ljZXMubGVuZ3RoKSB7CiAgICAgIHRoaXMuc3RhdHVzID0gc3ludGhTdGF0dXMuTk9URVNfQUNUSVZFOwogICAgfQogICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXRMLmxlbmd0aDsgaSsrKSB7CiAgICAgIGNvbnN0IGJlbmRBbW91bnQgPSB0aGlzLmJlbmRBbW91bnRQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3QgZGNvQmVuZERlcHRoID0gdGhpcy5kY29CZW5kRGVwdGhQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3QgcHdtRGVwdGggPSB0aGlzLnB3bURlcHRoUGFyYW0uZ2V0TmV4dFZhbHVlKCk7CiAgICAgIGNvbnN0IHBpdGNoTGZvTW9kRGVwdGggPSB0aGlzLnBpdGNoTGZvTW9kRGVwdGhQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3Qgc2F3TGV2ZWwgPSB0aGlzLnNhd0xldmVsUGFyYW0uZ2V0TmV4dFZhbHVlKCk7CiAgICAgIGNvbnN0IHB1bHNlTGV2ZWwgPSB0aGlzLnB1bHNlTGV2ZWxQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3Qgc3ViTGV2ZWwgPSB0aGlzLnN1YkxldmVsUGFyYW0uZ2V0TmV4dFZhbHVlKCk7CiAgICAgIGNvbnN0IG5vaXNlTGV2ZWwgPSB0aGlzLm5vaXNlTGV2ZWxQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3QgZmlsdGVyQ3V0b2ZmID0gdGhpcy5maWx0ZXJDdXRvZmZQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3QgZmlsdGVyUmVzb25hbmNlID0gdGhpcy5maWx0ZXJSZXNvbmFuY2VQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3QgZmlsdGVyQmVuZERlcHRoID0gdGhpcy5maWx0ZXJCZW5kRGVwdGhQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3QgZmlsdGVyRW52TW9kID0gdGhpcy5maWx0ZXJFbnZNb2RQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3QgZmlsdGVyTGZvTW9kID0gdGhpcy5maWx0ZXJMZm9Nb2RQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3QgZmlsdGVyS2V5TW9kID0gdGhpcy5maWx0ZXJLZXlNb2RQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3QgdmNhR2FpbkZhY3RvciA9IHRoaXMudmNhR2FpbkZhY3RvclBhcmFtLmdldE5leHRWYWx1ZSgpOwogICAgICBpZiAoaSA9PT0gMCkgewogICAgICB9CiAgICAgIGNvbnN0IGxmb091dCA9IHRoaXMubGZvLnJlbmRlcigpOwogICAgICBjb25zdCBkY29EZXR1bmVPY3RhdmVzID0gbGZvT3V0ICogcGl0Y2hMZm9Nb2REZXB0aCAqIDAuMjUgKyBiZW5kQW1vdW50ICogZGNvQmVuZERlcHRoICogNyAvIDEyOwogICAgICBsZXQgZGNvRGV0dW5lRmFjdG9yID0gdGhpcy5wYXRjaC5kY28ucmFuZ2U7CiAgICAgIGlmIChkY29EZXR1bmVPY3RhdmVzICE9PSAwKSB7CiAgICAgICAgZGNvRGV0dW5lRmFjdG9yICo9IE1hdGgucG93KDIsIGRjb0RldHVuZU9jdGF2ZXMpOwogICAgICB9CiAgICAgIGNvbnN0IGZpbHRlckRldHVuZU9jdGF2ZXMgPSBiZW5kQW1vdW50ICogZmlsdGVyQmVuZERlcHRoICogNCArIGZpbHRlckxmb01vZCAqIGxmb091dCAqIDM7CiAgICAgIGxldCBtb25vT3V0ID0gMDsKICAgICAgZm9yIChsZXQgdiA9IDA7IHYgPCB0aGlzLnZvaWNlcy5sZW5ndGg7IHYrKykgewogICAgICAgIGNvbnN0IHZvaWNlID0gdGhpcy52b2ljZXNbdl07CiAgICAgICAgaWYgKCF2b2ljZS5pc0ZpbmlzaGVkKCkpIHsKICAgICAgICAgIG1vbm9PdXQgKz0gdm9pY2UucmVuZGVyKGxmb091dCwgZGNvRGV0dW5lRmFjdG9yLCBwd21EZXB0aCwgc2F3TGV2ZWwsIHB1bHNlTGV2ZWwsIHN1YkxldmVsLCBub2lzZUxldmVsLCBmaWx0ZXJDdXRvZmYsIGZpbHRlclJlc29uYW5jZSwgZmlsdGVyRW52TW9kLCBmaWx0ZXJEZXR1bmVPY3RhdmVzLCBmaWx0ZXJLZXlNb2QpOwogICAgICAgIH0KICAgICAgfQogICAgICBpZiAodGhpcy5wYXRjaC5ocGYgPiAwKSB7CiAgICAgICAgbGV0IGxvd1Bhc3NPdXQgPSB0aGlzLmhwZi5yZW5kZXJMUChtb25vT3V0KTsKICAgICAgICBpZiAodGhpcy5wYXRjaC5ocGYgPCAwLjI1KSB7CiAgICAgICAgICBsb3dQYXNzT3V0ICo9IHRoaXMucGF0Y2guaHBmICogNDsKICAgICAgICB9CiAgICAgICAgbW9ub091dCAtPSBsb3dQYXNzT3V0OwogICAgICB9CiAgICAgIG1vbm9PdXQgKj0gdmNhR2FpbkZhY3RvcjsKICAgICAgbW9ub091dCA9IGZhc3RUYW5oKDMgKiBtb25vT3V0KTsKICAgICAgdGhpcy5jaG9ydXMucmVuZGVyKG1vbm9PdXQpOwogICAgICBvdXRMW2ldID0gdGhpcy5jaG9ydXMubGVmdE91dHB1dDsKICAgICAgb3V0UltpXSA9IHRoaXMuY2hvcnVzLnJpZ2h0T3V0cHV0OwogICAgfQogICAgaWYgKHRoaXMuc3RhdHVzID09PSBzeW50aFN0YXR1cy5TSUxFTlQpIHsKICAgICAgbGV0IGZhZGVMZXZlbCA9IDE7CiAgICAgIGNvbnN0IGZhZGVTdGVwID0gZmFkZUxldmVsIC8gb3V0TC5sZW5ndGg7CiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0TC5sZW5ndGg7IGkrKykgewogICAgICAgIG91dExbaV0gKj0gZmFkZUxldmVsOwogICAgICAgIG91dFJbaV0gKj0gZmFkZUxldmVsOwogICAgICAgIGZhZGVMZXZlbCAtPSBmYWRlU3RlcDsKICAgICAgfQogICAgICBpZiAodGhpcy5wYXRjaC5sZm8uYXV0b1RyaWdnZXIpIHsKICAgICAgICB0aGlzLmxmby5yZXNldCgpOwogICAgICB9CiAgICAgIHRoaXMuaHBmLnJlc2V0KCk7CiAgICAgIHRoaXMuY2hvcnVzLnJlc2V0KCk7CiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzW2ldLnJlc2V0KCk7CiAgICAgIH0KICAgIH0KICB9CiAgc2V0VmFsdWUocGF0aCwgdmFsdWUpIHsKICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IHBhdGguc3BsaXQoIi4iKTsKICAgIGlmIChwYXRoU2VnbWVudHMubGVuZ3RoKSB7CiAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnBhdGNoOwogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhTZWdtZW50cy5sZW5ndGggLSAxOyBpKyspIHsKICAgICAgICB0YXJnZXQgPSB0YXJnZXRbcGF0aFNlZ21lbnRzW2ldXSB8fCAodGFyZ2V0W3BhdGhTZWdtZW50c1tpXV0gPSB7fSk7CiAgICAgIH0KICAgICAgdGFyZ2V0W3BhdGhTZWdtZW50c1twYXRoU2VnbWVudHMubGVuZ3RoIC0gMV1dID0gdmFsdWU7CiAgICAgIHRoaXMudXBkYXRlKCk7CiAgICB9CiAgfQogIHVwZGF0ZSgpIHsKICAgIGxldCBpc0FjdGl2ZSA9IGZhbHNlOwogICAgZm9yIChsZXQgdiA9IDA7IHYgPCB0aGlzLnZvaWNlcy5sZW5ndGg7IHYrKykgewogICAgICBjb25zdCB2b2ljZSA9IHRoaXMudm9pY2VzW3ZdOwogICAgICB2b2ljZS51cGRhdGVQYXRjaCh0aGlzLnBhdGNoKTsKICAgICAgaXNBY3RpdmUgPSBpc0FjdGl2ZSB8fCAhdm9pY2UuaXNGaW5pc2hlZCgpOwogICAgfQogICAgbGV0IHNhd0xldmVsID0gdGhpcy5wYXRjaC5kY28uc2F3ID8gMC4yIDogMDsKICAgIGxldCBwdWxzZUxldmVsID0gdGhpcy5wYXRjaC5kY28ucHVsc2UgPyAwLjIgOiAwOwogICAgbGV0IHN1YkxldmVsID0gdGhpcy5wYXRjaC5kY28uc3ViID8gdGhpcy5wYXRjaC5kY28uc3ViQW1vdW50ICogMC4xOTUgOiAwOwogICAgbGV0IG5vaXNlTGV2ZWwgPSB0aGlzLnBhdGNoLmRjby5ub2lzZSAqIDAuMjE7CiAgICBsZXQgbWl4RmFjdG9yID0gc2F3TGV2ZWwgKyBwdWxzZUxldmVsICsgc3ViTGV2ZWwgKyBub2lzZUxldmVsOwogICAgaWYgKG1peEZhY3RvciA+IDAuMjYpIHsKICAgICAgbWl4RmFjdG9yID0gMC4yNiAvICgwLjI2ICsgKG1peEZhY3RvciAtIDAuMjYpICogMC4zKTsKICAgICAgcHVsc2VMZXZlbCAqPSBtaXhGYWN0b3I7CiAgICAgIHNhd0xldmVsICo9IG1peEZhY3RvcjsKICAgICAgc3ViTGV2ZWwgKj0gbWl4RmFjdG9yOwogICAgICBub2lzZUxldmVsICo9IG1peEZhY3RvcjsKICAgIH0KICAgIHRoaXMuc2F3TGV2ZWxQYXJhbS5zZXRWYWx1ZShzYXdMZXZlbCwgaXNBY3RpdmUpOwogICAgdGhpcy5wdWxzZUxldmVsUGFyYW0uc2V0VmFsdWUocHVsc2VMZXZlbCwgaXNBY3RpdmUpOwogICAgdGhpcy5zdWJMZXZlbFBhcmFtLnNldFZhbHVlKHN1YkxldmVsLCBpc0FjdGl2ZSk7CiAgICB0aGlzLm5vaXNlTGV2ZWxQYXJhbS5zZXRWYWx1ZShub2lzZUxldmVsLCBpc0FjdGl2ZSk7CiAgICB0aGlzLnBpdGNoTGZvTW9kRGVwdGhQYXJhbS5zZXRWYWx1ZSh0aGlzLnBhdGNoLmRjby5sZm8sIGlzQWN0aXZlKTsKICAgIHRoaXMucHdtRGVwdGhQYXJhbS5zZXRWYWx1ZSh0aGlzLnBhdGNoLmRjby5wd20sIGlzQWN0aXZlKTsKICAgIGNvbnN0IGVudk1vZERpcmVjdGlvbiA9IHRoaXMucGF0Y2gudmNmLm1vZFBvc2l0aXZlID8gMSA6IC0xOwogICAgdGhpcy5maWx0ZXJDdXRvZmZQYXJhbS5zZXRWYWx1ZSh0aGlzLnBhdGNoLnZjZi5mcmVxdWVuY3ksIGlzQWN0aXZlKTsKICAgIHRoaXMuZmlsdGVyUmVzb25hbmNlUGFyYW0uc2V0VmFsdWUodGhpcy5wYXRjaC52Y2YucmVzb25hbmNlLCBpc0FjdGl2ZSk7CiAgICB0aGlzLmZpbHRlckVudk1vZFBhcmFtLnNldFZhbHVlKHRoaXMucGF0Y2gudmNmLmVudk1vZCAqIGVudk1vZERpcmVjdGlvbiwgaXNBY3RpdmUpOwogICAgdGhpcy5maWx0ZXJMZm9Nb2RQYXJhbS5zZXRWYWx1ZSh0aGlzLnBhdGNoLnZjZi5sZm9Nb2QsIGlzQWN0aXZlKTsKICAgIHRoaXMuZmlsdGVyS2V5TW9kUGFyYW0uc2V0VmFsdWUodGhpcy5wYXRjaC52Y2Yua2V5TW9kLCBpc0FjdGl2ZSk7CiAgICB0aGlzLmNob3J1cy51cGRhdGUodGhpcy5wYXRjaC5jaG9ydXMpOwogICAgc2V0TGZvVmFsdWVzRnJvbVNsaWRlcnModGhpcy5sZm8sIHRoaXMucGF0Y2gubGZvLmZyZXF1ZW5jeSwgdGhpcy5wYXRjaC5sZm8uZGVsYXkpOwogICAgc2V0SHBmVmFsdWVzRnJvbVNsaWRlcnModGhpcy5ocGYsIHRoaXMucGF0Y2guaHBmKTsKICAgIGNvbnN0IHZjYUdhaW5GYWN0b3IgPSBNYXRoLnBvdygxLjI1ODksIHRoaXMucGF0Y2gudmNhICogMTApICogMC4xOwogICAgdGhpcy52Y2FHYWluRmFjdG9yUGFyYW0uc2V0VmFsdWUodmNhR2FpbkZhY3RvciwgaXNBY3RpdmUpOwogIH0KICBwYW5pYygpIHsKICAgIHRoaXMudm9pY2VzID0gW107CiAgfQp9Owp2YXIgY3VydmVGcm9tTGZvUmF0ZVNsaWRlclRvRnJlcSA9IFswLjMsIDAuODUsIDMuMzksIDExLjQ5LCAyMi4yMl07CnZhciBjdXJ2ZUZyb21MZm9EZWxheVNsaWRlclRvRGVsYXkgPSBbMCwgMC4wNjM5LCAwLjg1LCAxLjIsIDIuNjg1XTsKdmFyIGN1cnZlRnJvbUxmb0RlbGF5U2xpZGVyVG9BdHRhY2sgPSBbMWUtMywgMC4wNTMsIDAuMTg4LCAwLjM0OCwgMS4xNV07CmZ1bmN0aW9uIHNldExmb1ZhbHVlc0Zyb21TbGlkZXJzKGxmbywgcmF0ZVNsaWRlciwgZGVsYXlTbGlkZXIpIHsKICBjb25zdCBmcmVxdWVuY3kgPSBpbnRlcnBvbGF0ZWRMb29rdXAocmF0ZVNsaWRlciAqIGN1cnZlRnJvbUxmb1JhdGVTbGlkZXJUb0ZyZXEubGVuZ3RoLCBjdXJ2ZUZyb21MZm9SYXRlU2xpZGVyVG9GcmVxKTsKICBjb25zdCBkZWxheUR1cmF0aW9uID0gaW50ZXJwb2xhdGVkTG9va3VwKGRlbGF5U2xpZGVyICogY3VydmVGcm9tTGZvRGVsYXlTbGlkZXJUb0RlbGF5Lmxlbmd0aCwgY3VydmVGcm9tTGZvRGVsYXlTbGlkZXJUb0RlbGF5KTsKICBjb25zdCBhdHRhY2tEdXJhdGlvbiA9IGludGVycG9sYXRlZExvb2t1cChkZWxheVNsaWRlciAqIGN1cnZlRnJvbUxmb0RlbGF5U2xpZGVyVG9BdHRhY2subGVuZ3RoLCBjdXJ2ZUZyb21MZm9EZWxheVNsaWRlclRvQXR0YWNrKTsKICBsZm8uc2V0VmFsdWVzKGZyZXF1ZW5jeSwgZGVsYXlEdXJhdGlvbiwgYXR0YWNrRHVyYXRpb24pOwp9CnZhciBjdXJ2ZUZyb21IcGZTbGlkZXJUb0ZyZXEgPSBbMTQwLCAyNTAsIDUyMCwgMTIyMF07CmZ1bmN0aW9uIHNldEhwZlZhbHVlc0Zyb21TbGlkZXJzKGhwZiwgcmF0ZVNsaWRlcikgewogIGNvbnN0IGZyZXF1ZW5jeSA9IGludGVycG9sYXRlZExvb2t1cChyYXRlU2xpZGVyICogY3VydmVGcm9tSHBmU2xpZGVyVG9GcmVxLmxlbmd0aCwgY3VydmVGcm9tSHBmU2xpZGVyVG9GcmVxKTsKICBocGYuc2V0Q3V0b2ZmKGZyZXF1ZW5jeSk7Cn0KCi8vIHNyYy9zeW50aC5jb25zdGFudHMuanMKdmFyIE5PVEVfT04gPSAibm90ZS1vbiI7CnZhciBOT1RFX09GRiA9ICJub3RlLW9mZiI7CnZhciBTRVRfUEFSQU0gPSAic2V0LXBhcmFtIjsKdmFyIFNFVF9QQVRDSCA9ICJzZXQtcGF0Y2giOwp2YXIgQUxMX05PVEVTX09GRiA9ICJhbGwtbm90ZXMtb2ZmIjsKdmFyIExGT19UUklHR0VSX09OID0gImxmby10cmlnZ2VyLW9uIjsKdmFyIExGT19UUklHR0VSX09GRiA9ICJsZm8tdHJpZ2dlci1vZmYiOwp2YXIgUElUQ0hfQkVORCA9ICJwaXRjaC1iZW5kIjsKCi8vIHNyYy9zeW50aC53b3JrbGV0LmpzCnZhciBKdW5veFdvcmtlciA9IGNsYXNzIGV4dGVuZHMgQXVkaW9Xb3JrbGV0UHJvY2Vzc29yIHsKICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7CiAgICBzdXBlcigpOwogICAgdGhpcy5zeW50aCA9IG5ldyBKdW5veCh7CiAgICAgIHBhdGNoOiBvcHRpb25zLnByb2Nlc3Nvck9wdGlvbnMucGF0Y2gsCiAgICAgIHBvbHlwaG9ueTogb3B0aW9ucy5wcm9jZXNzb3JPcHRpb25zLnBvbHlwaG9ueSwKICAgICAgc2FtcGxlUmF0ZTogc2FtcGxlUmF0ZSB8fCA0OGUzCiAgICB9KTsKICAgIHRoaXMucG9ydC5vbm1lc3NhZ2UgPSB0aGlzLmhhbmRsZU1lc3NhZ2UuYmluZCh0aGlzKTsKICB9CiAgaGFuZGxlTWVzc2FnZShldmVudCkgewogICAgaWYgKGV2ZW50LmRhdGEuYWN0aW9uID09PSBOT1RFX09OKSB7CiAgICAgIHRoaXMuc3ludGgubm90ZU9uKGV2ZW50LmRhdGEubm90ZSwgZXZlbnQuZGF0YS52ZWxvY2l0eSk7CiAgICB9IGVsc2UgaWYgKGV2ZW50LmRhdGEuYWN0aW9uID09PSBOT1RFX09GRikgewogICAgICB0aGlzLnN5bnRoLm5vdGVPZmYoZXZlbnQuZGF0YS5ub3RlKTsKICAgIH0gZWxzZSBpZiAoZXZlbnQuZGF0YS5hY3Rpb24gPT09IFBJVENIX0JFTkQpIHsKICAgICAgdGhpcy5zeW50aC5waXRjaEJlbmQoZXZlbnQuZGF0YS52YWx1ZSk7CiAgICB9IGVsc2UgaWYgKGV2ZW50LmRhdGEuYWN0aW9uID09PSBTRVRfUEFSQU0pIHsKICAgICAgdGhpcy5zeW50aC5zZXRWYWx1ZShldmVudC5kYXRhLm5hbWUsIGV2ZW50LmRhdGEudmFsdWUpOwogICAgfSBlbHNlIGlmIChldmVudC5kYXRhLmFjdGlvbiA9PT0gU0VUX1BBVENIKSB7CiAgICAgIHRoaXMuc3ludGgucGF0Y2ggPSBldmVudC5kYXRhLnBhdGNoRGF0YTsKICAgICAgdGhpcy5zeW50aC51cGRhdGUoKTsKICAgIH0gZWxzZSBpZiAoZXZlbnQuZGF0YS5hY3Rpb24gPT09IExGT19UUklHR0VSX09OKSB7CiAgICAgIHRoaXMuc3ludGgubGZvVHJpZ2dlcigpOwogICAgfSBlbHNlIGlmIChldmVudC5kYXRhLmFjdGlvbiA9PT0gTEZPX1RSSUdHRVJfT0ZGKSB7CiAgICAgIHRoaXMuc3ludGgubGZvUmVsZWFzZSgpOwogICAgfSBlbHNlIGlmIChldmVudC5kYXRhLmFjdGlvbiA9PT0gQUxMX05PVEVTX09GRikgewogICAgICB0aGlzLnN5bnRoLnBhbmljKCk7CiAgICB9IGVsc2UgewogICAgICBjb25zb2xlLmxvZygiVW5tYW5hZ2VkIG1lc3NhZ2UiLCBKU09OLnN0cmluZ2lmeShldmVudC5kYXRhKSk7CiAgICB9CiAgfQogIHByb2Nlc3MoaW5wdXRzLCBvdXRwdXRzKSB7CiAgICBjb25zdCBvdXRwdXQgPSBvdXRwdXRzWzBdOwogICAgdGhpcy5zeW50aC5yZW5kZXIob3V0cHV0WzBdLCBvdXRwdXRbMV0pOwogICAgcmV0dXJuIHRydWU7CiAgfQp9OwpyZWdpc3RlclByb2Nlc3NvcigianVub3gtc3ludGgiLCBKdW5veFdvcmtlcik7Cg==";
  var processorBlob = base64DataToBlob(synth_worklet_default);
  var processorUrl = URL.createObjectURL(processorBlob);
  async function createJuno60(ac, patch = defaultPatch, processorOptions = {}) {
    await ac.audioWorklet.addModule(processorUrl);
    return new SynthWorkletNode(ac, { patch, ...processorOptions });
  }
  var SynthWorkletNode = class extends AudioWorkletNode {
    constructor(context, processorOptions) {
      super(context, "junox-synth", {
        ...defaultAudioNodeOptions,
        processorOptions: {
          ...defaultProcessorOptions,
          ...processorOptions
        }
      });
      this.port.onmessage = this.handleMessage.bind(this);
    }
    handleMessage(event) {
    }
    sendMessage(action, payload) {
      this.port.postMessage({
        action,
        ...payload
      });
    }
    noteOn(note, velocity) {
      this.port.postMessage({
        action: NOTE_ON,
        note,
        velocity
      });
    }
    noteOff(note) {
      this.port.postMessage({
        action: NOTE_OFF,
        note
      });
    }
    pitchBend(value) {
      this.port.postMessage({
        action: PITCH_BEND,
        value
      });
    }
    setParam(name, value) {
      this.port.postMessage({
        action: SET_PARAM,
        name,
        value
      });
    }
    setPatch(patchData) {
      this.port.postMessage({
        action: SET_PATCH,
        patchData
      });
    }
    lfoTrigger() {
      this.port.postMessage({ action: LFO_TRIGGER_ON });
    }
    lfoRelease() {
      this.port.postMessage({ action: LFO_TRIGGER_OFF });
    }
    panic() {
      this.port.postMessage({
        action: ALL_NOTES_OFF
      });
    }
  };
  var defaultPatch = {
    name: "Strings 1",
    vca: 0.5,
    vcaType: "env",
    lfo: { autoTrigger: true, frequency: 0.6, delay: 0 },
    dco: {
      range: 1,
      saw: true,
      pulse: false,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0,
      pwmMod: "l",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      frequency: 0.7,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: { attack: 0.4, decay: 0, sustain: 1, release: 0.45 },
    chorus: 1
  };
  var defaultAudioNodeOptions = {
    numberOfInputs: 0,
    numberOfOutputs: 1,
    channelCountMode: "explicit",
    channelCount: 2,
    outputChannelCount: [2]
  };
  var defaultProcessorOptions = {
    patch: defaultPatch,
    polyphony: 6
  };
  function base64DataToBlob(dataUrl, contentType = "application/javascript; charset=utf-8") {
    var byteString = atob(dataUrl.split(",")[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: contentType });
  }
  return synth_node_exports;
})();
