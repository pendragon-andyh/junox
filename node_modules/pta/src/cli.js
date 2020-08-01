#!/usr/bin/env node
const path = require('path');
const {createReadStream} = require('fs');
const esm = require('esm');
const arg = require('arg');
const glob = require('fast-glob');

const {createHarness, mochaTapLike, tapeTapLike} = require('zora');
const {defaultReporter} = require('./reporters/default_reporter.js');
const {logReporter} = require('./reporters/log_reporter.js');

const DEFAULT_FILE_PATTERN = [
    '**/test.js',
    '**/*.spec.js',
    '**/*.test.js',
    '**/test/**/*.js',
    '**/tests/**/*.js',
    '**/__tests__/**/*.js',
    '!**/node_modules',
    '!node_modules'
];

const createReporterStream = value => {
    switch (value) {
        case 'tap':
            return tapeTapLike;
        case 'tap-indent':
            return mochaTapLike;
        case 'log':
            return logReporter();
        default:
            return process.stdout.isTTY ? defaultReporter() : mochaTapLike;
    }
};

(async function () {
    const argSpecs = {
        '--help': Boolean,
        '--only': Boolean,
        '--no-esm': Boolean,
        '--reporter': String,
        '-o': '--only',
        '-r': '--reporter'
    };
    const {
        _: filePatternArg,
        ['--only']: runOnly = false,
        ['--no-esm']: noESM = false,
        ['--reporter']: reporter = 'default',
        ['--help']: help
    } = arg(argSpecs, {
        permissive: false,
        argv: process.argv.slice(2)
    });

    const filePattern = filePatternArg.length > 0 ? filePatternArg : DEFAULT_FILE_PATTERN;
    const reporterStream = createReporterStream(reporter);

    // create a custom test harness
    const testHarness = createHarness({
        runOnly
    });

    if (help) {
        createReadStream(path.resolve(__dirname, './usage.txt')).pipe(process.stdout);
        return;
    }

    let uncaughtError = null;

    try {
        const files = await glob(filePattern);
        const requireFn = noESM === false ? esm(module) : require;
        for (const f of files) {
            const spec = requireFn(path.resolve(process.cwd(), f));

            function zora_spec_fn(assert) {
                return spec.default ? spec.default(assert) : spec(assert);
            }

            if (runOnly) {
                testHarness.only(f, zora_spec_fn);
            } else {
                testHarness.test(f, zora_spec_fn);
            }
        }
        await testHarness.report(reporterStream);
    } catch (e) {
        console.error(e);
        uncaughtError = e;
    } finally {
        process.exitCode = !testHarness.pass || uncaughtError ? 1 : 0;
    }
})();