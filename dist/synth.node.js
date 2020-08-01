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
    const ALL_NOTES_OFF = "all-notes-off";
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
    var synth_worklet_default = "data:text/plain;charset=utf-8;base64,Ly8gc3JjL2p1bm94L3Ntb290aE1vdmVzLmpzCmNsYXNzIFNtb290aE1vdmVzIHsKICBjb25zdHJ1Y3Rvcih2YWx1ZSwgc2FtcGxlUmF0ZTIsIGZjID0gNSkgewogICAgdGhpcy5iMSA9IC1NYXRoLmV4cCgtMiAqIGZjICogTWF0aC5QSSAvIHNhbXBsZVJhdGUyKTsKICAgIHRoaXMuYTAgPSAxICsgdGhpcy5iMTsKICAgIHRoaXMudGFyZ2V0VmFsdWUgPSB2YWx1ZTsKICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2U7CiAgICB0aGlzLnoxID0gMDsKICAgIHRoaXMucmVzZXQoKTsKICB9CiAgc2V0VmFsdWUodmFsdWUsIHVzZVNtb290aGluZykgewogICAgdGhpcy50YXJnZXRWYWx1ZSA9IHZhbHVlOwogICAgaWYgKCF0aGlzLmlzU3RhcnRlZCB8fCAhdXNlU21vb3RoaW5nKSB7CiAgICAgIHRoaXMucmVzZXQoKTsKICAgICAgcmV0dXJuOwogICAgfQogIH0KICByZXNldCgpIHsKICAgIHRoaXMuejEgPSB0aGlzLnRhcmdldFZhbHVlICogdGhpcy5hMCAtIHRoaXMudGFyZ2V0VmFsdWU7CiAgICB0aGlzLmlzU3RhcnRlZCA9IGZhbHNlOwogIH0KICBnZXROZXh0VmFsdWUoKSB7CiAgICB0aGlzLmlzU3RhcnRlZCA9IHRydWU7CiAgICBjb25zdCB4b3V0ID0gdGhpcy50YXJnZXRWYWx1ZSAqIHRoaXMuYTAgLSB0aGlzLnoxOwogICAgdGhpcy56MSA9IHRoaXMuYjEgKiB4b3V0OwogICAgcmV0dXJuIHhvdXQ7CiAgfQp9CgovLyBzcmMvanVub3gvZGNvLmpzCmNsYXNzIEp1bm82MERDTyB7CiAgY29uc3RydWN0b3Ioc2FtcGxlUmF0ZTIpIHsKICAgIHRoaXMuc2FtcGxlUmF0ZSA9IHNhbXBsZVJhdGUyOwogICAgdGhpcy5jdXJyZW50UGhhc2UgPSAwOwogICAgdGhpcy5waGFzZUluY3JlbWVudCA9IDA7CiAgICB0aGlzLnB1bHNlV2lkdGggPSAwLjU7CiAgICB0aGlzLnB1bHNlUG9zaXRpdmUgPSAxOwogICAgdGhpcy5wdWxzZU5lZ2F0aXZlID0gLTE7CiAgICB0aGlzLnB1bHNlSGVpZ2h0ID0gMTsKICAgIHRoaXMuc3ViT3V0cHV0ID0gMTsKICB9CiAgbm90ZU9uKG5vdGVOdW1iZXIpIHsKICAgIGNvbnN0IG5vdGVGcmVxdWVuY3kgPSBNYXRoLnBvdygyLCAobm90ZU51bWJlciAtIDY5KSAvIDEyKSAqIDQ0MjsKICAgIHRoaXMucGhhc2VJbmNyZW1lbnQgPSBub3RlRnJlcXVlbmN5IC8gdGhpcy5zYW1wbGVSYXRlOwogICAgdGhpcy5jdXJyZW50UGhhc2UgPSAxLjE7CiAgfQogIHJlbmRlcihkZXR1bmVGYWN0b3IsIHB1bHNlV2lkdGgsIHNhd0xldmVsLCBwdWxzZUxldmVsLCBzdWJMZXZlbCkgewogICAgY29uc3QgcGhhc2VJbmNyZW1lbnQgPSB0aGlzLnBoYXNlSW5jcmVtZW50ICogZGV0dW5lRmFjdG9yOwogICAgY29uc3Qgb3JpZ1BoYXNlID0gdGhpcy5jdXJyZW50UGhhc2U7CiAgICB0aGlzLmN1cnJlbnRQaGFzZSArPSBwaGFzZUluY3JlbWVudDsKICAgIGlmICh0aGlzLmN1cnJlbnRQaGFzZSA+IDEpIHsKICAgICAgdGhpcy5jdXJyZW50UGhhc2UgLT0gMTsKICAgICAgdGhpcy5wdWxzZVdpZHRoID0gMC41IC0gMC40NSAqIHB1bHNlV2lkdGg7CiAgICAgIHRoaXMucHVsc2VQb3NpdGl2ZSA9IDEgLSBwdWxzZVdpZHRoICogMC45NTsKICAgICAgdGhpcy5wdWxzZU5lZ2F0aXZlID0gLTE7CiAgICAgIHRoaXMucHVsc2VIZWlnaHQgPSAwLjQ1ICogKHRoaXMucHVsc2VQb3NpdGl2ZSAtIHRoaXMucHVsc2VOZWdhdGl2ZSk7CiAgICB9CiAgICBsZXQgbmV3U2F3T3V0cHV0ID0gMDsKICAgIGlmIChzYXdMZXZlbCA+IDApIHsKICAgICAgbmV3U2F3T3V0cHV0ID0gdGhpcy5jdXJyZW50UGhhc2UgKyB0aGlzLmN1cnJlbnRQaGFzZSAtIDE7CiAgICAgIG5ld1Nhd091dHB1dCAtPSB0aGlzLmNhbGNQb2x5QkxFUDIodGhpcy5jdXJyZW50UGhhc2UsIHBoYXNlSW5jcmVtZW50LCAxKTsKICAgIH0KICAgIGxldCBuZXdQdWxzZU91dHB1dCA9IDA7CiAgICBpZiAocHVsc2VMZXZlbCA+IDApIHsKICAgICAgbmV3UHVsc2VPdXRwdXQgPSB0aGlzLmN1cnJlbnRQaGFzZSA+IHRoaXMucHVsc2VXaWR0aCA/IHRoaXMucHVsc2VQb3NpdGl2ZSAqPSAwLjk5OCA6IHRoaXMucHVsc2VOZWdhdGl2ZSAqPSAwLjk5ODsKICAgICAgbmV3UHVsc2VPdXRwdXQgLT0gdGhpcy5jYWxjUG9seUJMRVAyKHRoaXMuY3VycmVudFBoYXNlLCBwaGFzZUluY3JlbWVudCwgdGhpcy5wdWxzZUhlaWdodCk7CiAgICAgIGNvbnN0IHggPSB0aGlzLmN1cnJlbnRQaGFzZSAtIHRoaXMucHVsc2VXaWR0aDsKICAgICAgbmV3UHVsc2VPdXRwdXQgKz0gdGhpcy5jYWxjUG9seUJMRVAyKHggPCAwID8geCArIDEgOiB4LCBwaGFzZUluY3JlbWVudCwgdGhpcy5wdWxzZUhlaWdodCk7CiAgICB9CiAgICBsZXQgbmV3U3ViT3V0cHV0ID0gdGhpcy5zdWJPdXRwdXQgKj0gMC45OTg7CiAgICBsZXQgeSA9IHRoaXMuY3VycmVudFBoYXNlIC0gMC41OwogICAgaWYgKHkgPCBwaGFzZUluY3JlbWVudCAmJiB5ID4gLXBoYXNlSW5jcmVtZW50KSB7CiAgICAgIGlmICh5IDwgMCkgewogICAgICAgIHkgKz0gMTsKICAgICAgfQogICAgICBjb25zdCBvcmlnU3ViT3V0cHV0ID0gbmV3U3ViT3V0cHV0OwogICAgICBpZiAodGhpcy5jdXJyZW50UGhhc2UgPj0gMC41ICYmIG9yaWdQaGFzZSA8IDAuNSkgewogICAgICAgIHRoaXMuc3ViT3V0cHV0ID0gbmV3U3ViT3V0cHV0ID0gbmV3U3ViT3V0cHV0ID4gMCA/IC0xIDogMTsKICAgICAgfQogICAgICBuZXdTdWJPdXRwdXQgLT0gdGhpcy5jYWxjUG9seUJMRVAyKHksIHBoYXNlSW5jcmVtZW50LCBvcmlnU3ViT3V0cHV0KTsKICAgIH0KICAgIHJldHVybiBuZXdTYXdPdXRwdXQgKiBzYXdMZXZlbCArIG5ld1B1bHNlT3V0cHV0ICogcHVsc2VMZXZlbCArIG5ld1N1Yk91dHB1dCAqIHN1YkxldmVsOwogIH0KICBjYWxjUG9seUJMRVAyKHBoYXNlLCBpbmMsIGhlaWdodCkgewogICAgbGV0IHJlc3VsdCA9IDA7CiAgICBpZiAocGhhc2UgPCBpbmMpIHsKICAgICAgY29uc3QgdCA9IHBoYXNlIC8gaW5jOwogICAgICByZXN1bHQgPSBoZWlnaHQgKiAodCArIHQgLSB0ICogdCAtIDEpOwogICAgfSBlbHNlIGlmIChwaGFzZSArIGluYyA+IDEpIHsKICAgICAgY29uc3QgdCA9IChwaGFzZSAtIDEpIC8gaW5jOwogICAgICByZXN1bHQgPSBoZWlnaHQgKiAodCAqIHQgKyAodCArIHQpICsgMSk7CiAgICB9CiAgICByZXR1cm4gcmVzdWx0OwogIH0KfQoKLy8gc3JjL2p1bm94L2Fic3RyYWN0RW52ZWxvcGUuanMKY2xhc3MgQWJzdHJhY3RFbnZlbG9wZSB7CiAgY29uc3RydWN0b3Ioc2VnbWVudHMpIHsKICAgIHRoaXMuX3NlZ21lbnRzID0gc2VnbWVudHM7CiAgICB0aGlzLl9jdXJyZW50UGhhc2UgPSAtMTsKICAgIHRoaXMuX2N1cnJlbnRWYWx1ZSA9IDA7CiAgfQogIGlzRmluaXNoZWQoKSB7CiAgICByZXR1cm4gdGhpcy5fY3VycmVudFBoYXNlID09PSAtMTsKICB9CiAgaXNSZWxlYXNlZCgpIHsKICAgIHJldHVybiB0aGlzLmN1cnJlbnRQaGFzZSAhPT0gMCAmJiB0aGlzLmN1cnJlbnRQaGFzZSAhPT0gMTsKICB9CiAgaXNTaHV0dGluZ0Rvd24oKSB7CiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGhhc2UgPT09IHRoaXMuX3NlZ21lbnRzLmxlbmd0aCAtIDE7CiAgfQogIHRyaWdnZXIoKSB7CiAgICB0aGlzLl9jdXJyZW50UGhhc2UgPSAwOwogICAgZm9yIChsZXQgc2VnbWVudCBvZiB0aGlzLl9zZWdtZW50cykgewogICAgICBzZWdtZW50LnJlc2V0KCk7CiAgICB9CiAgfQogIHJlbGVhc2UoKSB7CiAgICBpZiAodGhpcy5fY3VycmVudFBoYXNlICE9PSAtMSkgewogICAgICB0aGlzLl9jdXJyZW50UGhhc2UgPSB0aGlzLl9zZWdtZW50cy5sZW5ndGggLSAyOwogICAgfQogIH0KICBzaHV0ZG93bigpIHsKICAgIGlmICh0aGlzLl9jdXJyZW50UGhhc2UgIT09IC0xKSB7CiAgICAgIHRoaXMuX2N1cnJlbnRQaGFzZSA9IHRoaXMuX3NlZ21lbnRzLmxlbmd0aCAtIDE7CiAgICB9CiAgfQogIHJlc2V0KCkgewogICAgdGhpcy5fY3VycmVudFBoYXNlID0gLTE7CiAgICB0aGlzLl9jdXJyZW50VmFsdWUgPSAwOwogICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9zZWdtZW50cy5sZW5ndGg7IGkrKykgewogICAgICB0aGlzLl9zZWdtZW50c1tpXS5yZXNldCgpOwogICAgfQogIH0KICByZW5kZXIoKSB7CiAgICBsZXQgY3VycmVudFBoYXNlID0gdGhpcy5fY3VycmVudFBoYXNlOwogICAgd2hpbGUgKGN1cnJlbnRQaGFzZSA+PSAwICYmIGN1cnJlbnRQaGFzZSA8IHRoaXMuX3NlZ21lbnRzLmxlbmd0aCkgewogICAgICBjb25zdCBzZWdtZW50ID0gdGhpcy5fc2VnbWVudHNbY3VycmVudFBoYXNlXTsKICAgICAgY29uc3QgbmV4dFZhbHVlID0gc2VnbWVudC5wcm9jZXNzKHRoaXMuX2N1cnJlbnRWYWx1ZSk7CiAgICAgIGlmIChzZWdtZW50LmlzQ29tcGxldGUobmV4dFZhbHVlKSkgewogICAgICAgIGN1cnJlbnRQaGFzZSsrOwogICAgICAgIGlmIChjdXJyZW50UGhhc2UgPj0gdGhpcy5fc2VnbWVudHMubGVuZ3RoKSB7CiAgICAgICAgICB0aGlzLl9jdXJyZW50VmFsdWUgPSAwOwogICAgICAgICAgY3VycmVudFBoYXNlID0gLTE7CiAgICAgICAgfQogICAgICAgIHRoaXMuX2N1cnJlbnRQaGFzZSA9IGN1cnJlbnRQaGFzZTsKICAgICAgfSBlbHNlIHsKICAgICAgICB0aGlzLl9jdXJyZW50VmFsdWUgPSBuZXh0VmFsdWU7CiAgICAgICAgYnJlYWs7CiAgICAgIH0KICAgIH0KICAgIHJldHVybiB0aGlzLl9jdXJyZW50VmFsdWU7CiAgfQp9CmNsYXNzIEF0dGFja1NlZ21lbnQgewogIGNvbnN0cnVjdG9yKHNhbXBsZVJhdGUyLCBhdHRhY2tUQ08sIHRhcmdldCwgaXNTdXN0YWluQXRFbmQpIHsKICAgIHRoaXMuX3NhbXBsZVJhdGUgPSBzYW1wbGVSYXRlMjsKICAgIHRoaXMuX2F0dGFja1RDTyA9IGF0dGFja1RDTzsKICAgIHRoaXMuX2F0dGFja0NvZWZmID0gMDsKICAgIHRoaXMuX2F0dGFja09mZnNldCA9IDA7CiAgICB0aGlzLl9pc1N1c3RhaW5BdEVuZCA9IGlzU3VzdGFpbkF0RW5kOwogICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7CiAgfQogIHNldER1cmF0aW9uKGR1cmF0aW9uKSB7CiAgICBjb25zdCBzYW1wbGVzID0gdGhpcy5fc2FtcGxlUmF0ZSAqIGR1cmF0aW9uOwogICAgdGhpcy5fYXR0YWNrQ29lZmYgPSBNYXRoLmV4cCgtTWF0aC5sb2coKDEgKyB0aGlzLl9hdHRhY2tUQ08pIC8gdGhpcy5fYXR0YWNrVENPKSAvIHNhbXBsZXMpOwogICAgdGhpcy5fYXR0YWNrT2Zmc2V0ID0gKDEgKyB0aGlzLl9hdHRhY2tUQ08pICogKDEgLSB0aGlzLl9hdHRhY2tDb2VmZik7CiAgfQogIHJlc2V0KCkgewogIH0KICBwcm9jZXNzKHByZXZpb3VzVmFsdWUpIHsKICAgIGNvbnN0IHJlc3VsdCA9IHByZXZpb3VzVmFsdWUgKiB0aGlzLl9hdHRhY2tDb2VmZiArIHRoaXMuX2F0dGFja09mZnNldDsKICAgIHJldHVybiByZXN1bHQgPiB0aGlzLnRhcmdldCAmJiB0aGlzLl9pc1N1c3RhaW5BdEVuZCA/IHRoaXMudGFyZ2V0IDogcmVzdWx0OwogIH0KICBpc0NvbXBsZXRlKHZhbHVlKSB7CiAgICByZXR1cm4gdmFsdWUgPiB0aGlzLnRhcmdldDsKICB9Cn0KY2xhc3MgRGVjYXlTZWdtZW50IHsKICBjb25zdHJ1Y3RvcihzYW1wbGVSYXRlMiwgZGVjYXlUQ08sIHRhcmdldCwgaXNTdXN0YWluQXRFbmQpIHsKICAgIHRoaXMuX3NhbXBsZVJhdGUgPSBzYW1wbGVSYXRlMjsKICAgIHRoaXMuX2RlY2F5VENPID0gZGVjYXlUQ087CiAgICB0aGlzLl9kZWNheUNvZWZmID0gMDsKICAgIHRoaXMuX2RlY2F5T2Zmc2V0ID0gMDsKICAgIHRoaXMuX2lzU3VzdGFpbkF0RW5kID0gaXNTdXN0YWluQXRFbmQ7CiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDsKICB9CiAgc2V0RHVyYXRpb24oc2Vjb25kcykgewogICAgY29uc3Qgc2FtcGxlcyA9IHRoaXMuX3NhbXBsZVJhdGUgKiBzZWNvbmRzOwogICAgdGhpcy5fZGVjYXlDb2VmZiA9IE1hdGguZXhwKC1NYXRoLmxvZygoMSArIHRoaXMuX2RlY2F5VENPKSAvIHRoaXMuX2RlY2F5VENPKSAvIHNhbXBsZXMpOwogICAgdGhpcy5fZGVjYXlPZmZzZXQgPSAodGhpcy50YXJnZXQgLSB0aGlzLl9kZWNheVRDTykgKiAoMSAtIHRoaXMuX2RlY2F5Q29lZmYpOwogIH0KICByZXNldCgpIHsKICB9CiAgcHJvY2VzcyhwcmV2aW91c1ZhbHVlKSB7CiAgICBjb25zdCByZXN1bHQgPSBwcmV2aW91c1ZhbHVlICogdGhpcy5fZGVjYXlDb2VmZiArIHRoaXMuX2RlY2F5T2Zmc2V0OwogICAgcmV0dXJuIHJlc3VsdCA8IHRoaXMudGFyZ2V0ICYmIHRoaXMuX2lzU3VzdGFpbkF0RW5kID8gdGhpcy50YXJnZXQgOiByZXN1bHQ7CiAgfQogIGlzQ29tcGxldGUodmFsdWUpIHsKICAgIHJldHVybiB2YWx1ZSA8PSB0aGlzLnRhcmdldCAmJiAhdGhpcy5faXNTdXN0YWluQXRFbmQgfHwgdmFsdWUgPCAwLjAyOwogIH0KfQpjbGFzcyBEZWxheVNlZ21lbnQgewogIGNvbnN0cnVjdG9yKHNhbXBsZVJhdGUyKSB7CiAgICB0aGlzLl9zYW1wbGVSYXRlID0gc2FtcGxlUmF0ZTI7CiAgICB0aGlzLl9kZWxheVNhbXBsZUNvdW50ID0gMDsKICAgIHRoaXMuX2N1cnJlbnRSZW1haW5pbmcgPSAwOwogIH0KICBzZXREdXJhdGlvbihkdXJhdGlvbikgewogICAgY29uc3QgZGVsYXlTYW1wbGVDb3VudCA9IHRoaXMuX3NhbXBsZVJhdGUgKiBkdXJhdGlvbiB8IDA7CiAgICB0aGlzLl9jdXJyZW50UmVtYWluaW5nICs9IGRlbGF5U2FtcGxlQ291bnQgLSB0aGlzLl9kZWxheVNhbXBsZUNvdW50OwogICAgdGhpcy5fZGVsYXlTYW1wbGVDb3VudCA9IGRlbGF5U2FtcGxlQ291bnQ7CiAgfQogIHJlc2V0KCkgewogICAgdGhpcy5fY3VycmVudFJlbWFpbmluZyA9IHRoaXMuX2RlbGF5U2FtcGxlQ291bnQ7CiAgfQogIHByb2Nlc3MocHJldmlvdXNWYWx1ZSkgewogICAgdGhpcy5fY3VycmVudFJlbWFpbmluZy0tOwogICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7CiAgfQogIGlzQ29tcGxldGUoKSB7CiAgICByZXR1cm4gdGhpcy5fY3VycmVudFJlbWFpbmluZyA8PSAwOwogIH0KfQpjbGFzcyBTaHV0ZG93blNlZ21lbnQgewogIGNvbnN0cnVjdG9yKHNhbXBsZVJhdGUyLCBzZWNvbmRzKSB7CiAgICB0aGlzLl9zaHV0ZG93blJhdGUgPSAxIC8gKHNlY29uZHMgKiBzYW1wbGVSYXRlMik7CiAgfQogIHJlc2V0KCkgewogIH0KICBwcm9jZXNzKHByZXZpb3VzVmFsdWUpIHsKICAgIGNvbnN0IHJlc3VsdCA9IHByZXZpb3VzVmFsdWUgLSB0aGlzLl9zaHV0ZG93blJhdGU7CiAgICByZXR1cm4gdGhpcy52YWx1ZSA8IDAgPyAwIDogcmVzdWx0OwogIH0KICBpc0NvbXBsZXRlKHZhbHVlKSB7CiAgICByZXR1cm4gdmFsdWUgPD0gMDsKICB9Cn0KCi8vIHNyYy9qdW5veC91dGlscy5qcwpmdW5jdGlvbiBmYXN0VGFuaCh4KSB7CiAgaWYgKHggPCAtMykgewogICAgcmV0dXJuIC0xOwogIH0gZWxzZSBpZiAoeCA+IDMpIHsKICAgIHJldHVybiAxOwogIH0KICBjb25zdCB4U3F1YXJlZCA9IHggKiB4OwogIHJldHVybiB4ICogKDI3ICsgeFNxdWFyZWQpIC8gKDI3ICsgOSAqIHhTcXVhcmVkKTsKfQpmdW5jdGlvbiBpbnRlcnBvbGF0ZWRMb29rdXAodmFsdWUsIHRhYmxlKSB7CiAgY29uc3QgaW5kZXggPSB2YWx1ZSB8IDA7CiAgY29uc3QgaW5kZXhOZXh0ID0gaW5kZXggKyAxOwogIGNvbnN0IGZhY3RvciA9IHZhbHVlIC0gaW5kZXg7CiAgaWYgKGluZGV4IDwgMCkgewogICAgcmV0dXJuIHRhYmxlWzBdOwogIH0KICBpZiAoaW5kZXhOZXh0ID49IHRhYmxlLmxlbmd0aCkgewogICAgcmV0dXJuIHRhYmxlW3RhYmxlLmxlbmd0aCAtIDFdOwogIH0KICByZXR1cm4gdGFibGVbaW5kZXhdICogKDEgLSBmYWN0b3IpICsgdGFibGVbaW5kZXhOZXh0XSAqIGZhY3RvcjsKfQoKLy8gc3JjL2p1bm94L2p1bm82MEVudmVsb3BlLmpzCmNvbnN0IGN1cnZlRnJvbUF0dGFja1NsaWRlclRvRHVyYXRpb24gPSBbMWUtMywgMC4wMywgMC4yNCwgMC42NSwgMy4yNV07CmNvbnN0IGN1cnZlRnJvbURlY2F5U2xpZGVyVG9EdXJhdGlvbiA9IFsyZS0zLCAwLjA5NiwgMC45ODQsIDQuNDQ5LCAxOS43ODNdOwpjb25zdCBjdXJ2ZUZyb21SZWxlYXNlU2xpZGVyVG9EdXJhdGlvbiA9IFsyZS0zLCAwLjA5NiwgMC45ODQsIDQuNDQ5LCAxOS43ODNdOwpjbGFzcyBKdW5vNjBFbnZlbG9wZSBleHRlbmRzIEFic3RyYWN0RW52ZWxvcGUgewogIGNvbnN0cnVjdG9yKHNhbXBsZVJhdGUyKSB7CiAgICBzdXBlcihbCiAgICAgIG5ldyBBdHRhY2tTZWdtZW50KHNhbXBsZVJhdGUyLCAwLjYzMiwgMSwgZmFsc2UpLAogICAgICBuZXcgRGVjYXlTZWdtZW50KHNhbXBsZVJhdGUyLCAwLjAyNSwgMCwgdHJ1ZSksCiAgICAgIG5ldyBEZWNheVNlZ21lbnQoc2FtcGxlUmF0ZTIsIDAuMDI1LCAwLCBmYWxzZSksCiAgICAgIG5ldyBTaHV0ZG93blNlZ21lbnQoc2FtcGxlUmF0ZTIsIDFlLTMpCiAgICBdKTsKICAgIHRoaXMuX2F0dGFjayA9IHRoaXMuX3NlZ21lbnRzWzBdOwogICAgdGhpcy5fZGVjYXkgPSB0aGlzLl9zZWdtZW50c1sxXTsKICAgIHRoaXMuX3JlbGVhc2UgPSB0aGlzLl9zZWdtZW50c1syXTsKICAgIHRoaXMuX3NodXRkb3duID0gdGhpcy5fc2VnbWVudHNbM107CiAgfQogIHNldFZhbHVlcyhhdHRhY2tEdXJhdGlvbiwgZGVjYXlEdXJhdGlvbiwgc3VzdGFpbkxldmVsLCByZWxlYXNlRHVyYXRpb24pIHsKICAgIHRoaXMuX2F0dGFjay5zZXREdXJhdGlvbihhdHRhY2tEdXJhdGlvbik7CiAgICB0aGlzLl9kZWNheS50YXJnZXQgPSBNYXRoLm1heCgwLjAyLCBzdXN0YWluTGV2ZWwpOwogICAgdGhpcy5fZGVjYXkuc2V0RHVyYXRpb24oZGVjYXlEdXJhdGlvbik7CiAgICB0aGlzLl9yZWxlYXNlLnNldER1cmF0aW9uKHRoaXMuX2RlY2F5LnRhcmdldCA8PSAwLjAyID8gMC4wMSA6IHJlbGVhc2VEdXJhdGlvbik7CiAgfQogIHNldFZhbHVlc0Zyb21TbGlkZXJzKGF0dGFja1NsaWRlciwgZGVjYXlTbGlkZXIsIHN1c3RhaW5TbGlkZXIsIHJlbGVhc2VTbGlkZXIpIHsKICAgIGNvbnN0IGF0dGFja0R1cmF0aW9uID0gaW50ZXJwb2xhdGVkTG9va3VwKGF0dGFja1NsaWRlciAqIGN1cnZlRnJvbUF0dGFja1NsaWRlclRvRHVyYXRpb24ubGVuZ3RoLCBjdXJ2ZUZyb21BdHRhY2tTbGlkZXJUb0R1cmF0aW9uKTsKICAgIGNvbnN0IGRlY2F5RHVyYXRpb24gPSBpbnRlcnBvbGF0ZWRMb29rdXAoZGVjYXlTbGlkZXIgKiBjdXJ2ZUZyb21EZWNheVNsaWRlclRvRHVyYXRpb24ubGVuZ3RoLCBjdXJ2ZUZyb21EZWNheVNsaWRlclRvRHVyYXRpb24pOwogICAgY29uc3QgcmVsZWFzZUR1cmF0aW9uID0gaW50ZXJwb2xhdGVkTG9va3VwKHJlbGVhc2VTbGlkZXIgKiBjdXJ2ZUZyb21SZWxlYXNlU2xpZGVyVG9EdXJhdGlvbi5sZW5ndGgsIGN1cnZlRnJvbVJlbGVhc2VTbGlkZXJUb0R1cmF0aW9uKTsKICAgIHRoaXMuc2V0VmFsdWVzKGF0dGFja0R1cmF0aW9uLCBkZWNheUR1cmF0aW9uLCBzdXN0YWluU2xpZGVyLCByZWxlYXNlRHVyYXRpb24pOwogIH0KfQoKLy8gc3JjL2p1bm94L2xhZGRlckZpbHRlci5qcwpjbGFzcyBMYWRkZXJGaWx0ZXIgewogIGNvbnN0cnVjdG9yKHNhbXBsZVJhdGUyKSB7CiAgICB0aGlzLnJlc2V0KCk7CiAgICB0aGlzLm55cXVpc3RMaW1pdCA9IHNhbXBsZVJhdGUyICogMC41OwogICAgdGhpcy5waU92ZXJTYW1wbGVSYXRlID0gTWF0aC5QSSAvIHNhbXBsZVJhdGUyOwogIH0KICByZXNldCgpIHsKICAgIHRoaXMuejEgPSAwOwogICAgdGhpcy56MiA9IDA7CiAgICB0aGlzLnozID0gMDsKICAgIHRoaXMuejQgPSAwOwogIH0KICBjYWxjQ3V0b2ZmRmFjdG9yKGZjKSB7CiAgICBpZiAoZmMgPiB0aGlzLm55cXVpc3RMaW1pdCkgewogICAgICBmYyA9IHRoaXMubnlxdWlzdExpbWl0OwogICAgfQogICAgcmV0dXJuIE1hdGgudGFuKGZjICogdGhpcy5waU92ZXJTYW1wbGVSYXRlKTsKICB9CiAgdHJpZ2dlcihpbml0aWFsRXhjaXRlKSB7CiAgICB0aGlzLno0ICs9IGluaXRpYWxFeGNpdGU7CiAgfQogIHByb2Nlc3MoaW5wdXQsIGN1dG9mZkZhY3RvciwgcmVzb25hbmNlLCBtb2RlID0gbGFkZGVyRmlsdGVyTW9kZXMuTFBGNCkgewogICAgY29uc3Qgb25lT3Zlck9uZVBsdXNnID0gMSAvICgxICsgY3V0b2ZmRmFjdG9yKTsKICAgIGNvbnN0IGFscGhhID0gY3V0b2ZmRmFjdG9yICogb25lT3Zlck9uZVBsdXNnOwogICAgY29uc3QgYmV0YTQgPSBvbmVPdmVyT25lUGx1c2c7CiAgICBjb25zdCBiZXRhMyA9IGJldGE0ICogYWxwaGE7CiAgICBjb25zdCBiZXRhMiA9IGJldGEzICogYWxwaGE7CiAgICBjb25zdCBiZXRhMSA9IGJldGEyICogYWxwaGE7CiAgICBjb25zdCBmZWVkYmFjayA9IGJldGExICogdGhpcy56MSArIGJldGEyICogdGhpcy56MiArIGJldGEzICogdGhpcy56MyArIGJldGE0ICogdGhpcy56NDsKICAgIGNvbnN0IGsgPSA0ICogcmVzb25hbmNlOwogICAgY29uc3QgeGluID0gKGlucHV0IC0gayAqIGZlZWRiYWNrKSAvICgxICsgayAqIGFscGhhICogYWxwaGEgKiBhbHBoYSAqIGFscGhhKTsKICAgIGNvbnN0IGxwZjFJbiA9ICh4aW4gLSB0aGlzLnoxKSAqIGFscGhhOwogICAgY29uc3QgbHBmMU91dCA9IGxwZjFJbiArIHRoaXMuejE7CiAgICB0aGlzLnoxID0gbHBmMUluICsgbHBmMU91dDsKICAgIGNvbnN0IGxwZjJJbiA9IChscGYxT3V0IC0gdGhpcy56MikgKiBhbHBoYTsKICAgIGNvbnN0IGxwZjJPdXQgPSBscGYySW4gKyB0aGlzLnoyOwogICAgdGhpcy56MiA9IGxwZjJJbiArIGxwZjJPdXQ7CiAgICBjb25zdCBscGYzSW4gPSAobHBmMk91dCAtIHRoaXMuejMpICogYWxwaGE7CiAgICBjb25zdCBscGYzT3V0ID0gbHBmM0luICsgdGhpcy56MzsKICAgIHRoaXMuejMgPSBscGYzSW4gKyBscGYzT3V0OwogICAgY29uc3QgbHBmNEluID0gKGxwZjNPdXQgLSB0aGlzLno0KSAqIGFscGhhOwogICAgY29uc3QgbHBmNE91dCA9IGxwZjRJbiArIHRoaXMuejQ7CiAgICB0aGlzLno0ID0gbHBmNEluICsgbHBmNE91dDsKICAgIHJldHVybiBtb2RlWzRdICogbHBmNE91dCArIG1vZGVbM10gKiBscGYzT3V0ICsgbW9kZVsyXSAqIGxwZjJPdXQgKyBtb2RlWzFdICogbHBmMU91dCArIG1vZGVbMF0gKiB4aW47CiAgfQp9CmNvbnN0IGxhZGRlckZpbHRlck1vZGVzID0gewogIExQRjI6IEZsb2F0NjRBcnJheS5mcm9tKFswLCAwLCAxLCAwLCAwXSksCiAgTFBGNDogRmxvYXQ2NEFycmF5LmZyb20oWzAsIDAsIDAsIDAsIDFdKSwKICBCUEYyOiBGbG9hdDY0QXJyYXkuZnJvbShbMCwgMiwgLTIsIDAsIDBdKSwKICBCUEYyOiBGbG9hdDY0QXJyYXkuZnJvbShbMCwgMCwgNCwgLTgsIDRdKSwKICBIUEYyOiBGbG9hdDY0QXJyYXkuZnJvbShbMSwgLTIsIDEsIDAsIDBdKSwKICBIUEY0OiBGbG9hdDY0QXJyYXkuZnJvbShbMSwgLTQsIDYsIC00LCAxXSkKfTsKbGFkZGVyRmlsdGVyTW9kZXMuYWxsID0gWwogIGxhZGRlckZpbHRlck1vZGVzLkxQRjIsCiAgbGFkZGVyRmlsdGVyTW9kZXMuTFBGNCwKICBsYWRkZXJGaWx0ZXJNb2Rlcy5CUEYyLAogIGxhZGRlckZpbHRlck1vZGVzLkJQRjQsCiAgbGFkZGVyRmlsdGVyTW9kZXMuSFBGMiwKICBsYWRkZXJGaWx0ZXJNb2Rlcy5IUEY0Cl07CgovLyBzcmMvanVub3gvbm9pc2UuanMKY2xhc3MgTm9pc2UgewogIGNvbnN0cnVjdG9yKHNhbXBsZVJhdGUyLCBmYyA9IDVlMykgewogICAgdGhpcy5fYjEgPSAtTWF0aC5leHAoLTIgKiBmYyAqIE1hdGguUEkgLyBzYW1wbGVSYXRlMik7CiAgICB0aGlzLl9hMCA9IDEgKyB0aGlzLl9iMTsKICAgIHRoaXMuX3oxID0gMDsKICB9CiAgcmVuZGVyKCkgewogICAgY29uc3QgeGluID0gTWF0aC5yYW5kb20oKSAqIDIgLSAxOwogICAgY29uc3QgeG91dCA9IHhpbiAqIHRoaXMuX2EwIC0gdGhpcy5fejE7CiAgICB0aGlzLl96MSA9IHRoaXMuX2IxICogeG91dDsKICAgIHJldHVybiB4b3V0OwogIH0KfQoKLy8gc3JjL2p1bm94L3ZvaWNlLmpzCmNsYXNzIFZvaWNlIHsKICBjb25zdHJ1Y3Rvcih7cGF0Y2gsIHNhbXBsZVJhdGU6IHNhbXBsZVJhdGUyfSkgewogICAgdGhpcy5wYXRjaCA9IHBhdGNoOwogICAgdGhpcy5zYW1wbGVSYXRlID0gc2FtcGxlUmF0ZTI7CiAgICB0aGlzLm5vdGUgPSAtMTsKICAgIHRoaXMudmVsb2NpdHkgPSAwOwogICAgdGhpcy5maWx0ZXJOb3RlRmFjdG9yID0gMDsKICAgIHRoaXMuZGNvID0gbmV3IEp1bm82MERDTyhzYW1wbGVSYXRlMik7CiAgICB0aGlzLm5vaXNlID0gbmV3IE5vaXNlKHNhbXBsZVJhdGUyLCA1ZTMpOwogICAgdGhpcy5tb2RFbnYgPSBuZXcgSnVubzYwRW52ZWxvcGUoc2FtcGxlUmF0ZTIpOwogICAgdGhpcy5hbXBFbnYgPSBuZXcgSnVubzYwRW52ZWxvcGUoc2FtcGxlUmF0ZTIpOwogICAgdGhpcy5tb29nVkNGID0gbmV3IExhZGRlckZpbHRlcihzYW1wbGVSYXRlMik7CiAgfQogIHJlbmRlcihsZm9PdXQsIGRldHVuZUZhY3RvciwgcHdtRGVwdGgsIHNhd0xldmVsLCBwdWxzZUxldmVsLCBzdWJMZXZlbCwgbm9pc2VMZXZlbCwgZmlsdGVyQ3V0b2ZmLCBmaWx0ZXJSZXNvbmFuY2UsIGZpbHRlckVudk1vZCwgbGZvRGV0dW5lT2N0YXZlcywgZmlsdGVyS2V5TW9kKSB7CiAgICBjb25zdCBtb2RFbnZPdXQgPSB0aGlzLm1vZEVudi5yZW5kZXIoKTsKICAgIGNvbnN0IGFtcEVudk91dCA9IHRoaXMuYW1wRW52LnJlbmRlcigpOwogICAgbGV0IHB1bHNlV2lkdGggPSBwd21EZXB0aDsKICAgIGlmICh0aGlzLnBhdGNoLmRjby5wd21Nb2QgPT09ICJsIikgewogICAgICBwdWxzZVdpZHRoICo9IGxmb091dCAqIDAuNSArIDAuNTsKICAgIH0gZWxzZSBpZiAodGhpcy5wYXRjaC5kY28ucHdtTW9kID09PSAiZSIpIHsKICAgICAgcHVsc2VXaWR0aCAqPSBtb2RFbnZPdXQ7CiAgICB9CiAgICBsZXQgZGNvT3V0ID0gdGhpcy5kY28ucmVuZGVyKGRldHVuZUZhY3RvciwgcHVsc2VXaWR0aCwgc2F3TGV2ZWwsIHB1bHNlTGV2ZWwsIHN1YkxldmVsKTsKICAgIGlmIChub2lzZUxldmVsID4gMCkgewogICAgICBkY29PdXQgKz0gdGhpcy5ub2lzZS5yZW5kZXIoKSAqIG5vaXNlTGV2ZWw7CiAgICB9CiAgICBjb25zdCBjdXRvZmZEZXR1bmVPY3RhdmUgPSBmaWx0ZXJDdXRvZmYgKiAyMDAgLyAxMjsKICAgIGNvbnN0IGVudkRldHVuZU9jdGF2ZXMgPSBtb2RFbnZPdXQgKiBmaWx0ZXJFbnZNb2QgKiAxMjsKICAgIGNvbnN0IGtleWJvYXJkRGV0dW5lT2N0YXZlcyA9IGZpbHRlcktleU1vZCAqIHRoaXMuZmlsdGVyTm90ZUZhY3RvcjsKICAgIGNvbnN0IHJlc29uYW5jZURldHVuZU9jdGF2ZXMgPSB0aGlzLnBhdGNoLnZjZi5yZXNvbmFuY2UgKiAwLjU7CiAgICBjb25zdCB2Y2ZDdXRvZmZWYWx1ZSA9IGN1dG9mZkRldHVuZU9jdGF2ZSArIGxmb0RldHVuZU9jdGF2ZXMgKiBhbXBFbnZPdXQgKyBrZXlib2FyZERldHVuZU9jdGF2ZXMgKyBlbnZEZXR1bmVPY3RhdmVzICsgcmVzb25hbmNlRGV0dW5lT2N0YXZlczsKICAgIGNvbnN0IGN1dG9mZkZyZXF1ZW5jeSA9IDcuOCAqIE1hdGgucG93KDIsIHZjZkN1dG9mZlZhbHVlKTsKICAgIGNvbnN0IHZjZk91dCA9IHRoaXMubW9vZ1ZDRi5wcm9jZXNzKGRjb091dCwgdGhpcy5tb29nVkNGLmNhbGNDdXRvZmZGYWN0b3IoY3V0b2ZmRnJlcXVlbmN5KSwgZmlsdGVyUmVzb25hbmNlKTsKICAgIHJldHVybiB0aGlzLnZlbG9jaXR5ICogdmNmT3V0ICogYW1wRW52T3V0OwogIH0KICBub3RlT24obm90ZSwgdmVsb2NpdHkpIHsKICAgIGlmIChub3RlICE9PSB0aGlzLm5vdGUgfHwgdGhpcy5pc0ZpbmlzaGVkKCkpIHsKICAgICAgdGhpcy5ub3RlID0gbm90ZTsKICAgICAgdGhpcy5kY28ubm90ZU9uKG5vdGUpOwogICAgICB0aGlzLm1vZEVudi5yZXNldCgpOwogICAgICB0aGlzLmFtcEVudi5yZXNldCgpOwogICAgICB0aGlzLm1vb2dWQ0YucmVzZXQoKTsKICAgICAgY29uc3QgYzQgPSA2MDsKICAgICAgY29uc3QgZml2ZU9jdGF2ZXMgPSA1ICogMTI7CiAgICAgIHRoaXMuZmlsdGVyTm90ZUZhY3RvciA9IDUgKiAoKHRoaXMubm90ZSAtIGM0KSAvIGZpdmVPY3RhdmVzKTsKICAgIH0KICAgIGlmICghdGhpcy5wYXRjaC5kY28uc2F3ICYmICF0aGlzLnBhdGNoLmRjby5wdWxzZSAmJiAhdGhpcy5wYXRjaC5kY28uc3ViQW1vdW50ICYmICF0aGlzLnBhdGNoLmRjby5ub2lzZSkgewogICAgICBjb25zdCBpbml0aWFsRXhjaXRlID0gdGhpcy5wYXRjaC52Y2YucmVzb25hbmNlICogdGhpcy5wYXRjaC52Y2YucmVzb25hbmNlICogMC4wMTsKICAgICAgdGhpcy5tb29nVkNGLnRyaWdnZXIoaW5pdGlhbEV4Y2l0ZSk7CiAgICB9CiAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7CiAgICB0aGlzLnVwZGF0ZVBhdGNoKHRoaXMucGF0Y2gpOwogICAgdGhpcy5tb2RFbnYudHJpZ2dlcigpOwogICAgdGhpcy5hbXBFbnYudHJpZ2dlcigpOwogIH0KICBub3RlT2ZmKCkgewogICAgdGhpcy5tb2RFbnYucmVsZWFzZSgpOwogICAgdGhpcy5hbXBFbnYucmVsZWFzZSgpOwogIH0KICBpc0ZpbmlzaGVkKCkgewogICAgcmV0dXJuIHRoaXMuYW1wRW52LmlzRmluaXNoZWQoKTsKICB9CiAgdXBkYXRlUGF0Y2gocGF0Y2gpIHsKICAgIGNvbnN0IGVudiA9IHBhdGNoLmVudjsKICAgIHRoaXMubW9kRW52LnNldFZhbHVlc0Zyb21TbGlkZXJzKGVudi5hdHRhY2ssIGVudi5kZWNheSwgZW52LnN1c3RhaW4sIGVudi5yZWxlYXNlKTsKICAgIGlmIChwYXRjaC52Y2FUeXBlID09PSAiZW52IikgewogICAgICB0aGlzLmFtcEVudi5zZXRWYWx1ZXNGcm9tU2xpZGVycyhlbnYuYXR0YWNrLCBlbnYuZGVjYXksIGVudi5zdXN0YWluLCBlbnYucmVsZWFzZSk7CiAgICB9IGVsc2UgewogICAgICB0aGlzLmFtcEVudi5zZXRWYWx1ZXMoMjQ3ZS01LCA1N2UtNCwgMC45OCwgNTdlLTQpOwogICAgfQogICAgdGhpcy5wYXRjaCA9IHBhdGNoOwogIH0KfQoKLy8gc3JjL2p1bm94L3JpbmdCdWZmZXIuanMKY2xhc3MgUmluZ0J1ZmZlciB7CiAgY29uc3RydWN0b3IobWF4QnVmZmVyU2l6ZSkgewogICAgdGhpcy5idWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KG1heEJ1ZmZlclNpemUpOwogICAgdGhpcy53cml0ZUluZGV4ID0gMDsKICAgIHRoaXMubWF4QnVmZmVyU2l6ZSA9IG1heEJ1ZmZlclNpemU7CiAgfQogIHJpbmdCdWZmZXJJbmRleChpbmRleCkgewogICAgaWYgKGluZGV4IDwgMCkgewogICAgICByZXR1cm4gaW5kZXggKyB0aGlzLm1heEJ1ZmZlclNpemU7CiAgICB9CiAgICBpZiAoaW5kZXggPj0gdGhpcy5tYXhCdWZmZXJTaXplKSB7CiAgICAgIHJldHVybiBpbmRleCAtIHRoaXMubWF4QnVmZmVyU2l6ZTsKICAgIH0KICAgIHJldHVybiBpbmRleDsKICB9CiAgcmVhZFNhbXBsZShyZWFkT2Zmc2V0KSB7CiAgICBjb25zdCByZWFkSW5kZXggPSB0aGlzLnJpbmdCdWZmZXJJbmRleCh0aGlzLndyaXRlSW5kZXggLSByZWFkT2Zmc2V0KTsKICAgIGNvbnN0IGluZGV4QSA9IE1hdGguZmxvb3IocmVhZEluZGV4KTsKICAgIGNvbnN0IGZyYWN0aW9uYWwgPSByZWFkSW5kZXggLSBpbmRleEE7CiAgICBjb25zdCBpbmRleEIgPSB0aGlzLnJpbmdCdWZmZXJJbmRleChpbmRleEEgKyAxKTsKICAgIHJldHVybiB0aGlzLmJ1ZmZlcltpbmRleEFdICogKDEgLSBmcmFjdGlvbmFsKSArIHRoaXMuYnVmZmVyW2luZGV4Ql0gKiBmcmFjdGlvbmFsOwogIH0KICB3cml0ZVNhbXBsZShpbnB1dCkgewogICAgdGhpcy5idWZmZXJbdGhpcy53cml0ZUluZGV4XSA9IGlucHV0OwogICAgdGhpcy53cml0ZUluZGV4ID0gKHRoaXMud3JpdGVJbmRleCArIDEpICUgdGhpcy5tYXhCdWZmZXJTaXplOwogIH0KICByZXNldCgpIHsKICAgIHRoaXMuYnVmZmVyLmZpbGwoMCk7CiAgfQp9CgovLyBzcmMvanVub3gvc2ltcGxlU2luZ2xlUG9sZUZpbHRlci5qcwpjbGFzcyBTaW1wbGVTaW5nbGVQb2xlRmlsdGVyIHsKICBjb25zdHJ1Y3RvcihzYW1wbGVSYXRlMiwgZmMgPSA1KSB7CiAgICB0aGlzLl9waU92ZXJTYW1wbGVSYXRlID0gTWF0aC5QSSAvIHNhbXBsZVJhdGUyOwogICAgdGhpcy5fYTAgPSAxOwogICAgdGhpcy5fYjEgPSAwOwogICAgdGhpcy5fejEgPSAwOwogICAgdGhpcy5zZXRDdXRvZmYoZmMpOwogIH0KICByZXNldCgpIHsKICAgIHRoaXMuX3oxID0gMDsKICB9CiAgcmVuZGVyTFAoeGluKSB7CiAgICBjb25zdCB4b3V0ID0geGluICogdGhpcy5fYTAgKyB0aGlzLl96MTsKICAgIHRoaXMuX3oxID0gLXRoaXMuX2IxICogeG91dDsKICAgIHJldHVybiB4b3V0OwogIH0KICByZW5kZXJIUCh4aW4pIHsKICAgIHJldHVybiB4aW4gLSB0aGlzLnJlbmRlckxQKHhpbik7CiAgfQogIHNldEN1dG9mZihmYykgewogICAgdGhpcy5fYjEgPSAtTWF0aC5leHAoLTIgKiBmYyAqIHRoaXMuX3BpT3ZlclNhbXBsZVJhdGUpOwogICAgdGhpcy5fYTAgPSAxICsgdGhpcy5fYjE7CiAgfQp9CgovLyBzcmMvanVub3gvY2hvcnVzLmpzCmNsYXNzIENob3J1cyB7CiAgY29uc3RydWN0b3Ioc2FtcGxlUmF0ZTIpIHsKICAgIHRoaXMubGVmdE91dHB1dCA9IDA7CiAgICB0aGlzLnJpZ2h0T3V0cHV0ID0gMDsKICAgIHRoaXMuX3NhbXBsZVJhdGUgPSBzYW1wbGVSYXRlMjsKICAgIHRoaXMuX2lzVXNlZCA9IGZhbHNlOwogICAgdGhpcy5fbmV4dENob3J1c01vZGUgPSAwOwogICAgdGhpcy5fcmluZ0J1ZmZlciA9IG5ldyBSaW5nQnVmZmVyKE1hdGgudHJ1bmMoc2FtcGxlUmF0ZTIgKiA2ZS0zKSk7CiAgICB0aGlzLl9wcmVGaWx0ZXIgPSBuZXcgU2ltcGxlU2luZ2xlUG9sZUZpbHRlcihzYW1wbGVSYXRlMiwgNzIzNyk7CiAgICB0aGlzLl9wb3N0TGVmdEZpbHRlciA9IG5ldyBTaW1wbGVTaW5nbGVQb2xlRmlsdGVyKHNhbXBsZVJhdGUyLCAxMDY0NCk7CiAgICB0aGlzLl9wb3N0UmlnaHRGaWx0ZXIgPSBuZXcgU2ltcGxlU2luZ2xlUG9sZUZpbHRlcihzYW1wbGVSYXRlMiwgMTA2NDQpOwogICAgdGhpcy5fZHJ5Q3VycmVudCA9IDE7CiAgICB0aGlzLl9kcnlDaGFuZ2UgPSAwOwogICAgdGhpcy5fZHJ5VGFyZ2V0ID0gMTsKICAgIHRoaXMuX2xmb1ZhbHVlID0gMDsKICAgIHRoaXMuX2xmb0luY3JlbWVudCA9IDAuMDE7CiAgICB0aGlzLl9tYXhMZWZ0T2Zmc2V0ID0gMDsKICAgIHRoaXMuX2F2ZXJhZ2VMZWZ0U2FtcGxlcyA9IDA7CiAgICB0aGlzLl9tYXhSaWdodE9mZnNldCA9IDA7CiAgICB0aGlzLl9hdmVyYWdlUmlnaHRTYW1wbGVzID0gMDsKICB9CiAgcmVuZGVyKGlucHV0KSB7CiAgICB0aGlzLl9pc1VzZWQgPSB0cnVlOwogICAgbGV0IGRyeSA9IHRoaXMuX2RyeUN1cnJlbnQ7CiAgICBpZiAodGhpcy5fZHJ5Q2hhbmdlICE9PSAwKSB7CiAgICAgIGRyeSArPSB0aGlzLl9kcnlDaGFuZ2U7CiAgICAgIGlmIChkcnkgPiAxKSB7CiAgICAgICAgZHJ5ID0gMTsKICAgICAgICB0aGlzLl9kcnlDaGFuZ2UgPSAwOwogICAgICAgIHRoaXMudXBkYXRlKHRoaXMuX25leHRDaG9ydXNNb2RlKTsKICAgICAgfSBlbHNlIGlmIChkcnkgPCB0aGlzLl9kcnlUYXJnZXQgJiYgdGhpcy5fZHJ5Q2hhbmdlIDwgMCkgewogICAgICAgIGRyeSA9IHRoaXMuX2RyeVRhcmdldDsKICAgICAgICB0aGlzLl9kcnlDaGFuZ2UgPSAwOwogICAgICB9CiAgICAgIHRoaXMuX2RyeUN1cnJlbnQgPSBkcnk7CiAgICB9CiAgICBpZiAoZHJ5ID09PSAxKSB7CiAgICAgIHRoaXMubGVmdE91dHB1dCA9IGlucHV0OwogICAgICB0aGlzLnJpZ2h0T3V0cHV0ID0gaW5wdXQ7CiAgICAgIHJldHVybjsKICAgIH0KICAgIGxldCBsZm9WYWx1ZSA9IHRoaXMuX2xmb1ZhbHVlICsgdGhpcy5fbGZvSW5jcmVtZW50OwogICAgaWYgKGxmb1ZhbHVlID4gMSB8fCBsZm9WYWx1ZSA8IC0xKSB7CiAgICAgIHRoaXMuX2xmb0luY3JlbWVudCA9IC10aGlzLl9sZm9JbmNyZW1lbnQ7CiAgICAgIGxmb1ZhbHVlID0gdGhpcy5fbGZvVmFsdWUgKyB0aGlzLl9sZm9JbmNyZW1lbnQ7CiAgICB9CiAgICB0aGlzLl9sZm9WYWx1ZSA9IGxmb1ZhbHVlOwogICAgY29uc3QgZHJ5T3V0cHV0ID0gaW5wdXQgKiBkcnk7CiAgICBjb25zdCB3ZXRGYWN0b3IgPSAxIC0gZHJ5OwogICAgY29uc3QgbGVmdERlbGF5U2FtcGxlcyA9IHRoaXMuX2F2ZXJhZ2VMZWZ0U2FtcGxlcyArIGxmb1ZhbHVlICogdGhpcy5fbWF4TGVmdE9mZnNldDsKICAgIGNvbnN0IGxlZnREZWxheWVkVmFsdWUgPSB0aGlzLl9yaW5nQnVmZmVyLnJlYWRTYW1wbGUobGVmdERlbGF5U2FtcGxlcyk7CiAgICB0aGlzLmxlZnRPdXRwdXQgPSBkcnlPdXRwdXQgKyB0aGlzLl9wb3N0TGVmdEZpbHRlci5yZW5kZXJMUChsZWZ0RGVsYXllZFZhbHVlICogd2V0RmFjdG9yKTsKICAgIGNvbnN0IHJpZ2h0RGVsYXlTYW1wbGVzID0gdGhpcy5fYXZlcmFnZVJpZ2h0U2FtcGxlcyArIGxmb1ZhbHVlICogdGhpcy5fbWF4UmlnaHRPZmZzZXQ7CiAgICBjb25zdCByaWdodERlbGF5ZWRWYWx1ZSA9IHRoaXMuX3JpbmdCdWZmZXIucmVhZFNhbXBsZShyaWdodERlbGF5U2FtcGxlcyk7CiAgICB0aGlzLnJpZ2h0T3V0cHV0ID0gZHJ5T3V0cHV0ICsgdGhpcy5fcG9zdFJpZ2h0RmlsdGVyLnJlbmRlckxQKHJpZ2h0RGVsYXllZFZhbHVlICogd2V0RmFjdG9yKTsKICAgIHRoaXMuX3JpbmdCdWZmZXIud3JpdGVTYW1wbGUodGhpcy5fcHJlRmlsdGVyLnJlbmRlckxQKHRoaXMuX2FwcGx5U2F0dXJhdGlvbihpbnB1dCkpKTsKICB9CiAgcmVzZXQoKSB7CiAgICB0aGlzLl9yaW5nQnVmZmVyLnJlc2V0KCk7CiAgICB0aGlzLl9wcmVGaWx0ZXIucmVzZXQoKTsKICAgIHRoaXMuX3Bvc3RMZWZ0RmlsdGVyLnJlc2V0KCk7CiAgICB0aGlzLl9wb3N0UmlnaHRGaWx0ZXIucmVzZXQoKTsKICAgIHRoaXMuX2lzVXNlZCA9IGZhbHNlOwogIH0KICB1cGRhdGUoY2hvcnVzTW9kZSkgewogICAgaWYgKHRoaXMuX2RyeUN1cnJlbnQgPCAxICYmICF0aGlzLl9pc1VzZWQpIHsKICAgICAgdGhpcy5fZHJ5Q2hhbmdlID0gNWUtNDsKICAgICAgdGhpcy5fZHJ5VGFyZ2V0ID0gMTsKICAgICAgdGhpcy5fbmV4dENob3J1c01vZGUgPSBjaG9ydXNNb2RlOwogICAgfSBlbHNlIHsKICAgICAgc3dpdGNoIChjaG9ydXNNb2RlKSB7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgdGhpcy5fdXBkYXRlVmFsdWVzKDAuNTEzLCAwLjQ0LCAxNTRlLTUsIDUxNWUtNSwgMTUxZS01LCA1NGUtNCwgdHJ1ZSk7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlIDI6CiAgICAgICAgICB0aGlzLl91cGRhdGVWYWx1ZXMoMC44NjMsIDAuNDQsIDE1NGUtNSwgNTE1ZS01LCAxNTFlLTUsIDU0ZS00LCB0cnVlKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgMzoKICAgICAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlcyg5Ljc1LCAwLjQ0LCAzMjJlLTUsIDM1NmUtNSwgMzI4ZS01LCAzNjVlLTUsIGZhbHNlKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB0aGlzLl91cGRhdGVWYWx1ZXMoMC41MTMsIDEsIDE1NGUtNSwgNTE1ZS01LCAxNTFlLTUsIDU0ZS00LCB0cnVlKTsKICAgICAgICAgIHRoaXMuX3JpbmdCdWZmZXIucmVzZXQoKTsKICAgICAgICAgIGJyZWFrOwogICAgICB9CiAgICB9CiAgfQogIF9hcHBseVNhdHVyYXRpb24oaW5wdXQpIHsKICAgIHJldHVybiBpbnB1dDsKICB9CiAgX3VwZGF0ZVZhbHVlcyhmcmVxLCBkcnksIG1pbkxlZnREZWxheSwgbWF4TGVmdERlbGF5LCBtaW5SaWdodERlbGF5LCBtYXhSaWdodERlbGF5LCBpc1N0ZXJlbykgewogICAgY29uc3QgYXZlcmFnZUxlZnREZWxheSA9IChtaW5MZWZ0RGVsYXkgKyBtYXhMZWZ0RGVsYXkpICogMC41OwogICAgY29uc3QgbWF4TGVmdE9mZnNldCA9IG1heExlZnREZWxheSAtIGF2ZXJhZ2VMZWZ0RGVsYXk7CiAgICB0aGlzLl9hdmVyYWdlTGVmdFNhbXBsZXMgPSBhdmVyYWdlTGVmdERlbGF5ICogdGhpcy5fc2FtcGxlUmF0ZTsKICAgIHRoaXMuX21heExlZnRPZmZzZXQgPSBtYXhMZWZ0T2Zmc2V0ICogdGhpcy5fc2FtcGxlUmF0ZTsKICAgIGNvbnN0IGF2ZXJhZ2VSaWdodERlbGF5ID0gKG1pblJpZ2h0RGVsYXkgKyBtYXhSaWdodERlbGF5KSAqIDAuNTsKICAgIGNvbnN0IG1heFJpZ2h0T2Zmc2V0ID0gbWF4UmlnaHREZWxheSAtIGF2ZXJhZ2VSaWdodERlbGF5OwogICAgdGhpcy5fYXZlcmFnZVJpZ2h0U2FtcGxlcyA9IGF2ZXJhZ2VSaWdodERlbGF5ICogdGhpcy5fc2FtcGxlUmF0ZTsKICAgIHRoaXMuX21heFJpZ2h0T2Zmc2V0ID0gbWF4UmlnaHRPZmZzZXQgKiB0aGlzLl9zYW1wbGVSYXRlICogKGlzU3RlcmVvID8gLTEgOiAxKTsKICAgIHRoaXMuX2RyeVRhcmdldCA9IGRyeTsKICAgIGlmICghdGhpcy5faXNVc2VkKSB7CiAgICAgIHRoaXMuX2RyeUNoYW5nZSA9IGRyeTsKICAgIH0KICAgIHRoaXMuX2RyeUNoYW5nZSA9IChkcnkgLSB0aGlzLl9kcnlDdXJyZW50KSAvIDFlMzsKICAgIHRoaXMuX2xmb0luY3JlbWVudCA9IE1hdGguc2lnbih0aGlzLl9sZm9JbmNyZW1lbnQpICogNCAqIGZyZXEgLyB0aGlzLl9zYW1wbGVSYXRlOwogIH0KfQoKLy8gc3JjL2p1bm94L2xmby5qcwpjbGFzcyBMRk8gewogIGNvbnN0cnVjdG9yKHNhbXBsZVJhdGUyKSB7CiAgICB0aGlzLl9vbmVPdmVyU2FtcGxlUmF0ZSA9IDEgLyBzYW1wbGVSYXRlMjsKICAgIHRoaXMuX3BoYXNlSW5jcmVtZW50ID0gMDsKICAgIHRoaXMuY3VycmVudFBoYXNlID0gMTsKICAgIHRoaXMuY3VycmVudFZhbHVlID0gMDsKICAgIHRoaXMuaXNSZXN0YXJ0ZWQgPSBmYWxzZTsKICAgIHRoaXMud2F2ZWZvcm0gPSAidHJpYW5nbGUiOwogIH0KICByZXNldCgpIHsKICAgIHRoaXMuY3VycmVudFBoYXNlID0gMTsKICAgIHRoaXMuY3VycmVudFZhbHVlID0gMDsKICB9CiAgcmVuZGVyKCkgewogICAgdGhpcy5pc1Jlc3RhcnRlZCA9IGZhbHNlOwogICAgdGhpcy5jdXJyZW50UGhhc2UgKz0gdGhpcy5fcGhhc2VJbmNyZW1lbnQ7CiAgICBpZiAodGhpcy5jdXJyZW50UGhhc2UgPiAxKSB7CiAgICAgIHRoaXMuaXNSZXN0YXJ0ZWQgPSB0cnVlOwogICAgICB0aGlzLmN1cnJlbnRQaGFzZSAtPSAxOwogICAgfQogICAgbGV0IHZhbHVlID0gMDsKICAgIHN3aXRjaCAodGhpcy53YXZlZm9ybSkgewogICAgICBjYXNlICJub25lIjoKICAgICAgICB2YWx1ZSA9IDA7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgInNpbmUiOgogICAgICAgIHZhbHVlID0gTWF0aC5zaW4odGhpcy5jdXJyZW50UGhhc2UgKiAyICogTWF0aC5QSSk7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgInNxdWFyZSI6CiAgICAgICAgdmFsdWUgPSB0aGlzLmN1cnJlbnRQaGFzZSA+IDAuNSA/IC0xIDogMTsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAicmFuZG9tIjoKICAgICAgICB2YWx1ZSA9IHRoaXMuaXNSZXN0YXJ0ZWQgPyBNYXRoLnJhbmRvbSgpICogMiAtIDEgOiB0aGlzLmN1cnJlbnRWYWx1ZTsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAibm9pc2UiOgogICAgICAgIHZhbHVlID0gTWF0aC5yYW5kb20oKSAqIDIgLSAxOwogICAgICAgIGJyZWFrOwogICAgICBkZWZhdWx0OgogICAgICAgIHZhbHVlID0gdGhpcy5jdXJyZW50UGhhc2UgKiA0OwogICAgICAgIGlmICh2YWx1ZSA+IDEpIHsKICAgICAgICAgIHZhbHVlID0gMiAtIHZhbHVlOwogICAgICAgIH0KICAgICAgICBpZiAodmFsdWUgPCAtMSkgewogICAgICAgICAgdmFsdWUgPSAtMiAtIHZhbHVlOwogICAgICAgIH0KICAgICAgICBicmVhazsKICAgIH0KICAgIHJldHVybiB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbHVlOwogIH0KICBzZXRSYXRlKGZyZXF1ZW5jeSkgewogICAgdGhpcy5fcGhhc2VJbmNyZW1lbnQgPSBmcmVxdWVuY3kgKiB0aGlzLl9vbmVPdmVyU2FtcGxlUmF0ZTsKICB9Cn0KCi8vIHNyYy9qdW5veC9sZm9XaXRoRW52ZWxvcGUuanMKY2xhc3MgTEZPV2l0aEVudmVsb3BlIGV4dGVuZHMgTEZPIHsKICBjb25zdHJ1Y3RvcihzYW1wbGVSYXRlMikgewogICAgc3VwZXIoc2FtcGxlUmF0ZTIpOwogICAgY29uc3Qgc2VnbWVudHMgPSBbCiAgICAgIHRoaXMuX2RlbGF5ID0gbmV3IERlbGF5U2VnbWVudChzYW1wbGVSYXRlMiksCiAgICAgIHRoaXMuX2F0dGFjayA9IG5ldyBBdHRhY2tTZWdtZW50KHNhbXBsZVJhdGUyLCAwLjAzLCAxLCB0cnVlKSwKICAgICAgdGhpcy5fcmVsZWFzZSA9IG5ldyBEZWNheVNlZ21lbnQoc2FtcGxlUmF0ZTIsIDAuMDI1LCAwLCBmYWxzZSksCiAgICAgIHRoaXMuX3NodXRkb3duID0gbmV3IFNodXRkb3duU2VnbWVudChzYW1wbGVSYXRlMiwgMWUtMykKICAgIF07CiAgICB0aGlzLl9yZWxlYXNlLnNldER1cmF0aW9uKDAuMSk7CiAgICB0aGlzLl9lbnYgPSBuZXcgQWJzdHJhY3RFbnZlbG9wZShzZWdtZW50cyk7CiAgfQogIGlzQWN0aXZlKCkgewogICAgcmV0dXJuICF0aGlzLl9lbnYuaXNGaW5pc2hlZCgpOwogIH0KICB0cmlnZ2VyKCkgewogICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHsKICAgICAgdGhpcy5jdXJyZW50UGhhc2UgPSAxOwogICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IDA7CiAgICB9CiAgICBpZiAodGhpcy5fZW52LmlzRmluaXNoZWQoKSB8fCAhdGhpcy5fZW52LmlzUmVsZWFzZWQoKSkgewogICAgICB0aGlzLl9lbnYudHJpZ2dlcigpOwogICAgfQogIH0KICByZWxlYXNlKCkgewogICAgdGhpcy5fZW52LnJlbGVhc2UoKTsKICB9CiAgc2h1dGRvd24oKSB7CiAgICB0aGlzLl9lbnYuc2h1dGRvd24oKTsKICB9CiAgcmVzZXQoKSB7CiAgICBzdXBlci5yZXNldCgpOwogICAgdGhpcy5fZW52LnJlc2V0KCk7CiAgfQogIHJlbmRlcigpIHsKICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSB7CiAgICAgIHJldHVybiAwOwogICAgfQogICAgY29uc3QgZW52VmFsdWUgPSB0aGlzLl9lbnYucmVuZGVyKCk7CiAgICBpZiAoZW52VmFsdWUgPT09IDApIHsKICAgICAgcmV0dXJuIDA7CiAgICB9CiAgICByZXR1cm4gZW52VmFsdWUgKiBzdXBlci5yZW5kZXIoKTsKICB9CiAgc2V0VmFsdWVzKGZyZXF1ZW5jeSwgZGVsYXlEdXJhdGlvbiwgYXR0YWNrRHVyYXRpb24pIHsKICAgIHRoaXMuc2V0UmF0ZShmcmVxdWVuY3kpOwogICAgdGhpcy5fZGVsYXkuc2V0RHVyYXRpb24oZGVsYXlEdXJhdGlvbik7CiAgICB0aGlzLl9hdHRhY2suc2V0RHVyYXRpb24oYXR0YWNrRHVyYXRpb24pOwogIH0KfQoKLy8gc3JjL2p1bm94L2p1bm94LmpzCmNvbnN0IHN5bnRoU3RhdHVzID0gewogIFNJTEVOVDogMCwKICBOT1RFU19BQ1RJVkU6IDQKfTsKY2xhc3MgSnVub3ggewogIGNvbnN0cnVjdG9yKHtwYXRjaCwgc2FtcGxlUmF0ZTogc2FtcGxlUmF0ZTIsIHBvbHlwaG9ueX0pIHsKICAgIHRoaXMucGF0Y2ggPSBwYXRjaDsKICAgIHRoaXMuc2FtcGxlUmF0ZSA9IHNhbXBsZVJhdGUyOwogICAgdGhpcy5tYXhWb2ljZXMgPSBwb2x5cGhvbnk7CiAgICB0aGlzLnZvaWNlcyA9IFtdOwogICAgdGhpcy5zdGF0dXMgPSBzeW50aFN0YXR1cy5TSUxFTlQ7CiAgICB0aGlzLnBhcmFtZXRlcnMgPSBbCiAgICAgIHRoaXMuYmVuZEFtb3VudFBhcmFtID0gbmV3IFNtb290aE1vdmVzKDAsIHNhbXBsZVJhdGUyKSwKICAgICAgdGhpcy5kY29CZW5kRGVwdGhQYXJhbSA9IG5ldyBTbW9vdGhNb3ZlcygxLCBzYW1wbGVSYXRlMiksCiAgICAgIHRoaXMucGl0Y2hMZm9Nb2REZXB0aFBhcmFtID0gbmV3IFNtb290aE1vdmVzKDAsIHNhbXBsZVJhdGUyKSwKICAgICAgdGhpcy5wd21EZXB0aFBhcmFtID0gbmV3IFNtb290aE1vdmVzKDAsIHNhbXBsZVJhdGUyKSwKICAgICAgdGhpcy5zYXdMZXZlbFBhcmFtID0gbmV3IFNtb290aE1vdmVzKDAsIHNhbXBsZVJhdGUyKSwKICAgICAgdGhpcy5wdWxzZUxldmVsUGFyYW0gPSBuZXcgU21vb3RoTW92ZXMoMCwgc2FtcGxlUmF0ZTIpLAogICAgICB0aGlzLnN1YkxldmVsUGFyYW0gPSBuZXcgU21vb3RoTW92ZXMoMCwgc2FtcGxlUmF0ZTIpLAogICAgICB0aGlzLm5vaXNlTGV2ZWxQYXJhbSA9IG5ldyBTbW9vdGhNb3ZlcygwLCBzYW1wbGVSYXRlMiksCiAgICAgIHRoaXMuZmlsdGVyQ3V0b2ZmUGFyYW0gPSBuZXcgU21vb3RoTW92ZXMoMCwgc2FtcGxlUmF0ZTIpLAogICAgICB0aGlzLmZpbHRlclJlc29uYW5jZVBhcmFtID0gbmV3IFNtb290aE1vdmVzKDAsIHNhbXBsZVJhdGUyKSwKICAgICAgdGhpcy5maWx0ZXJCZW5kRGVwdGhQYXJhbSA9IG5ldyBTbW9vdGhNb3ZlcygxLCBzYW1wbGVSYXRlMiksCiAgICAgIHRoaXMuZmlsdGVyRW52TW9kUGFyYW0gPSBuZXcgU21vb3RoTW92ZXMoMCwgc2FtcGxlUmF0ZTIpLAogICAgICB0aGlzLmZpbHRlckxmb01vZFBhcmFtID0gbmV3IFNtb290aE1vdmVzKDAsIHNhbXBsZVJhdGUyKSwKICAgICAgdGhpcy5maWx0ZXJLZXlNb2RQYXJhbSA9IG5ldyBTbW9vdGhNb3ZlcygwLCBzYW1wbGVSYXRlMiksCiAgICAgIHRoaXMudmNhR2FpbkZhY3RvclBhcmFtID0gbmV3IFNtb290aE1vdmVzKDAsIHNhbXBsZVJhdGUyKQogICAgXTsKICAgIHRoaXMubGZvID0gbmV3IExGT1dpdGhFbnZlbG9wZShzYW1wbGVSYXRlMik7CiAgICB0aGlzLmxmby53YXZlZm9ybSA9ICJzaW5lIjsKICAgIHRoaXMuaHBmID0gbmV3IFNpbXBsZVNpbmdsZVBvbGVGaWx0ZXIoc2FtcGxlUmF0ZTIpOwogICAgdGhpcy5jaG9ydXMgPSBuZXcgQ2hvcnVzKHNhbXBsZVJhdGUyKTsKICAgIHRoaXMudXBkYXRlKCk7CiAgfQogIG5vdGVPbihub3RlLCB2ZWxvY2l0eSkgewogICAgdGhpcy5zdGF0dXMgPSBzeW50aFN0YXR1cy5OT1RFU19BQ1RJVkU7CiAgICBjb25zdCB2b2ljZUluZGV4ID0gdGhpcy52b2ljZXMuZmluZEluZGV4KCh2b2ljZTIpID0+IHZvaWNlMi5ub3RlID09PSBub3RlKTsKICAgIGlmICh2b2ljZUluZGV4ID49IDApIHsKICAgICAgdGhpcy52b2ljZXNbdm9pY2VJbmRleF0ubm90ZU9uKG5vdGUsIHZlbG9jaXR5KTsKICAgICAgcmV0dXJuOwogICAgfQogICAgaWYgKCF0aGlzLnZvaWNlcy5sZW5ndGggJiYgdGhpcy5wYXRjaC5sZm8uYXV0b1RyaWdnZXIpIHsKICAgICAgdGhpcy5sZm8udHJpZ2dlcigpOwogICAgfQogICAgY29uc3QgbmV3Vm9pY2UgPSBuZXcgVm9pY2Uoe3BhdGNoOiB0aGlzLnBhdGNoLCBzYW1wbGVSYXRlOiB0aGlzLnNhbXBsZVJhdGV9KTsKICAgIG5ld1ZvaWNlLm5vdGVPbihub3RlLCB2ZWxvY2l0eSk7CiAgICBpZiAodGhpcy52b2ljZXMubGVuZ3RoIDwgdGhpcy5tYXhWb2ljZXMpIHsKICAgICAgdGhpcy52b2ljZXMucHVzaChuZXdWb2ljZSk7CiAgICAgIHJldHVybjsKICAgIH0KICAgIHRoaXMudm9pY2VzWzBdID0gbmV3Vm9pY2U7CiAgfQogIG5vdGVPZmYobm90ZSkgewogICAgdGhpcy52b2ljZXMuZm9yRWFjaCgodm9pY2UyKSA9PiB2b2ljZTIubm90ZSA9PT0gbm90ZSAmJiAhdm9pY2UyLmlzRmluaXNoZWQoKSAmJiB2b2ljZTIubm90ZU9mZigpKTsKICB9CiAgcGl0Y2hCZW5kKHZhbHVlKSB7CiAgICB0aGlzLmJlbmRBbW91bnRQYXJhbS5zZXRWYWx1ZSh2YWx1ZSk7CiAgfQogIGxmb1RyaWdnZXIoKSB7CiAgICB0aGlzLmxmby50cmlnZ2VyKCk7CiAgfQogIGxmb1JlbGVhc2UoKSB7CiAgICB0aGlzLmxmby5yZWxlYXNlKCk7CiAgfQogIHJlbmRlcihvdXRMLCBvdXRSKSB7CiAgICBpZiAodGhpcy5zdGF0dXMgPT09IHN5bnRoU3RhdHVzLlNJTEVOVCkgewogICAgICByZXR1cm47CiAgICB9CiAgICB0aGlzLnN0YXR1cy0tOwogICAgdGhpcy52b2ljZXMgPSB0aGlzLnZvaWNlcy5maWx0ZXIoKHZvaWNlMikgPT4gIXZvaWNlMi5pc0ZpbmlzaGVkKCkpOwogICAgaWYgKHRoaXMudm9pY2VzLmxlbmd0aCkgewogICAgICB0aGlzLnN0YXR1cyA9IHN5bnRoU3RhdHVzLk5PVEVTX0FDVElWRTsKICAgIH0KICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0TC5sZW5ndGg7IGkrKykgewogICAgICBjb25zdCBiZW5kQW1vdW50ID0gdGhpcy5iZW5kQW1vdW50UGFyYW0uZ2V0TmV4dFZhbHVlKCk7CiAgICAgIGNvbnN0IGRjb0JlbmREZXB0aCA9IHRoaXMuZGNvQmVuZERlcHRoUGFyYW0uZ2V0TmV4dFZhbHVlKCk7CiAgICAgIGNvbnN0IHB3bURlcHRoID0gdGhpcy5wd21EZXB0aFBhcmFtLmdldE5leHRWYWx1ZSgpOwogICAgICBjb25zdCBwaXRjaExmb01vZERlcHRoID0gdGhpcy5waXRjaExmb01vZERlcHRoUGFyYW0uZ2V0TmV4dFZhbHVlKCk7CiAgICAgIGNvbnN0IHNhd0xldmVsID0gdGhpcy5zYXdMZXZlbFBhcmFtLmdldE5leHRWYWx1ZSgpOwogICAgICBjb25zdCBwdWxzZUxldmVsID0gdGhpcy5wdWxzZUxldmVsUGFyYW0uZ2V0TmV4dFZhbHVlKCk7CiAgICAgIGNvbnN0IHN1YkxldmVsID0gdGhpcy5zdWJMZXZlbFBhcmFtLmdldE5leHRWYWx1ZSgpOwogICAgICBjb25zdCBub2lzZUxldmVsID0gdGhpcy5ub2lzZUxldmVsUGFyYW0uZ2V0TmV4dFZhbHVlKCk7CiAgICAgIGNvbnN0IGZpbHRlckN1dG9mZiA9IHRoaXMuZmlsdGVyQ3V0b2ZmUGFyYW0uZ2V0TmV4dFZhbHVlKCk7CiAgICAgIGNvbnN0IGZpbHRlclJlc29uYW5jZSA9IHRoaXMuZmlsdGVyUmVzb25hbmNlUGFyYW0uZ2V0TmV4dFZhbHVlKCk7CiAgICAgIGNvbnN0IGZpbHRlckJlbmREZXB0aCA9IHRoaXMuZmlsdGVyQmVuZERlcHRoUGFyYW0uZ2V0TmV4dFZhbHVlKCk7CiAgICAgIGNvbnN0IGZpbHRlckVudk1vZCA9IHRoaXMuZmlsdGVyRW52TW9kUGFyYW0uZ2V0TmV4dFZhbHVlKCk7CiAgICAgIGNvbnN0IGZpbHRlckxmb01vZCA9IHRoaXMuZmlsdGVyTGZvTW9kUGFyYW0uZ2V0TmV4dFZhbHVlKCk7CiAgICAgIGNvbnN0IGZpbHRlcktleU1vZCA9IHRoaXMuZmlsdGVyS2V5TW9kUGFyYW0uZ2V0TmV4dFZhbHVlKCk7CiAgICAgIGNvbnN0IHZjYUdhaW5GYWN0b3IgPSB0aGlzLnZjYUdhaW5GYWN0b3JQYXJhbS5nZXROZXh0VmFsdWUoKTsKICAgICAgaWYgKGkgPT09IDApIHsKICAgICAgfQogICAgICBjb25zdCBsZm9PdXQgPSB0aGlzLmxmby5yZW5kZXIoKTsKICAgICAgY29uc3QgZGNvRGV0dW5lT2N0YXZlcyA9IGxmb091dCAqIHBpdGNoTGZvTW9kRGVwdGggKiAwLjI1ICsgYmVuZEFtb3VudCAqIGRjb0JlbmREZXB0aCAqIDcgLyAxMjsKICAgICAgbGV0IGRjb0RldHVuZUZhY3RvciA9IHRoaXMucGF0Y2guZGNvLnJhbmdlOwogICAgICBpZiAoZGNvRGV0dW5lT2N0YXZlcyAhPT0gMCkgewogICAgICAgIGRjb0RldHVuZUZhY3RvciAqPSBNYXRoLnBvdygyLCBkY29EZXR1bmVPY3RhdmVzKTsKICAgICAgfQogICAgICBjb25zdCBmaWx0ZXJEZXR1bmVPY3RhdmVzID0gYmVuZEFtb3VudCAqIGZpbHRlckJlbmREZXB0aCAqIDQgKyBmaWx0ZXJMZm9Nb2QgKiBsZm9PdXQgKiAzOwogICAgICBsZXQgbW9ub091dCA9IDA7CiAgICAgIGZvciAobGV0IHYgPSAwOyB2IDwgdGhpcy52b2ljZXMubGVuZ3RoOyB2KyspIHsKICAgICAgICBjb25zdCB2b2ljZTIgPSB0aGlzLnZvaWNlc1t2XTsKICAgICAgICBpZiAoIXZvaWNlMi5pc0ZpbmlzaGVkKCkpIHsKICAgICAgICAgIG1vbm9PdXQgKz0gdm9pY2UyLnJlbmRlcihsZm9PdXQsIGRjb0RldHVuZUZhY3RvciwgcHdtRGVwdGgsIHNhd0xldmVsLCBwdWxzZUxldmVsLCBzdWJMZXZlbCwgbm9pc2VMZXZlbCwgZmlsdGVyQ3V0b2ZmLCBmaWx0ZXJSZXNvbmFuY2UsIGZpbHRlckVudk1vZCwgZmlsdGVyRGV0dW5lT2N0YXZlcywgZmlsdGVyS2V5TW9kKTsKICAgICAgICB9CiAgICAgIH0KICAgICAgaWYgKHRoaXMucGF0Y2guaHBmID4gMCkgewogICAgICAgIGxldCBsb3dQYXNzT3V0ID0gdGhpcy5ocGYucmVuZGVyTFAobW9ub091dCk7CiAgICAgICAgaWYgKHRoaXMucGF0Y2guaHBmIDwgMC4yNSkgewogICAgICAgICAgbG93UGFzc091dCAqPSB0aGlzLnBhdGNoLmhwZiAqIDQ7CiAgICAgICAgfQogICAgICAgIG1vbm9PdXQgLT0gbG93UGFzc091dDsKICAgICAgfQogICAgICBtb25vT3V0ICo9IHZjYUdhaW5GYWN0b3I7CiAgICAgIG1vbm9PdXQgPSBmYXN0VGFuaCgzICogbW9ub091dCk7CiAgICAgIHRoaXMuY2hvcnVzLnJlbmRlcihtb25vT3V0KTsKICAgICAgb3V0TFtpXSA9IHRoaXMuY2hvcnVzLmxlZnRPdXRwdXQ7CiAgICAgIG91dFJbaV0gPSB0aGlzLmNob3J1cy5yaWdodE91dHB1dDsKICAgIH0KICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gc3ludGhTdGF0dXMuU0lMRU5UKSB7CiAgICAgIGxldCBmYWRlTGV2ZWwgPSAxOwogICAgICBjb25zdCBmYWRlU3RlcCA9IGZhZGVMZXZlbCAvIG91dEwubGVuZ3RoOwogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dEwubGVuZ3RoOyBpKyspIHsKICAgICAgICBvdXRMW2ldICo9IGZhZGVMZXZlbDsKICAgICAgICBvdXRSW2ldICo9IGZhZGVMZXZlbDsKICAgICAgICBmYWRlTGV2ZWwgLT0gZmFkZVN0ZXA7CiAgICAgIH0KICAgICAgaWYgKHRoaXMucGF0Y2gubGZvLmF1dG9UcmlnZ2VyKSB7CiAgICAgICAgdGhpcy5sZm8ucmVzZXQoKTsKICAgICAgfQogICAgICB0aGlzLmhwZi5yZXNldCgpOwogICAgICB0aGlzLmNob3J1cy5yZXNldCgpOwogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFyYW1ldGVycy5sZW5ndGg7IGkrKykgewogICAgICAgIHRoaXMucGFyYW1ldGVyc1tpXS5yZXNldCgpOwogICAgICB9CiAgICB9CiAgfQogIHNldFZhbHVlKHBhdGgsIHZhbHVlKSB7CiAgICBjb25zdCBwYXRoU2VnbWVudHMgPSBwYXRoLnNwbGl0KCIuIik7CiAgICBpZiAocGF0aFNlZ21lbnRzLmxlbmd0aCkgewogICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5wYXRjaDsKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoU2VnbWVudHMubGVuZ3RoIC0gMTsgaSsrKSB7CiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0W3BhdGhTZWdtZW50c1tpXV0gfHwgKHRhcmdldFtwYXRoU2VnbWVudHNbaV1dID0ge30pOwogICAgICB9CiAgICAgIHRhcmdldFtwYXRoU2VnbWVudHNbcGF0aFNlZ21lbnRzLmxlbmd0aCAtIDFdXSA9IHZhbHVlOwogICAgICB0aGlzLnVwZGF0ZSgpOwogICAgfQogIH0KICB1cGRhdGUoKSB7CiAgICBsZXQgaXNBY3RpdmUgPSBmYWxzZTsKICAgIGZvciAobGV0IHYgPSAwOyB2IDwgdGhpcy52b2ljZXMubGVuZ3RoOyB2KyspIHsKICAgICAgY29uc3Qgdm9pY2UyID0gdGhpcy52b2ljZXNbdl07CiAgICAgIHZvaWNlMi51cGRhdGVQYXRjaCh0aGlzLnBhdGNoKTsKICAgICAgaXNBY3RpdmUgPSBpc0FjdGl2ZSB8fCAhdm9pY2UyLmlzRmluaXNoZWQoKTsKICAgIH0KICAgIGxldCBzYXdMZXZlbCA9IHRoaXMucGF0Y2guZGNvLnNhdyA/IDAuMiA6IDA7CiAgICBsZXQgcHVsc2VMZXZlbCA9IHRoaXMucGF0Y2guZGNvLnB1bHNlID8gMC4yIDogMDsKICAgIGxldCBzdWJMZXZlbCA9IHRoaXMucGF0Y2guZGNvLnN1YiA/IHRoaXMucGF0Y2guZGNvLnN1YkFtb3VudCAqIDAuMTk1IDogMDsKICAgIGxldCBub2lzZUxldmVsID0gdGhpcy5wYXRjaC5kY28ubm9pc2UgKiAwLjIxOwogICAgbGV0IG1peEZhY3RvciA9IHNhd0xldmVsICsgcHVsc2VMZXZlbCArIHN1YkxldmVsICsgbm9pc2VMZXZlbDsKICAgIGlmIChtaXhGYWN0b3IgPiAwLjI2KSB7CiAgICAgIG1peEZhY3RvciA9IDAuMjYgLyAoMC4yNiArIChtaXhGYWN0b3IgLSAwLjI2KSAqIDAuMyk7CiAgICAgIHB1bHNlTGV2ZWwgKj0gbWl4RmFjdG9yOwogICAgICBzYXdMZXZlbCAqPSBtaXhGYWN0b3I7CiAgICAgIHN1YkxldmVsICo9IG1peEZhY3RvcjsKICAgICAgbm9pc2VMZXZlbCAqPSBtaXhGYWN0b3I7CiAgICB9CiAgICB0aGlzLnNhd0xldmVsUGFyYW0uc2V0VmFsdWUoc2F3TGV2ZWwsIGlzQWN0aXZlKTsKICAgIHRoaXMucHVsc2VMZXZlbFBhcmFtLnNldFZhbHVlKHB1bHNlTGV2ZWwsIGlzQWN0aXZlKTsKICAgIHRoaXMuc3ViTGV2ZWxQYXJhbS5zZXRWYWx1ZShzdWJMZXZlbCwgaXNBY3RpdmUpOwogICAgdGhpcy5ub2lzZUxldmVsUGFyYW0uc2V0VmFsdWUobm9pc2VMZXZlbCwgaXNBY3RpdmUpOwogICAgdGhpcy5waXRjaExmb01vZERlcHRoUGFyYW0uc2V0VmFsdWUodGhpcy5wYXRjaC5kY28ubGZvLCBpc0FjdGl2ZSk7CiAgICB0aGlzLnB3bURlcHRoUGFyYW0uc2V0VmFsdWUodGhpcy5wYXRjaC5kY28ucHdtLCBpc0FjdGl2ZSk7CiAgICBjb25zdCBlbnZNb2REaXJlY3Rpb24gPSB0aGlzLnBhdGNoLnZjZi5tb2RQb3NpdGl2ZSA/IDEgOiAtMTsKICAgIHRoaXMuZmlsdGVyQ3V0b2ZmUGFyYW0uc2V0VmFsdWUodGhpcy5wYXRjaC52Y2YuZnJlcXVlbmN5LCBpc0FjdGl2ZSk7CiAgICB0aGlzLmZpbHRlclJlc29uYW5jZVBhcmFtLnNldFZhbHVlKHRoaXMucGF0Y2gudmNmLnJlc29uYW5jZSwgaXNBY3RpdmUpOwogICAgdGhpcy5maWx0ZXJFbnZNb2RQYXJhbS5zZXRWYWx1ZSh0aGlzLnBhdGNoLnZjZi5lbnZNb2QgKiBlbnZNb2REaXJlY3Rpb24sIGlzQWN0aXZlKTsKICAgIHRoaXMuZmlsdGVyTGZvTW9kUGFyYW0uc2V0VmFsdWUodGhpcy5wYXRjaC52Y2YubGZvTW9kLCBpc0FjdGl2ZSk7CiAgICB0aGlzLmZpbHRlcktleU1vZFBhcmFtLnNldFZhbHVlKHRoaXMucGF0Y2gudmNmLmtleU1vZCwgaXNBY3RpdmUpOwogICAgdGhpcy5jaG9ydXMudXBkYXRlKHRoaXMucGF0Y2guY2hvcnVzKTsKICAgIHNldExmb1ZhbHVlc0Zyb21TbGlkZXJzKHRoaXMubGZvLCB0aGlzLnBhdGNoLmxmby5mcmVxdWVuY3ksIHRoaXMucGF0Y2gubGZvLmRlbGF5KTsKICAgIHNldEhwZlZhbHVlc0Zyb21TbGlkZXJzKHRoaXMuaHBmLCB0aGlzLnBhdGNoLmhwZik7CiAgICBjb25zdCB2Y2FHYWluRmFjdG9yID0gTWF0aC5wb3coMS4yNTg5LCB0aGlzLnBhdGNoLnZjYSAqIDEwKSAqIDAuMTsKICAgIHRoaXMudmNhR2FpbkZhY3RvclBhcmFtLnNldFZhbHVlKHZjYUdhaW5GYWN0b3IsIGlzQWN0aXZlKTsKICB9CiAgcGFuaWMoKSB7CiAgICB0aGlzLnZvaWNlcyA9IFtdOwogIH0KfQpjb25zdCBjdXJ2ZUZyb21MZm9SYXRlU2xpZGVyVG9GcmVxID0gWzAuMywgMC44NSwgMy4zOSwgMTEuNDksIDIyLjIyXTsKY29uc3QgY3VydmVGcm9tTGZvRGVsYXlTbGlkZXJUb0RlbGF5ID0gWzAsIDAuMDYzOSwgMC44NSwgMS4yLCAyLjY4NV07CmNvbnN0IGN1cnZlRnJvbUxmb0RlbGF5U2xpZGVyVG9BdHRhY2sgPSBbMWUtMywgMC4wNTMsIDAuMTg4LCAwLjM0OCwgMS4xNV07CmZ1bmN0aW9uIHNldExmb1ZhbHVlc0Zyb21TbGlkZXJzKGxmbzIsIHJhdGVTbGlkZXIsIGRlbGF5U2xpZGVyKSB7CiAgY29uc3QgZnJlcXVlbmN5ID0gaW50ZXJwb2xhdGVkTG9va3VwKHJhdGVTbGlkZXIgKiBjdXJ2ZUZyb21MZm9SYXRlU2xpZGVyVG9GcmVxLmxlbmd0aCwgY3VydmVGcm9tTGZvUmF0ZVNsaWRlclRvRnJlcSk7CiAgY29uc3QgZGVsYXlEdXJhdGlvbiA9IGludGVycG9sYXRlZExvb2t1cChkZWxheVNsaWRlciAqIGN1cnZlRnJvbUxmb0RlbGF5U2xpZGVyVG9EZWxheS5sZW5ndGgsIGN1cnZlRnJvbUxmb0RlbGF5U2xpZGVyVG9EZWxheSk7CiAgY29uc3QgYXR0YWNrRHVyYXRpb24gPSBpbnRlcnBvbGF0ZWRMb29rdXAoZGVsYXlTbGlkZXIgKiBjdXJ2ZUZyb21MZm9EZWxheVNsaWRlclRvQXR0YWNrLmxlbmd0aCwgY3VydmVGcm9tTGZvRGVsYXlTbGlkZXJUb0F0dGFjayk7CiAgbGZvMi5zZXRWYWx1ZXMoZnJlcXVlbmN5LCBkZWxheUR1cmF0aW9uLCBhdHRhY2tEdXJhdGlvbik7Cn0KY29uc3QgY3VydmVGcm9tSHBmU2xpZGVyVG9GcmVxID0gWzE0MCwgMjUwLCA1MjAsIDEyMjBdOwpmdW5jdGlvbiBzZXRIcGZWYWx1ZXNGcm9tU2xpZGVycyhocGYsIHJhdGVTbGlkZXIpIHsKICBjb25zdCBmcmVxdWVuY3kgPSBpbnRlcnBvbGF0ZWRMb29rdXAocmF0ZVNsaWRlciAqIGN1cnZlRnJvbUhwZlNsaWRlclRvRnJlcS5sZW5ndGgsIGN1cnZlRnJvbUhwZlNsaWRlclRvRnJlcSk7CiAgaHBmLnNldEN1dG9mZihmcmVxdWVuY3kpOwp9CgovLyBzcmMvc3ludGguY29uc3RhbnRzLmpzCmNvbnN0IE5PVEVfT04gPSAibm90ZS1vbiI7CmNvbnN0IE5PVEVfT0ZGID0gIm5vdGUtb2ZmIjsKY29uc3QgU0VUX1BBUkFNID0gInNldC1wYXJhbSI7CmNvbnN0IFNFVF9QQVRDSCA9ICJzZXQtcGF0Y2giOwpjb25zdCBMRk9fVFJJR0dFUl9PTiA9ICJsZm8tdHJpZ2dlci1vbiI7CmNvbnN0IExGT19UUklHR0VSX09GRiA9ICJsZm8tdHJpZ2dlci1vZmYiOwpjb25zdCBQSVRDSF9CRU5EID0gInBpdGNoLWJlbmQiOwpjb25zdCBBTExfTk9URVNfT0ZGID0gImFsbC1ub3Rlcy1vZmYiOwoKLy8gc3JjL3N5bnRoLndvcmtsZXQuanMKY2xhc3MgSnVub3hXb3JrZXIgZXh0ZW5kcyBBdWRpb1dvcmtsZXRQcm9jZXNzb3IgewogIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHsKICAgIHN1cGVyKCk7CiAgICB0aGlzLnN5bnRoID0gbmV3IEp1bm94KHsKICAgICAgcGF0Y2g6IG9wdGlvbnMucHJvY2Vzc29yT3B0aW9ucy5wYXRjaCwKICAgICAgcG9seXBob255OiBvcHRpb25zLnByb2Nlc3Nvck9wdGlvbnMucG9seXBob255LAogICAgICBzYW1wbGVSYXRlOiBzYW1wbGVSYXRlIHx8IDQ4ZTMKICAgIH0pOwogICAgdGhpcy5wb3J0Lm9ubWVzc2FnZSA9IHRoaXMuaGFuZGxlTWVzc2FnZS5iaW5kKHRoaXMpOwogIH0KICBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7CiAgICBpZiAoZXZlbnQuZGF0YS5hY3Rpb24gPT09IE5PVEVfT04pIHsKICAgICAgdGhpcy5zeW50aC5ub3RlT24oZXZlbnQuZGF0YS5ub3RlLCBldmVudC5kYXRhLnZlbG9jaXR5KTsKICAgIH0gZWxzZSBpZiAoZXZlbnQuZGF0YS5hY3Rpb24gPT09IE5PVEVfT0ZGKSB7CiAgICAgIHRoaXMuc3ludGgubm90ZU9mZihldmVudC5kYXRhLm5vdGUpOwogICAgfSBlbHNlIGlmIChldmVudC5kYXRhLmFjdGlvbiA9PT0gUElUQ0hfQkVORCkgewogICAgICB0aGlzLnN5bnRoLnBpdGNoQmVuZChldmVudC5kYXRhLnZhbHVlKTsKICAgIH0gZWxzZSBpZiAoZXZlbnQuZGF0YS5hY3Rpb24gPT09IFNFVF9QQVJBTSkgewogICAgICB0aGlzLnN5bnRoLnNldFZhbHVlKGV2ZW50LmRhdGEubmFtZSwgZXZlbnQuZGF0YS52YWx1ZSk7CiAgICB9IGVsc2UgaWYgKGV2ZW50LmRhdGEuYWN0aW9uID09PSBTRVRfUEFUQ0gpIHsKICAgICAgdGhpcy5zeW50aC5wYXRjaCA9IGV2ZW50LmRhdGEucGF0Y2hEYXRhOwogICAgICB0aGlzLnN5bnRoLnVwZGF0ZSgpOwogICAgfSBlbHNlIGlmIChldmVudC5kYXRhLmFjdGlvbiA9PT0gTEZPX1RSSUdHRVJfT04pIHsKICAgICAgdGhpcy5zeW50aC5sZm9UcmlnZ2VyKCk7CiAgICB9IGVsc2UgaWYgKGV2ZW50LmRhdGEuYWN0aW9uID09PSBMRk9fVFJJR0dFUl9PRkYpIHsKICAgICAgdGhpcy5zeW50aC5sZm9SZWxlYXNlKCk7CiAgICB9IGVsc2UgaWYgKGV2ZW50LmRhdGEuYWN0aW9uID09PSBBTExfTk9URVNfT0ZGKSB7CiAgICAgIHRoaXMuc3ludGgucGFuaWMoKTsKICAgIH0gZWxzZSB7CiAgICAgIGNvbnNvbGUubG9nKCJVbm1hbmFnZWQgbWVzc2FnZSIsIEpTT04uc3RyaW5naWZ5KGV2ZW50LmRhdGEpKTsKICAgIH0KICB9CiAgcHJvY2VzcyhpbnB1dHMsIG91dHB1dHMpIHsKICAgIGNvbnN0IG91dHB1dCA9IG91dHB1dHNbMF07CiAgICB0aGlzLnN5bnRoLnJlbmRlcihvdXRwdXRbMF0sIG91dHB1dFsxXSk7CiAgICByZXR1cm4gdHJ1ZTsKICB9Cn0KcmVnaXN0ZXJQcm9jZXNzb3IoImp1bm94LXN5bnRoIiwgSnVub3hXb3JrZXIpOwo=";
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
          action: ALL_NOTES_OFF
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
