// src/synth.constants.js
const NOTE_ON = "note-on";
const NOTE_OFF = "note-off";
const SET_PARAM = "set-param";
const SET_PATCH = "set-patch";
const LFO_TRIGGER_ON = "lfo-trigger-on";
const LFO_TRIGGER_OFF = "lfo-trigger-off";
const PITCH_BEND = "pitch-bend";
const PANIC = "panic";

// src/patches.js
const Juno60FactoryPatchesA = [
  {
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
      type: "moog",
      frequency: 0.7,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 0.4, decay: 0, sustain: 1, release: 0.45},
    chorus: 1
  },
  {
    name: "Strings 2",
    vca: 0.3,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.4, delay: 0},
    dco: {
      range: 1,
      saw: true,
      pulse: true,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0.6,
      pwmMod: "l",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.7,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 0.4, decay: 0, sustain: 1, release: 0.45},
    chorus: 2
  },
  {
    name: "Strings 3",
    vca: 0.3,
    vcaType: "env",
    lfo: {autoTrigger: false, frequency: 0.3, delay: 0.8},
    dco: {
      range: 1,
      saw: true,
      pulse: true,
      sub: true,
      subAmount: 1,
      noise: 0,
      pwm: 0.7,
      pwmMod: "l",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.5,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 0.3, decay: 0, sustain: 1, release: 0.6},
    chorus: 2
  },
  {
    name: "Organ 1",
    vca: 0.5,
    vcaType: "gate",
    lfo: {autoTrigger: true, frequency: 0.2, delay: 0.8},
    dco: {
      range: 1,
      saw: false,
      pulse: true,
      sub: true,
      subAmount: 1,
      noise: 0,
      pwm: 0.5,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.4,
      resonance: 0.6,
      modPositive: true,
      envMod: 0.45,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 0, decay: 0, sustain: 0, release: 0},
    chorus: 1
  },
  {
    name: "Organ 2",
    vca: 0.5,
    vcaType: "gate",
    lfo: {autoTrigger: true, frequency: 0.5, delay: 0.4},
    dco: {
      range: 1,
      saw: false,
      pulse: true,
      sub: true,
      subAmount: 0.8,
      noise: 0,
      pwm: 0.55,
      pwmMod: "l",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.35,
      resonance: 0.55,
      modPositive: true,
      envMod: 0.4,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 0, decay: 0.1, sustain: 0, release: 0.1},
    chorus: 1
  },
  {
    name: "Organ 3",
    vca: 0.5,
    vcaType: "gate",
    lfo: {autoTrigger: true, frequency: 0.5, delay: 0.4},
    dco: {
      range: 2,
      saw: false,
      pulse: true,
      sub: true,
      subAmount: 0.8,
      noise: 0,
      pwm: 0.55,
      pwmMod: "l",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.35,
      resonance: 0.55,
      modPositive: true,
      envMod: 0.35,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 0, decay: 0.1, sustain: 0, release: 0.1},
    chorus: 2
  },
  {
    name: "Brass",
    vca: 0.7,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.5, delay: 0.65},
    dco: {
      range: 1,
      saw: true,
      pulse: false,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0,
      pwmMod: "m",
      lfo: 0.15
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0,
      resonance: 0,
      modPositive: true,
      envMod: 0.85,
      lfoMod: 0,
      keyMod: 0.4
    },
    env: {attack: 0.25, decay: 0.4, sustain: 0.6, release: 0.2},
    chorus: 1
  },
  {
    name: "Phase Brass",
    vca: 0.4,
    vcaType: "gate",
    lfo: {autoTrigger: true, frequency: 0.6, delay: 0},
    dco: {
      range: 1,
      saw: true,
      pulse: true,
      sub: false,
      subAmount: 1,
      noise: 0,
      pwm: 1,
      pwmMod: "e",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.3,
      resonance: 0.1,
      modPositive: true,
      envMod: 0.55,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 0.2, decay: 0.4, sustain: 0.4, release: 0.3},
    chorus: 1
  },
  {
    name: "Piano 1",
    vca: 0.7,
    vcaType: "env",
    lfo: {autoTrigger: false, frequency: 0.6, delay: 0.3},
    dco: {
      range: 1,
      saw: false,
      pulse: true,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0.6,
      pwmMod: "m",
      lfo: 0.45
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.1,
      resonance: 0,
      modPositive: true,
      envMod: 0.7,
      lfoMod: 0,
      keyMod: 0.4
    },
    env: {attack: 0, decay: 0.8, sustain: 0.15, release: 0.3},
    chorus: 0
  },
  {
    name: "Piano 2",
    vca: 0.8,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.4, delay: 0},
    dco: {
      range: 2,
      saw: false,
      pulse: true,
      sub: true,
      subAmount: 0.45,
      noise: 0,
      pwm: 0.4,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.35,
      resonance: 0,
      modPositive: true,
      envMod: 0.25,
      lfoMod: 0.2,
      keyMod: 0.8
    },
    env: {attack: 0, decay: 0.75, sustain: 0, release: 0.35},
    chorus: 0
  },
  {
    name: "Celesta",
    vca: 0.6,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.35, delay: 0.6},
    dco: {
      range: 1,
      saw: true,
      pulse: true,
      sub: false,
      subAmount: 1,
      noise: 0,
      pwm: 0.5,
      pwmMod: "e",
      lfo: 0
    },
    hpf: 0.35,
    vcf: {
      type: "moog",
      frequency: 0.35,
      resonance: 0.8,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 0, decay: 0.65, sustain: 0.2, release: 0.55},
    chorus: 0
  },
  {
    name: "Mellow Piano",
    vca: 0.7,
    vcaType: "env",
    lfo: {autoTrigger: false, frequency: 0.5, delay: 0},
    dco: {
      range: 1,
      saw: false,
      pulse: true,
      sub: false,
      subAmount: 1,
      noise: 0,
      pwm: 0.5,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.3,
      resonance: 0,
      modPositive: true,
      envMod: 0.25,
      lfoMod: 0.1,
      keyMod: 0.9
    },
    env: {attack: 0.1, decay: 0.75, sustain: 0.2, release: 0.85},
    chorus: 1
  },
  {
    name: "Harpsichord 1",
    vca: 0.4,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.5, delay: 0.4},
    dco: {
      range: 2,
      saw: false,
      pulse: true,
      sub: true,
      subAmount: 0.7,
      noise: 0,
      pwm: 0.3,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0.35,
    vcf: {
      type: "moog",
      frequency: 0.3,
      resonance: 0,
      modPositive: true,
      envMod: 0.5,
      lfoMod: 0,
      keyMod: 0.7
    },
    env: {attack: 0, decay: 0.6, sustain: 0.35, release: 0.25},
    chorus: 1
  },
  {
    name: "Harpsichord 2",
    vca: 0.5,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.55, delay: 0.6},
    dco: {
      range: 2,
      saw: false,
      pulse: true,
      sub: true,
      subAmount: 0.85,
      noise: 0,
      pwm: 0.2,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0.35,
    vcf: {
      type: "moog",
      frequency: 0.5,
      resonance: 0.25,
      modPositive: true,
      envMod: 0.3,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 0, decay: 0.5, sustain: 0.15, release: 0.5},
    chorus: 2
  },
  {
    name: "Guitar",
    vca: 0.9,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.6, delay: 0.6},
    dco: {
      range: 1,
      saw: false,
      pulse: true,
      sub: false,
      subAmount: 1,
      noise: 0,
      pwm: 0.6,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0.65,
    vcf: {
      type: "moog",
      frequency: 0.3,
      resonance: 0,
      modPositive: true,
      envMod: 0.45,
      lfoMod: 0.15,
      keyMod: 0.5
    },
    env: {attack: 0, decay: 0.55, sustain: 0.35, release: 0.65},
    chorus: 0
  },
  {
    name: "Synthesizer Harp",
    vca: 0.6,
    vcaType: "env",
    lfo: {autoTrigger: false, frequency: 0.3, delay: 0.8},
    dco: {
      range: 1,
      saw: true,
      pulse: false,
      sub: false,
      subAmount: 1,
      noise: 0,
      pwm: 0,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.3,
      resonance: 0,
      modPositive: true,
      envMod: 0.5,
      lfoMod: 0,
      keyMod: 0.8
    },
    env: {attack: 0, decay: 0.55, sustain: 0.3, release: 0.5},
    chorus: 1
  },
  {
    name: "Bass 1",
    vca: 0.5,
    vcaType: "gate",
    lfo: {autoTrigger: true, frequency: 0.5, delay: 0.6},
    dco: {
      range: 0.5,
      saw: true,
      pulse: true,
      sub: true,
      subAmount: 0.3,
      noise: 0,
      pwm: 0.5,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.3,
      resonance: 0.25,
      modPositive: true,
      envMod: 0.35,
      lfoMod: 0,
      keyMod: 0
    },
    env: {attack: 0, decay: 0.4, sustain: 0.1, release: 0.25},
    chorus: 1
  },
  {
    name: "Bass 2",
    vca: 0.4,
    vcaType: "gate",
    lfo: {autoTrigger: true, frequency: 0.5, delay: 0.6},
    dco: {
      range: 0.5,
      saw: true,
      pulse: true,
      sub: false,
      subAmount: 0.3,
      noise: 0,
      pwm: 0.5,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.3,
      resonance: 0.5,
      modPositive: true,
      envMod: 0.45,
      lfoMod: 0,
      keyMod: 0.5
    },
    env: {attack: 0, decay: 0.3, sustain: 0.35, release: 0.25},
    chorus: 1
  },
  {
    name: "Clavichord 1",
    vca: 0.7,
    vcaType: "env",
    lfo: {autoTrigger: false, frequency: 0.6, delay: 0.25},
    dco: {
      range: 0.5,
      saw: false,
      pulse: true,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0.8,
      pwmMod: "m",
      lfo: 0.4
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0,
      resonance: 0.3,
      modPositive: true,
      envMod: 0.8,
      lfoMod: 0,
      keyMod: 0.6
    },
    env: {attack: 0, decay: 0.5, sustain: 0.35, release: 0.15},
    chorus: 1
  },
  {
    name: "Clavichord 2",
    vca: 1,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.1, delay: 0},
    dco: {
      range: 0.5,
      saw: false,
      pulse: true,
      sub: false,
      subAmount: 1,
      noise: 0,
      pwm: 0.8,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0.35,
    vcf: {
      type: "moog",
      frequency: 0.55,
      resonance: 0.7,
      modPositive: true,
      envMod: 0.2,
      lfoMod: 0.25,
      keyMod: 0.7
    },
    env: {attack: 0, decay: 0.45, sustain: 0.2, release: 0.2},
    chorus: 0
  },
  {
    name: "Pizzicato Sound 1",
    vca: 0.8,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.5, delay: 0.6},
    dco: {
      range: 1,
      saw: false,
      pulse: true,
      sub: false,
      subAmount: 0.3,
      noise: 0,
      pwm: 0.35,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.45,
      resonance: 0.3,
      modPositive: true,
      envMod: 0.3,
      lfoMod: 0.3,
      keyMod: 1
    },
    env: {attack: 0, decay: 0.2, sustain: 0.35, release: 0.55},
    chorus: 1
  },
  {
    name: "Pizzicato Sound 2",
    vca: 0.6,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.5, delay: 0.6},
    dco: {
      range: 2,
      saw: false,
      pulse: true,
      sub: true,
      subAmount: 0.3,
      noise: 0,
      pwm: 0.2,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.5,
      resonance: 0.3,
      modPositive: true,
      envMod: 0.3,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 0, decay: 0.3, sustain: 0.3, release: 0.4},
    chorus: 2
  },
  {
    name: "Xylophone",
    vca: 1,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.5, delay: 0},
    dco: {
      range: 2,
      saw: false,
      pulse: false,
      sub: true,
      subAmount: 1,
      noise: 0,
      pwm: 0.5,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0.35,
    vcf: {
      type: "moog",
      frequency: 0.4,
      resonance: 0.5,
      modPositive: true,
      envMod: 0.3,
      lfoMod: 0,
      keyMod: 0.6
    },
    env: {attack: 0, decay: 0.35, sustain: 0, release: 0.35},
    chorus: 0
  },
  {
    name: "Glockenspiel",
    vca: 0.9,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.5, delay: 0},
    dco: {
      range: 2,
      saw: false,
      pulse: true,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0.35,
    vcf: {
      type: "moog",
      frequency: 0.45,
      resonance: 0.5,
      modPositive: true,
      envMod: 0.3,
      lfoMod: 0,
      keyMod: 0.6
    },
    env: {attack: 0, decay: 0.3, sustain: 0.25, release: 0.5},
    chorus: 0
  },
  {
    name: "Violine",
    vca: 0.7,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.6, delay: 0.6},
    dco: {
      range: 1,
      saw: true,
      pulse: false,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0,
      pwmMod: "l",
      lfo: 0.2
    },
    hpf: 0.35,
    vcf: {
      type: "moog",
      frequency: 0.65,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 0.4, decay: 0, sustain: 1, release: 0.4},
    chorus: 0
  },
  {
    name: "Trumpet",
    vca: 0.7,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.25, delay: 0.65},
    dco: {
      range: 1,
      saw: true,
      pulse: false,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0,
      pwmMod: "m",
      lfo: 0.15
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0,
      resonance: 0,
      modPositive: true,
      envMod: 0.85,
      lfoMod: 0,
      keyMod: 0.4
    },
    env: {attack: 0.25, decay: 0.4, sustain: 0.6, release: 0.2},
    chorus: 0
  },
  {
    name: "Horn",
    vca: 0.7,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.25, delay: 0.7},
    dco: {
      range: 1,
      saw: true,
      pulse: false,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.2,
      resonance: 0,
      modPositive: true,
      envMod: 0.55,
      lfoMod: 0.2,
      keyMod: 0.4
    },
    env: {attack: 0.4, decay: 0.5, sustain: 0.6, release: 0.3},
    chorus: 0
  },
  {
    name: "Tuba",
    vca: 1,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.25, delay: 0.7},
    dco: {
      range: 0.5,
      saw: true,
      pulse: false,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0,
      pwmMod: "m",
      lfo: 0.15
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.15,
      resonance: 0,
      modPositive: true,
      envMod: 0.6,
      lfoMod: 0,
      keyMod: 0.4
    },
    env: {attack: 0.3, decay: 0.4, sustain: 0.4, release: 0.3},
    chorus: 0
  },
  {
    name: "Flute",
    vca: 1,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.55, delay: 0.5},
    dco: {
      range: 2,
      saw: true,
      pulse: false,
      sub: false,
      subAmount: 0,
      noise: 0.15,
      pwm: 0,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0.35,
    vcf: {
      type: "moog",
      frequency: 0.5,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0.2,
      keyMod: 0.6
    },
    env: {attack: 0.2, decay: 0.6, sustain: 0.5, release: 0.25},
    chorus: 0
  },
  {
    name: "Clarinet",
    vca: 0.6,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.5, delay: 0.65},
    dco: {
      range: 1,
      saw: false,
      pulse: true,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0,
      pwmMod: "m",
      lfo: 0.15
    },
    hpf: 0.35,
    vcf: {
      type: "moog",
      frequency: 0.5,
      resonance: 0.3,
      modPositive: true,
      envMod: 0.25,
      lfoMod: 0,
      keyMod: 0.6
    },
    env: {attack: 0.25, decay: 0.6, sustain: 0.6, release: 0.25},
    chorus: 0
  },
  {
    name: "Oboe",
    vca: 1,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.55, delay: 0.65},
    dco: {
      range: 1,
      saw: false,
      pulse: true,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0.65,
      pwmMod: "m",
      lfo: 0.15
    },
    hpf: 1,
    vcf: {
      type: "moog",
      frequency: 0.45,
      resonance: 0.5,
      modPositive: true,
      envMod: 0.25,
      lfoMod: 0,
      keyMod: 0.5
    },
    env: {attack: 0.2, decay: 0.6, sustain: 0.6, release: 0.25},
    chorus: 0
  },
  {
    name: "English Horn",
    vca: 1,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.5, delay: 0.7},
    dco: {
      range: 0.5,
      saw: false,
      pulse: true,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0.65,
      pwmMod: "m",
      lfo: 0.2
    },
    hpf: 1,
    vcf: {
      type: "moog",
      frequency: 0.5,
      resonance: 0.7,
      modPositive: true,
      envMod: 0,
      lfoMod: 0.15,
      keyMod: 0.5
    },
    env: {attack: 0.2, decay: 0.6, sustain: 0.6, release: 0.25},
    chorus: 0
  },
  {
    name: "Funny Cat",
    vca: 0.8,
    vcaType: "env",
    lfo: {autoTrigger: false, frequency: 0.6, delay: 0.2},
    dco: {
      range: 1,
      saw: true,
      pulse: false,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0,
      pwmMod: "m",
      lfo: 0.3
    },
    hpf: 0.35,
    vcf: {
      type: "moog",
      frequency: 0.15,
      resonance: 0.75,
      modPositive: true,
      envMod: 0.5,
      lfoMod: 0.2,
      keyMod: 0.5
    },
    env: {attack: 0.25, decay: 0.4, sustain: 1, release: 0.1},
    chorus: 0
  },
  {
    name: "Wah Brass",
    vca: 0.7,
    vcaType: "gate",
    lfo: {autoTrigger: false, frequency: 0.6, delay: 0.2},
    dco: {
      range: 1,
      saw: true,
      pulse: false,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0,
      pwmMod: "m",
      lfo: 0.3
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.3,
      resonance: 0.7,
      modPositive: true,
      envMod: 0.45,
      lfoMod: 0,
      keyMod: 0.6
    },
    env: {attack: 0.3, decay: 0.3, sustain: 0.4, release: 0.2},
    chorus: 0
  },
  {
    name: "Phase Combination",
    vca: 0.3,
    vcaType: "env",
    lfo: {autoTrigger: false, frequency: 0.6, delay: 0.2},
    dco: {
      range: 1,
      saw: true,
      pulse: true,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0.8,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.6,
      resonance: 0.2,
      modPositive: true,
      envMod: 0.3,
      lfoMod: 0,
      keyMod: 0.2
    },
    env: {attack: 0, decay: 0.7, sustain: 0.2, release: 0.2},
    chorus: 1
  },
  {
    name: "Reed 1",
    vca: 0.6,
    vcaType: "gate",
    lfo: {autoTrigger: false, frequency: 0.6, delay: 0.2},
    dco: {
      range: 1,
      saw: false,
      pulse: true,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0,
      pwmMod: "m",
      lfo: 0.4
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.1,
      resonance: 0.6,
      modPositive: true,
      envMod: 0.7,
      lfoMod: 0,
      keyMod: 0.5
    },
    env: {attack: 0, decay: 0.85, sustain: 0.5, release: 0.1},
    chorus: 1
  },
  {
    name: "Popcorn",
    vca: 0.8,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0, delay: 0},
    dco: {
      range: 2,
      saw: false,
      pulse: false,
      sub: true,
      subAmount: 1,
      noise: 0,
      pwm: 0,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0.35,
    vcf: {
      type: "moog",
      frequency: 0.25,
      resonance: 0.2,
      modPositive: true,
      envMod: 0.55,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 0, decay: 0.3, sustain: 0.2, release: 0},
    chorus: 0
  },
  {
    name: "Reed 2",
    vca: 0.5,
    vcaType: "env",
    lfo: {autoTrigger: false, frequency: 0.3, delay: 0.8},
    dco: {
      range: 2,
      saw: false,
      pulse: false,
      sub: true,
      subAmount: 1,
      noise: 0,
      pwm: 0,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.2,
      resonance: 0,
      modPositive: true,
      envMod: 0.6,
      lfoMod: 0,
      keyMod: 0.8
    },
    env: {attack: 0, decay: 0.55, sustain: 0.3, release: 0.6},
    chorus: 1
  },
  {
    name: "Reed 3",
    vca: 0.6,
    vcaType: "env",
    lfo: {autoTrigger: false, frequency: 0.6, delay: 0.2},
    dco: {
      range: 2,
      saw: false,
      pulse: false,
      sub: true,
      subAmount: 1,
      noise: 0,
      pwm: 0.5,
      pwmMod: "m",
      lfo: 0.2
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.3,
      resonance: 0.2,
      modPositive: true,
      envMod: 0.3,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 0.25, decay: 0, sustain: 1, release: 0.2},
    chorus: 0
  },
  {
    name: "PWM Chorus",
    vca: 0.2,
    vcaType: "env",
    lfo: {autoTrigger: false, frequency: 0.3, delay: 0},
    dco: {
      range: 1,
      saw: false,
      pulse: true,
      sub: true,
      subAmount: 1,
      noise: 0,
      pwm: 0.5,
      pwmMod: "l",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.8,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 0.3, decay: 0, sustain: 1, release: 0.4},
    chorus: 2
  },
  {
    name: "Synthesizer Organ",
    vca: 0.5,
    vcaType: "gate",
    lfo: {autoTrigger: true, frequency: 0.45, delay: 0.6},
    dco: {
      range: 1,
      saw: false,
      pulse: true,
      sub: true,
      subAmount: 0.75,
      noise: 0,
      pwm: 0.65,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.25,
      resonance: 0,
      modPositive: true,
      envMod: 0.5,
      lfoMod: 0.2,
      keyMod: 0.7
    },
    env: {attack: 0, decay: 0.2, sustain: 0.5, release: 0.25},
    chorus: 2
  },
  {
    name: "Effect Sound 1",
    vca: 0.7,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.45, delay: 0.6},
    dco: {
      range: 2,
      saw: true,
      pulse: true,
      sub: true,
      subAmount: 0.7,
      noise: 0,
      pwm: 1,
      pwmMod: "m",
      lfo: 0.15
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.65,
      resonance: 0,
      modPositive: false,
      envMod: 0.45,
      lfoMod: 0,
      keyMod: 0.7
    },
    env: {attack: 0, decay: 0.5, sustain: 0, release: 0.55},
    chorus: 1
  },
  {
    name: "Effect Sound 2",
    vca: 0.4,
    vcaType: "gate",
    lfo: {autoTrigger: true, frequency: 0.55, delay: 0.9},
    dco: {
      range: 1,
      saw: true,
      pulse: false,
      sub: true,
      subAmount: 0.65,
      noise: 0,
      pwm: 0.3,
      pwmMod: "l",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.65,
      resonance: 0.3,
      modPositive: false,
      envMod: 0.4,
      lfoMod: 0,
      keyMod: 0.1
    },
    env: {attack: 0.65, decay: 0.55, sustain: 0.2, release: 0.65},
    chorus: 1
  },
  {
    name: "Space Harp",
    vca: 0.6,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.55, delay: 0},
    dco: {
      range: 1,
      saw: true,
      pulse: false,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0,
      pwmMod: "e",
      lfo: 0.2
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.65,
      resonance: 0.5,
      modPositive: true,
      envMod: 0.55,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 0, decay: 0.8, sustain: 0.8, release: 0.9},
    chorus: 1
  },
  {
    name: "Funk",
    vca: 0.2,
    vcaType: "gate",
    lfo: {autoTrigger: true, frequency: 0.3, delay: 0.25},
    dco: {
      range: 1,
      saw: true,
      pulse: true,
      sub: true,
      subAmount: 1,
      noise: 0,
      pwm: 0.6,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.75,
      resonance: 0.6,
      modPositive: false,
      envMod: 0.5,
      lfoMod: 0,
      keyMod: 0.45
    },
    env: {attack: 0.6, decay: 0.5, sustain: 0, release: 0},
    chorus: 1
  },
  {
    name: "Space Sound 1",
    vca: 0.3,
    vcaType: "gate",
    lfo: {autoTrigger: true, frequency: 0.6, delay: 0.7},
    dco: {
      range: 1,
      saw: false,
      pulse: true,
      sub: true,
      subAmount: 1,
      noise: 0,
      pwm: 0.45,
      pwmMod: "m",
      lfo: 0.2
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.65,
      resonance: 0.7,
      modPositive: false,
      envMod: 0.55,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 0, decay: 0.8, sustain: 0, release: 0.3},
    chorus: 1
  },
  {
    name: "Mysterious Invention",
    vca: 0.5,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.6, delay: 0.8},
    dco: {
      range: 1,
      saw: true,
      pulse: true,
      sub: false,
      subAmount: 1,
      noise: 0,
      pwm: 0.8,
      pwmMod: "e",
      lfo: 0.2
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.8,
      resonance: 0.7,
      modPositive: false,
      envMod: 0.6,
      lfoMod: 0.25,
      keyMod: 0
    },
    env: {attack: 0, decay: 1, sustain: 0, release: 1},
    chorus: 0
  },
  {
    name: "Space Sound 2",
    vca: 0.2,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.3, delay: 0.3},
    dco: {
      range: 1,
      saw: true,
      pulse: true,
      sub: false,
      subAmount: 0.8,
      noise: 0,
      pwm: 0.6,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.2,
      resonance: 0.85,
      modPositive: true,
      envMod: 0.6,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 1, decay: 1, sustain: 1, release: 1},
    chorus: 1
  },
  {
    name: "Percussive Sound 1",
    vca: 1,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0, delay: 0},
    dco: {
      range: 2,
      saw: false,
      pulse: false,
      sub: false,
      subAmount: 0,
      noise: 1,
      pwm: 0,
      pwmMod: "e",
      lfo: 0
    },
    hpf: 0.35,
    vcf: {
      type: "moog",
      frequency: 0.4,
      resonance: 1,
      modPositive: true,
      envMod: 0.15,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 0, decay: 0.3, sustain: 0, release: 0.4},
    chorus: 0
  },
  {
    name: "Percussive Sound 2",
    vca: 1,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0, delay: 0},
    dco: {
      range: 1,
      saw: false,
      pulse: false,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0,
      pwmMod: "e",
      lfo: 0
    },
    hpf: 0.35,
    vcf: {
      type: "moog",
      frequency: 0.5,
      resonance: 1,
      modPositive: false,
      envMod: 0.35,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 0, decay: 0.3, sustain: 0, release: 0.4},
    chorus: 0
  },
  {
    name: "Whistle",
    vca: 0.8,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.55, delay: 0.5},
    dco: {
      range: 2,
      saw: false,
      pulse: false,
      sub: false,
      subAmount: 0,
      noise: 0.2,
      pwm: 0,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0.35,
    vcf: {
      type: "moog",
      frequency: 0.35,
      resonance: 1,
      modPositive: true,
      envMod: 0.15,
      lfoMod: 0.2,
      keyMod: 1
    },
    env: {attack: 0.3, decay: 0, sustain: 1, release: 0.1},
    chorus: 0
  },
  {
    name: "Effect Sound 3",
    vca: 1,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.55, delay: 0.4},
    dco: {
      range: 1,
      saw: false,
      pulse: false,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0,
      pwmMod: "e",
      lfo: 0
    },
    hpf: 0.35,
    vcf: {
      type: "moog",
      frequency: 0.35,
      resonance: 1,
      modPositive: true,
      envMod: 0,
      lfoMod: 0.2,
      keyMod: 1
    },
    env: {attack: 0, decay: 0.4, sustain: 0.55, release: 0.7},
    chorus: 0
  },
  {
    name: "UFO",
    vca: 0.4,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.6, delay: 0},
    dco: {
      range: 2,
      saw: false,
      pulse: false,
      sub: false,
      subAmount: 0,
      noise: 0.2,
      pwm: 0,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0,
      resonance: 1,
      modPositive: true,
      envMod: 0.7,
      lfoMod: 0.4,
      keyMod: 1
    },
    env: {attack: 0, decay: 0.6, sustain: 1, release: 0.8},
    chorus: 1
  },
  {
    name: "Space Sound 3",
    vca: 0.5,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0.6, delay: 0},
    dco: {
      range: 2,
      saw: false,
      pulse: false,
      sub: false,
      subAmount: 0,
      noise: 0.2,
      pwm: 0,
      pwmMod: "m",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.5,
      resonance: 1,
      modPositive: false,
      envMod: 0.4,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 0, decay: 1, sustain: 0, release: 0.8},
    chorus: 1
  },
  {
    name: "Surf",
    vca: 0.9,
    vcaType: "env",
    lfo: {autoTrigger: true, frequency: 0, delay: 0},
    dco: {
      range: 1,
      saw: false,
      pulse: false,
      sub: false,
      subAmount: 1,
      noise: 1,
      pwm: 0,
      pwmMod: "e",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.6,
      resonance: 0,
      modPositive: true,
      envMod: 0,
      lfoMod: 0.6,
      keyMod: 1
    },
    env: {attack: 0, decay: 0.4, sustain: 1, release: 0.8},
    chorus: 0
  },
  {
    name: "Synthesizer Drum",
    vca: 0.6,
    vcaType: "env",
    lfo: {autoTrigger: false, frequency: 0, delay: 0},
    dco: {
      range: 1,
      saw: false,
      pulse: false,
      sub: false,
      subAmount: 0,
      noise: 0,
      pwm: 0,
      pwmMod: "e",
      lfo: 0
    },
    hpf: 0,
    vcf: {
      type: "moog",
      frequency: 0.2,
      resonance: 1,
      modPositive: true,
      envMod: 0.4,
      lfoMod: 0,
      keyMod: 1
    },
    env: {attack: 0, decay: 0.5, sustain: 0, release: 0.6},
    chorus: 0
  }
];

// src/synth.node.js
async function createJuno60(ac, processorOptions) {
  await ac.audioWorklet.addModule("../dist/synth.worklet.js");
  return new SynthWorkletNode(ac, processorOptions);
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
export {
  Juno60FactoryPatchesA,
  SynthWorkletNode,
  createJuno60,
  defaultPatch
};
//# sourceMappingURL=synth.node.js.map
