var Junox = (() => {
  var __defineProperty = Object.defineProperty;
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __markAsModule = (target) => {
    return __defineProperty(target, "__esModule", {value: true});
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defineProperty(target, name, {get: all[name], enumerable: true});
  };

  // dist/synth.node.mjs
  var require_synth_node = __commonJS((exports) => {
    __export(exports, {
      Juno60FactoryPatchesA: () => Juno60FactoryPatchesA,
      SynthWorkletNode: () => SynthWorkletNode,
      createJuno60: () => createJuno60,
      defaultPatch: () => defaultPatch
    });
    const NOTE_ON = "note-on";
    const NOTE_OFF = "note-off";
    const SET_PARAM = "set-param";
    const SET_PATCH = "set-patch";
    const LFO_TRIGGER_ON = "lfo-trigger-on";
    const LFO_TRIGGER_OFF = "lfo-trigger-off";
    const PITCH_BEND = "pitch-bend";
    const PANIC = "panic";
    const Juno60FactoryPatchesA = [
      {
        name: "Strings 1",
        vca: 0.5,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.6, delay: 0},
        dco: {range: 1, saw: true, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "l", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.7, resonance: 0, modPositive: true, envMod: 0, lfoMod: 0, keyMod: 1},
        env: {attack: 0.4, decay: 0, sustain: 1, release: 0.45},
        chorus: 1
      },
      {
        name: "Strings 2",
        vca: 0.3,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.4, delay: 0},
        dco: {range: 1, saw: true, pulse: true, sub: false, subAmount: 0, noise: 0, pwm: 0.6, pwmMod: "l", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.7, resonance: 0, modPositive: true, envMod: 0, lfoMod: 0, keyMod: 1},
        env: {attack: 0.4, decay: 0, sustain: 1, release: 0.45},
        chorus: 2
      },
      {
        name: "Strings 3",
        vca: 0.3,
        vcaType: "env",
        lfo: {autoTrigger: false, frequency: 0.3, delay: 0.8},
        dco: {range: 1, saw: true, pulse: true, sub: true, subAmount: 1, noise: 0, pwm: 0.7, pwmMod: "l", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.5, resonance: 0, modPositive: true, envMod: 0, lfoMod: 0, keyMod: 1},
        env: {attack: 0.3, decay: 0, sustain: 1, release: 0.6},
        chorus: 2
      },
      {
        name: "Organ 1",
        vca: 0.5,
        vcaType: "gate",
        lfo: {autoTrigger: true, frequency: 0.2, delay: 0.8},
        dco: {range: 1, saw: false, pulse: true, sub: true, subAmount: 1, noise: 0, pwm: 0.5, pwmMod: "m", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.4, resonance: 0.6, modPositive: true, envMod: 0.45, lfoMod: 0, keyMod: 1},
        env: {attack: 0, decay: 0, sustain: 0, release: 0},
        chorus: 1
      },
      {
        name: "Organ 2",
        vca: 0.5,
        vcaType: "gate",
        lfo: {autoTrigger: true, frequency: 0.5, delay: 0.4},
        dco: {range: 1, saw: false, pulse: true, sub: true, subAmount: 0.8, noise: 0, pwm: 0.55, pwmMod: "l", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.35, resonance: 0.55, modPositive: true, envMod: 0.4, lfoMod: 0, keyMod: 1},
        env: {attack: 0, decay: 0.1, sustain: 0, release: 0.1},
        chorus: 1
      },
      {
        name: "Organ 3",
        vca: 0.5,
        vcaType: "gate",
        lfo: {autoTrigger: true, frequency: 0.5, delay: 0.4},
        dco: {range: 2, saw: false, pulse: true, sub: true, subAmount: 0.8, noise: 0, pwm: 0.55, pwmMod: "l", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.35, resonance: 0.55, modPositive: true, envMod: 0.35, lfoMod: 0, keyMod: 1},
        env: {attack: 0, decay: 0.1, sustain: 0, release: 0.1},
        chorus: 2
      },
      {
        name: "Brass",
        vca: 0.7,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.5, delay: 0.65},
        dco: {range: 1, saw: true, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "m", lfo: 0.15},
        hpf: 0,
        vcf: {type: "moog", frequency: 0, resonance: 0, modPositive: true, envMod: 0.85, lfoMod: 0, keyMod: 0.4},
        env: {attack: 0.25, decay: 0.4, sustain: 0.6, release: 0.2},
        chorus: 1
      },
      {
        name: "Phase Brass",
        vca: 0.4,
        vcaType: "gate",
        lfo: {autoTrigger: true, frequency: 0.6, delay: 0},
        dco: {range: 1, saw: true, pulse: true, sub: false, subAmount: 1, noise: 0, pwm: 1, pwmMod: "e", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.3, resonance: 0.1, modPositive: true, envMod: 0.55, lfoMod: 0, keyMod: 1},
        env: {attack: 0.2, decay: 0.4, sustain: 0.4, release: 0.3},
        chorus: 1
      },
      {
        name: "Piano 1",
        vca: 0.7,
        vcaType: "env",
        lfo: {autoTrigger: false, frequency: 0.6, delay: 0.3},
        dco: {range: 1, saw: false, pulse: true, sub: false, subAmount: 0, noise: 0, pwm: 0.6, pwmMod: "m", lfo: 0.45},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.1, resonance: 0, modPositive: true, envMod: 0.7, lfoMod: 0, keyMod: 0.4},
        env: {attack: 0, decay: 0.8, sustain: 0.15, release: 0.3},
        chorus: 0
      },
      {
        name: "Piano 2",
        vca: 0.8,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.4, delay: 0},
        dco: {range: 2, saw: false, pulse: true, sub: true, subAmount: 0.45, noise: 0, pwm: 0.4, pwmMod: "m", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.35, resonance: 0, modPositive: true, envMod: 0.25, lfoMod: 0.2, keyMod: 0.8},
        env: {attack: 0, decay: 0.75, sustain: 0, release: 0.35},
        chorus: 0
      },
      {
        name: "Celesta",
        vca: 0.6,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.35, delay: 0.6},
        dco: {range: 1, saw: true, pulse: true, sub: false, subAmount: 1, noise: 0, pwm: 0.5, pwmMod: "e", lfo: 0},
        hpf: 0.35,
        vcf: {type: "moog", frequency: 0.35, resonance: 0.8, modPositive: true, envMod: 0, lfoMod: 0, keyMod: 1},
        env: {attack: 0, decay: 0.65, sustain: 0.2, release: 0.55},
        chorus: 0
      },
      {
        name: "Mellow Piano",
        vca: 0.7,
        vcaType: "env",
        lfo: {autoTrigger: false, frequency: 0.5, delay: 0},
        dco: {range: 1, saw: false, pulse: true, sub: false, subAmount: 1, noise: 0, pwm: 0.5, pwmMod: "m", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.3, resonance: 0, modPositive: true, envMod: 0.25, lfoMod: 0.1, keyMod: 0.9},
        env: {attack: 0.1, decay: 0.75, sustain: 0.2, release: 0.85},
        chorus: 1
      },
      {
        name: "Harpsichord 1",
        vca: 0.4,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.5, delay: 0.4},
        dco: {range: 2, saw: false, pulse: true, sub: true, subAmount: 0.7, noise: 0, pwm: 0.3, pwmMod: "m", lfo: 0},
        hpf: 0.35,
        vcf: {type: "moog", frequency: 0.3, resonance: 0, modPositive: true, envMod: 0.5, lfoMod: 0, keyMod: 0.7},
        env: {attack: 0, decay: 0.6, sustain: 0.35, release: 0.25},
        chorus: 1
      },
      {
        name: "Harpsichord 2",
        vca: 0.5,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.55, delay: 0.6},
        dco: {range: 2, saw: false, pulse: true, sub: true, subAmount: 0.85, noise: 0, pwm: 0.2, pwmMod: "m", lfo: 0},
        hpf: 0.35,
        vcf: {type: "moog", frequency: 0.5, resonance: 0.25, modPositive: true, envMod: 0.3, lfoMod: 0, keyMod: 1},
        env: {attack: 0, decay: 0.5, sustain: 0.15, release: 0.5},
        chorus: 2
      },
      {
        name: "Guitar",
        vca: 0.9,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.6, delay: 0.6},
        dco: {range: 1, saw: false, pulse: true, sub: false, subAmount: 1, noise: 0, pwm: 0.6, pwmMod: "m", lfo: 0},
        hpf: 0.65,
        vcf: {type: "moog", frequency: 0.3, resonance: 0, modPositive: true, envMod: 0.45, lfoMod: 0.15, keyMod: 0.5},
        env: {attack: 0, decay: 0.55, sustain: 0.35, release: 0.65},
        chorus: 0
      },
      {
        name: "Synthesizer Harp",
        vca: 0.6,
        vcaType: "env",
        lfo: {autoTrigger: false, frequency: 0.3, delay: 0.8},
        dco: {range: 1, saw: true, pulse: false, sub: false, subAmount: 1, noise: 0, pwm: 0, pwmMod: "m", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.3, resonance: 0, modPositive: true, envMod: 0.5, lfoMod: 0, keyMod: 0.8},
        env: {attack: 0, decay: 0.55, sustain: 0.3, release: 0.5},
        chorus: 1
      },
      {
        name: "Bass 1",
        vca: 0.5,
        vcaType: "gate",
        lfo: {autoTrigger: true, frequency: 0.5, delay: 0.6},
        dco: {range: 0.5, saw: true, pulse: true, sub: true, subAmount: 0.3, noise: 0, pwm: 0.5, pwmMod: "m", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.3, resonance: 0.25, modPositive: true, envMod: 0.35, lfoMod: 0, keyMod: 0},
        env: {attack: 0, decay: 0.4, sustain: 0.1, release: 0.25},
        chorus: 1
      },
      {
        name: "Bass 2",
        vca: 0.4,
        vcaType: "gate",
        lfo: {autoTrigger: true, frequency: 0.5, delay: 0.6},
        dco: {range: 0.5, saw: true, pulse: true, sub: false, subAmount: 0.3, noise: 0, pwm: 0.5, pwmMod: "m", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.3, resonance: 0.5, modPositive: true, envMod: 0.45, lfoMod: 0, keyMod: 0.5},
        env: {attack: 0, decay: 0.3, sustain: 0.35, release: 0.25},
        chorus: 1
      },
      {
        name: "Clavichord 1",
        vca: 0.7,
        vcaType: "env",
        lfo: {autoTrigger: false, frequency: 0.6, delay: 0.25},
        dco: {range: 0.5, saw: false, pulse: true, sub: false, subAmount: 0, noise: 0, pwm: 0.8, pwmMod: "m", lfo: 0.4},
        hpf: 0,
        vcf: {type: "moog", frequency: 0, resonance: 0.3, modPositive: true, envMod: 0.8, lfoMod: 0, keyMod: 0.6},
        env: {attack: 0, decay: 0.5, sustain: 0.35, release: 0.15},
        chorus: 1
      },
      {
        name: "Clavichord 2",
        vca: 1,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.1, delay: 0},
        dco: {range: 0.5, saw: false, pulse: true, sub: false, subAmount: 1, noise: 0, pwm: 0.8, pwmMod: "m", lfo: 0},
        hpf: 0.35,
        vcf: {type: "moog", frequency: 0.55, resonance: 0.7, modPositive: true, envMod: 0.2, lfoMod: 0.25, keyMod: 0.7},
        env: {attack: 0, decay: 0.45, sustain: 0.2, release: 0.2},
        chorus: 0
      },
      {
        name: "Pizzicato Sound 1",
        vca: 0.8,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.5, delay: 0.6},
        dco: {range: 1, saw: false, pulse: true, sub: false, subAmount: 0.3, noise: 0, pwm: 0.35, pwmMod: "m", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.45, resonance: 0.3, modPositive: true, envMod: 0.3, lfoMod: 0.3, keyMod: 1},
        env: {attack: 0, decay: 0.2, sustain: 0.35, release: 0.55},
        chorus: 1
      },
      {
        name: "Pizzicato Sound 2",
        vca: 0.6,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.5, delay: 0.6},
        dco: {range: 2, saw: false, pulse: true, sub: true, subAmount: 0.3, noise: 0, pwm: 0.2, pwmMod: "m", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.5, resonance: 0.3, modPositive: true, envMod: 0.3, lfoMod: 0, keyMod: 1},
        env: {attack: 0, decay: 0.3, sustain: 0.3, release: 0.4},
        chorus: 2
      },
      {
        name: "Xylophone",
        vca: 1,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.5, delay: 0},
        dco: {range: 2, saw: false, pulse: false, sub: true, subAmount: 1, noise: 0, pwm: 0.5, pwmMod: "m", lfo: 0},
        hpf: 0.35,
        vcf: {type: "moog", frequency: 0.4, resonance: 0.5, modPositive: true, envMod: 0.3, lfoMod: 0, keyMod: 0.6},
        env: {attack: 0, decay: 0.35, sustain: 0, release: 0.35},
        chorus: 0
      },
      {
        name: "Glockenspiel",
        vca: 0.9,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.5, delay: 0},
        dco: {range: 2, saw: false, pulse: true, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "m", lfo: 0},
        hpf: 0.35,
        vcf: {type: "moog", frequency: 0.45, resonance: 0.5, modPositive: true, envMod: 0.3, lfoMod: 0, keyMod: 0.6},
        env: {attack: 0, decay: 0.3, sustain: 0.25, release: 0.5},
        chorus: 0
      },
      {
        name: "Violine",
        vca: 0.7,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.6, delay: 0.6},
        dco: {range: 1, saw: true, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "l", lfo: 0.2},
        hpf: 0.35,
        vcf: {type: "moog", frequency: 0.65, resonance: 0, modPositive: true, envMod: 0, lfoMod: 0, keyMod: 1},
        env: {attack: 0.4, decay: 0, sustain: 1, release: 0.4},
        chorus: 0
      },
      {
        name: "Trumpet",
        vca: 0.7,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.25, delay: 0.65},
        dco: {range: 1, saw: true, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "m", lfo: 0.15},
        hpf: 0,
        vcf: {type: "moog", frequency: 0, resonance: 0, modPositive: true, envMod: 0.85, lfoMod: 0, keyMod: 0.4},
        env: {attack: 0.25, decay: 0.4, sustain: 0.6, release: 0.2},
        chorus: 0
      },
      {
        name: "Horn",
        vca: 0.7,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.25, delay: 0.7},
        dco: {range: 1, saw: true, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "m", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.2, resonance: 0, modPositive: true, envMod: 0.55, lfoMod: 0.2, keyMod: 0.4},
        env: {attack: 0.4, decay: 0.5, sustain: 0.6, release: 0.3},
        chorus: 0
      },
      {
        name: "Tuba",
        vca: 1,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.25, delay: 0.7},
        dco: {range: 0.5, saw: true, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "m", lfo: 0.15},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.15, resonance: 0, modPositive: true, envMod: 0.6, lfoMod: 0, keyMod: 0.4},
        env: {attack: 0.3, decay: 0.4, sustain: 0.4, release: 0.3},
        chorus: 0
      },
      {
        name: "Flute",
        vca: 1,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.55, delay: 0.5},
        dco: {range: 2, saw: true, pulse: false, sub: false, subAmount: 0, noise: 0.15, pwm: 0, pwmMod: "m", lfo: 0},
        hpf: 0.35,
        vcf: {type: "moog", frequency: 0.5, resonance: 0, modPositive: true, envMod: 0, lfoMod: 0.2, keyMod: 0.6},
        env: {attack: 0.2, decay: 0.6, sustain: 0.5, release: 0.25},
        chorus: 0
      },
      {
        name: "Clarinet",
        vca: 0.6,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.5, delay: 0.65},
        dco: {range: 1, saw: false, pulse: true, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "m", lfo: 0.15},
        hpf: 0.35,
        vcf: {type: "moog", frequency: 0.5, resonance: 0.3, modPositive: true, envMod: 0.25, lfoMod: 0, keyMod: 0.6},
        env: {attack: 0.25, decay: 0.6, sustain: 0.6, release: 0.25},
        chorus: 0
      },
      {
        name: "Oboe",
        vca: 1,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.55, delay: 0.65},
        dco: {range: 1, saw: false, pulse: true, sub: false, subAmount: 0, noise: 0, pwm: 0.65, pwmMod: "m", lfo: 0.15},
        hpf: 1,
        vcf: {type: "moog", frequency: 0.45, resonance: 0.5, modPositive: true, envMod: 0.25, lfoMod: 0, keyMod: 0.5},
        env: {attack: 0.2, decay: 0.6, sustain: 0.6, release: 0.25},
        chorus: 0
      },
      {
        name: "English Horn",
        vca: 1,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.5, delay: 0.7},
        dco: {range: 0.5, saw: false, pulse: true, sub: false, subAmount: 0, noise: 0, pwm: 0.65, pwmMod: "m", lfo: 0.2},
        hpf: 1,
        vcf: {type: "moog", frequency: 0.5, resonance: 0.7, modPositive: true, envMod: 0, lfoMod: 0.15, keyMod: 0.5},
        env: {attack: 0.2, decay: 0.6, sustain: 0.6, release: 0.25},
        chorus: 0
      },
      {
        name: "Funny Cat",
        vca: 0.8,
        vcaType: "env",
        lfo: {autoTrigger: false, frequency: 0.6, delay: 0.2},
        dco: {range: 1, saw: true, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "m", lfo: 0.3},
        hpf: 0.35,
        vcf: {type: "moog", frequency: 0.15, resonance: 0.75, modPositive: true, envMod: 0.5, lfoMod: 0.2, keyMod: 0.5},
        env: {attack: 0.25, decay: 0.4, sustain: 1, release: 0.1},
        chorus: 0
      },
      {
        name: "Wah Brass",
        vca: 0.7,
        vcaType: "gate",
        lfo: {autoTrigger: false, frequency: 0.6, delay: 0.2},
        dco: {range: 1, saw: true, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "m", lfo: 0.3},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.3, resonance: 0.7, modPositive: true, envMod: 0.45, lfoMod: 0, keyMod: 0.6},
        env: {attack: 0.3, decay: 0.3, sustain: 0.4, release: 0.2},
        chorus: 0
      },
      {
        name: "Phase Combination",
        vca: 0.3,
        vcaType: "env",
        lfo: {autoTrigger: false, frequency: 0.6, delay: 0.2},
        dco: {range: 1, saw: true, pulse: true, sub: false, subAmount: 0, noise: 0, pwm: 0.8, pwmMod: "m", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.6, resonance: 0.2, modPositive: true, envMod: 0.3, lfoMod: 0, keyMod: 0.2},
        env: {attack: 0, decay: 0.7, sustain: 0.2, release: 0.2},
        chorus: 1
      },
      {
        name: "Reed 1",
        vca: 0.6,
        vcaType: "gate",
        lfo: {autoTrigger: false, frequency: 0.6, delay: 0.2},
        dco: {range: 1, saw: false, pulse: true, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "m", lfo: 0.4},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.1, resonance: 0.6, modPositive: true, envMod: 0.7, lfoMod: 0, keyMod: 0.5},
        env: {attack: 0, decay: 0.85, sustain: 0.5, release: 0.1},
        chorus: 1
      },
      {
        name: "Popcorn",
        vca: 0.8,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0, delay: 0},
        dco: {range: 2, saw: false, pulse: false, sub: true, subAmount: 1, noise: 0, pwm: 0, pwmMod: "m", lfo: 0},
        hpf: 0.35,
        vcf: {type: "moog", frequency: 0.25, resonance: 0.2, modPositive: true, envMod: 0.55, lfoMod: 0, keyMod: 1},
        env: {attack: 0, decay: 0.3, sustain: 0.2, release: 0},
        chorus: 0
      },
      {
        name: "Reed 2",
        vca: 0.5,
        vcaType: "env",
        lfo: {autoTrigger: false, frequency: 0.3, delay: 0.8},
        dco: {range: 2, saw: false, pulse: false, sub: true, subAmount: 1, noise: 0, pwm: 0, pwmMod: "m", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.2, resonance: 0, modPositive: true, envMod: 0.6, lfoMod: 0, keyMod: 0.8},
        env: {attack: 0, decay: 0.55, sustain: 0.3, release: 0.6},
        chorus: 1
      },
      {
        name: "Reed 3",
        vca: 0.6,
        vcaType: "env",
        lfo: {autoTrigger: false, frequency: 0.6, delay: 0.2},
        dco: {range: 2, saw: false, pulse: false, sub: true, subAmount: 1, noise: 0, pwm: 0.5, pwmMod: "m", lfo: 0.2},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.3, resonance: 0.2, modPositive: true, envMod: 0.3, lfoMod: 0, keyMod: 1},
        env: {attack: 0.25, decay: 0, sustain: 1, release: 0.2},
        chorus: 0
      },
      {
        name: "PWM Chorus",
        vca: 0.2,
        vcaType: "env",
        lfo: {autoTrigger: false, frequency: 0.3, delay: 0},
        dco: {range: 1, saw: false, pulse: true, sub: true, subAmount: 1, noise: 0, pwm: 0.5, pwmMod: "l", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.8, resonance: 0, modPositive: true, envMod: 0, lfoMod: 0, keyMod: 1},
        env: {attack: 0.3, decay: 0, sustain: 1, release: 0.4},
        chorus: 2
      },
      {
        name: "Synthesizer Organ",
        vca: 0.5,
        vcaType: "gate",
        lfo: {autoTrigger: true, frequency: 0.45, delay: 0.6},
        dco: {range: 1, saw: false, pulse: true, sub: true, subAmount: 0.75, noise: 0, pwm: 0.65, pwmMod: "m", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.25, resonance: 0, modPositive: true, envMod: 0.5, lfoMod: 0.2, keyMod: 0.7},
        env: {attack: 0, decay: 0.2, sustain: 0.5, release: 0.25},
        chorus: 2
      },
      {
        name: "Effect Sound 1",
        vca: 0.7,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.45, delay: 0.6},
        dco: {range: 2, saw: true, pulse: true, sub: true, subAmount: 0.7, noise: 0, pwm: 1, pwmMod: "m", lfo: 0.15},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.65, resonance: 0, modPositive: false, envMod: 0.45, lfoMod: 0, keyMod: 0.7},
        env: {attack: 0, decay: 0.5, sustain: 0, release: 0.55},
        chorus: 1
      },
      {
        name: "Effect Sound 2",
        vca: 0.4,
        vcaType: "gate",
        lfo: {autoTrigger: true, frequency: 0.55, delay: 0.9},
        dco: {range: 1, saw: true, pulse: false, sub: true, subAmount: 0.65, noise: 0, pwm: 0.3, pwmMod: "l", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.65, resonance: 0.3, modPositive: false, envMod: 0.4, lfoMod: 0, keyMod: 0.1},
        env: {attack: 0.65, decay: 0.55, sustain: 0.2, release: 0.65},
        chorus: 1
      },
      {
        name: "Space Harp",
        vca: 0.6,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.55, delay: 0},
        dco: {range: 1, saw: true, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "e", lfo: 0.2},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.65, resonance: 0.5, modPositive: true, envMod: 0.55, lfoMod: 0, keyMod: 1},
        env: {attack: 0, decay: 0.8, sustain: 0.8, release: 0.9},
        chorus: 1
      },
      {
        name: "Funk",
        vca: 0.2,
        vcaType: "gate",
        lfo: {autoTrigger: true, frequency: 0.3, delay: 0.25},
        dco: {range: 1, saw: true, pulse: true, sub: true, subAmount: 1, noise: 0, pwm: 0.6, pwmMod: "m", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.75, resonance: 0.6, modPositive: false, envMod: 0.5, lfoMod: 0, keyMod: 0.45},
        env: {attack: 0.6, decay: 0.5, sustain: 0, release: 0},
        chorus: 1
      },
      {
        name: "Space Sound 1",
        vca: 0.3,
        vcaType: "gate",
        lfo: {autoTrigger: true, frequency: 0.6, delay: 0.7},
        dco: {range: 1, saw: false, pulse: true, sub: true, subAmount: 1, noise: 0, pwm: 0.45, pwmMod: "m", lfo: 0.2},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.65, resonance: 0.7, modPositive: false, envMod: 0.55, lfoMod: 0, keyMod: 1},
        env: {attack: 0, decay: 0.8, sustain: 0, release: 0.3},
        chorus: 1
      },
      {
        name: "Mysterious Invention",
        vca: 0.5,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.6, delay: 0.8},
        dco: {range: 1, saw: true, pulse: true, sub: false, subAmount: 1, noise: 0, pwm: 0.8, pwmMod: "e", lfo: 0.2},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.8, resonance: 0.7, modPositive: false, envMod: 0.6, lfoMod: 0.25, keyMod: 0},
        env: {attack: 0, decay: 1, sustain: 0, release: 1},
        chorus: 0
      },
      {
        name: "Space Sound 2",
        vca: 0.2,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.3, delay: 0.3},
        dco: {range: 1, saw: true, pulse: true, sub: false, subAmount: 0.8, noise: 0, pwm: 0.6, pwmMod: "m", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.2, resonance: 0.85, modPositive: true, envMod: 0.6, lfoMod: 0, keyMod: 1},
        env: {attack: 1, decay: 1, sustain: 1, release: 1},
        chorus: 1
      },
      {
        name: "Percussive Sound 1",
        vca: 1,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0, delay: 0},
        dco: {range: 2, saw: false, pulse: false, sub: false, subAmount: 0, noise: 1, pwm: 0, pwmMod: "e", lfo: 0},
        hpf: 0.35,
        vcf: {type: "moog", frequency: 0.4, resonance: 1, modPositive: true, envMod: 0.15, lfoMod: 0, keyMod: 1},
        env: {attack: 0, decay: 0.3, sustain: 0, release: 0.4},
        chorus: 0
      },
      {
        name: "Percussive Sound 2",
        vca: 1,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0, delay: 0},
        dco: {range: 1, saw: false, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "e", lfo: 0},
        hpf: 0.35,
        vcf: {type: "moog", frequency: 0.5, resonance: 1, modPositive: false, envMod: 0.35, lfoMod: 0, keyMod: 1},
        env: {attack: 0, decay: 0.3, sustain: 0, release: 0.4},
        chorus: 0
      },
      {
        name: "Whistle",
        vca: 0.8,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.55, delay: 0.5},
        dco: {range: 2, saw: false, pulse: false, sub: false, subAmount: 0, noise: 0.2, pwm: 0, pwmMod: "m", lfo: 0},
        hpf: 0.35,
        vcf: {type: "moog", frequency: 0.35, resonance: 1, modPositive: true, envMod: 0.15, lfoMod: 0.2, keyMod: 1},
        env: {attack: 0.3, decay: 0, sustain: 1, release: 0.1},
        chorus: 0
      },
      {
        name: "Effect Sound 3",
        vca: 1,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.55, delay: 0.4},
        dco: {range: 1, saw: false, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "e", lfo: 0},
        hpf: 0.35,
        vcf: {type: "moog", frequency: 0.35, resonance: 1, modPositive: true, envMod: 0, lfoMod: 0.2, keyMod: 1},
        env: {attack: 0, decay: 0.4, sustain: 0.55, release: 0.7},
        chorus: 0
      },
      {
        name: "UFO",
        vca: 0.4,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.6, delay: 0},
        dco: {range: 2, saw: false, pulse: false, sub: false, subAmount: 0, noise: 0.2, pwm: 0, pwmMod: "m", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0, resonance: 1, modPositive: true, envMod: 0.7, lfoMod: 0.4, keyMod: 1},
        env: {attack: 0, decay: 0.6, sustain: 1, release: 0.8},
        chorus: 1
      },
      {
        name: "Space Sound 3",
        vca: 0.5,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0.6, delay: 0},
        dco: {range: 2, saw: false, pulse: false, sub: false, subAmount: 0, noise: 0.2, pwm: 0, pwmMod: "m", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.5, resonance: 1, modPositive: false, envMod: 0.4, lfoMod: 0, keyMod: 1},
        env: {attack: 0, decay: 1, sustain: 0, release: 0.8},
        chorus: 1
      },
      {
        name: "Surf",
        vca: 0.9,
        vcaType: "env",
        lfo: {autoTrigger: true, frequency: 0, delay: 0},
        dco: {range: 1, saw: false, pulse: false, sub: false, subAmount: 1, noise: 1, pwm: 0, pwmMod: "e", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.6, resonance: 0, modPositive: true, envMod: 0, lfoMod: 0.6, keyMod: 1},
        env: {attack: 0, decay: 0.4, sustain: 1, release: 0.8},
        chorus: 0
      },
      {
        name: "Synthesizer Drum",
        vca: 0.6,
        vcaType: "env",
        lfo: {autoTrigger: false, frequency: 0, delay: 0},
        dco: {range: 1, saw: false, pulse: false, sub: false, subAmount: 0, noise: 0, pwm: 0, pwmMod: "e", lfo: 0},
        hpf: 0,
        vcf: {type: "moog", frequency: 0.2, resonance: 1, modPositive: true, envMod: 0.4, lfoMod: 0, keyMod: 1},
        env: {attack: 0, decay: 0.5, sustain: 0, release: 0.6},
        chorus: 0
      }
    ];
    var synth_worklet_default = "data:text/plain; charset=utf-8;base64,Ly8gc3JjL2p1bm94L3Ntb290aE1vdmVzLmpzCmNsYXNzIFNtb290aE1vdmVzIHsKICBjb25zdHJ1Y3Rvcih2YWx1ZSwgc2FtcGxlUmF0ZTIsIGZjID0gNSkgewogICAgdGhpcy5iMSA9IC1NYXRoLmV4cCgtMiAqIGZjICogTWF0aC5QSSAvIHNhbXBsZVJhdGUyKTsKICAgIHRoaXMuYTAgPSAxICsgdGhpcy5iMTsKICAgIHRoaXMudGFyZ2V0VmFsdWUgPSB2YWx1ZTsKICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2U7CiAgICB0aGlzLnoxID0gMDsKICAgIHRoaXMucmVzZXQoKTsKICB9CiAgc2V0VmFsdWUodmFsdWUsIHVzZVNtb290aGluZykgewogICAgdGhpcy50YXJnZXRWYWx1ZSA9IHZhbHVlOwogICAgaWYgKCF0aGlzLmlzU3RhcnRlZCB8fCAhdXNlU21vb3RoaW5nKSB7CiAgICAgIHRoaXMucmVzZXQoKTsKICAgICAgcmV0dXJuOwogICAgfQogIH0KICByZXNldCgpIHsKICAgIHRoaXMuejEgPSB0aGlzLnRhcmdldFZhbHVlICogdGhpcy5hMCAtIHRoaXMudGFyZ2V0VmFsdWU7CiAgICB0aGlzLmlzU3RhcnRlZCA9IGZhbHNlOwogIH0KICBnZXROZXh0VmFsdWUoKSB7CiAgICB0aGlzLmlzU3RhcnRlZCA9IHRydWU7CiAgICBjb25zdCB4b3V0ID0gdGhpcy50YXJnZXRWYWx1ZSAqIHRoaXMuYTAgLSB0aGlzLnoxOwogICAgdGhpcy56MSA9IHRoaXMuYjEgKiB4b3V0OwogICAgcmV0dXJuIHhvdXQ7CiAgfQp9CgovLyBzcmMvanVub3gvZGNvLmpzCmNsYXNzIEp1bm82MERDTyB7CiAgY29uc3RydWN0b3Ioc2FtcGxlUmF0ZTIpIHsKICAgIHRoaXMuc2FtcGxlUmF0ZSA9IHNhbXBsZVJhdGUyOwogICAgdGhpcy5jdXJyZW50UGhhc2UgPSAwOwogICAgdGhpcy5waGFzZUluY3JlbWVudCA9IDA7CiAgICB0aGlzLnB1bHNlV2lkdGggPSAwLjU7CiAgICB0aGlzLnB1bHNlUG9zaXRpdmUgPSAxOwogICAgdGhpcy5wdWxzZU5lZ2F0aXZlID0gLTE7CiAgICB0aGlzLnB1bHNlSGVpZ2h0ID0gMTsKICAgIHRoaXMuc3ViT3V0cHV0ID0gMTsKICB9CiAgbm90ZU9uKG5vdGVOdW1iZXIpIHsKICAgIGNvbnN0IG5vdGVGcmVxdWVuY3kgPSBNYXRoLnBvdygyLCAobm90ZU51bWJlciAtIDY5KSAvIDEyKSAqIDQ0MjsKICAgIHRoaXMucGhhc2VJbmNyZW1lbnQgPSBub3RlRnJlcXVlbmN5IC8gdGhpcy5zYW1wbGVSYXRlOwogICAgdGhpcy5jdXJyZW50UGhhc2UgPSAxLjE7CiAgfQogIHJlbmRlcihkZXR1bmVGYWN0b3IsIHB1bHNlV2lkdGgsIHNhd0xldmVsLCBwdWxzZUxldmVsLCBzdWJMZXZlbCkgewogICAgY29uc3QgcGhhc2VJbmNyZW1lbnQgPSB0aGlzLnBoYXNlSW5jcmVtZW50ICogZGV0dW5lRmFjdG9yOwogICAgY29uc3Qgb3JpZ1BoYXNlID0gdGhpcy5jdXJyZW50UGhhc2U7CiAgICB0aGlzLmN1cnJlbnRQaGFzZSArPSBwaGFzZUluY3JlbWVudDsKICAgIGlmICh0aGlzLmN1cnJlbnRQaGFzZSA+IDEpIHsKICAgICAgdGhpcy5jdXJyZW50UGhhc2UgLT0gMTsKICAgICAgdGhpcy5wdWxzZVdpZHRoID0gMC41IC0gMC40NSAqIHB1bHNlV2lkdGg7CiAgICAgIHRoaXMucHVsc2VQb3NpdGl2ZSA9IDEgLSBwdWxzZVdpZHRoICogMC45NTsKICAgICAgdGhpcy5wdWxzZU5lZ2F0aXZlID0gLTE7CiAgICAgIHRoaXMucHVsc2VIZWlnaHQgPSAwLjQ1ICogKHRoaXMucHVsc2VQb3NpdGl2ZSAtIHRoaXMucHVsc2VOZWdhdGl2ZSk7CiAgICB9CiAgICBsZXQgbmV3U2F3T3V0cHV0ID0gMDsKICAgIGlmIChzYXdMZXZlbCA+IDApIHsKICAgICAgbmV3U2F3T3V0cHV0ID0gdGhpcy5jdXJyZW50UGhhc2UgKyB0aGlzLmN1cnJlbnRQaGFzZSAtIDE7CiAgICAgIG5ld1Nhd091dHB1dCAtPSB0aGlzLmNhbGNQb2x5QkxFUDIodGhpcy5jdXJyZW50UGhhc2UsIHBoYXNlSW5jcmVtZW50LCAxKTsKICAgIH0KICAgIGxldCBuZXdQdWxzZU91dHB1dCA9IDA7CiAgICBpZiAocHVsc2VMZXZlbCA+IDApIHsKICAgICAgbmV3UHVsc2VPdXRwdXQgPSB0aGlzLmN1cnJlbnRQaGFzZSA+IHRoaXMucHVsc2VXaWR0aCA/IHRoaXMucHVsc2VQb3NpdGl2ZSAqPSAwLjk5OCA6IHRoaXMucHVsc2VOZWdhdGl2ZSAqPSAwLjk5ODsKICAgICAgbmV3UHVsc2VPdXRwdXQgLT0gdGhpcy5jYWxjUG9seUJMRVAyKHRoaXMuY3VycmVudFBoYXNlLCBwaGFzZUluY3JlbWVudCwgdGhpcy5wdWxzZUhlaWdodCk7CiAgICAgIGNvbnN0IHggPSB0aGlzLmN1cnJlbnRQaGFzZSAtIHRoaXMucHVsc2VXaWR0aDsKICAgICAgbmV3UHVsc2VPdXRwdXQgKz0gdGhpcy5jYWxjUG9seUJMRVAyKHggPCAwID8geCArIDEgOiB4LCBwaGFzZUluY3JlbWVudCwgdGhpcy5wdWxzZUhlaWdodCk7CiAgICB9CiAgICBsZXQgbmV3U3ViT3V0cHV0ID0gdGhpcy5zdWJPdXRwdXQgKj0gMC45OTg7CiAgICBsZXQgeSA9IHRoaXMuY3VycmVudFBoYXNlIC0gMC41OwogICAgaWYgKHkgPCBwaGFzZUluY3JlbWVudCAmJiB5ID4gLXBoYXNlSW5jcmVtZW50KSB7CiAgICAgIGlmICh5IDwgMCkgewogICAgICAgIHkgKz0gMTsKICAgICAgfQogICAgICBjb25zdCBvcmlnU3ViT3V0cHV0ID0gbmV3U3ViT3V0cHV0OwogICAgICBpZiAodGhpcy5jdXJyZW50UGhhc2UgPj0gMC41ICYmIG9yaWdQaGFzZSA8IDAuNSkgewogICAgICAgIHRoaXMuc3ViT3V0cHV0ID0gbmV3U3ViT3V0cHV0ID0gbmV3U3ViT3V0cHV0ID4gMCA/IC0xIDogMTsKICAgICAgfQogICAgICBuZXdTdWJPdXRwdXQgLT0gdGhpcy5jYWxjUG9seUJMRVAyKHksIHBoYXNlSW5jcmVtZW50LCBvcmlnU3ViT3V0cHV0KTsKICAgIH0KICAgIHJldHVybiBuZXdTYXdPdXRwdXQgKiBzYXdMZXZlbCArIG5ld1B1bHNlT3V0cHV0ICogcHVsc2VMZXZlbCArIG5ld1N1Yk91dHB1dCAqIHN1YkxldmVsOwogIH0KICBjYWxjUG9seUJMRVAyKHBoYXNlLCBpbmMsIGhlaWdodCkgewogICAgbGV0IHJlc3VsdCA9IDA7CiAgICBpZiAocGhhc2UgPCBpbmMpIHsKICAgICAgY29uc3QgdCA9IHBoYXNlIC8gaW5jOwogICAgICByZXN1bHQgPSBoZWlnaHQgKiAodCArIHQgLSB0ICogdCAtIDEpOwogICAgfSBlbHNlIGlmIChwaGFzZSArIGluYyA+IDEpIHsKICAgICAgY29uc3QgdCA9IChwaGFzZSAtIDEpIC8gaW5jOwogICAgICByZXN1bHQgPSBoZWlnaHQgKiAodCAqIHQgKyAodCArIHQpICsgMSk7CiAgICB9CiAgICByZXR1cm4gcmVzdWx0OwogIH0KfQoKLy8gc3JjL2p1bm94L2Fic3RyYWN0RW52ZWxvcGUuanMKY2xhc3MgQWJzdHJhY3RFbnZlbG9wZSB7CiAgY29uc3RydWN0b3Ioc2VnbWVudHMpIHsKICAgIHRoaXMuX3NlZ21lbnRzID0gc2VnbWVudHM7CiAgICB0aGlzLl9jdXJyZW50UGhhc2UgPSAtMTsKICAgIHRoaXMuX2N1cnJlbnRWYWx1ZSA9IDA7CiAgfQogIGlzRmluaXNoZWQoKSB7CiAgICByZXR1cm4gdGhpcy5fY3VycmVudFBoYXNlID09PSAtMTsKICB9CiAgaXNSZWxlYXNlZCgpIHsKICAgIHJldHVybiB0aGlzLmN1cnJlbnRQaGFzZSAhPT0gMCAmJiB0aGlzLmN1cnJlbnRQaGFzZSAhPT0gMTsKICB9CiAgaXNTaHV0dGluZ0Rvd24oKSB7CiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGhhc2UgPT09IHRoaXMuX3NlZ21lbnRzLmxlbmd0aCAtIDE7CiAgfQogIHRyaWdnZXIoKSB7CiAgICB0aGlzLl9jdXJyZW50UGhhc2UgPSAwOwogICAgZm9yIChsZXQgc2VnbWVudCBvZiB0aGlzLl9zZWdtZW50cykgewogICAgICBzZWdtZW50LnJlc2V0KCk7CiAgICB9CiAgfQogIHJlbGVhc2UoKSB7CiAgICBpZiAodGhpcy5fY3VycmVudFBoYXNlICE9PSAtMSkgewogICAgICB0aGlzLl9jdXJyZW50UGhhc2UgPSB0aGlzLl9zZWdtZW50cy5sZW5ndGggLSAyOwogICAgfQogIH0KICBzaHV0ZG93bigpIHsKICAgIGlmICh0aGlzLl9jdXJyZW50UGhhc2UgIT09IC0xKSB7CiAgICAgIHRoaXMuX2N1cnJlbnRQaGFzZSA9IHRoaXMuX3NlZ21lbnRzLmxlbmd0aCAtIDE7CiAgICB9CiAgfQogIHJlc2V0KCkgewogICAgdGhpcy5fY3VycmVudFBoYXNlID0gLTE7CiAgICB0aGlzLl9jdXJyZW50VmFsdWUgPSAwOwogICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9zZWdtZW50cy5sZW5ndGg7IGkrKykgewogICAgICB0aGlzLl9zZWdtZW50c1tpXS5yZXNldCgpOwogICAgfQogIH0KICByZW5kZXIoKSB7CiAgICB3aGlsZSAodGhpcy5fY3VycmVudFBoYXNlICE9PSAtMSAmJiB0aGlzLl9jdXJyZW50UGhhc2UgPCB0aGlzLl9zZWdtZW50cy5sZW5ndGgpIHsKICAgICAgY29uc3Qgc2VnbWVudCA9IHRoaXMuX3NlZ21lbnRzW3RoaXMuX2N1cnJlbnRQaGFzZV07CiAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IHNlZ21lbnQucHJvY2Vzcyh0aGlzLl9jdXJyZW50VmFsdWUpOwogICAgICBpZiAoc2VnbWVudC5pc0NvbXBsZXRlKG5leHRWYWx1ZSkpIHsKICAgICAgICB0aGlzLl9jdXJyZW50UGhhc2UrKzsKICAgICAgICBpZiAodGhpcy5fY3VycmVudFBoYXNlID49IHRoaXMuX3NlZ21lbnRzLmxlbmd0aCkgewogICAgICAgICAgdGhpcy5fY3VycmVudFZhbHVlID0gMDsKICAgICAgICAgIHRoaXMuX2N1cnJlbnRQaGFzZSA9IC0xOwogICAgICAgIH0KICAgICAgfSBlbHNlIHsKICAgICAgICB0aGlzLl9jdXJyZW50VmFsdWUgPSBuZXh0VmFsdWU7CiAgICAgICAgYnJlYWs7CiAgICAgIH0KICAgIH0KICAgIHJldHVybiB0aGlzLl9jdXJyZW50VmFsdWU7CiAgfQp9CmNsYXNzIEF0dGFja1NlZ21lbnQgewogIGNvbnN0cnVjdG9yKHNhbXBsZVJhdGUyLCBhdHRhY2tUQ08sIHRhcmdldCwgaXNTdXN0YWluQXRFbmQpIHsKICAgIHRoaXMuX3NhbXBsZVJhdGUgPSBzYW1wbGVSYXRlMjsKICAgIHRoaXMuX2F0dGFja1RDTyA9IGF0dGFja1RDTzsKICAgIHRoaXMuX2F0dGFja0NvZWZmID0gMDsKICAgIHRoaXMuX2F0dGFja09mZnNldCA9IDA7CiAgICB0aGlzLl9pc1N1c3RhaW5BdEVuZCA9IGlzU3VzdGFpbkF0RW5kOwogICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7CiAgfQogIHNldER1cmF0aW9uKGR1cmF0aW9uKSB7CiAgICBjb25zdCBzYW1wbGVzID0gdGhpcy5fc2FtcGxlUmF0ZSAqIGR1cmF0aW9uOwogICAgdGhpcy5fYXR0YWNrQ29lZmYgPSBNYXRoLmV4cCgtTWF0aC5sb2coKDEgKyB0aGlzLl9hdHRhY2tUQ08pIC8gdGhpcy5fYXR0YWNrVENPKSAvIHNhbXBsZXMpOwogICAgdGhpcy5fYXR0YWNrT2Zmc2V0ID0gKDEgKyB0aGlzLl9hdHRhY2tUQ08pICogKDEgLSB0aGlzLl9hdHRhY2tDb2VmZik7CiAgfQogIHJlc2V0KCkgewogIH0KICBwcm9jZXNzKHByZXZpb3VzVmFsdWUpIHsKICAgIGNvbnN0IHJlc3VsdCA9IHByZXZpb3VzVmFsdWUgKiB0aGlzLl9hdHRhY2tDb2VmZiArIHRoaXMuX2F0dGFja09mZnNldDsKICAgIHJldHVybiByZXN1bHQgPiB0aGlzLnRhcmdldCAmJiB0aGlzLl9pc1N1c3RhaW5BdEVuZCA/IHRoaXMudGFyZ2V0IDogcmVzdWx0OwogIH0KICBpc0NvbXBsZXRlKHZhbHVlKSB7CiAgICByZXR1cm4gdmFsdWUgPiB0aGlzLnRhcmdldDsKICB9Cn0KY2xhc3MgRGVjYXlTZWdtZW50IHsKICBjb25zdHJ1Y3RvcihzYW1wbGVSYXRlMiwgZGVjYXlUQ08sIHRhcmdldCwgaXNTdXN0YWluQXRFbmQpIHsKICAgIHRoaXMuX3NhbXBsZVJhdGUgPSBzYW1wbGVSYXRlMjsKICAgIHRoaXMuX2RlY2F5VENPID0gZGVjYXlUQ087CiAgICB0aGlzLl9kZWNheUNvZWZmID0gMDsKICAgIHRoaXMuX2RlY2F5T2Zmc2V0ID0gMDsKICAgIHRoaXMuX2lzU3VzdGFpbkF0RW5kID0gaXNTdXN0YWluQXRFbmQ7CiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDsKICB9CiAgc2V0RHVyYXRpb24oc2Vjb25kcykgewogICAgY29uc3Qgc2FtcGxlcyA9IHRoaXMuX3NhbXBsZVJhdGUgKiBzZWNvbmRzOwogICAgdGhpcy5fZGVjYXlDb2VmZiA9IE1hdGguZXhwKC1NYXRoLmxvZygoMSArIHRoaXMuX2RlY2F5VENPKSAvIHRoaXMuX2RlY2F5VENPKSAvIHNhbXBsZXMpOwogICAgdGhpcy5fZGVjYXlPZmZzZXQgPSAodGhpcy50YXJnZXQgLSB0aGlzLl9kZWNheVRDTykgKiAoMSAtIHRoaXMuX2RlY2F5Q29lZmYpOwogIH0KICByZXNldCgpIHsKICB9CiAgcHJvY2VzcyhwcmV2aW91c1ZhbHVlKSB7CiAgICBjb25zdCByZXN1bHQgPSBwcmV2aW91c1ZhbHVlICogdGhpcy5fZGVjYXlDb2VmZiArIHRoaXMuX2RlY2F5T2Zmc2V0OwogICAgcmV0dXJuIHJlc3VsdCA8IHRoaXMudGFyZ2V0ICYmIHRoaXMuX2lzU3VzdGFpbkF0RW5kID8gdGhpcy50YXJnZXQgOiByZXN1bHQ7CiAgfQogIGlzQ29tcGxldGUodmFsdWUpIHsKICAgIHJldHVybiB2YWx1ZSA8PSB0aGlzLnRhcmdldCAmJiAhdGhpcy5faXNTdXN0YWluQXRFbmQgfHwgdmFsdWUgPCAwLjAyOwogIH0KfQpjbGFzcyBEZWxheVNlZ21lbnQgewogIGNvbnN0cnVjdG9yKHNhbXBsZVJhdGUyKSB7CiAgICB0aGlzLl9zYW1wbGVSYXRlID0gc2FtcGxlUmF0ZTI7CiAgICB0aGlzLl9kZWxheVNhbXBsZUNvdW50ID0gMDsKICAgIHRoaXMuX2N1cnJlbnRSZW1haW5pbmcgPSAwOwogIH0KICBzZXREdXJhdGlvbihkdXJhdGlvbikgewogICAgY29uc3QgZGVsYXlTYW1wbGVDb3VudCA9IHRoaXMuX3NhbXBsZVJhdGUgKiBkdXJhdGlvbiB8IDA7CiAgICB0aGlzLl9jdXJyZW50UmVtYWluaW5nICs9IGRlbGF5U2FtcGxlQ291bnQgLSB0aGlzLl9kZWxheVNhbXBsZUNvdW50OwogICAgdGhpcy5fZGVsYXlTYW1wbGVDb3VudCA9IGRlbGF5U2FtcGxlQ291bnQ7CiAgfQogIHJlc2V0KCkgewogICAgdGhpcy5fY3VycmVudFJlbWFpbmluZyA9IHRoaXMuX2RlbGF5U2FtcGxlQ291bnQ7CiAgfQogIHByb2Nlc3MocHJldmlvdXNWYWx1ZSkgewogICAgdGhpcy5fY3VycmVudFJlbWFpbmluZy0tOwogICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7CiAgfQogIGlzQ29tcGxldGUoKSB7CiAgICByZXR1cm4gdGhpcy5fY3VycmVudFJlbWFpbmluZyA8PSAwOwogIH0KfQpjbGFzcyBTaHV0ZG93blNlZ21lbnQgewogIGNvbnN0cnVjdG9yKHNhbXBsZVJhdGUyLCBzZWNvbmRzKSB7CiAgICB0aGlzLl9zaHV0ZG93blJhdGUgPSAxIC8gKHNlY29uZHMgKiBzYW1wbGVSYXRlMik7CiAgfQogIHJlc2V0KCkgewogIH0KICBwcm9jZXNzKHByZXZpb3VzVmFsdWUpIHsKICAgIGNvbnN0IHJlc3VsdCA9IHByZXZpb3VzVmFsdWUgLSB0aGlzLl9zaHV0ZG93blJhdGU7CiAgICByZXR1cm4gdGhpcy52YWx1ZSA8IDAgPyAwIDogcmVzdWx0OwogIH0KICBpc0NvbXBsZXRlKHZhbHVlKSB7CiAgICByZXR1cm4gdmFsdWUgPD0gMDsKICB9Cn0KCi8vIHNyYy9qdW5veC91dGlscy5qcwpmdW5jdGlvbiBmYXN0VGFuaCh4KSB7CiAgaWYgKHggPCAtMykgewogICAgcmV0dXJuIC0xOwogIH0gZWxzZSBpZiAoeCA+IDMpIHsKICAgIHJldHVybiAxOwogIH0KICBjb25zdCB4U3F1YXJlZCA9IHggKiB4OwogIHJldHVybiB4ICogKDI3ICsgeFNxdWFyZWQpIC8gKDI3ICsgOSAqIHhTcXVhcmVkKTsKfQpmdW5jdGlvbiBpbnRlcnBvbGF0ZWRMb29rdXAodmFsdWUsIHRhYmxlKSB7CiAgaWYgKHZhbHVlIDw9IDApIHsKICAgIHJldHVybiB0YWJsZVswXTsKICB9CiAgaWYgKHZhbHVlID49IDEpIHsKICAgIHJldHVybiB0YWJsZVt0YWJsZS5sZW5ndGggLSAxXTsKICB9CiAgdmFsdWUgKj0gdGFibGUubGVuZ3RoIC0gMTsKICBjb25zdCBpbmRleCA9IHZhbHVlIHwgMDsKICBjb25zdCBmYWN0b3IgPSB2YWx1ZSAtIGluZGV4OwogIGlmIChmYWN0b3IgPT09IDApIHsKICAgIHJldHVybiB0YWJsZVtpbmRleF07CiAgfQogIHJldHVybiB0YWJsZVtpbmRleF0gKiAoMSAtIGZhY3RvcikgKyB0YWJsZVtpbmRleCArIDFdICogZmFjdG9yOwp9CgovLyBzcmMvanVub3gvanVubzYwRW52ZWxvcGUuanMKY29uc3QgY3VydmVGcm9tQXR0YWNrU2xpZGVyVG9EdXJhdGlvbiA9IFsxZS0zLCAwLjAzLCAwLjI0LCAwLjY1LCAzLjI1XTsKY29uc3QgY3VydmVGcm9tRGVjYXlTbGlkZXJUb0R1cmF0aW9uID0gWzJlLTMsIDAuMDk2LCAwLjk4NCwgNC40NDksIDE5Ljc4M107CmNvbnN0IGN1cnZlRnJvbVJlbGVhc2VTbGlkZXJUb0R1cmF0aW9uID0gWzJlLTMsIDAuMDk2LCAwLjk4NCwgNC40NDksIDE5Ljc4M107CmNsYXNzIEp1bm82MEVudmVsb3BlIGV4dGVuZHMgQWJzdHJhY3RFbnZlbG9wZSB7CiAgY29uc3RydWN0b3Ioc2FtcGxlUmF0ZTIpIHsKICAgIHN1cGVyKFsKICAgICAgbmV3IEF0dGFja1NlZ21lbnQoc2FtcGxlUmF0ZTIsIDAuNjMyLCAxLCBmYWxzZSksCiAgICAgIG5ldyBEZWNheVNlZ21lbnQoc2FtcGxlUmF0ZTIsIDAuMDI1LCAwLCB0cnVlKSwKICAgICAgbmV3IERlY2F5U2VnbWVudChzYW1wbGVSYXRlMiwgMC4wMjUsIDAsIGZhbHNlKSwKICAgICAgbmV3IFNodXRkb3duU2VnbWVudChzYW1wbGVSYXRlMiwgMWUtMykKICAgIF0pOwogICAgdGhpcy5fYXR0YWNrID0gdGhpcy5fc2VnbWVudHNbMF07CiAgICB0aGlzLl9kZWNheSA9IHRoaXMuX3NlZ21lbnRzWzFdOwogICAgdGhpcy5fcmVsZWFzZSA9IHRoaXMuX3NlZ21lbnRzWzJdOwogICAgdGhpcy5fc2h1dGRvd24gPSB0aGlzLl9zZWdtZW50c1szXTsKICB9CiAgc2V0VmFsdWVzKGF0dGFja0R1cmF0aW9uLCBkZWNheUR1cmF0aW9uLCBzdXN0YWluTGV2ZWwsIHJlbGVhc2VEdXJhdGlvbikgewogICAgdGhpcy5fYXR0YWNrLnNldER1cmF0aW9uKGF0dGFja0R1cmF0aW9uKTsKICAgIHRoaXMuX2RlY2F5LnRhcmdldCA9IE1hdGgubWF4KDAuMDIsIHN1c3RhaW5MZXZlbCk7CiAgICB0aGlzLl9kZWNheS5zZXREdXJhdGlvbihkZWNheUR1cmF0aW9uKTsKICAgIHRoaXMuX3JlbGVhc2Uuc2V0RHVyYXRpb24odGhpcy5fZGVjYXkudGFyZ2V0IDw9IDAuMDIgPyAwLjAxIDogcmVsZWFzZUR1cmF0aW9uKTsKICB9CiAgc2V0VmFsdWVzRnJvbVNsaWRlcnMoYXR0YWNrU2xpZGVyLCBkZWNheVNsaWRlciwgc3VzdGFpblNsaWRlciwgcmVsZWFzZVNsaWRlcikgewogICAgY29uc3QgYXR0YWNrRHVyYXRpb24gPSBpbnRlcnBvbGF0ZWRMb29rdXAoYXR0YWNrU2xpZGVyLCBjdXJ2ZUZyb21BdHRhY2tTbGlkZXJUb0R1cmF0aW9uKTsKICAgIGNvbnN0IGRlY2F5RHVyYXRpb24gPSBpbnRlcnBvbGF0ZWRMb29rdXAoZGVjYXlTbGlkZXIsIGN1cnZlRnJvbURlY2F5U2xpZGVyVG9EdXJhdGlvbik7CiAgICBjb25zdCByZWxlYXNlRHVyYXRpb24gPSBpbnRlcnBvbGF0ZWRMb29rdXAocmVsZWFzZVNsaWRlciwgY3VydmVGcm9tUmVsZWFzZVNsaWRlclRvRHVyYXRpb24pOwogICAgdGhpcy5zZXRWYWx1ZXMoYXR0YWNrRHVyYXRpb24sIGRlY2F5RHVyYXRpb24sIHN1c3RhaW5TbGlkZXIsIHJlbGVhc2VEdXJhdGlvbik7CiAgfQp9CgovLyBzcmMvanVub3gvbGFkZGVyRmlsdGVyLmpzCmNsYXNzIExhZGRlckZpbHRlciB7CiAgY29uc3RydWN0b3Ioc2FtcGxlUmF0ZTIpIHsKICAgIHRoaXMucmVzZXQoKTsKICAgIHRoaXMubnlxdWlzdExpbWl0ID0gc2FtcGxlUmF0ZTIgKiAwLjU7CiAgICB0aGlzLnBpT3ZlclNhbXBsZVJhdGUgPSBNYXRoLlBJIC8gc2FtcGxlUmF0ZTI7CiAgfQogIHJlc2V0KCkgewogICAgdGhpcy56MSA9IDA7CiAgICB0aGlzLnoyID0gMDsKICAgIHRoaXMuejMgPSAwOwogICAgdGhpcy56NCA9IDA7CiAgfQogIGNhbGNDdXRvZmZGYWN0b3IoZmMpIHsKICAgIGlmIChmYyA+IHRoaXMubnlxdWlzdExpbWl0KSB7CiAgICAgIGZjID0gdGhpcy5ueXF1aXN0TGltaXQ7CiAgICB9CiAgICByZXR1cm4gTWF0aC50YW4oZmMgKiB0aGlzLnBpT3ZlclNhbXBsZVJhdGUpOwogIH0KICB0cmlnZ2VyKGluaXRpYWxFeGNpdGUpIHsKICAgIHRoaXMuejQgKz0gaW5pdGlhbEV4Y2l0ZTsKICB9CiAgcHJvY2VzcyhpbnB1dCwgY3V0b2ZmRmFjdG9yLCByZXNvbmFuY2UsIG1vZGUgPSBsYWRkZXJGaWx0ZXJNb2Rlcy5MUEY0KSB7CiAgICBjb25zdCBvbmVPdmVyT25lUGx1c2cgPSAxIC8gKDEgKyBjdXRvZmZGYWN0b3IpOwogICAgY29uc3QgYWxwaGEgPSBjdXRvZmZGYWN0b3IgKiBvbmVPdmVyT25lUGx1c2c7CiAgICBjb25zdCBiZXRhNCA9IG9uZU92ZXJPbmVQbHVzZzsKICAgIGNvbnN0IGJldGEzID0gYmV0YTQgKiBhbHBoYTsKICAgIGNvbnN0IGJldGEyID0gYmV0YTMgKiBhbHBoYTsKICAgIGNvbnN0IGJldGExID0gYmV0YTIgKiBhbHBoYTsKICAgIGNvbnN0IGZlZWRiYWNrID0gYmV0YTEgKiB0aGlzLnoxICsgYmV0YTIgKiB0aGlzLnoyICsgYmV0YTMgKiB0aGlzLnozICsgYmV0YTQgKiB0aGlzLno0OwogICAgY29uc3QgayA9IDQgKiByZXNvbmFuY2U7CiAgICBjb25zdCB4aW4gPSAoaW5wdXQgLSBrICogZmVlZGJhY2spIC8gKDEgKyBrICogYWxwaGEgKiBhbHBoYSAqIGFscGhhICogYWxwaGEpOwogICAgY29uc3QgbHBmMUluID0gKHhpbiAtIHRoaXMuejEpICogYWxwaGE7CiAgICBjb25zdCBscGYxT3V0ID0gbHBmMUluICsgdGhpcy56MTsKICAgIHRoaXMuejEgPSBscGYxSW4gKyBscGYxT3V0OwogICAgY29uc3QgbHBmMkluID0gKGxwZjFPdXQgLSB0aGlzLnoyKSAqIGFscGhhOwogICAgY29uc3QgbHBmMk91dCA9IGxwZjJJbiArIHRoaXMuejI7CiAgICB0aGlzLnoyID0gbHBmMkluICsgbHBmMk91dDsKICAgIGNvbnN0IGxwZjNJbiA9IChscGYyT3V0IC0gdGhpcy56MykgKiBhbHBoYTsKICAgIGNvbnN0IGxwZjNPdXQgPSBscGYzSW4gKyB0aGlzLnozOwogICAgdGhpcy56MyA9IGxwZjNJbiArIGxwZjNPdXQ7CiAgICBjb25zdCBscGY0SW4gPSAobHBmM091dCAtIHRoaXMuejQpICogYWxwaGE7CiAgICBjb25zdCBscGY0T3V0ID0gbHBmNEluICsgdGhpcy56NDsKICAgIHRoaXMuejQgPSBscGY0SW4gKyBscGY0T3V0OwogICAgcmV0dXJuIG1vZGVbNF0gKiBscGY0T3V0ICsgbW9kZVszXSAqIGxwZjNPdXQgKyBtb2RlWzJdICogbHBmMk91dCArIG1vZGVbMV0gKiBscGYxT3V0ICsgbW9kZVswXSAqIHhpbjsKICB9Cn0KY29uc3QgbGFkZGVyRmlsdGVyTW9kZXMgPSB7CiAgTFBGMjogRmxvYXQ2NEFycmF5LmZyb20oWzAsIDAsIDEsIDAsIDBdKSwKICBMUEY0OiBGbG9hdDY0QXJyYXkuZnJvbShbMCwgMCwgMCwgMCwgMV0pLAogIEJQRjI6IEZsb2F0NjRBcnJheS5mcm9tKFswLCAyLCAtMiwgMCwgMF0pLAogIEJQRjI6IEZsb2F0NjRBcnJheS5mcm9tKFswLCAwLCA0LCAtOCwgNF0pLAogIEhQRjI6IEZsb2F0NjRBcnJheS5mcm9tKFsxLCAtMiwgMSwgMCwgMF0pLAogIEhQRjQ6IEZsb2F0NjRBcnJheS5mcm9tKFsxLCAtNCwgNiwgLTQsIDFdKQp9OwpsYWRkZXJGaWx0ZXJNb2Rlcy5hbGwgPSBbCiAgbGFkZGVyRmlsdGVyTW9kZXMuTFBGMiwKICBsYWRkZXJGaWx0ZXJNb2Rlcy5MUEY0LAogIGxhZGRlckZpbHRlck1vZGVzLkJQRjIsCiAgbGFkZGVyRmlsdGVyTW9kZXMuQlBGNCwKICBsYWRkZXJGaWx0ZXJNb2Rlcy5IUEYyLAogIGxhZGRlckZpbHRlck1vZGVzLkhQRjQKXTsKCi8vIHNyYy9qdW5veC9ub2lzZS5qcwpjbGFzcyBOb2lzZSB7CiAgY29uc3RydWN0b3Ioc2FtcGxlUmF0ZTIsIGZjID0gNWUzKSB7CiAgICB0aGlzLl9iMSA9IC1NYXRoLmV4cCgtMiAqIGZjICogTWF0aC5QSSAvIHNhbXBsZVJhdGUyKTsKICAgIHRoaXMuX2EwID0gMSArIHRoaXMuX2IxOwogICAgdGhpcy5fejEgPSAwOwogIH0KICByZW5kZXIoKSB7CiAgICBjb25zdCB4aW4gPSBNYXRoLnJhbmRvbSgpICogMiAtIDE7CiAgICBjb25zdCB4b3V0ID0geGluICogdGhpcy5fYTAgLSB0aGlzLl96MTsKICAgIHRoaXMuX3oxID0gdGhpcy5fYjEgKiB4b3V0OwogICAgcmV0dXJuIHhvdXQ7CiAgfQp9CgovLyBzcmMvanVub3gvdm9pY2UuanMKY2xhc3MgVm9pY2UgewogIGNvbnN0cnVjdG9yKHtwYXRjaCwgc2FtcGxlUmF0ZTogc2FtcGxlUmF0ZTJ9KSB7CiAgICB0aGlzLnBhdGNoID0gcGF0Y2g7CiAgICB0aGlzLnNhbXBsZVJhdGUgPSBzYW1wbGVSYXRlMjsKICAgIHRoaXMubm90ZSA9IC0xOwogICAgdGhpcy52ZWxvY2l0eSA9IDA7CiAgICB0aGlzLmZpbHRlck5vdGVGYWN0b3IgPSAwOwogICAgdGhpcy5kY28gPSBuZXcgSnVubzYwRENPKHNhbXBsZVJhdGUyKTsKICAgIHRoaXMubm9pc2UgPSBuZXcgTm9pc2Uoc2FtcGxlUmF0ZTIsIDVlMyk7CiAgICB0aGlzLm1vZEVudiA9IG5ldyBKdW5vNjBFbnZlbG9wZShzYW1wbGVSYXRlMik7CiAgICB0aGlzLmFtcEVudiA9IG5ldyBKdW5vNjBFbnZlbG9wZShzYW1wbGVSYXRlMik7CiAgICB0aGlzLm1vb2dWQ0YgPSBuZXcgTGFkZGVyRmlsdGVyKHNhbXBsZVJhdGUyKTsKICB9CiAgcmVuZGVyKGxmb091dCwgZGV0dW5lRmFjdG9yLCBwd21EZXB0aCwgc2F3TGV2ZWwsIHB1bHNlTGV2ZWwsIHN1YkxldmVsLCBub2lzZUxldmVsLCBmaWx0ZXJDdXRvZmYsIGZpbHRlclJlc29uYW5jZSwgZmlsdGVyRW52TW9kLCBsZm9EZXR1bmVPY3RhdmVzLCBmaWx0ZXJLZXlNb2QpIHsKICAgIGNvbnN0IG1vZEVudk91dCA9IHRoaXMubW9kRW52LnJlbmRlcigpOwogICAgY29uc3QgYW1wRW52T3V0ID0gdGhpcy5hbXBFbnYucmVuZGVyKCk7CiAgICBsZXQgcHVsc2VXaWR0aCA9IHB3bURlcHRoOwogICAgaWYgKHRoaXMucGF0Y2guZGNvLnB3bU1vZCA9PT0gImwiKSB7CiAgICAgIHB1bHNlV2lkdGggKj0gbGZvT3V0ICogMC41ICsgMC41OwogICAgfSBlbHNlIGlmICh0aGlzLnBhdGNoLmRjby5wd21Nb2QgPT09ICJlIikgewogICAgICBwdWxzZVdpZHRoICo9IG1vZEVudk91dDsKICAgIH0KICAgIGxldCBkY29PdXQgPSB0aGlzLmRjby5yZW5kZXIoZGV0dW5lRmFjdG9yLCBwdWxzZVdpZHRoLCBzYXdMZXZlbCwgcHVsc2VMZXZlbCwgc3ViTGV2ZWwpOwogICAgaWYgKG5vaXNlTGV2ZWwgPiAwKSB7CiAgICAgIGRjb091dCArPSB0aGlzLm5vaXNlLnJlbmRlcigpICogbm9pc2VMZXZlbDsKICAgIH0KICAgIGNvbnN0IGN1dG9mZkRldHVuZU9jdGF2ZSA9IGZpbHRlckN1dG9mZiAqIDIwMCAvIDEyOwogICAgY29uc3QgZW52RGV0dW5lT2N0YXZlcyA9IG1vZEVudk91dCAqIGZpbHRlckVudk1vZCAqIDEyOwogICAgY29uc3Qga2V5Ym9hcmREZXR1bmVPY3RhdmVzID0gZmlsdGVyS2V5TW9kICogdGhpcy5maWx0ZXJOb3RlRmFjdG9yOwogICAgY29uc3QgcmVzb25hbmNlRGV0dW5lT2N0YXZlcyA9IHRoaXMucGF0Y2gudmNmLnJlc29uYW5jZSAqIDAuNTsKICAgIGNvbnN0IHZjZkN1dG9mZlZhbHVlID0gY3V0b2ZmRGV0dW5lT2N0YXZlICsgbGZvRGV0dW5lT2N0YXZlcyAqIGFtcEVudk91dCArIGtleWJvYXJkRGV0dW5lT2N0YXZlcyArIGVudkRldHVuZU9jdGF2ZXMgKyByZXNvbmFuY2VEZXR1bmVPY3RhdmVzOwogICAgY29uc3QgY3V0b2ZmRnJlcXVlbmN5ID0gNy44ICogTWF0aC5wb3coMiwgdmNmQ3V0b2ZmVmFsdWUpOwogICAgY29uc3QgdmNmT3V0ID0gdGhpcy5tb29nVkNGLnByb2Nlc3MoZGNvT3V0LCB0aGlzLm1vb2dWQ0YuY2FsY0N1dG9mZkZhY3RvcihjdXRvZmZGcmVxdWVuY3kpLCBmaWx0ZXJSZXNvbmFuY2UpOwogICAgcmV0dXJuIHRoaXMudmVsb2NpdHkgKiB2Y2ZPdXQgKiBhbXBFbnZPdXQ7CiAgfQogIG5vdGVPbihub3RlLCB2ZWxvY2l0eSkgewogICAgaWYgKG5vdGUgIT09IHRoaXMubm90ZSB8fCB0aGlzLmlzRmluaXNoZWQoKSkgewogICAgICB0aGlzLm5vdGUgPSBub3RlOwogICAgICB0aGlzLmRjby5ub3RlT24obm90ZSk7CiAgICAgIHRoaXMubW9kRW52LnJlc2V0KCk7CiAgICAgIHRoaXMuYW1wRW52LnJlc2V0KCk7CiAgICAgIHRoaXMubW9vZ1ZDRi5yZXNldCgpOwogICAgICBjb25zdCBjNCA9IDYwOwogICAgICBjb25zdCBmaXZlT2N0YXZlcyA9IDUgKiAxMjsKICAgICAgdGhpcy5maWx0ZXJOb3RlRmFjdG9yID0gNSAqICgodGhpcy5ub3RlIC0gYzQpIC8gZml2ZU9jdGF2ZXMpOwogICAgfQogICAgaWYgKCF0aGlzLnBhdGNoLmRjby5zYXcgJiYgIXRoaXMucGF0Y2guZGNvLnB1bHNlICYmICF0aGlzLnBhdGNoLmRjby5zdWJBbW91bnQgJiYgIXRoaXMucGF0Y2guZGNvLm5vaXNlKSB7CiAgICAgIGNvbnN0IGluaXRpYWxFeGNpdGUgPSB0aGlzLnBhdGNoLnZjZi5yZXNvbmFuY2UgKiB0aGlzLnBhdGNoLnZjZi5yZXNvbmFuY2UgKiAwLjAxOwogICAgICB0aGlzLm1vb2dWQ0YudHJpZ2dlcihpbml0aWFsRXhjaXRlKTsKICAgIH0KICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTsKICAgIHRoaXMudXBkYXRlUGF0Y2godGhpcy5wYXRjaCk7CiAgICB0aGlzLm1vZEVudi50cmlnZ2VyKCk7CiAgICB0aGlzLmFtcEVudi50cmlnZ2VyKCk7CiAgfQogIG5vdGVPZmYoKSB7CiAgICB0aGlzLm1vZEVudi5yZWxlYXNlKCk7CiAgICB0aGlzLmFtcEVudi5yZWxlYXNlKCk7CiAgfQogIGlzRmluaXNoZWQoKSB7CiAgICByZXR1cm4gdGhpcy5hbXBFbnYuaXNGaW5pc2hlZCgpOwogIH0KICB1cGRhdGVQYXRjaChwYXRjaCkgewogICAgY29uc3QgZW52ID0gcGF0Y2guZW52OwogICAgdGhpcy5tb2RFbnYuc2V0VmFsdWVzRnJvbVNsaWRlcnMoZW52LmF0dGFjaywgZW52LmRlY2F5LCBlbnYuc3VzdGFpbiwgZW52LnJlbGVhc2UpOwogICAgaWYgKHBhdGNoLnZjYVR5cGUgPT09ICJlbnYiKSB7CiAgICAgIHRoaXMuYW1wRW52LnNldFZhbHVlc0Zyb21TbGlkZXJzKGVudi5hdHRhY2ssIGVudi5kZWNheSwgZW52LnN1c3RhaW4sIGVudi5yZWxlYXNlKTsKICAgIH0gZWxzZSB7CiAgICAgIHRoaXMuYW1wRW52LnNldFZhbHVlcygyNDdlLTUsIDU3ZS00LCAwLjk4LCA1N2UtNCk7CiAgICB9CiAgICB0aGlzLnBhdGNoID0gcGF0Y2g7CiAgfQp9CgovLyBzcmMvanVub3gvcmluZ0J1ZmZlci5qcwpjbGFzcyBSaW5nQnVmZmVyIHsKICBjb25zdHJ1Y3RvcihtYXhCdWZmZXJTaXplKSB7CiAgICB0aGlzLmJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkobWF4QnVmZmVyU2l6ZSk7CiAgICB0aGlzLndyaXRlSW5kZXggPSAwOwogICAgdGhpcy5tYXhCdWZmZXJTaXplID0gbWF4QnVmZmVyU2l6ZTsKICB9CiAgcmluZ0J1ZmZlckluZGV4KGluZGV4KSB7CiAgICBpZiAoaW5kZXggPCAwKSB7CiAgICAgIHJldHVybiBpbmRleCArIHRoaXMubWF4QnVmZmVyU2l6ZTsKICAgIH0KICAgIGlmIChpbmRleCA+PSB0aGlzLm1heEJ1ZmZlclNpemUpIHsKICAgICAgcmV0dXJuIGluZGV4IC0gdGhpcy5tYXhCdWZmZXJTaXplOwogICAgfQogICAgcmV0dXJuIGluZGV4OwogIH0KICByZWFkU2FtcGxlKHJlYWRPZmZzZXQpIHsKICAgIGNvbnN0IHJlYWRJbmRleCA9IHRoaXMucmluZ0J1ZmZlckluZGV4KHRoaXMud3JpdGVJbmRleCAtIHJlYWRPZmZzZXQpOwogICAgY29uc3QgaW5kZXhBID0gTWF0aC5mbG9vcihyZWFkSW5kZXgpOwogICAgY29uc3QgZnJhY3Rpb25hbCA9IHJlYWRJbmRleCAtIGluZGV4QTsKICAgIGNvbnN0IGluZGV4QiA9IHRoaXMucmluZ0J1ZmZlckluZGV4KGluZGV4QSArIDEpOwogICAgcmV0dXJuIHRoaXMuYnVmZmVyW2luZGV4QV0gKiAoMSAtIGZyYWN0aW9uYWwpICsgdGhpcy5idWZmZXJbaW5kZXhCXSAqIGZyYWN0aW9uYWw7CiAgfQogIHdyaXRlU2FtcGxlKGlucHV0KSB7CiAgICB0aGlzLmJ1ZmZlclt0aGlzLndyaXRlSW5kZXhdID0gaW5wdXQ7CiAgICB0aGlzLndyaXRlSW5kZXggPSAodGhpcy53cml0ZUluZGV4ICsgMSkgJSB0aGlzLm1heEJ1ZmZlclNpemU7CiAgfQogIHJlc2V0KCkgewogICAgdGhpcy5idWZmZXIuZmlsbCgwKTsKICB9Cn0KCi8vIHNyYy9qdW5veC9zaW1wbGVTaW5nbGVQb2xlRmlsdGVyLmpzCmNsYXNzIFNpbXBsZVNpbmdsZVBvbGVGaWx0ZXIgewogIGNvbnN0cnVjdG9yKHNhbXBsZVJhdGUyLCBmYyA9IDUpIHsKICAgIHRoaXMuX3BpT3ZlclNhbXBsZVJhdGUgPSBNYXRoLlBJIC8gc2FtcGxlUmF0ZTI7CiAgICB0aGlzLl9hMCA9IDE7CiAgICB0aGlzLl9iMSA9IDA7CiAgICB0aGlzLl96MSA9IDA7CiAgICB0aGlzLnNldEN1dG9mZihmYyk7CiAgfQogIHJlc2V0KCkgewogICAgdGhpcy5fejEgPSAwOwogIH0KICByZW5kZXJMUCh4aW4pIHsKICAgIGNvbnN0IHhvdXQgPSB4aW4gKiB0aGlzLl9hMCArIHRoaXMuX3oxOwogICAgdGhpcy5fejEgPSAtdGhpcy5fYjEgKiB4b3V0OwogICAgcmV0dXJuIHhvdXQ7CiAgfQogIHJlbmRlckhQKHhpbikgewogICAgcmV0dXJuIHhpbiAtIHRoaXMucmVuZGVyTFAoeGluKTsKICB9CiAgc2V0Q3V0b2ZmKGZjKSB7CiAgICB0aGlzLl9iMSA9IC1NYXRoLmV4cCgtMiAqIGZjICogdGhpcy5fcGlPdmVyU2FtcGxlUmF0ZSk7CiAgICB0aGlzLl9hMCA9IDEgKyB0aGlzLl9iMTsKICB9Cn0KCi8vIHNyYy9qdW5veC9jaG9ydXMuanMKY2xhc3MgQ2hvcnVzIHsKICBjb25zdHJ1Y3RvcihzYW1wbGVSYXRlMikgewogICAgdGhpcy5sZWZ0T3V0cHV0ID0gMDsKICAgIHRoaXMucmlnaHRPdXRwdXQgPSAwOwogICAgdGhpcy5fc2FtcGxlUmF0ZSA9IHNhbXBsZVJhdGUyOwogICAgdGhpcy5faXNVc2VkID0gZmFsc2U7CiAgICB0aGlzLl9uZXh0Q2hvcnVzTW9kZSA9IDA7CiAgICB0aGlzLl9yaW5nQnVmZmVyID0gbmV3IFJpbmdCdWZmZXIoTWF0aC50cnVuYyhzYW1wbGVSYXRlMiAqIDZlLTMpKTsKICAgIHRoaXMuX3ByZUZpbHRlciA9IG5ldyBTaW1wbGVTaW5nbGVQb2xlRmlsdGVyKHNhbXBsZVJhdGUyLCA3MjM3KTsKICAgIHRoaXMuX3Bvc3RMZWZ0RmlsdGVyID0gbmV3IFNpbXBsZVNpbmdsZVBvbGVGaWx0ZXIoc2FtcGxlUmF0ZTIsIDEwNjQ0KTsKICAgIHRoaXMuX3Bvc3RSaWdodEZpbHRlciA9IG5ldyBTaW1wbGVTaW5nbGVQb2xlRmlsdGVyKHNhbXBsZVJhdGUyLCAxMDY0NCk7CiAgICB0aGlzLl9kcnlDdXJyZW50ID0gMTsKICAgIHRoaXMuX2RyeUNoYW5nZSA9IDA7CiAgICB0aGlzLl9kcnlUYXJnZXQgPSAxOwogICAgdGhpcy5fbGZvVmFsdWUgPSAwOwogICAgdGhpcy5fbGZvSW5jcmVtZW50ID0gMC4wMTsKICAgIHRoaXMuX21heExlZnRPZmZzZXQgPSAwOwogICAgdGhpcy5fYXZlcmFnZUxlZnRTYW1wbGVzID0gMDsKICAgIHRoaXMuX21heFJpZ2h0T2Zmc2V0ID0gMDsKICAgIHRoaXMuX2F2ZXJhZ2VSaWdodFNhbXBsZXMgPSAwOwogIH0KICByZW5kZXIoaW5wdXQpIHsKICAgIHRoaXMuX2lzVXNlZCA9IHRydWU7CiAgICBsZXQgZHJ5ID0gdGhpcy5fZHJ5Q3VycmVudDsKICAgIGlmICh0aGlzLl9kcnlDaGFuZ2UgIT09IDApIHsKICAgICAgZHJ5ICs9IHRoaXMuX2RyeUNoYW5nZTsKICAgICAgaWYgKGRyeSA+IDEpIHsKICAgICAgICBkcnkgPSAxOwogICAgICAgIHRoaXMuX2RyeUNoYW5nZSA9IDA7CiAgICAgICAgdGhpcy51cGRhdGUodGhpcy5fbmV4dENob3J1c01vZGUpOwogICAgICB9IGVsc2UgaWYgKGRyeSA8IHRoaXMuX2RyeVRhcmdldCAmJiB0aGlzLl9kcnlDaGFuZ2UgPCAwKSB7CiAgICAgICAgZHJ5ID0gdGhpcy5fZHJ5VGFyZ2V0OwogICAgICAgIHRoaXMuX2RyeUNoYW5nZSA9IDA7CiAgICAgIH0KICAgICAgdGhpcy5fZHJ5Q3VycmVudCA9IGRyeTsKICAgIH0KICAgIGlmIChkcnkgPT09IDEpIHsKICAgICAgdGhpcy5sZWZ0T3V0cHV0ID0gaW5wdXQ7CiAgICAgIHRoaXMucmlnaHRPdXRwdXQgPSBpbnB1dDsKICAgICAgcmV0dXJuOwogICAgfQogICAgbGV0IGxmb1ZhbHVlID0gdGhpcy5fbGZvVmFsdWUgKyB0aGlzLl9sZm9JbmNyZW1lbnQ7CiAgICBpZiAobGZvVmFsdWUgPiAxKSB7CiAgICAgIGxmb1ZhbHVlID0gMiAtIGxmb1ZhbHVlOwogICAgICB0aGlzLl9sZm9JbmNyZW1lbnQgPSAtdGhpcy5fbGZvSW5jcmVtZW50OwogICAgfSBlbHNlIGlmIChsZm9WYWx1ZSA8IC0xKSB7CiAgICAgIGxmb1ZhbHVlID0gLTIgLSBsZm9WYWx1ZTsKICAgICAgdGhpcy5fbGZvSW5jcmVtZW50ID0gLXRoaXMuX2xmb0luY3JlbWVudDsKICAgIH0KICAgIHRoaXMuX2xmb1ZhbHVlID0gbGZvVmFsdWU7CiAgICBjb25zdCBkcnlPdXRwdXQgPSBpbnB1dCAqIGRyeTsKICAgIGNvbnN0IHdldEZhY3RvciA9IDEgLSBkcnk7CiAgICBjb25zdCBsZWZ0RGVsYXlTYW1wbGVzID0gdGhpcy5fYXZlcmFnZUxlZnRTYW1wbGVzICsgbGZvVmFsdWUgKiB0aGlzLl9tYXhMZWZ0T2Zmc2V0OwogICAgY29uc3QgbGVmdERlbGF5ZWRWYWx1ZSA9IHRoaXMuX3JpbmdCdWZmZXIucmVhZFNhbXBsZShsZWZ0RGVsYXlTYW1wbGVzKTsKICAgIHRoaXMubGVmdE91dHB1dCA9IGRyeU91dHB1dCArIHRoaXMuX3Bvc3RMZWZ0RmlsdGVyLnJlbmRlckxQKGxlZnREZWxheWVkVmFsdWUgKiB3ZXRGYWN0b3IpOwogICAgY29uc3QgcmlnaHREZWxheVNhbXBsZXMgPSB0aGlzLl9hdmVyYWdlUmlnaHRTYW1wbGVzICsgbGZvVmFsdWUgKiB0aGlzLl9tYXhSaWdodE9mZnNldDsKICAgIGNvbnN0IHJpZ2h0RGVsYXllZFZhbHVlID0gdGhpcy5fcmluZ0J1ZmZlci5yZWFkU2FtcGxlKHJpZ2h0RGVsYXlTYW1wbGVzKTsKICAgIHRoaXMucmlnaHRPdXRwdXQgPSBkcnlPdXRwdXQgKyB0aGlzLl9wb3N0UmlnaHRGaWx0ZXIucmVuZGVyTFAocmlnaHREZWxheWVkVmFsdWUgKiB3ZXRGYWN0b3IpOwogICAgdGhpcy5fcmluZ0J1ZmZlci53cml0ZVNhbXBsZSh0aGlzLl9wcmVGaWx0ZXIucmVuZGVyTFAodGhpcy5fYXBwbHlTYXR1cmF0aW9uKGlucHV0KSkpOwogIH0KICByZXNldCgpIHsKICAgIHRoaXMuX3JpbmdCdWZmZXIucmVzZXQoKTsKICAgIHRoaXMuX3ByZUZpbHRlci5yZXNldCgpOwogICAgdGhpcy5fcG9zdExlZnRGaWx0ZXIucmVzZXQoKTsKICAgIHRoaXMuX3Bvc3RSaWdodEZpbHRlci5yZXNldCgpOwogICAgdGhpcy5faXNVc2VkID0gZmFsc2U7CiAgfQogIHVwZGF0ZShjaG9ydXNNb2RlKSB7CiAgICBpZiAodGhpcy5fZHJ5Q3VycmVudCA8IDEgJiYgIXRoaXMuX2lzVXNlZCkgewogICAgICB0aGlzLl9kcnlDaGFuZ2UgPSA1ZS00OwogICAgICB0aGlzLl9kcnlUYXJnZXQgPSAxOwogICAgICB0aGlzLl9uZXh0Q2hvcnVzTW9kZSA9IGNob3J1c01vZGU7CiAgICB9IGVsc2UgewogICAgICBzd2l0Y2ggKGNob3J1c01vZGUpIHsKICAgICAgICBjYXNlIDE6CiAgICAgICAgICB0aGlzLl91cGRhdGVWYWx1ZXMoMC41MTMsIDAuNDQsIDE1NGUtNSwgNTE1ZS01LCAxNTFlLTUsIDU0ZS00LCB0cnVlKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlcygwLjg2MywgMC40NCwgMTU0ZS01LCA1MTVlLTUsIDE1MWUtNSwgNTRlLTQsIHRydWUpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAzOgogICAgICAgICAgdGhpcy5fdXBkYXRlVmFsdWVzKDkuNzUsIDAuNDQsIDMyMmUtNSwgMzU2ZS01LCAzMjhlLTUsIDM2NWUtNSwgZmFsc2UpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlcygwLjUxMywgMSwgMTU0ZS01LCA1MTVlLTUsIDE1MWUtNSwgNTRlLTQsIHRydWUpOwogICAgICAgICAgdGhpcy5fcmluZ0J1ZmZlci5yZXNldCgpOwogICAgICAgICAgYnJlYWs7CiAgICAgIH0KICAgIH0KICB9CiAgX2FwcGx5U2F0dXJhdGlvbihpbnB1dCkgewogICAgcmV0dXJuIGlucHV0OwogIH0KICBfdXBkYXRlVmFsdWVzKGZyZXEsIGRyeSwgbWluTGVmdERlbGF5LCBtYXhMZWZ0RGVsYXksIG1pblJpZ2h0RGVsYXksIG1heFJpZ2h0RGVsYXksIGlzU3RlcmVvKSB7CiAgICBjb25zdCBhdmVyYWdlTGVmdERlbGF5ID0gKG1pbkxlZnREZWxheSArIG1heExlZnREZWxheSkgKiAwLjU7CiAgICBjb25zdCBtYXhMZWZ0T2Zmc2V0ID0gbWF4TGVmdERlbGF5IC0gYXZlcmFnZUxlZnREZWxheTsKICAgIHRoaXMuX2F2ZXJhZ2VMZWZ0U2FtcGxlcyA9IGF2ZXJhZ2VMZWZ0RGVsYXkgKiB0aGlzLl9zYW1wbGVSYXRlOwogICAgdGhpcy5fbWF4TGVmdE9mZnNldCA9IG1heExlZnRPZmZzZXQgKiB0aGlzLl9zYW1wbGVSYXRlOwogICAgY29uc3QgYXZlcmFnZVJpZ2h0RGVsYXkgPSAobWluUmlnaHREZWxheSArIG1heFJpZ2h0RGVsYXkpICogMC41OwogICAgY29uc3QgbWF4UmlnaHRPZmZzZXQgPSBtYXhSaWdodERlbGF5IC0gYXZlcmFnZVJpZ2h0RGVsYXk7CiAgICB0aGlzLl9hdmVyYWdlUmlnaHRTYW1wbGVzID0gYXZlcmFnZVJpZ2h0RGVsYXkgKiB0aGlzLl9zYW1wbGVSYXRlOwogICAgdGhpcy5fbWF4UmlnaHRPZmZzZXQgPSBtYXhSaWdodE9mZnNldCAqIHRoaXMuX3NhbXBsZVJhdGUgKiAoaXNTdGVyZW8gPyAtMSA6IDEpOwogICAgdGhpcy5fZHJ5VGFyZ2V0ID0gZHJ5OwogICAgaWYgKCF0aGlzLl9pc1VzZWQpIHsKICAgICAgdGhpcy5fZHJ5Q2hhbmdlID0gZHJ5OwogICAgfQogICAgdGhpcy5fZHJ5Q2hhbmdlID0gKGRyeSAtIHRoaXMuX2RyeUN1cnJlbnQpIC8gMWUzOwogICAgdGhpcy5fbGZvSW5jcmVtZW50ID0gTWF0aC5zaWduKHRoaXMuX2xmb0luY3JlbWVudCkgKiA0ICogZnJlcSAvIHRoaXMuX3NhbXBsZVJhdGU7CiAgfQp9CgovLyBzcmMvanVub3gvbGZvLmpzCmNsYXNzIExGTyB7CiAgY29uc3RydWN0b3Ioc2FtcGxlUmF0ZTIpIHsKICAgIHRoaXMuX29uZU92ZXJTYW1wbGVSYXRlID0gMSAvIHNhbXBsZVJhdGUyOwogICAgdGhpcy5fcGhhc2VJbmNyZW1lbnQgPSAwOwogICAgdGhpcy5jdXJyZW50UGhhc2UgPSAxOwogICAgdGhpcy5jdXJyZW50VmFsdWUgPSAwOwogICAgdGhpcy5pc1Jlc3RhcnRlZCA9IGZhbHNlOwogICAgdGhpcy53YXZlZm9ybSA9ICJ0cmlhbmdsZSI7CiAgfQogIHJlc2V0KCkgewogICAgdGhpcy5jdXJyZW50UGhhc2UgPSAxOwogICAgdGhpcy5jdXJyZW50VmFsdWUgPSAwOwogIH0KICByZW5kZXIoKSB7CiAgICB0aGlzLmlzUmVzdGFydGVkID0gZmFsc2U7CiAgICB0aGlzLmN1cnJlbnRQaGFzZSArPSB0aGlzLl9waGFzZUluY3JlbWVudDsKICAgIGlmICh0aGlzLmN1cnJlbnRQaGFzZSA+IDEpIHsKICAgICAgdGhpcy5pc1Jlc3RhcnRlZCA9IHRydWU7CiAgICAgIHRoaXMuY3VycmVudFBoYXNlIC09IDE7CiAgICB9CiAgICBsZXQgdmFsdWUgPSAwOwogICAgc3dpdGNoICh0aGlzLndhdmVmb3JtKSB7CiAgICAgIGNhc2UgIm5vbmUiOgogICAgICAgIHZhbHVlID0gMDsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAic2luZSI6CiAgICAgICAgdmFsdWUgPSBNYXRoLnNpbih0aGlzLmN1cnJlbnRQaGFzZSAqIDIgKiBNYXRoLlBJKTsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAic3F1YXJlIjoKICAgICAgICB2YWx1ZSA9IHRoaXMuY3VycmVudFBoYXNlID4gMC41ID8gLTEgOiAxOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJyYW5kb20iOgogICAgICAgIHZhbHVlID0gdGhpcy5pc1Jlc3RhcnRlZCA/IE1hdGgucmFuZG9tKCkgKiAyIC0gMSA6IHRoaXMuY3VycmVudFZhbHVlOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJub2lzZSI6CiAgICAgICAgdmFsdWUgPSBNYXRoLnJhbmRvbSgpICogMiAtIDE7CiAgICAgICAgYnJlYWs7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgdmFsdWUgPSB0aGlzLmN1cnJlbnRQaGFzZSAqIDQ7CiAgICAgICAgaWYgKHZhbHVlID4gMSkgewogICAgICAgICAgdmFsdWUgPSAyIC0gdmFsdWU7CiAgICAgICAgfQogICAgICAgIGlmICh2YWx1ZSA8IC0xKSB7CiAgICAgICAgICB2YWx1ZSA9IC0yIC0gdmFsdWU7CiAgICAgICAgfQogICAgICAgIGJyZWFrOwogICAgfQogICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlID0gdmFsdWU7CiAgfQogIHNldFJhdGUoZnJlcXVlbmN5KSB7CiAgICB0aGlzLl9waGFzZUluY3JlbWVudCA9IGZyZXF1ZW5jeSAqIHRoaXMuX29uZU92ZXJTYW1wbGVSYXRlOwogIH0KfQoKLy8gc3JjL2p1bm94L2xmb1dpdGhFbnZlbG9wZS5qcwpjbGFzcyBMRk9XaXRoRW52ZWxvcGUgZXh0ZW5kcyBMRk8gewogIGNvbnN0cnVjdG9yKHNhbXBsZVJhdGUyKSB7CiAgICBzdXBlcihzYW1wbGVSYXRlMik7CiAgICBjb25zdCBzZWdtZW50cyA9IFsKICAgICAgdGhpcy5fZGVsYXkgPSBuZXcgRGVsYXlTZWdtZW50KHNhbXBsZVJhdGUyKSwKICAgICAgdGhpcy5fYXR0YWNrID0gbmV3IEF0dGFja1NlZ21lbnQoc2FtcGxlUmF0ZTIsIDAuMDMsIDEsIHRydWUpLAogICAgICB0aGlzLl9yZWxlYXNlID0gbmV3IERlY2F5U2VnbWVudChzYW1wbGVSYXRlMiwgMC4wMjUsIDAsIGZhbHNlKSwKICAgICAgdGhpcy5fc2h1dGRvd24gPSBuZXcgU2h1dGRvd25TZWdtZW50KHNhbXBsZVJhdGUyLCAxZS0zKQogICAgXTsKICAgIHRoaXMuX3JlbGVhc2Uuc2V0RHVyYXRpb24oMC4xKTsKICAgIHRoaXMuX2VudiA9IG5ldyBBYnN0cmFjdEVudmVsb3BlKHNlZ21lbnRzKTsKICB9CiAgaXNBY3RpdmUoKSB7CiAgICByZXR1cm4gIXRoaXMuX2Vudi5pc0ZpbmlzaGVkKCk7CiAgfQogIHRyaWdnZXIoKSB7CiAgICBpZiAoIXRoaXMuaXNBY3RpdmUoKSkgewogICAgICB0aGlzLmN1cnJlbnRQaGFzZSA9IDE7CiAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gMDsKICAgIH0KICAgIGlmICh0aGlzLl9lbnYuaXNGaW5pc2hlZCgpIHx8ICF0aGlzLl9lbnYuaXNSZWxlYXNlZCgpKSB7CiAgICAgIHRoaXMuX2Vudi50cmlnZ2VyKCk7CiAgICB9CiAgfQogIHJlbGVhc2UoKSB7CiAgICB0aGlzLl9lbnYucmVsZWFzZSgpOwogIH0KICBzaHV0ZG93bigpIHsKICAgIHRoaXMuX2Vudi5zaHV0ZG93bigpOwogIH0KICByZXNldCgpIHsKICAgIHN1cGVyLnJlc2V0KCk7CiAgICB0aGlzLl9lbnYucmVzZXQoKTsKICB9CiAgcmVuZGVyKCkgewogICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHsKICAgICAgcmV0dXJuIDA7CiAgICB9CiAgICBjb25zdCBlbnZWYWx1ZSA9IHRoaXMuX2Vudi5yZW5kZXIoKTsKICAgIGlmIChlbnZWYWx1ZSA9PT0gMCkgewogICAgICByZXR1cm4gMDsKICAgIH0KICAgIHJldHVybiBlbnZWYWx1ZSAqIHN1cGVyLnJlbmRlcigpOwogIH0KICBzZXRWYWx1ZXMoZnJlcXVlbmN5LCBkZWxheUR1cmF0aW9uLCBhdHRhY2tEdXJhdGlvbikgewogICAgdGhpcy5zZXRSYXRlKGZyZXF1ZW5jeSk7CiAgICB0aGlzLl9kZWxheS5zZXREdXJhdGlvbihkZWxheUR1cmF0aW9uKTsKICAgIHRoaXMuX2F0dGFjay5zZXREdXJhdGlvbihhdHRhY2tEdXJhdGlvbik7CiAgfQp9CgovLyBzcmMvanVub3gvanVub3guanMKY29uc3Qgc3ludGhTdGF0dXMgPSB7CiAgU0lMRU5UOiAwLAogIE5PVEVTX0FDVElWRTogNAp9OwpjbGFzcyBKdW5veCB7CiAgY29uc3RydWN0b3Ioe3BhdGNoLCBzYW1wbGVSYXRlOiBzYW1wbGVSYXRlMiwgcG9seXBob255fSkgewogICAgdGhpcy5wYXRjaCA9IHBhdGNoOwogICAgdGhpcy5zYW1wbGVSYXRlID0gc2FtcGxlUmF0ZTI7CiAgICB0aGlzLm1heFZvaWNlcyA9IHBvbHlwaG9ueTsKICAgIHRoaXMudm9pY2VzID0gW107CiAgICB0aGlzLnN0YXR1cyA9IHN5bnRoU3RhdHVzLlNJTEVOVDsKICAgIHRoaXMucGFyYW1ldGVycyA9IFsKICAgICAgdGhpcy5iZW5kQW1vdW50UGFyYW0gPSBuZXcgU21vb3RoTW92ZXMoMCwgc2FtcGxlUmF0ZTIpLAogICAgICB0aGlzLmRjb0JlbmREZXB0aFBhcmFtID0gbmV3IFNtb290aE1vdmVzKDEsIHNhbXBsZVJhdGUyKSwKICAgICAgdGhpcy5waXRjaExmb01vZERlcHRoUGFyYW0gPSBuZXcgU21vb3RoTW92ZXMoMCwgc2FtcGxlUmF0ZTIpLAogICAgICB0aGlzLnB3bURlcHRoUGFyYW0gPSBuZXcgU21vb3RoTW92ZXMoMCwgc2FtcGxlUmF0ZTIpLAogICAgICB0aGlzLnNhd0xldmVsUGFyYW0gPSBuZXcgU21vb3RoTW92ZXMoMCwgc2FtcGxlUmF0ZTIpLAogICAgICB0aGlzLnB1bHNlTGV2ZWxQYXJhbSA9IG5ldyBTbW9vdGhNb3ZlcygwLCBzYW1wbGVSYXRlMiksCiAgICAgIHRoaXMuc3ViTGV2ZWxQYXJhbSA9IG5ldyBTbW9vdGhNb3ZlcygwLCBzYW1wbGVSYXRlMiksCiAgICAgIHRoaXMubm9pc2VMZXZlbFBhcmFtID0gbmV3IFNtb290aE1vdmVzKDAsIHNhbXBsZVJhdGUyKSwKICAgICAgdGhpcy5maWx0ZXJDdXRvZmZQYXJhbSA9IG5ldyBTbW9vdGhNb3ZlcygwLCBzYW1wbGVSYXRlMiksCiAgICAgIHRoaXMuZmlsdGVyUmVzb25hbmNlUGFyYW0gPSBuZXcgU21vb3RoTW92ZXMoMCwgc2FtcGxlUmF0ZTIpLAogICAgICB0aGlzLmZpbHRlckJlbmREZXB0aFBhcmFtID0gbmV3IFNtb290aE1vdmVzKDEsIHNhbXBsZVJhdGUyKSwKICAgICAgdGhpcy5maWx0ZXJFbnZNb2RQYXJhbSA9IG5ldyBTbW9vdGhNb3ZlcygwLCBzYW1wbGVSYXRlMiksCiAgICAgIHRoaXMuZmlsdGVyTGZvTW9kUGFyYW0gPSBuZXcgU21vb3RoTW92ZXMoMCwgc2FtcGxlUmF0ZTIpLAogICAgICB0aGlzLmZpbHRlcktleU1vZFBhcmFtID0gbmV3IFNtb290aE1vdmVzKDAsIHNhbXBsZVJhdGUyKSwKICAgICAgdGhpcy52Y2FHYWluRmFjdG9yUGFyYW0gPSBuZXcgU21vb3RoTW92ZXMoMCwgc2FtcGxlUmF0ZTIpCiAgICBdOwogICAgdGhpcy5sZm8gPSBuZXcgTEZPV2l0aEVudmVsb3BlKHNhbXBsZVJhdGUyKTsKICAgIHRoaXMubGZvLndhdmVmb3JtID0gInNpbmUiOwogICAgdGhpcy5ocGYgPSBuZXcgU2ltcGxlU2luZ2xlUG9sZUZpbHRlcihzYW1wbGVSYXRlMik7CiAgICB0aGlzLmNob3J1cyA9IG5ldyBDaG9ydXMoc2FtcGxlUmF0ZTIpOwogICAgdGhpcy51cGRhdGUoKTsKICB9CiAgbm90ZU9uKG5vdGUsIHZlbG9jaXR5KSB7CiAgICB0aGlzLnN0YXR1cyA9IHN5bnRoU3RhdHVzLk5PVEVTX0FDVElWRTsKICAgIGNvbnN0IHZvaWNlSW5kZXggPSB0aGlzLnZvaWNlcy5maW5kSW5kZXgoKHZvaWNlMikgPT4gdm9pY2UyLm5vdGUgPT09IG5vdGUpOwogICAgaWYgKHZvaWNlSW5kZXggPj0gMCkgewogICAgICB0aGlzLnZvaWNlc1t2b2ljZUluZGV4XS5ub3RlT24obm90ZSwgdmVsb2NpdHkpOwogICAgICByZXR1cm47CiAgICB9CiAgICBpZiAoIXRoaXMudm9pY2VzLmxlbmd0aCAmJiB0aGlzLnBhdGNoLmxmby5hdXRvVHJpZ2dlcikgewogICAgICB0aGlzLmxmby50cmlnZ2VyKCk7CiAgICB9CiAgICBjb25zdCBuZXdWb2ljZSA9IG5ldyBWb2ljZSh7cGF0Y2g6IHRoaXMucGF0Y2gsIHNhbXBsZVJhdGU6IHRoaXMuc2FtcGxlUmF0ZX0pOwogICAgbmV3Vm9pY2Uubm90ZU9uKG5vdGUsIHZlbG9jaXR5KTsKICAgIGlmICh0aGlzLnZvaWNlcy5sZW5ndGggPCB0aGlzLm1heFZvaWNlcykgewogICAgICB0aGlzLnZvaWNlcy5wdXNoKG5ld1ZvaWNlKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgdGhpcy52b2ljZXNbMF0gPSBuZXdWb2ljZTsKICB9CiAgbm90ZU9mZihub3RlKSB7CiAgICB0aGlzLnZvaWNlcy5mb3JFYWNoKCh2b2ljZTIpID0+IHZvaWNlMi5ub3RlID09PSBub3RlICYmICF2b2ljZTIuaXNGaW5pc2hlZCgpICYmIHZvaWNlMi5ub3RlT2ZmKCkpOwogIH0KICBwaXRjaEJlbmQodmFsdWUpIHsKICAgIHRoaXMuYmVuZEFtb3VudFBhcmFtLnNldFZhbHVlKHZhbHVlKTsKICB9CiAgbGZvVHJpZ2dlcigpIHsKICAgIHRoaXMubGZvLnRyaWdnZXIoKTsKICB9CiAgbGZvUmVsZWFzZSgpIHsKICAgIHRoaXMubGZvLnJlbGVhc2UoKTsKICB9CiAgcmVuZGVyKG91dEwsIG91dFIpIHsKICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gc3ludGhTdGF0dXMuU0lMRU5UKSB7CiAgICAgIHJldHVybjsKICAgIH0KICAgIHRoaXMuc3RhdHVzLS07CiAgICB0aGlzLnZvaWNlcyA9IHRoaXMudm9pY2VzLmZpbHRlcigodm9pY2UyKSA9PiAhdm9pY2UyLmlzRmluaXNoZWQoKSk7CiAgICBpZiAodGhpcy52b2ljZXMubGVuZ3RoKSB7CiAgICAgIHRoaXMuc3RhdHVzID0gc3ludGhTdGF0dXMuTk9URVNfQUNUSVZFOwogICAgfQogICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXRMLmxlbmd0aDsgaSsrKSB7CiAgICAgIGNvbnN0IGJlbmRBbW91bnQgPSB0aGlzLmJlbmRBbW91bnRQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3QgZGNvQmVuZERlcHRoID0gdGhpcy5kY29CZW5kRGVwdGhQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3QgcHdtRGVwdGggPSB0aGlzLnB3bURlcHRoUGFyYW0uZ2V0TmV4dFZhbHVlKCk7CiAgICAgIGNvbnN0IHBpdGNoTGZvTW9kRGVwdGggPSB0aGlzLnBpdGNoTGZvTW9kRGVwdGhQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3Qgc2F3TGV2ZWwgPSB0aGlzLnNhd0xldmVsUGFyYW0uZ2V0TmV4dFZhbHVlKCk7CiAgICAgIGNvbnN0IHB1bHNlTGV2ZWwgPSB0aGlzLnB1bHNlTGV2ZWxQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3Qgc3ViTGV2ZWwgPSB0aGlzLnN1YkxldmVsUGFyYW0uZ2V0TmV4dFZhbHVlKCk7CiAgICAgIGNvbnN0IG5vaXNlTGV2ZWwgPSB0aGlzLm5vaXNlTGV2ZWxQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3QgZmlsdGVyQ3V0b2ZmID0gdGhpcy5maWx0ZXJDdXRvZmZQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3QgZmlsdGVyUmVzb25hbmNlID0gdGhpcy5maWx0ZXJSZXNvbmFuY2VQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3QgZmlsdGVyQmVuZERlcHRoID0gdGhpcy5maWx0ZXJCZW5kRGVwdGhQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3QgZmlsdGVyRW52TW9kID0gdGhpcy5maWx0ZXJFbnZNb2RQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3QgZmlsdGVyTGZvTW9kID0gdGhpcy5maWx0ZXJMZm9Nb2RQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3QgZmlsdGVyS2V5TW9kID0gdGhpcy5maWx0ZXJLZXlNb2RQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgY29uc3QgdmNhR2FpbkZhY3RvciA9IHRoaXMudmNhR2FpbkZhY3RvclBhcmFtLmdldE5leHRWYWx1ZSgpOwogICAgICBpZiAoaSA9PT0gMCkgewogICAgICB9CiAgICAgIGNvbnN0IGxmb091dCA9IHRoaXMubGZvLnJlbmRlcigpOwogICAgICBjb25zdCBkY29EZXR1bmVPY3RhdmVzID0gbGZvT3V0ICogcGl0Y2hMZm9Nb2REZXB0aCAqIDAuMjUgKyBiZW5kQW1vdW50ICogZGNvQmVuZERlcHRoICogNyAvIDEyOwogICAgICBsZXQgZGNvRGV0dW5lRmFjdG9yID0gdGhpcy5wYXRjaC5kY28ucmFuZ2U7CiAgICAgIGlmIChkY29EZXR1bmVPY3RhdmVzICE9PSAwKSB7CiAgICAgICAgZGNvRGV0dW5lRmFjdG9yICo9IE1hdGgucG93KDIsIGRjb0RldHVuZU9jdGF2ZXMpOwogICAgICB9CiAgICAgIGNvbnN0IGZpbHRlckRldHVuZU9jdGF2ZXMgPSBiZW5kQW1vdW50ICogZmlsdGVyQmVuZERlcHRoICogNCArIGZpbHRlckxmb01vZCAqIGxmb091dCAqIDM7CiAgICAgIGxldCBtb25vT3V0ID0gMDsKICAgICAgZm9yIChsZXQgdiA9IDA7IHYgPCB0aGlzLnZvaWNlcy5sZW5ndGg7IHYrKykgewogICAgICAgIGNvbnN0IHZvaWNlMiA9IHRoaXMudm9pY2VzW3ZdOwogICAgICAgIGlmICghdm9pY2UyLmlzRmluaXNoZWQoKSkgewogICAgICAgICAgbW9ub091dCArPSB2b2ljZTIucmVuZGVyKGxmb091dCwgZGNvRGV0dW5lRmFjdG9yLCBwd21EZXB0aCwgc2F3TGV2ZWwsIHB1bHNlTGV2ZWwsIHN1YkxldmVsLCBub2lzZUxldmVsLCBmaWx0ZXJDdXRvZmYsIGZpbHRlclJlc29uYW5jZSwgZmlsdGVyRW52TW9kLCBmaWx0ZXJEZXR1bmVPY3RhdmVzLCBmaWx0ZXJLZXlNb2QpOwogICAgICAgIH0KICAgICAgfQogICAgICBpZiAodGhpcy5wYXRjaC5ocGYgPiAwKSB7CiAgICAgICAgbGV0IGxvd1Bhc3NPdXQgPSB0aGlzLmhwZi5yZW5kZXJMUChtb25vT3V0KTsKICAgICAgICBpZiAodGhpcy5wYXRjaC5ocGYgPCAwLjI1KSB7CiAgICAgICAgICBsb3dQYXNzT3V0ICo9IHRoaXMucGF0Y2guaHBmICogNDsKICAgICAgICB9CiAgICAgICAgbW9ub091dCAtPSBsb3dQYXNzT3V0OwogICAgICB9CiAgICAgIG1vbm9PdXQgKj0gdmNhR2FpbkZhY3RvcjsKICAgICAgbW9ub091dCA9IGZhc3RUYW5oKDMgKiBtb25vT3V0KTsKICAgICAgdGhpcy5jaG9ydXMucmVuZGVyKG1vbm9PdXQpOwogICAgICBvdXRMW2ldID0gdGhpcy5jaG9ydXMubGVmdE91dHB1dDsKICAgICAgb3V0UltpXSA9IHRoaXMuY2hvcnVzLnJpZ2h0T3V0cHV0OwogICAgfQogICAgaWYgKHRoaXMuc3RhdHVzID09PSBzeW50aFN0YXR1cy5TSUxFTlQpIHsKICAgICAgbGV0IGZhZGVMZXZlbCA9IDE7CiAgICAgIGNvbnN0IGZhZGVTdGVwID0gZmFkZUxldmVsIC8gb3V0TC5sZW5ndGg7CiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0TC5sZW5ndGg7IGkrKykgewogICAgICAgIG91dExbaV0gKj0gZmFkZUxldmVsOwogICAgICAgIG91dFJbaV0gKj0gZmFkZUxldmVsOwogICAgICAgIGZhZGVMZXZlbCAtPSBmYWRlU3RlcDsKICAgICAgfQogICAgICBpZiAodGhpcy5wYXRjaC5sZm8uYXV0b1RyaWdnZXIpIHsKICAgICAgICB0aGlzLmxmby5yZXNldCgpOwogICAgICB9CiAgICAgIHRoaXMuaHBmLnJlc2V0KCk7CiAgICAgIHRoaXMuY2hvcnVzLnJlc2V0KCk7CiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzW2ldLnJlc2V0KCk7CiAgICAgIH0KICAgIH0KICB9CiAgc2V0VmFsdWUocGF0aCwgdmFsdWUpIHsKICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IHBhdGguc3BsaXQoIi4iKTsKICAgIGlmIChwYXRoU2VnbWVudHMubGVuZ3RoKSB7CiAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnBhdGNoOwogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhTZWdtZW50cy5sZW5ndGggLSAxOyBpKyspIHsKICAgICAgICB0YXJnZXQgPSB0YXJnZXRbcGF0aFNlZ21lbnRzW2ldXSB8fCAodGFyZ2V0W3BhdGhTZWdtZW50c1tpXV0gPSB7fSk7CiAgICAgIH0KICAgICAgdGFyZ2V0W3BhdGhTZWdtZW50c1twYXRoU2VnbWVudHMubGVuZ3RoIC0gMV1dID0gdmFsdWU7CiAgICAgIHRoaXMudXBkYXRlKCk7CiAgICB9CiAgfQogIHVwZGF0ZSgpIHsKICAgIGxldCBpc0FjdGl2ZSA9IGZhbHNlOwogICAgZm9yIChsZXQgdiA9IDA7IHYgPCB0aGlzLnZvaWNlcy5sZW5ndGg7IHYrKykgewogICAgICBjb25zdCB2b2ljZTIgPSB0aGlzLnZvaWNlc1t2XTsKICAgICAgdm9pY2UyLnVwZGF0ZVBhdGNoKHRoaXMucGF0Y2gpOwogICAgICBpc0FjdGl2ZSA9IGlzQWN0aXZlIHx8ICF2b2ljZTIuaXNGaW5pc2hlZCgpOwogICAgfQogICAgbGV0IHNhd0xldmVsID0gdGhpcy5wYXRjaC5kY28uc2F3ID8gMC4yIDogMDsKICAgIGxldCBwdWxzZUxldmVsID0gdGhpcy5wYXRjaC5kY28ucHVsc2UgPyAwLjIgOiAwOwogICAgbGV0IHN1YkxldmVsID0gdGhpcy5wYXRjaC5kY28uc3ViID8gdGhpcy5wYXRjaC5kY28uc3ViQW1vdW50ICogMC4xOTUgOiAwOwogICAgbGV0IG5vaXNlTGV2ZWwgPSB0aGlzLnBhdGNoLmRjby5ub2lzZSAqIDAuMjE7CiAgICBsZXQgbWl4RmFjdG9yID0gc2F3TGV2ZWwgKyBwdWxzZUxldmVsICsgc3ViTGV2ZWwgKyBub2lzZUxldmVsOwogICAgaWYgKG1peEZhY3RvciA+IDAuMjYpIHsKICAgICAgbWl4RmFjdG9yID0gMC4yNiAvICgwLjI2ICsgKG1peEZhY3RvciAtIDAuMjYpICogMC4zKTsKICAgICAgcHVsc2VMZXZlbCAqPSBtaXhGYWN0b3I7CiAgICAgIHNhd0xldmVsICo9IG1peEZhY3RvcjsKICAgICAgc3ViTGV2ZWwgKj0gbWl4RmFjdG9yOwogICAgICBub2lzZUxldmVsICo9IG1peEZhY3RvcjsKICAgIH0KICAgIHRoaXMuc2F3TGV2ZWxQYXJhbS5zZXRWYWx1ZShzYXdMZXZlbCwgaXNBY3RpdmUpOwogICAgdGhpcy5wdWxzZUxldmVsUGFyYW0uc2V0VmFsdWUocHVsc2VMZXZlbCwgaXNBY3RpdmUpOwogICAgdGhpcy5zdWJMZXZlbFBhcmFtLnNldFZhbHVlKHN1YkxldmVsLCBpc0FjdGl2ZSk7CiAgICB0aGlzLm5vaXNlTGV2ZWxQYXJhbS5zZXRWYWx1ZShub2lzZUxldmVsLCBpc0FjdGl2ZSk7CiAgICB0aGlzLnBpdGNoTGZvTW9kRGVwdGhQYXJhbS5zZXRWYWx1ZSh0aGlzLnBhdGNoLmRjby5sZm8sIGlzQWN0aXZlKTsKICAgIHRoaXMucHdtRGVwdGhQYXJhbS5zZXRWYWx1ZSh0aGlzLnBhdGNoLmRjby5wd20sIGlzQWN0aXZlKTsKICAgIGNvbnN0IGVudk1vZERpcmVjdGlvbiA9IHRoaXMucGF0Y2gudmNmLm1vZFBvc2l0aXZlID8gMSA6IC0xOwogICAgdGhpcy5maWx0ZXJDdXRvZmZQYXJhbS5zZXRWYWx1ZSh0aGlzLnBhdGNoLnZjZi5mcmVxdWVuY3ksIGlzQWN0aXZlKTsKICAgIHRoaXMuZmlsdGVyUmVzb25hbmNlUGFyYW0uc2V0VmFsdWUodGhpcy5wYXRjaC52Y2YucmVzb25hbmNlLCBpc0FjdGl2ZSk7CiAgICB0aGlzLmZpbHRlckVudk1vZFBhcmFtLnNldFZhbHVlKHRoaXMucGF0Y2gudmNmLmVudk1vZCAqIGVudk1vZERpcmVjdGlvbiwgaXNBY3RpdmUpOwogICAgdGhpcy5maWx0ZXJMZm9Nb2RQYXJhbS5zZXRWYWx1ZSh0aGlzLnBhdGNoLnZjZi5sZm9Nb2QsIGlzQWN0aXZlKTsKICAgIHRoaXMuZmlsdGVyS2V5TW9kUGFyYW0uc2V0VmFsdWUodGhpcy5wYXRjaC52Y2Yua2V5TW9kLCBpc0FjdGl2ZSk7CiAgICB0aGlzLmNob3J1cy51cGRhdGUodGhpcy5wYXRjaC5jaG9ydXMpOwogICAgc2V0TGZvVmFsdWVzRnJvbVNsaWRlcnModGhpcy5sZm8sIHRoaXMucGF0Y2gubGZvLmZyZXF1ZW5jeSwgdGhpcy5wYXRjaC5sZm8uZGVsYXkpOwogICAgc2V0SHBmVmFsdWVzRnJvbVNsaWRlcnModGhpcy5ocGYsIHRoaXMucGF0Y2guaHBmKTsKICAgIGNvbnN0IHZjYUdhaW5GYWN0b3IgPSBNYXRoLnBvdygxLjI1ODksIHRoaXMucGF0Y2gudmNhICogMTApICogMC4xOwogICAgdGhpcy52Y2FHYWluRmFjdG9yUGFyYW0uc2V0VmFsdWUodmNhR2FpbkZhY3RvciwgaXNBY3RpdmUpOwogIH0KICBwYW5pYygpIHsKICAgIHRoaXMudm9pY2VzID0gW107CiAgfQp9CmNvbnN0IGN1cnZlRnJvbUxmb1JhdGVTbGlkZXJUb0ZyZXEgPSBbMC4zLCAwLjg1LCAzLjM5LCAxMS40OSwgMjIuMjJdOwpjb25zdCBjdXJ2ZUZyb21MZm9EZWxheVNsaWRlclRvRGVsYXkgPSBbMCwgMC4wNjM5LCAwLjg1LCAxLjIsIDIuNjg1XTsKY29uc3QgY3VydmVGcm9tTGZvRGVsYXlTbGlkZXJUb0F0dGFjayA9IFsxZS0zLCAwLjA1MywgMC4xODgsIDAuMzQ4LCAxLjE1XTsKZnVuY3Rpb24gc2V0TGZvVmFsdWVzRnJvbVNsaWRlcnMobGZvMiwgcmF0ZVNsaWRlciwgZGVsYXlTbGlkZXIpIHsKICBjb25zdCBmcmVxdWVuY3kgPSBpbnRlcnBvbGF0ZWRMb29rdXAocmF0ZVNsaWRlciwgY3VydmVGcm9tTGZvUmF0ZVNsaWRlclRvRnJlcSk7CiAgY29uc3QgZGVsYXlEdXJhdGlvbiA9IGludGVycG9sYXRlZExvb2t1cChkZWxheVNsaWRlciwgY3VydmVGcm9tTGZvRGVsYXlTbGlkZXJUb0RlbGF5KTsKICBjb25zdCBhdHRhY2tEdXJhdGlvbiA9IGludGVycG9sYXRlZExvb2t1cChkZWxheVNsaWRlciwgY3VydmVGcm9tTGZvRGVsYXlTbGlkZXJUb0F0dGFjayk7CiAgbGZvMi5zZXRWYWx1ZXMoZnJlcXVlbmN5LCBkZWxheUR1cmF0aW9uLCBhdHRhY2tEdXJhdGlvbik7Cn0KY29uc3QgY3VydmVGcm9tSHBmU2xpZGVyVG9GcmVxID0gWzE0MCwgMjUwLCA1MjAsIDEyMjBdOwpmdW5jdGlvbiBzZXRIcGZWYWx1ZXNGcm9tU2xpZGVycyhocGYsIHJhdGVTbGlkZXIpIHsKICBjb25zdCBmcmVxdWVuY3kgPSBpbnRlcnBvbGF0ZWRMb29rdXAocmF0ZVNsaWRlciwgY3VydmVGcm9tSHBmU2xpZGVyVG9GcmVxKTsKICBocGYuc2V0Q3V0b2ZmKGZyZXF1ZW5jeSk7Cn0KCi8vIHNyYy9zeW50aC5jb25zdGFudHMuanMKY29uc3QgTk9URV9PTiA9ICJub3RlLW9uIjsKY29uc3QgTk9URV9PRkYgPSAibm90ZS1vZmYiOwpjb25zdCBTRVRfUEFSQU0gPSAic2V0LXBhcmFtIjsKY29uc3QgU0VUX1BBVENIID0gInNldC1wYXRjaCI7CmNvbnN0IExGT19UUklHR0VSX09OID0gImxmby10cmlnZ2VyLW9uIjsKY29uc3QgTEZPX1RSSUdHRVJfT0ZGID0gImxmby10cmlnZ2VyLW9mZiI7CmNvbnN0IFBJVENIX0JFTkQgPSAicGl0Y2gtYmVuZCI7CmNvbnN0IFBBTklDID0gInBhbmljIjsKCi8vIHNyYy9zeW50aC53b3JrbGV0LmpzCmNsYXNzIEp1bm94V29ya2VyIGV4dGVuZHMgQXVkaW9Xb3JrbGV0UHJvY2Vzc29yIHsKICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7CiAgICBzdXBlcigpOwogICAgdGhpcy5zeW50aCA9IG5ldyBKdW5veCh7CiAgICAgIHBhdGNoOiBvcHRpb25zLnByb2Nlc3Nvck9wdGlvbnMucGF0Y2gsCiAgICAgIHBvbHlwaG9ueTogb3B0aW9ucy5wcm9jZXNzb3JPcHRpb25zLnBvbHlwaG9ueSwKICAgICAgc2FtcGxlUmF0ZTogc2FtcGxlUmF0ZSB8fCA0OGUzCiAgICB9KTsKICAgIHRoaXMucG9ydC5vbm1lc3NhZ2UgPSB0aGlzLmhhbmRsZU1lc3NhZ2UuYmluZCh0aGlzKTsKICB9CiAgaGFuZGxlTWVzc2FnZShldmVudCkgewogICAgaWYgKGV2ZW50LmRhdGEuYWN0aW9uID09PSBOT1RFX09OKSB7CiAgICAgIHRoaXMuc3ludGgubm90ZU9uKGV2ZW50LmRhdGEubm90ZSwgZXZlbnQuZGF0YS52ZWxvY2l0eSk7CiAgICB9IGVsc2UgaWYgKGV2ZW50LmRhdGEuYWN0aW9uID09PSBOT1RFX09GRikgewogICAgICB0aGlzLnN5bnRoLm5vdGVPZmYoZXZlbnQuZGF0YS5ub3RlKTsKICAgIH0gZWxzZSBpZiAoZXZlbnQuZGF0YS5hY3Rpb24gPT09IFBJVENIX0JFTkQpIHsKICAgICAgdGhpcy5zeW50aC5waXRjaEJlbmQoZXZlbnQuZGF0YS52YWx1ZSk7CiAgICB9IGVsc2UgaWYgKGV2ZW50LmRhdGEuYWN0aW9uID09PSBTRVRfUEFSQU0pIHsKICAgICAgdGhpcy5zeW50aC5zZXRWYWx1ZShldmVudC5kYXRhLm5hbWUsIGV2ZW50LmRhdGEudmFsdWUpOwogICAgfSBlbHNlIGlmIChldmVudC5kYXRhLmFjdGlvbiA9PT0gU0VUX1BBVENIKSB7CiAgICAgIHRoaXMuc3ludGgucGF0Y2ggPSBldmVudC5kYXRhLnBhdGNoRGF0YTsKICAgICAgdGhpcy5zeW50aC51cGRhdGUoKTsKICAgIH0gZWxzZSBpZiAoZXZlbnQuZGF0YS5hY3Rpb24gPT09IExGT19UUklHR0VSX09OKSB7CiAgICAgIHRoaXMuc3ludGgubGZvVHJpZ2dlcigpOwogICAgfSBlbHNlIGlmIChldmVudC5kYXRhLmFjdGlvbiA9PT0gTEZPX1RSSUdHRVJfT0ZGKSB7CiAgICAgIHRoaXMuc3ludGgubGZvUmVsZWFzZSgpOwogICAgfSBlbHNlIGlmIChldmVudC5kYXRhLmFjdGlvbiA9PT0gUEFOSUMpIHsKICAgICAgdGhpcy5zeW50aC5wYW5pYygpOwogICAgfSBlbHNlIHsKICAgICAgY29uc29sZS5sb2coIlVubWFuYWdlZCBtZXNzYWdlIiwgSlNPTi5zdHJpbmdpZnkoZXZlbnQuZGF0YSkpOwogICAgfQogIH0KICBwcm9jZXNzKGlucHV0cywgb3V0cHV0cykgewogICAgY29uc3Qgb3V0cHV0ID0gb3V0cHV0c1swXTsKICAgIHRoaXMuc3ludGgucmVuZGVyKG91dHB1dFswXSwgb3V0cHV0WzFdKTsKICAgIHJldHVybiB0cnVlOwogIH0KfQpyZWdpc3RlclByb2Nlc3NvcigianVub3gtc3ludGgiLCBKdW5veFdvcmtlcik7Cg==";
    async function createJuno60(ac, processorOptions) {
      const processorBlob = base64DataToBlob(synth_worklet_default);
      const processorUrl = URL.createObjectURL(processorBlob);
      await ac.audioWorklet.addModule(processorUrl);
      return new SynthWorkletNode(ac, processorOptions);
    }
    function base64DataToBlob(dataUrl, contentType = "application/javascript; charset=utf-8") {
      var byteString = atob(dataUrl.split(",")[1]);
      var ab = new ArrayBuffer(byteString.length);
      var ia = new Uint8Array(ab);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], {type: contentType});
    }
    class SynthWorkletNode extends AudioWorkletNode {
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
        this.port.postMessage({action: LFO_TRIGGER_ON});
      }
      lfoRelease() {
        this.port.postMessage({action: LFO_TRIGGER_OFF});
      }
      panic() {
        this.port.postMessage({
          action: PANIC
        });
      }
    }
    const defaultPatch = {
      name: "Strings 1",
      vca: 0.5,
      vcaType: "env",
      lfo: {autoTrigger: true, frequency: 0.6, delay: 0},
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
      env: {attack: 0.4, decay: 0, sustain: 1, release: 0.45},
      chorus: 1
    };
    const defaultAudioNodeOptions = {
      numberOfInputs: 0,
      numberOfOutputs: 1,
      channelCountMode: "explicit",
      channelCount: 2,
      outputChannelCount: [2]
    };
    const defaultProcessorOptions = {
      patch: defaultPatch,
      polyphony: 6
    };
  });
  return require_synth_node();
})();
