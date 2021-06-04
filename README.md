# JunoX Softsynth Emulator

JavaScript library that emulates the classic [Roland Juno-60](https://en.wikipedia.org/wiki/Roland_Juno-60) synthesizer - using the [Web Audio](https://www.w3.org/TR/webaudio/)'s AudioWorkletProcessor and [Web MIDI](https://www.w3.org/TR/webmidi/).

## Demos

You can change the sliders while you are playing:

- [NexusUI-based UI](https://pendragon-andyh.github.io/junox/demo/juno60-nexusUI.html) - I have tested this on Chrome (PC and Android), Firefox and Edge. You may need to play a couple of notes before the JavaScript JIT gets going properly.
- Useful visualizations: [DCO](https://pendragon-andyh.github.io/junox/demo/juno60-dco.html),
[LFO](https://pendragon-andyh.github.io/junox/demo/juno60-lfo.html),
[Envelope](https://pendragon-andyh.github.io/junox/demo/juno60-envelope.html), and
[Chorus](https://pendragon-andyh.github.io/junox/demo/juno60-chorus.html).

Some of the patches have a the "sweet-spot" on the keyboard or are designed to be used with pitch-bend or the VCF sliders. Examples of the original can be found [here](https://www.synthmania.com/juno-60.htm).

## Features

- Emulation is built using a [AudioWorklet](https://developers.google.com/web/updates/2017/12/audio-worklet). Allows very accurate low-level emulation.
- Oscillator uses [PolyBLEP](https://www.metafunction.co.uk/post/all-about-digital-oscillators-part-2-blits-bleps) to minimize aliasing (sawtooth, pulse and sub waveforms).
- VCF is implemented using a Virtual Analog ladder filter.

## Next steps

This project is a work-in-progress:

- Ultimately I want to publish the AudioWorklet Node+Processor for easy reuse by other developers using an NPM package (maybe as a [WebAudio Module](https://www.webaudiomodules.org/) or [WebAudio Plug-In](https://github.com/micbuffa/WebAudioPlugins)).
- Provide integration with a library that implements a sequencer.
- It should be simple to create additional synths ([SH-101](https://en.wikipedia.org/wiki/Roland_SH-101[), [Juno-106](https://en.wikipedia.org/wiki/Roland_Juno-106), [JX-3P](https://en.wikipedia.org/wiki/Roland_JX-3P)) based on the code. This would quickly increate the number and variety of pre-baked patches.
- Improve performance and documentation.

If anyone has ideas or [feedback](https://github.com/pendragon-andyh/junox/issues) then I'm always happy to listen.

## Background

This project was originally started by [Daniele Zannotti](https://github.com/dzannotti/junox). We chose the Juno-60 because it is a very simple synth that (still) manages to sound really good - and I had previously  [analysed](https://github.com/pendragon-andyh/Juno60) that synth.
