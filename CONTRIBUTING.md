# Contributing to junox

Thank you for your interest in contributing! This guide covers everything you need to work on junox locally and submit changes.

## Prerequisites

- **Node.js** v18 or later (v24 recommended)
- **npm** v9 or later (bundled with Node.js)
- A modern browser with Web Audio API and Web MIDI API support (Chrome or Edge recommended for MIDI)

## Local setup

```bash
git clone https://github.com/pendragon-andyh/junox.git
cd junox
npm install
npm run build-prod
```

## Project structure

```text
junox/
├── src/
│   ├── junox/            # DSP modules (oscillator, filter, envelope, LFO, chorus, voice …)
│   ├── synth.node.js     # AudioWorkletNode wrapper (runs on the main thread)
│   ├── synth.worklet.js  # AudioWorkletProcessor entry-point (runs in the audio worklet)
│   ├── midiConsumer.js   # Web MIDI API helper
│   └── patches.js        # Auto-generated patch data — do not edit directly
├── patches/
│   ├── Juno60.csv        # Patch definitions (source of truth)
│   └── Juno60.js         # Script that converts the CSV into src/patches.js
├── demo/                 # Standalone HTML demo pages
├── dist/                 # Build output (committed for direct CDN/NPM use)
├── tests/                # Unit tests (node:test)
└── eslint.config.js      # ESLint flat config
```

## Development workflow

1. Edit source files under `src/`.
2. Build:
   ```bash
   npm run build-prod   # lint + build + test (full pipeline)
   ```
3. Open a demo page in your browser:
   ```text
   demo/juno60-nexusUI.html   # full synthesizer UI
   demo/juno60-dco.html       # oscillator test
   demo/juno60-envelope.html  # envelope test
   demo/juno60-chorus.html    # chorus test
   ```
   > [!NOTE]
   > Browser security requires a user gesture before the Web Audio context starts. Click anywhere on the page first.

## Adding or editing patches

Patches are defined in [`patches/Juno60.csv`](patches/Juno60.csv).

After editing the CSV, regenerate `src/patches.js`:

```bash
npm run build:patches
```

Commit both the updated CSV **and** the regenerated `src/patches.js`.

## Running tests

```bash
npm test
```

Tests use the Node.js built-in [`node:test`](https://nodejs.org/api/test.html) runner. Test files live in `tests/` and use the `.test.mjs` extension.

## Linting

```bash
npm run lint
```

ESLint is configured via [`eslint.config.js`](eslint.config.js) (flat config). Key rules:

- `semi: never` — no semicolons
- `ecmaVersion: 2020`, `sourceType: module` — ES modules throughout

## Full production build

```bash
npm run build-prod
```

This runs the complete pipeline: `build:patches → lint → build:processor → build:module → build:iife → test`.

Build outputs:

| File | Description |
|---|---|
| `dist/synth.worklet.txt` | AudioWorkletProcessor bundle (loaded inline as a Blob URL) |
| `dist/synth.node.mjs` | ES module build for bundlers / Node.js |
| `dist/synth.node.js` | IIFE build for direct `<script>` use |

## Submitting changes

1. Fork the repository on GitHub.
2. Create a branch from `master`:
   ```bash
   git checkout -b my-feature
   ```
3. Make your changes, ensure `npm run build-prod` passes, then commit.
4. Push your branch and open a Pull Request against `master`.

Please link any relevant issue from the [issue tracker](https://github.com/pendragon-andyh/junox/issues) in your PR description.

## Code style

- 2-space indentation
- No semicolons (enforced by ESLint)
- ES modules (`import` / `export`) — no CommonJS
- `src/patches.js` is auto-generated; never edit it directly
