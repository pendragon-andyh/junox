# JunoX Softsynth Emulator

This is a reasonably-accurate JavaScript emulation of the classic [Roland Juno-60](https://en.wikipedia.org/wiki/Roland_Juno-60) synthesizer - using the [Web Audio](https://www.w3.org/TR/webaudio/)'s AudioWorkletProcessor and [Web MIDI](https://www.w3.org/TR/webmidi/).

## Demos

You can change the sliders while you are playing on both of these UIs:

- The [old ReactJS-based UI](https://pendragon-andyh.github.io/junox/dist/index.html) - I have tested this on the last Chrome, Firefox and Edge browsers. The messy UI is my fault.
- The fun [new NexusUI-based UI](https://pendragon-andyh.github.io/junox/demo/juno60-nexusUI.html) - I have tested this on Chrome and Edge. I think Firefox is having a hissy-fit because of me using ES6 modules in the engine.

Some of the [patches](https://www.synthmania.com/juno-60.htm) have a the "sweet-spot" on the keyboard or are designed to be used with pitch-bend. You may need to play a couple of notes before the JavaScript JIT gets going properly.

Also some useful visualizations: [DCO](https://pendragon-andyh.github.io/junox/demo/juno60-dco.html),
[LFO](https://pendragon-andyh.github.io/junox/demo/juno60-lfo.html),
[Envelope](https://pendragon-andyh.github.io/junox/demo/juno60-envelope.html), and
[Chorus](https://pendragon-andyh.github.io/junox/demo/juno60-chorus.html).

## Next steps

This project is a work-in-progress. My next steps are:

### Bundling

- Ultimately I want to publish the AudioWorklet Node+Processor for reuse by other developers - and so I want to publish the Node and Processor as an NPM package or as a [WAM plug-in](https://www.webaudiomodules.org/). The demo UI is very-much just a bit of fun.

### User interface

- I like the [NexusUI](http://nexus-js.github.io/ui/) implementation because it is light-weight, provides a responsive touch-based UI, allows management of patches, and is easier for me to enhance.
- Probably going to remove the ReactJS implementation.
- Add the option of recording/exporting audio (allows me to import to [Sonic Visualiser](https://www.sonicvisualiser.org/)).
- Add option of visualizing the output spectrogram and oscilloscope.

### Performance

- The start-up is a bit glitchy (because new objects are being created when the first note is played, and because the JavaScript JIT engine needs time to optimise the code).
- The parameter-smoothing uses low pass filters. Check if linear-smoothing sounds good-enough.
- There are a bunch of expensive calculations (Power, Exp, etc.). Check if lookup tables would be faster, and check if we can calculate less often (i.e. every eighth-sample).
- Use SharedAudioBuffer to communicate between the Node and Processor (instead of MessagePort).

### Documentation

- I started documenting the project over on [Daniele's repo](https://github.com/dzannotti/junox/wiki). I have learned a lot while developing this project - it would be good to share.

### Improve emulation and patches

- It should be simple to create additional synths ([SH-101](https://en.wikipedia.org/wiki/Roland_SH-101[), [Juno-106](https://en.wikipedia.org/wiki/Roland_Juno-106)) based on the code. This would quickly increate the number of pre-baked patches.
- Try to decode the "bank B" patch bank.

### Code quality

- The code for the NexusUI code is truely heinous (sorry). Need to refactor a little.
- The sound-engine folder (src/junox) contains some unused files.
- Fix-up the existing tests, and add some proper coverage.
- I am tempted to move to [TypeScript](https://www.typescriptlang.org/) (that would have identified many of my bugs). Also, it should be a small step to go from TypeScript for the synth-engine to [AssemblyScript](https://assemblyscript.org/).

If anyone has ideas or feedback then I'm always happy to listen.

## Background

This project was originally started by [Daniele Zannotti](https://github.com/dzannotti/junox). We chose the Juno-60 because it is a very simple synth that (still) manages to sound really good - and I had previously done [some analysis](https://github.com/pendragon-andyh/Juno60) of that synth.
