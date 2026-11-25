// src/synth.constants.js
var NOTE_ON = "note-on";
var NOTE_OFF = "note-off";
var SET_PARAM = "set-param";
var SET_PATCH = "set-patch";
var ALL_NOTES_OFF = "all-notes-off";
var LFO_TRIGGER_ON = "lfo-trigger-on";
var LFO_TRIGGER_OFF = "lfo-trigger-off";
var PITCH_BEND = "pitch-bend";

// src/patches.js
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

// dist/synth.worklet.txt
var synth_worklet_default = '// src/junox/smoothMoves.js\nvar SmoothMoves = class {\n  /**\n   * Create a new parameter.\n   * @param {number} value - Initial value of the parameter.\n   * @param {number} sampleRate - Samples-per-second for the current audio context.\n   * @param {number} fc - Amount of smoothing for the LPF used to smooth changes (Hz).\n   */\n  constructor(value, sampleRate2, fc = 5) {\n    this.b1 = -Math.exp(-2 * fc * Math.PI / sampleRate2);\n    this.a0 = 1 + this.b1;\n    this.targetValue = value;\n    this.isStarted = false;\n    this.z1 = 0;\n    this.reset();\n  }\n  /**\n   * Change the current value to a new value using a linear transition over a period of time.\n   * @param {number} value - New parameter value.\n   * @param {boolean} useSmoothing = true - If true then the transition to the new value will be smoothed.\n   */\n  setValue(value, useSmoothing) {\n    this.targetValue = value;\n    if (!this.isStarted || !useSmoothing) {\n      this.reset();\n      return;\n    }\n  }\n  /**\n   * Reset immediately to the target value.\n   * This should only be used if the instrument is currently silent.\n   */\n  reset() {\n    this.z1 = this.targetValue * this.a0 - this.targetValue;\n    this.isStarted = false;\n  }\n  /**\n   * Get the next value of parameter.\n   * @returns {number}\n   */\n  getNextValue() {\n    this.isStarted = true;\n    const xout = this.targetValue * this.a0 - this.z1;\n    this.z1 = this.b1 * xout;\n    return xout;\n  }\n};\n\n// src/junox/dco.js\nvar Juno60DCO = class {\n  constructor(sampleRate2) {\n    this.sampleRate = sampleRate2;\n    this.currentPhase = 0;\n    this.phaseIncrement = 0;\n    this.pulseWidth = 0.5;\n    this.pulsePositive = 1;\n    this.pulseNegative = -1;\n    this.pulseHeight = 1;\n    this.subOutput = 1;\n  }\n  /**\n   * Signal the start of a new note (voice should be silent before this point).\n   * @param {number} noteNumber - MIDI note number (0 to 127).\n   */\n  noteOn(noteNumber) {\n    const noteFrequency = Math.pow(2, (noteNumber - 69) / 12) * 442;\n    this.phaseIncrement = noteFrequency / this.sampleRate;\n    this.currentPhase = 1.1;\n  }\n  /**\n   * Render output for a single quantum.\n   * @param {number} detuneFactor - Factor to increase note\'s frequency by (0.5 = octave-down, 1.0 = default, 2.0 = octave-up)\n   * @param {number} pulseWidth - Pulse width (0..1 - where 0 = square).\n   * @param {number} sawLevel - Output level of the Sawtooth waveform.\n   * @param {number} pulseLevel - Output level of the Pulse waveform.\n   * @param {number} subLevel - Output level of the Sub waveform.\n   */\n  render(detuneFactor, pulseWidth, sawLevel, pulseLevel, subLevel) {\n    const phaseIncrement = this.phaseIncrement * detuneFactor;\n    const origPhase = this.currentPhase;\n    this.currentPhase += phaseIncrement;\n    if (this.currentPhase > 1) {\n      this.currentPhase -= 1;\n      this.pulseWidth = 0.5 - 0.45 * pulseWidth;\n      this.pulsePositive = 1 - pulseWidth * 0.95;\n      this.pulseNegative = -1;\n      this.pulseHeight = 0.45 * (this.pulsePositive - this.pulseNegative);\n    }\n    let newSawOutput = 0;\n    if (sawLevel > 0) {\n      newSawOutput = this.currentPhase + this.currentPhase - 1;\n      newSawOutput -= this.calcPolyBLEP2(this.currentPhase, phaseIncrement, 1);\n    }\n    let newPulseOutput = 0;\n    if (pulseLevel > 0) {\n      newPulseOutput = this.currentPhase > this.pulseWidth ? this.pulsePositive *= 0.998 : this.pulseNegative *= 0.998;\n      newPulseOutput -= this.calcPolyBLEP2(this.currentPhase, phaseIncrement, this.pulseHeight);\n      const x = this.currentPhase - this.pulseWidth;\n      newPulseOutput += this.calcPolyBLEP2(x < 0 ? x + 1 : x, phaseIncrement, this.pulseHeight);\n    }\n    let newSubOutput = this.subOutput *= 0.998;\n    let y = this.currentPhase - 0.5;\n    if (y < phaseIncrement && y > -phaseIncrement) {\n      if (y < 0) {\n        y += 1;\n      }\n      const origSubOutput = newSubOutput;\n      if (this.currentPhase >= 0.5 && origPhase < 0.5) {\n        this.subOutput = newSubOutput = newSubOutput > 0 ? -1 : 1;\n      }\n      newSubOutput -= this.calcPolyBLEP2(y, phaseIncrement, origSubOutput);\n    }\n    return newSawOutput * sawLevel + newPulseOutput * pulseLevel + newSubOutput * subLevel;\n  }\n  /**\n   * Calculate the PolyBLEP correction that is required to reduce aliasing.\n   * @param {number} phase - Current phase.\n   * @param {number} inc - Current phase-increment (to produce the desired pitch).\n   * @param {number} height - Height of the PolyBLEP correction).\n   */\n  calcPolyBLEP2(phase, inc, height) {\n    let result = 0;\n    if (phase < inc) {\n      const t = phase / inc;\n      result = height * (t + t - t * t - 1);\n    } else if (phase + inc > 1) {\n      const t = (phase - 1) / inc;\n      result = height * (t * t + (t + t) + 1);\n    }\n    return result;\n  }\n};\n\n// src/junox/abstractEnvelope.js\nvar AbstractEnvelope = class {\n  constructor(segments) {\n    this._segments = segments;\n    this._currentPhase = -1;\n    this._currentValue = 0;\n  }\n  /**\n   * Returns true if the envelope is currently active.\n   */\n  isFinished() {\n    return this._currentPhase === -1;\n  }\n  /**\n   * Returns true if the envelope is active, and has been released or shutdown.\n   */\n  isReleased() {\n    return this._currentPhase !== 0 && this._currentPhase !== 1;\n  }\n  /**\n   * Returns true if the envelope is currently shutting-down.\n   */\n  isShuttingDown() {\n    return this._currentPhase === this._segments.length - 1;\n  }\n  /**\n   * Trigger (or retrigger) the envelope.\n   */\n  trigger() {\n    this._currentPhase = 0;\n    for (let segment of this._segments) {\n      segment.reset();\n    }\n  }\n  /**\n   * Release the current note.\n   */\n  release() {\n    if (this._currentPhase !== -1) {\n      this._currentPhase = this._segments.length - 2;\n    }\n  }\n  /**\n   * Shutdown the envelope (when you need all notes to stop quickly, or when you are stealing voices).\n   */\n  shutdown() {\n    if (this._currentPhase !== -1) {\n      this._currentPhase = this._segments.length - 1;\n    }\n  }\n  /**\n   * Reset the envelope (only used when the voice is silent).\n   */\n  reset() {\n    this._currentPhase = -1;\n    this._currentValue = 0;\n    for (let i = 0; i < this._segments.length; i++) {\n      this._segments[i].reset();\n    }\n  }\n  /**\n   * Calculate the next value of the envelope.\n   */\n  render() {\n    let currentPhase = this._currentPhase;\n    while (currentPhase >= 0 && currentPhase < this._segments.length) {\n      const segment = this._segments[currentPhase];\n      const nextValue = segment.process(this._currentValue);\n      if (segment.isComplete(nextValue)) {\n        currentPhase++;\n        if (currentPhase >= this._segments.length) {\n          this._currentValue = 0;\n          currentPhase = -1;\n        }\n        this._currentPhase = currentPhase;\n      } else {\n        this._currentValue = nextValue;\n        break;\n      }\n    }\n    return this._currentValue;\n  }\n};\nvar AttackSegment = class {\n  /**\n   * Create an envelope attack segment.\n   * @param {number} sampleRate - Samples-per-second for the current audio context.\n   * @param {number} attackTCO - For analog this is often "Math.exp(-1.5)".\n   * @param {number} target - Target level at-which this segment should stop.\n   * @param {bool} isSustainAtEnd - Set to true if the end of the segment is the sustain phase.\n   */\n  constructor(sampleRate2, attackTCO, target, isSustainAtEnd) {\n    this._sampleRate = sampleRate2;\n    this._attackTCO = attackTCO;\n    this._attackCoeff = 0;\n    this._attackOffset = 0;\n    this._isSustainAtEnd = isSustainAtEnd;\n    this.target = target;\n  }\n  /**\n   * Configure the segment so that it would attack from 0 to +1 in the specified number of seconds.\n   * @param {number} seconds - Planned duration of the segment (if the segment runs from 0 to +1)\n   */\n  setDuration(duration) {\n    const samples = this._sampleRate * duration;\n    this._attackCoeff = Math.exp(-Math.log((1 + this._attackTCO) / this._attackTCO) / samples);\n    this._attackOffset = (1 + this._attackTCO) * (1 - this._attackCoeff);\n  }\n  /**\n   * Reset the segment.\n   */\n  reset() {\n  }\n  /**\n   * Calculate the next value of this segment of the envelope.\n   * @param {number} previousValue - Previous value of the envelope.\n   * @returns {number} - Next value of the envelope\n   */\n  process(previousValue) {\n    const result = previousValue * this._attackCoeff + this._attackOffset;\n    return result > this.target && this._isSustainAtEnd ? this.target : result;\n  }\n  /**\n   * Test if the segment is now complete.\n   * @param {number} value - Value to test.\n   * @returns {bool} - True if the value if the segment is now complete.\n   */\n  isComplete(value) {\n    return value > this.target;\n  }\n};\nvar DecaySegment = class {\n  /**\n   * Create an envelope decay segment.\n   * @param {number} sampleRate - Samples-per-second for the current audio context.\n   * @param {number} decayTCO - For analog this is often "Math.exp(-4.95)".\n   * @param {number} target - Target level at-which this segment should stop.\n   * @param {bool} isSustainAtEnd - Set to true if the end of the segment is the sustain phase.\n   */\n  constructor(sampleRate2, decayTCO, target, isSustainAtEnd) {\n    this._sampleRate = sampleRate2;\n    this._decayTCO = decayTCO;\n    this._decayCoeff = 0;\n    this._decayOffset = 0;\n    this._isSustainAtEnd = isSustainAtEnd;\n    this.target = target;\n  }\n  /**\n   * Configure the segment so that it would decay from +1 to 0 in the specified number of seconds.\n   * @param {number} seconds - Planned duration of the segment (if the segment runs from +1 to 0)\n   */\n  setDuration(seconds) {\n    const samples = this._sampleRate * seconds;\n    this._decayCoeff = Math.exp(-Math.log((1 + this._decayTCO) / this._decayTCO) / samples);\n    this._decayOffset = (this.target - this._decayTCO) * (1 - this._decayCoeff);\n  }\n  /**\n   * Reset the segment.\n   */\n  reset() {\n  }\n  /**\n   * Calculate the next value of this segment of the envelope.\n   * @param {number} previousValue - Previous value of the envelope.\n   * @returns {number} - Next value of the envelope\n   */\n  process(previousValue) {\n    const result = previousValue * this._decayCoeff + this._decayOffset;\n    return result < this.target && this._isSustainAtEnd ? this.target : result;\n  }\n  /**\n   * Test if the segment is now complete.\n   * @param {number} value - Value to test.\n   * @returns {bool} - True if the value if the segment is now complete.\n   */\n  isComplete(value) {\n    return value <= this.target && !this._isSustainAtEnd || value < 0.02;\n  }\n};\nvar DelaySegment = class {\n  /**\n   * Create an envelope delay segment.\n   * @param {number} sampleRate - Samples-per-second for the current audio context.\n   */\n  constructor(sampleRate2) {\n    this._sampleRate = sampleRate2;\n    this._delaySampleCount = 0;\n    this._currentRemaining = 0;\n  }\n  /**\n   * Configure the segment so that it will delay for the specified number of seconds.\n   * @param {number} seconds - Planned duration of the segment.\n   */\n  setDuration(duration) {\n    const delaySampleCount = this._sampleRate * duration | 0;\n    this._currentRemaining += delaySampleCount - this._delaySampleCount;\n    this._delaySampleCount = delaySampleCount;\n  }\n  /**\n   * Reset the segment.\n   */\n  reset() {\n    this._currentRemaining = this._delaySampleCount;\n  }\n  /**\n   * Calculate the next value of this segment of the envelope.\n   * @param {number} previousValue - Previous value of the envelope.\n   * @returns {number} - Next value of the envelope.\n   */\n  process(previousValue) {\n    this._currentRemaining--;\n    return previousValue;\n  }\n  /**\n   * Test if the segment is now complete.\n   * @returns {bool} - True if the value if the segment is now complete.\n   */\n  isComplete() {\n    return this._currentRemaining <= 0;\n  }\n};\nvar ShutdownSegment = class {\n  /**\n   * Create an envelope shutdown segment.\n   * @param {number} sampleRate - Samples-per-second for the current audio context.\n   * @param {number} seconds - Planned duration of the segment (if the segment runs from +1 to 0)\n   */\n  constructor(sampleRate2, seconds) {\n    this._shutdownRate = 1 / (seconds * sampleRate2);\n  }\n  /**\n   * Reset the segment.\n   */\n  reset() {\n  }\n  /**\n   * Calculate the next value of this segment of the envelope.\n   * @param {number} previousValue - Previous value of the envelope.\n   * @returns {number} - Next value of the envelope\n   */\n  process(previousValue) {\n    const result = previousValue - this._shutdownRate;\n    return result < 0 ? 0 : result;\n  }\n  /**\n   * Test if the segment is now complete.\n   * @param {number} value - Value to test.\n   * @returns {bool} - True if the value if the segment is now complete.\n   */\n  isComplete(value) {\n    return value <= 0;\n  }\n};\n\n// src/junox/utils.mjs\nfunction fastTanh(x) {\n  if (x < -3) {\n    return -1;\n  } else if (x > 3) {\n    return 1;\n  }\n  const xSquared = x * x;\n  return x * (27 + xSquared) / (27 + 9 * xSquared);\n}\nfunction interpolatedLookup(value, table) {\n  const index = value | 0;\n  const indexNext = index + 1;\n  const factor = value - index;\n  if (index < 0) {\n    return table[0];\n  }\n  if (indexNext >= table.length) {\n    return table[table.length - 1];\n  }\n  return table[index] * (1 - factor) + table[indexNext] * factor;\n}\n\n// src/junox/juno60Envelope.js\nvar curveFromAttackSliderToDuration = [1e-3, 0.03, 0.24, 0.65, 3.25];\nvar curveFromDecaySliderToDuration = [2e-3, 0.096, 0.984, 4.449, 19.783];\nvar curveFromReleaseSliderToDuration = [2e-3, 0.096, 0.984, 4.449, 19.783];\nvar Juno60Envelope = class extends AbstractEnvelope {\n  /**\n   * Create a Juno-60 envelope.\n   * @param {number} sampleRate - Samples-per-second for the current audio context.\n   */\n  constructor(sampleRate2) {\n    super([\n      new AttackSegment(sampleRate2, 0.632, 1, false),\n      new DecaySegment(sampleRate2, 0.025, 0, true),\n      new DecaySegment(sampleRate2, 0.025, 0, false),\n      new ShutdownSegment(sampleRate2, 1e-3)\n    ]);\n    this._attack = this._segments[0];\n    this._decay = this._segments[1];\n    this._release = this._segments[2];\n    this._shutdown = this._segments[3];\n  }\n  /**\n   * Configure the segments of the envelope from direct values.\n   * @param {number} attackDuration - Number of seconds for the duration of the attack phase.\n   * @param {number} decayDuration - Number of seconds for the duration of the decay phase.\n   * @param {number} sustainLevel - Level of the sustain phase (0.0 to 1.0).\n   * @param {number} releaseDuration - Number of seconds for the duration of the release phase.\n   */\n  setValues(attackDuration, decayDuration, sustainLevel, releaseDuration) {\n    this._attack.setDuration(attackDuration);\n    this._decay.target = Math.max(0.02, sustainLevel);\n    this._decay.setDuration(decayDuration);\n    this._release.setDuration(this._decay.target <= 0.02 ? 0.01 : releaseDuration);\n  }\n  /**\n   * Configure the segments of the envelope from slider-positions.\n   * @param {number} attackSlider - Value of the attack slider (0.0 to 1.0).\n   * @param {number} decaySlider - Value of the decay slider (0.0 to 1.0).\n   * @param {number} sustainSlider - Value of the sustain slider (0.0 to 1.0).\n   * @param {number} releaseSlider - Value of the release slider (0.0 to 1.0).\n   */\n  setValuesFromSliders(attackSlider, decaySlider, sustainSlider, releaseSlider) {\n    const attackDuration = interpolatedLookup(\n      attackSlider * curveFromAttackSliderToDuration.length,\n      curveFromAttackSliderToDuration\n    );\n    const decayDuration = interpolatedLookup(decaySlider * curveFromDecaySliderToDuration.length, curveFromDecaySliderToDuration);\n    const releaseDuration = interpolatedLookup(\n      releaseSlider * curveFromReleaseSliderToDuration.length,\n      curveFromReleaseSliderToDuration\n    );\n    this.setValues(attackDuration, decayDuration, sustainSlider, releaseDuration);\n  }\n};\n\n// src/junox/ladderFilter.js\nvar LadderFilter = class {\n  constructor(sampleRate2) {\n    this.reset();\n    this.nyquistLimit = sampleRate2 * 0.5;\n    this.piOverSampleRate = Math.PI / sampleRate2;\n  }\n  /**\n   * Reset the filter - ready for the next note.\n   */\n  reset() {\n    this.z1 = 0;\n    this.z2 = 0;\n    this.z3 = 0;\n    this.z4 = 0;\n  }\n  /**\n   * Calculate the "cutoffFactor" for the specifed frequency.\n   * @param {number} fc - Cutoff frequency (Hz).\n   */\n  calcCutoffFactor(fc) {\n    if (fc > this.nyquistLimit) {\n      fc = this.nyquistLimit;\n    }\n    return Math.tan(fc * this.piOverSampleRate);\n  }\n  /**\n   * Trigger the filter (useful for percussive sounds).\n   * @param {number} initialExcite - Initial amount of excitement for the feedback resonance loop.\n   */\n  trigger(initialExcite) {\n    this.z4 += initialExcite;\n  }\n  /**\n   * Apply filtering to the input sigmal.\n   * If saturation or passband-compensation are required then pre-apply to input (Valimaki).\n   * Consider applying a peak-limiter to the output (to prevent blow-up).\n   * @param {number} input - Input signal (normally in range -1.0 to +1.0).\n   * @param {number} cutoffFactor - Result of prewarping the cutoff-frequency.\n   * @param {number} resonance - Resonance amount (range: 0.0 to 1.0).\n   * @param {number} mode - Filter mode (see ladderFilterModes).\n   */\n  process(input, cutoffFactor, resonance, mode = ladderFilterModes.LPF4) {\n    const oneOverOnePlusg = 1 / (1 + cutoffFactor);\n    const alpha = cutoffFactor * oneOverOnePlusg;\n    const beta4 = oneOverOnePlusg;\n    const beta3 = beta4 * alpha;\n    const beta2 = beta3 * alpha;\n    const beta1 = beta2 * alpha;\n    const feedback = beta1 * this.z1 + beta2 * this.z2 + beta3 * this.z3 + beta4 * this.z4;\n    const k = 4 * resonance;\n    const xin = (input - k * feedback) / (1 + k * alpha * alpha * alpha * alpha);\n    const lpf1In = (xin - this.z1) * alpha;\n    const lpf1Out = lpf1In + this.z1;\n    this.z1 = lpf1In + lpf1Out;\n    const lpf2In = (lpf1Out - this.z2) * alpha;\n    const lpf2Out = lpf2In + this.z2;\n    this.z2 = lpf2In + lpf2Out;\n    const lpf3In = (lpf2Out - this.z3) * alpha;\n    const lpf3Out = lpf3In + this.z3;\n    this.z3 = lpf3In + lpf3Out;\n    const lpf4In = (lpf3Out - this.z4) * alpha;\n    const lpf4Out = lpf4In + this.z4;\n    this.z4 = lpf4In + lpf4Out;\n    return mode[4] * lpf4Out + mode[3] * lpf3Out + mode[2] * lpf2Out + mode[1] * lpf1Out + mode[0] * xin;\n  }\n};\nvar ladderFilterModes = {\n  LPF2: Float64Array.from([0, 0, 1, 0, 0]),\n  LPF4: Float64Array.from([0, 0, 0, 0, 1]),\n  BPF2: Float64Array.from([0, 2, -2, 0, 0]),\n  BPF4: Float64Array.from([0, 0, 4, -8, 4]),\n  HPF2: Float64Array.from([1, -2, 1, 0, 0]),\n  HPF4: Float64Array.from([1, -4, 6, -4, 1])\n};\nladderFilterModes.all = [\n  ladderFilterModes.LPF2,\n  ladderFilterModes.LPF4,\n  ladderFilterModes.BPF2,\n  ladderFilterModes.BPF4,\n  ladderFilterModes.HPF2,\n  ladderFilterModes.HPF4\n];\n\n// src/junox/noise.js\nvar Noise = class {\n  constructor(sampleRate2, fc = 5e3) {\n    this._b1 = -Math.exp(-2 * fc * Math.PI / sampleRate2);\n    this._a0 = 1 + this._b1;\n    this._z1 = 0;\n  }\n  render() {\n    const xin = Math.random() * 2 - 1;\n    const xout = xin * this._a0 - this._z1;\n    this._z1 = this._b1 * xout;\n    return xout;\n  }\n};\n\n// src/junox/voice.js\nvar Voice = class {\n  constructor({ patch, sampleRate: sampleRate2 }) {\n    this.patch = patch;\n    this.sampleRate = sampleRate2;\n    this.note = -1;\n    this.velocity = 0;\n    this.filterNoteFactor = 0;\n    this.dco = new Juno60DCO(sampleRate2);\n    this.noise = new Noise(sampleRate2, 5e3);\n    this.modEnv = new Juno60Envelope(sampleRate2);\n    this.ampEnv = new Juno60Envelope(sampleRate2);\n    this.moogVCF = new LadderFilter(sampleRate2);\n  }\n  /**\n   * Render output for a single quantum. The passed-in parameters should be "smoothed" so that we don\'t hear zippering.\n   * @param {number} lfoOut - Current value of the LFO (between -1 and +1)\n   * @param {number} detuneFactor - Factor to increase note\'s frequency by (0.5 = octave-down, 1.0 = default, 2.0 = octave-up)\n   * @param {number} pwmDepth - Pulse width depth (between 0-square and 1)\n   * @param {number} sawLevel - Output level of the Sawtooth waveform (between 0 and 1).\n   * @param {number} pulseLevel - Output level of the Pulse waveform (between 0 and 1).\n   * @param {number} subLevel - Output level of the Sub waveform (between 0 and 1).\n   * @param {number} noiseLevel - Output level of the noise (between 0 and 1).\n   * @param {number} filterCutoff - Current value of the filter\'s cutoff slider (between 0 and 1).\n   * @param {number} filterResonance - Current value of the filter\'s resonance slider (between 0 and 1).\n   * @param {number} filterEnvMod - Current value of the filter\'s envelope modulation slider (between -1 (for negative) and +1 (for positive)).\n   * @param {number} lfoDetuneOctaves - Number of octaves that the filter is detuned-by (for LFO and bend-lever).\n   * @param {number} filterKeyMod - Current value of the filter\'s keyboard modulation slider (between 0 and 1).\n   */\n  render(lfoOut, detuneFactor, pwmDepth, sawLevel, pulseLevel, subLevel, noiseLevel, filterCutoff, filterResonance, filterEnvMod, lfoDetuneOctaves, filterKeyMod) {\n    const modEnvOut = this.modEnv.render();\n    const ampEnvOut = this.ampEnv.render();\n    let pulseWidth = pwmDepth;\n    if (this.patch.dco.pwmMod === "l") {\n      pulseWidth *= lfoOut * 0.5 + 0.5;\n    } else if (this.patch.dco.pwmMod === "e") {\n      pulseWidth *= modEnvOut;\n    }\n    let dcoOut = this.dco.render(detuneFactor, pulseWidth, sawLevel, pulseLevel, subLevel);\n    if (noiseLevel > 0) {\n      dcoOut += this.noise.render() * noiseLevel;\n    }\n    const cutoffDetuneOctave = filterCutoff * 200 / 12;\n    const envDetuneOctaves = modEnvOut * filterEnvMod * 12;\n    const keyboardDetuneOctaves = filterKeyMod * this.filterNoteFactor;\n    const resonanceDetuneOctaves = this.patch.vcf.resonance * 0.5;\n    const vcfCutoffValue = cutoffDetuneOctave + lfoDetuneOctaves * ampEnvOut + // Using env to dumb-down LFO makes UFO patch sound more natural.\n    keyboardDetuneOctaves + envDetuneOctaves + resonanceDetuneOctaves;\n    const cutoffFrequency = 7.8 * Math.pow(2, vcfCutoffValue);\n    const vcfOut = this.moogVCF.process(dcoOut, this.moogVCF.calcCutoffFactor(cutoffFrequency), filterResonance);\n    return this.velocity * vcfOut * ampEnvOut;\n  }\n  noteOn(note, velocity) {\n    if (note !== this.note || this.isFinished()) {\n      this.note = note;\n      this.dco.noteOn(note);\n      this.modEnv.reset();\n      this.ampEnv.reset();\n      this.moogVCF.reset();\n      const c4 = 60;\n      const fiveOctaves = 5 * 12;\n      this.filterNoteFactor = 5 * ((this.note - c4) / fiveOctaves);\n    }\n    if (!this.patch.dco.saw && !this.patch.dco.pulse && !this.patch.dco.subAmount && !this.patch.dco.noise) {\n      const initialExcite = this.patch.vcf.resonance * this.patch.vcf.resonance * 0.01;\n      this.moogVCF.trigger(initialExcite);\n    }\n    this.velocity = velocity;\n    this.updatePatch(this.patch);\n    this.modEnv.trigger();\n    this.ampEnv.trigger();\n  }\n  noteOff() {\n    this.modEnv.release();\n    this.ampEnv.release();\n  }\n  shutdown() {\n    this.modEnv.shutdown();\n    this.ampEnv.shutdown();\n  }\n  isReleased() {\n    return this.ampEnv.isReleased();\n  }\n  isShuttingDown() {\n    return this.ampEnv.isShuttingDown();\n  }\n  getLevel() {\n    return this.ampEnv._currentValue;\n  }\n  isFinished() {\n    return this.ampEnv.isFinished();\n  }\n  updatePatch(patch) {\n    const env = patch.env;\n    this.modEnv.setValuesFromSliders(env.attack, env.decay, env.sustain, env.release);\n    if (patch.vcaType === "env") {\n      this.ampEnv.setValuesFromSliders(env.attack, env.decay, env.sustain, env.release);\n    } else {\n      this.ampEnv.setValues(247e-5, 57e-4, 0.98, 57e-4);\n    }\n    this.patch = patch;\n  }\n};\n\n// src/junox/ringBuffer.js\nvar RingBuffer = class {\n  /**\n   * @param {number} maxBufferSize - Maximum number of samples that the signal can be delayed-by (calculate using `delaySeconds * sampleRate`).\n   */\n  constructor(maxBufferSize) {\n    this.buffer = new Float32Array(maxBufferSize);\n    this.writeIndex = 0;\n    this.maxBufferSize = maxBufferSize;\n  }\n  /**\n   *\n   * @param {number} index\n   */\n  ringBufferIndex(index) {\n    if (index < 0) {\n      return index + this.maxBufferSize;\n    }\n    if (index >= this.maxBufferSize) {\n      return index - this.maxBufferSize;\n    }\n    return index;\n  }\n  /**\n   * Read a sample from the ring-buffer.\n   * Delay period = `readOffset / sampleRate`\n   * @param (number) readOffset - The number of samples between the read and the write position\n   */\n  readSample(readOffset) {\n    const readIndex = this.ringBufferIndex(this.writeIndex - readOffset);\n    const indexA = Math.floor(readIndex);\n    const fractional = readIndex - indexA;\n    const indexB = this.ringBufferIndex(indexA + 1);\n    return this.buffer[indexA] * (1 - fractional) + this.buffer[indexB] * fractional;\n  }\n  /**\n   * Write a new sample into the ring-buffer.\n   * @param {number} input\n   */\n  writeSample(input) {\n    this.buffer[this.writeIndex] = input;\n    this.writeIndex = (this.writeIndex + 1) % this.maxBufferSize;\n  }\n  /**\n   * Reset the delay-line\'s contents (only used when the instrument is silent).\n   */\n  reset() {\n    this.buffer.fill(0);\n  }\n};\n\n// src/junox/simpleSinglePoleFilter.js\nvar SimpleSinglePoleFilter = class {\n  /**\n   * @constructor\n   * @param {number} sampleRate - Sample rate (Hz)\n   * @param {*} fc - Cutoff frequency (Hz)\n   */\n  constructor(sampleRate2, fc = 5) {\n    this._piOverSampleRate = Math.PI / sampleRate2;\n    this._a0 = 1;\n    this._b1 = 0;\n    this._z1 = 0;\n    this.setCutoff(fc);\n  }\n  /**\n   * Flush storage and clear feedback.\n   */\n  reset() {\n    this._z1 = 0;\n  }\n  /**\n   * Process a single sample through the low-pass filter (using transposed direct form II technique).\n   * @param {number} xin - Input value.\n   * @returns {number} - Output value.\n   */\n  renderLP(xin) {\n    const xout = xin * this._a0 + this._z1;\n    this._z1 = -this._b1 * xout;\n    return xout;\n  }\n  /**\n   * Process using high-pass filter (inverse of low-pass).\n   * @param {number} xin - Input value.\n   * @returns {number} - Output value.\n   */\n  renderHP(xin) {\n    return xin - this.renderLP(xin);\n  }\n  /**\n   * Set cutoff frequency for for simple low pass filter.\n   * @param {number} fc - Cutoff frequency (Hz)\n   */\n  setCutoff(fc) {\n    this._b1 = -Math.exp(-2 * fc * this._piOverSampleRate);\n    this._a0 = 1 + this._b1;\n  }\n};\n\n// src/junox/chorus.js\nvar Chorus = class {\n  /**\n   * @constructor\n   * @param {number} sampleRate\n   */\n  constructor(sampleRate2) {\n    this.leftOutput = 0;\n    this.rightOutput = 0;\n    this._sampleRate = sampleRate2;\n    this._isUsed = false;\n    this._nextChorusMode = 0;\n    this._ringBuffer = new RingBuffer(Math.trunc(sampleRate2 * 6e-3));\n    this._preFilter = new SimpleSinglePoleFilter(sampleRate2, 7237);\n    this._postLeftFilter = new SimpleSinglePoleFilter(sampleRate2, 10644);\n    this._postRightFilter = new SimpleSinglePoleFilter(sampleRate2, 10644);\n    this._dryCurrent = 1;\n    this._dryChange = 0;\n    this._dryTarget = 1;\n    this._lfoValue = 0;\n    this._lfoIncrement = 0.01;\n    this._maxLeftOffset = 0;\n    this._averageLeftSamples = 0;\n    this._maxRightOffset = 0;\n    this._averageRightSamples = 0;\n  }\n  /**\n   * Calculate the `leftOutput` and `rightOutput` signal values for the specified `input`.\n   * @param {number} input\n   */\n  render(input) {\n    this._isUsed = true;\n    let dry = this._dryCurrent;\n    if (this._dryChange !== 0) {\n      dry += this._dryChange;\n      if (dry > 1) {\n        dry = 1;\n        this._dryChange = 0;\n        this.update(this._nextChorusMode);\n      } else if (dry < this._dryTarget && this._dryChange < 0) {\n        dry = this._dryTarget;\n        this._dryChange = 0;\n      }\n      this._dryCurrent = dry;\n    }\n    if (dry === 1) {\n      this.leftOutput = input;\n      this.rightOutput = input;\n      return;\n    }\n    let lfoValue = this._lfoValue + this._lfoIncrement;\n    if (lfoValue > 1 || lfoValue < -1) {\n      this._lfoIncrement = -this._lfoIncrement;\n      lfoValue = this._lfoValue + this._lfoIncrement;\n    }\n    this._lfoValue = lfoValue;\n    const dryOutput = input * dry;\n    const wetFactor = 1 - dry;\n    const leftDelaySamples = this._averageLeftSamples + lfoValue * this._maxLeftOffset;\n    const leftDelayedValue = this._ringBuffer.readSample(leftDelaySamples);\n    this.leftOutput = dryOutput + this._postLeftFilter.renderLP(leftDelayedValue * wetFactor);\n    const rightDelaySamples = this._averageRightSamples + lfoValue * this._maxRightOffset;\n    const rightDelayedValue = this._ringBuffer.readSample(rightDelaySamples);\n    this.rightOutput = dryOutput + this._postRightFilter.renderLP(rightDelayedValue * wetFactor);\n    this._ringBuffer.writeSample(this._preFilter.renderLP(this._applySaturation(input)));\n  }\n  /**\n   * Reset the delay-line\'s contents (only used when the instrument is silent).\n   */\n  reset() {\n    this._ringBuffer.reset();\n    this._preFilter.reset();\n    this._postLeftFilter.reset();\n    this._postRightFilter.reset();\n    this._isUsed = false;\n  }\n  /**\n   * Update the chorus effect to the specified mode.\n   * @param {number} chorusMode - New chorus-mode setting.\n   */\n  update(chorusMode) {\n    if (this._dryCurrent < 1 && !this._isUsed) {\n      this._dryChange = 5e-4;\n      this._dryTarget = 1;\n      this._nextChorusMode = chorusMode;\n    } else {\n      switch (chorusMode) {\n        case 1:\n          this._updateValues(0.513, 0.44, 154e-5, 515e-5, 151e-5, 54e-4, true);\n          break;\n        case 2:\n          this._updateValues(0.863, 0.44, 154e-5, 515e-5, 151e-5, 54e-4, true);\n          break;\n        case 3:\n          this._updateValues(9.75, 0.44, 322e-5, 356e-5, 328e-5, 365e-5, false);\n          break;\n        default:\n          this._updateValues(0.513, 1, 154e-5, 515e-5, 151e-5, 54e-4, true);\n          this._ringBuffer.reset();\n          break;\n      }\n    }\n  }\n  /**\n   * @private Apply mild saturation (to mimic the NLP from the BBD).\n   * @param {number} input - Input value.\n   * @returns {number} - Result of the saturated input.\n   */\n  _applySaturation(input) {\n    return input;\n  }\n  /**\n   * @private Apply the internal settings.\n   * @param {number} freq - Frequency (Hz).\n   * @param {number} dry - Ratio of dry:wet (1.0 = fully-dry).\n   * @param {number} minLeftDelay - Minimum delay for the left channel (seconds).\n   * @param {number} maxLeftDelay - Maximum delay for the left channel (seconds).\n   * @param {number} minRightDelay - Minimum delay for the right channel (seconds).\n   * @param {number} maxRightDelay - Maximum delay for the right channel (seconds).\n   * @param {boolean} isStereo - True if the output image should be stereo.\n   */\n  _updateValues(freq, dry, minLeftDelay, maxLeftDelay, minRightDelay, maxRightDelay, isStereo) {\n    const averageLeftDelay = (minLeftDelay + maxLeftDelay) * 0.5;\n    const maxLeftOffset = maxLeftDelay - averageLeftDelay;\n    this._averageLeftSamples = averageLeftDelay * this._sampleRate;\n    this._maxLeftOffset = maxLeftOffset * this._sampleRate;\n    const averageRightDelay = (minRightDelay + maxRightDelay) * 0.5;\n    const maxRightOffset = maxRightDelay - averageRightDelay;\n    this._averageRightSamples = averageRightDelay * this._sampleRate;\n    this._maxRightOffset = maxRightOffset * this._sampleRate * (isStereo ? -1 : 1);\n    this._dryTarget = dry;\n    if (!this._isUsed) {\n      this._dryCurrent = dry;\n      this._dryChange = 0;\n    } else {\n      this._dryChange = (dry - this._dryCurrent) / 1e3;\n    }\n    this._lfoIncrement = Math.sign(this._lfoIncrement) * 4 * freq / this._sampleRate;\n  }\n};\n\n// src/junox/lfo.js\nvar LFO = class {\n  /**\n   * @constructor.\n   * @param {number} sampleRate - Samples-per-second for the current audio context.\n   */\n  constructor(sampleRate2) {\n    this._oneOverSampleRate = 1 / sampleRate2;\n    this._phaseIncrement = 0;\n    this.currentPhase = 1;\n    this.currentValue = 0;\n    this.isRestarted = false;\n    this.waveform = "triangle";\n  }\n  /**\n   * Reset the LFO (only used when the instrument is silent).\n   */\n  reset() {\n    this.currentPhase = 1;\n    this.currentValue = 0;\n  }\n  /**\n   * Calculate the next value of the LFO.\n   */\n  render() {\n    this.isRestarted = false;\n    this.currentPhase += this._phaseIncrement;\n    if (this.currentPhase > 1) {\n      this.isRestarted = true;\n      this.currentPhase -= 1;\n    }\n    let value = 0;\n    switch (this.waveform) {\n      case "none":\n        value = 0;\n        break;\n      case "sine":\n        value = Math.sin(this.currentPhase * 2 * Math.PI);\n        break;\n      case "square":\n        value = this.currentPhase > 0.5 ? -1 : 1;\n        break;\n      case "random":\n        value = this.isRestarted ? Math.random() * 2 - 1 : this.currentValue;\n        break;\n      case "noise":\n        value = Math.random() * 2 - 1;\n        break;\n      default:\n        value = this.currentPhase * 4;\n        if (value > 1) {\n          value = 2 - value;\n        }\n        if (value < -1) {\n          value = -2 - value;\n        }\n        break;\n    }\n    return this.currentValue = value;\n  }\n  /**\n   * Set the speed of the LFO..\n   * @param {number} frequency - Frequency of the LFO (Hz).\n   */\n  setRate(frequency) {\n    this._phaseIncrement = frequency * this._oneOverSampleRate;\n  }\n};\n\n// src/junox/lfoWithEnvelope.js\nvar LFOWithEnvelope = class extends LFO {\n  /**\n   * @constructor.\n   * @param {number} sampleRate - Samples-per-second for the current audio context.\n   */\n  constructor(sampleRate2) {\n    super(sampleRate2);\n    const segments = [\n      this._delay = new DelaySegment(sampleRate2),\n      this._attack = new AttackSegment(sampleRate2, 0.03, 1, true),\n      this._release = new DecaySegment(sampleRate2, 0.025, 0, false),\n      this._shutdown = new ShutdownSegment(sampleRate2, 1e-3)\n    ];\n    this._release.setDuration(0.1);\n    this._env = new AbstractEnvelope(segments);\n  }\n  /**\n   * Returns true if the envelope is currently active.\n   */\n  isActive() {\n    return !this._env.isFinished();\n  }\n  /**\n   * Trigger (or retrigger) the envelope.\n   */\n  trigger() {\n    if (!this.isActive()) {\n      this.currentPhase = 1;\n      this.currentValue = 0;\n    }\n    if (this._env.isFinished() || !this._env.isReleased()) {\n      this._env.trigger();\n    }\n  }\n  /**\n   * Release the current note.\n   */\n  release() {\n    this._env.release();\n  }\n  /**\n   * Shutdown the envelope (when you need all notes to stop quickly, or when you are stealing voices).\n   */\n  shutdown() {\n    this._env.shutdown();\n  }\n  /**\n   * Reset the envelope (only used when the voice is silent).\n   * @override\n   */\n  reset() {\n    super.reset();\n    this._env.reset();\n  }\n  /**\n   * Calculate the next value of the LFO.\n   * @override\n   */\n  render() {\n    if (!this.isActive()) {\n      return 0;\n    }\n    const envValue = this._env.render();\n    if (envValue === 0) {\n      return 0;\n    }\n    return envValue * super.render();\n  }\n  /**\n   * Configure the LFO from direct values.\n   * @param {number} frequency - Frequency of the LFO (Hz).\n   * @param {number} delayDuration - Number of seconds for the duration of the delay phase.\n   * @param {number} attackDuration - Number of seconds for the duration of the attack phase.\n   */\n  setValues(frequency, delayDuration, attackDuration) {\n    this.setRate(frequency);\n    this._delay.setDuration(delayDuration);\n    this._attack.setDuration(attackDuration);\n  }\n};\n\n// src/junox/junox.js\nvar synthStatus = {\n  SILENT: 0,\n  NOTES_ACTIVE: 4\n  // This is the number of trailing frames that will be rendered AFTER all notes have finished.\n};\nvar Junox = class {\n  constructor({ patch, sampleRate: sampleRate2, polyphony }) {\n    this.patch = patch;\n    this.sampleRate = sampleRate2;\n    this.maxVoices = polyphony;\n    this.voices = [];\n    this.status = synthStatus.SILENT;\n    this.parameters = [\n      this.bendAmountParam = new SmoothMoves(0, sampleRate2),\n      this.dcoBendDepthParam = new SmoothMoves(1, sampleRate2),\n      this.pitchLfoModDepthParam = new SmoothMoves(0, sampleRate2),\n      this.pwmDepthParam = new SmoothMoves(0, sampleRate2),\n      this.sawLevelParam = new SmoothMoves(0, sampleRate2),\n      this.pulseLevelParam = new SmoothMoves(0, sampleRate2),\n      this.subLevelParam = new SmoothMoves(0, sampleRate2),\n      this.noiseLevelParam = new SmoothMoves(0, sampleRate2),\n      this.filterCutoffParam = new SmoothMoves(0, sampleRate2),\n      this.filterResonanceParam = new SmoothMoves(0, sampleRate2),\n      this.filterBendDepthParam = new SmoothMoves(1, sampleRate2),\n      this.filterEnvModParam = new SmoothMoves(0, sampleRate2),\n      this.filterLfoModParam = new SmoothMoves(0, sampleRate2),\n      this.filterKeyModParam = new SmoothMoves(0, sampleRate2),\n      this.vcaGainFactorParam = new SmoothMoves(0, sampleRate2)\n    ];\n    this.lfo = new LFOWithEnvelope(sampleRate2);\n    this.lfo.waveform = "sine";\n    this.hpf = new SimpleSinglePoleFilter(sampleRate2);\n    this.chorus = new Chorus(sampleRate2);\n    this.update();\n  }\n  noteOn(note, velocity) {\n    this.status = synthStatus.NOTES_ACTIVE;\n    const voiceIndex = this.voices.findIndex((voice) => voice.note === note && !voice.isShuttingDown());\n    if (voiceIndex >= 0) {\n      this.voices[voiceIndex].noteOn(note, velocity);\n      return;\n    }\n    if (!this.voices.length && this.patch.lfo.autoTrigger) {\n      this.lfo.trigger();\n    }\n    const newVoice = new Voice({ patch: this.patch, sampleRate: this.sampleRate });\n    newVoice.noteOn(note, velocity);\n    const activeVoices = this.voices.filter((voice) => !voice.isShuttingDown());\n    if (activeVoices.length >= this.maxVoices) {\n      const releasedVoices = activeVoices.filter((voice) => voice.isReleased());\n      const candidates = releasedVoices.length ? releasedVoices : activeVoices;\n      let victim = candidates[0];\n      for (let i = 1; i < candidates.length; i++) {\n        if (candidates[i].getLevel() < victim.getLevel()) {\n          victim = candidates[i];\n        }\n      }\n      victim.shutdown();\n    }\n    this.voices.push(newVoice);\n  }\n  noteOff(note) {\n    this.voices.forEach((voice) => voice.note === note && !voice.isFinished() && voice.noteOff());\n  }\n  pitchBend(value) {\n    this.bendAmountParam.setValue(value);\n  }\n  lfoTrigger() {\n    this.lfo.trigger();\n  }\n  lfoRelease() {\n    this.lfo.release();\n  }\n  render(outL, outR) {\n    if (this.status === synthStatus.SILENT) {\n      return;\n    }\n    this.status--;\n    this.voices = this.voices.filter((voice) => !voice.isFinished());\n    if (this.voices.length) {\n      this.status = synthStatus.NOTES_ACTIVE;\n    }\n    for (let i = 0; i < outL.length; i++) {\n      const bendAmount = this.bendAmountParam.getNextValue();\n      const dcoBendDepth = this.dcoBendDepthParam.getNextValue();\n      const pwmDepth = this.pwmDepthParam.getNextValue();\n      const pitchLfoModDepth = this.pitchLfoModDepthParam.getNextValue();\n      const sawLevel = this.sawLevelParam.getNextValue();\n      const pulseLevel = this.pulseLevelParam.getNextValue();\n      const subLevel = this.subLevelParam.getNextValue();\n      const noiseLevel = this.noiseLevelParam.getNextValue();\n      const filterCutoff = this.filterCutoffParam.getNextValue();\n      const filterResonance = this.filterResonanceParam.getNextValue();\n      const filterBendDepth = this.filterBendDepthParam.getNextValue();\n      const filterEnvMod = this.filterEnvModParam.getNextValue();\n      const filterLfoMod = this.filterLfoModParam.getNextValue();\n      const filterKeyMod = this.filterKeyModParam.getNextValue();\n      const vcaGainFactor = this.vcaGainFactorParam.getNextValue();\n      if (i === 0) {\n      }\n      const lfoOut = this.lfo.render();\n      const dcoDetuneOctaves = lfoOut * pitchLfoModDepth * 0.25 + // +-300 cents (page 14).\n      bendAmount * dcoBendDepth * 7 / 12;\n      let dcoDetuneFactor = this.patch.dco.range;\n      if (dcoDetuneOctaves !== 0) {\n        dcoDetuneFactor *= Math.pow(2, dcoDetuneOctaves);\n      }\n      const filterDetuneOctaves = bendAmount * filterBendDepth * 4 + // +- 4 octaves\n      filterLfoMod * lfoOut * 3;\n      let monoOut = 0;\n      for (let v = 0; v < this.voices.length; v++) {\n        const voice = this.voices[v];\n        if (!voice.isFinished()) {\n          monoOut += voice.render(\n            lfoOut,\n            dcoDetuneFactor,\n            pwmDepth,\n            sawLevel,\n            pulseLevel,\n            subLevel,\n            noiseLevel,\n            filterCutoff,\n            filterResonance,\n            filterEnvMod,\n            filterDetuneOctaves,\n            filterKeyMod\n          );\n        }\n      }\n      if (this.patch.hpf > 0) {\n        let lowPassOut = this.hpf.renderLP(monoOut);\n        if (this.patch.hpf < 0.25) {\n          lowPassOut *= this.patch.hpf * 4;\n        }\n        monoOut -= lowPassOut;\n      }\n      monoOut *= vcaGainFactor;\n      monoOut = fastTanh(3 * monoOut);\n      this.chorus.render(monoOut);\n      outL[i] = this.chorus.leftOutput;\n      outR[i] = this.chorus.rightOutput;\n    }\n    if (this.status === synthStatus.SILENT) {\n      let fadeLevel = 1;\n      const fadeStep = fadeLevel / outL.length;\n      for (let i = 0; i < outL.length; i++) {\n        outL[i] *= fadeLevel;\n        outR[i] *= fadeLevel;\n        fadeLevel -= fadeStep;\n      }\n      if (this.patch.lfo.autoTrigger) {\n        this.lfo.reset();\n      }\n      this.hpf.reset();\n      this.chorus.reset();\n      for (let i = 0; i < this.parameters.length; i++) {\n        this.parameters[i].reset();\n      }\n    }\n  }\n  setValue(path, value) {\n    const pathSegments = path.split(".");\n    if (pathSegments.length) {\n      let target = this.patch;\n      for (let i = 0; i < pathSegments.length - 1; i++) {\n        target = target[pathSegments[i]] || (target[pathSegments[i]] = {});\n      }\n      target[pathSegments[pathSegments.length - 1]] = value;\n      this.update();\n    }\n  }\n  update() {\n    let isActive = false;\n    for (let v = 0; v < this.voices.length; v++) {\n      const voice = this.voices[v];\n      voice.updatePatch(this.patch);\n      isActive = isActive || !voice.isFinished();\n    }\n    let sawLevel = this.patch.dco.saw ? 0.2 : 0;\n    let pulseLevel = this.patch.dco.pulse ? 0.2 : 0;\n    let subLevel = this.patch.dco.sub ? this.patch.dco.subAmount * 0.195 : 0;\n    let noiseLevel = this.patch.dco.noise * 0.21;\n    let mixFactor = sawLevel + pulseLevel + subLevel + noiseLevel;\n    if (mixFactor > 0.26) {\n      mixFactor = 0.26 / (0.26 + (mixFactor - 0.26) * 0.3);\n      pulseLevel *= mixFactor;\n      sawLevel *= mixFactor;\n      subLevel *= mixFactor;\n      noiseLevel *= mixFactor;\n    }\n    this.sawLevelParam.setValue(sawLevel, isActive);\n    this.pulseLevelParam.setValue(pulseLevel, isActive);\n    this.subLevelParam.setValue(subLevel, isActive);\n    this.noiseLevelParam.setValue(noiseLevel, isActive);\n    this.pitchLfoModDepthParam.setValue(this.patch.dco.lfo, isActive);\n    this.pwmDepthParam.setValue(this.patch.dco.pwm, isActive);\n    const envModDirection = this.patch.vcf.modPositive ? 1 : -1;\n    this.filterCutoffParam.setValue(this.patch.vcf.frequency, isActive);\n    this.filterResonanceParam.setValue(this.patch.vcf.resonance, isActive);\n    this.filterEnvModParam.setValue(this.patch.vcf.envMod * envModDirection, isActive);\n    this.filterLfoModParam.setValue(this.patch.vcf.lfoMod, isActive);\n    this.filterKeyModParam.setValue(this.patch.vcf.keyMod, isActive);\n    this.chorus.update(this.patch.chorus);\n    setLfoValuesFromSliders(this.lfo, this.patch.lfo.frequency, this.patch.lfo.delay);\n    setHpfValuesFromSliders(this.hpf, this.patch.hpf);\n    const vcaGainFactor = Math.pow(1.2589, this.patch.vca * 10) * 0.1;\n    this.vcaGainFactorParam.setValue(vcaGainFactor, isActive);\n  }\n  panic() {\n    this.voices = [];\n  }\n};\nvar curveFromLfoRateSliderToFreq = [0.3, 0.85, 3.39, 11.49, 22.22];\nvar curveFromLfoDelaySliderToDelay = [0, 0.0639, 0.85, 1.2, 2.685];\nvar curveFromLfoDelaySliderToAttack = [1e-3, 0.053, 0.188, 0.348, 1.15];\nfunction setLfoValuesFromSliders(lfo, rateSlider, delaySlider) {\n  const frequency = interpolatedLookup(rateSlider * curveFromLfoRateSliderToFreq.length, curveFromLfoRateSliderToFreq);\n  const delayDuration = interpolatedLookup(delaySlider * curveFromLfoDelaySliderToDelay.length, curveFromLfoDelaySliderToDelay);\n  const attackDuration = interpolatedLookup(delaySlider * curveFromLfoDelaySliderToAttack.length, curveFromLfoDelaySliderToAttack);\n  lfo.setValues(frequency, delayDuration, attackDuration);\n}\nvar curveFromHpfSliderToFreq = [140, 250, 520, 1220];\nfunction setHpfValuesFromSliders(hpf, rateSlider) {\n  const frequency = interpolatedLookup(rateSlider * curveFromHpfSliderToFreq.length, curveFromHpfSliderToFreq);\n  hpf.setCutoff(frequency);\n}\n\n// src/synth.constants.js\nvar NOTE_ON = "note-on";\nvar NOTE_OFF = "note-off";\nvar SET_PARAM = "set-param";\nvar SET_PATCH = "set-patch";\nvar ALL_NOTES_OFF = "all-notes-off";\nvar LFO_TRIGGER_ON = "lfo-trigger-on";\nvar LFO_TRIGGER_OFF = "lfo-trigger-off";\nvar PITCH_BEND = "pitch-bend";\n\n// src/synth.worklet.js\nvar JunoxWorker = class extends AudioWorkletProcessor {\n  constructor(options) {\n    super();\n    this.synth = new Junox({\n      patch: options.processorOptions.patch,\n      polyphony: options.processorOptions.polyphony,\n      // eslint-disable-next-line no-undef\n      sampleRate: sampleRate || 48e3\n    });\n    this.port.onmessage = this.handleMessage.bind(this);\n  }\n  handleMessage(event) {\n    if (event.data.action === NOTE_ON) {\n      this.synth.noteOn(event.data.note, event.data.velocity);\n    } else if (event.data.action === NOTE_OFF) {\n      this.synth.noteOff(event.data.note);\n    } else if (event.data.action === PITCH_BEND) {\n      this.synth.pitchBend(event.data.value);\n    } else if (event.data.action === SET_PARAM) {\n      this.synth.setValue(event.data.name, event.data.value);\n    } else if (event.data.action === SET_PATCH) {\n      this.synth.patch = event.data.patchData;\n      this.synth.update();\n    } else if (event.data.action === LFO_TRIGGER_ON) {\n      this.synth.lfoTrigger();\n    } else if (event.data.action === LFO_TRIGGER_OFF) {\n      this.synth.lfoRelease();\n    } else if (event.data.action === ALL_NOTES_OFF) {\n      this.synth.panic();\n    } else {\n      console.log("Unmanaged message", JSON.stringify(event.data));\n    }\n  }\n  process(inputs, outputs) {\n    const output = outputs[0];\n    this.synth.render(output[0], output[1]);\n    return true;\n  }\n};\nregisterProcessor("junox-synth", JunoxWorker);\n';

// src/synth.node.js
var processorBlob = new Blob([synth_worklet_default], { type: "application/javascript; charset=utf-8" });
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
export {
  Juno60FactoryPatchesA,
  SynthWorkletNode,
  createJuno60,
  defaultPatch
};
