# JunoX Softsynth Emulator

This is a reasonably-accurate JavaScript emulation of the classic Roland Juno-60 synthesizer - using the WebAudio AudioWorkletProcessor.

This project was originally started by [Daniele Zannotti](https://github.com/dzannotti/junox). My branch is mainly concerned with how accurate the emulation is.

## Demos

You can change the sliders while you are playing:

* The [old ReactJS-based UI](https://pendragon-andyh.github.io/junox/) - I have tested this on the last Chrome, Firefox and Edge browsers.
* The [new NexusUI-based UI](https://pendragon-andyh.github.io/junox/demo/juno60-nexusUI.html) - I have tested this on Chrome and Edge.

xxxxx

## Next steps

* User interface
  * I like the NexusUI implementation because it provides a nice touch-based UI, allows management of patches, and is easier for me to enhance.
* Bundling
  * Ultimately, I want to publish the AudioWorklet for reuse by other developers - and so I want to publish the Node and Processor as an NPM package. The UI is very-much just a demo.
* Performance:
  * The start-up is a bit glitchy (because new objects are being created when the first note is played, and because the JavaScript engine needs time to optimise the code).
  * The parameter-smoothing
* Documentation:
  * I started documenting the project over on [Daniele's repo](https://github.com/dzannotti/junox/wiki).
