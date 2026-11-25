# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased]

## [0.3.1] — 2026

### Added

- `CONTRIBUTING.md` and `CHANGELOG.md` for contributor onboarding
- `Voice.shutdown()`, `Voice.isReleased()`, `Voice.isShuttingDown()`, `Voice.getLevel()` methods to support smarter voice stealing

### Changed

- **Build tooling:** Migrated from Yarn to npm; `package-lock.json` replaces `yarn.lock`
- **ESLint:** Upgraded from v7 to v10; migrated to flat config (`eslint.config.js`); removed `.eslintrc.json` and `.eslintignore`
- **Test runner:** Replaced `uvu` with the Node.js built-in `node:test` module; test command is now `node --test tests/*.test.mjs`
- **Patch generation (`patches/Juno60.js`):** Replaced `csv-parser` streaming parse with synchronous `fs.readFileSync` + line splitting; output is now pretty-printed JSON
- **gh-pages:** Upgraded from v5 to v6
- **jQuery:** Updated CDN references in all demo pages to v4.1.0 with correct SRI hashes
- **AudioWorklet loader:** Changed esbuild loader from `dataurl` to `text` for `synth.worklet.txt`; replaced `base64DataToBlob` with a direct `new Blob([processorData])` call, fixing an `atob InvalidCharacterError` at runtime
- **Voice stealing in `Junox.noteOn()`:** Rewrote to prefer the quietest already-released voice, then the quietest active voice, rather than the first available slot
- **Web Audio autoplay (`demo/juno60-nexusUI.html`):** Switched unlock listeners to capture-phase on `document`; added `pointerdown` and `click` event types; deferred listener removal until `audioContext.state === 'running'`; added `audioContext.resume()` fallback in `noteOn`

### Fixed

- `abstractEnvelope.js` — `isReleased()` and `isShuttingDown()` now correctly check `this._currentPhase` instead of a stale local variable
- `abstractEnvelope.js` — `ShutdownSegment.process()` now clamps the result to `0.0` when it goes negative, preventing envelope runaway
- `midiConsumer.js` — `registerControlChangeHandler()` now stores handlers in `this._controlChangeHandlers` (was using an undefined variable)
- `chorus.js` — `_updateValues()` no longer overwrites the dry mix on the first call when the chorus is off

### Removed

- `prettier` and `.prettierrc.js` — formatting is left to editor preferences; ESLint enforces the `semi: never` rule
- `csv-parser` dependency (replaced with synchronous built-in parsing in `patches/Juno60.js`)
- `uvu` test runner dependency (replaced with `node:test`)

---

## [0.3.0]

Initial public release of the junox library.

### Features

- Roland Juno-60 emulation using Web Audio API `AudioWorkletProcessor`
- DCO (oscillator with sub, pulse, saw, noise)
- VCF (24 dB/oct low-pass filter with resonance)
- VCA and HPF
- ADSR and DAR envelopes
- LFO (sine, square, random) modulating pitch, filter, and VCA
- Chorus (BBD-style with three modes)
- Web MIDI API consumer helper (`midiConsumer.js`)
- Patch library sourced from `patches/Juno60.csv`
- Demo pages: nexusUI full synth, DCO, envelope, filter response, LFO, chorus

[Unreleased]: <https://github.com/pendragon-andyh/junox/compare/v0.3.1...HEAD>
[0.3.1]: <https://github.com/pendragon-andyh/junox/compare/v0.3.0...v0.3.1>
[0.3.0]: <https://github.com/pendragon-andyh/junox/releases/tag/v0.3.0>
