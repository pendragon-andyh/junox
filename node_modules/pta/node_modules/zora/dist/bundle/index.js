'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const startTestMessage = (test, offset) => ({
    type: "TEST_START" /* TEST_START */,
    data: test,
    offset
});
const assertionMessage = (assertion, offset) => ({
    type: "ASSERTION" /* ASSERTION */,
    data: assertion,
    offset
});
const endTestMessage = (test, offset) => ({
    type: "TEST_END" /* TEST_END */,
    data: test,
    offset
});
const bailout = (error, offset) => ({
    type: "BAIL_OUT" /* BAIL_OUT */,
    data: error,
    offset
});

const delegateToCounter = (counter) => (target) => Object.defineProperties(target, {
    skipCount: {
        get() {
            return counter.skipCount;
        }
    },
    failureCount: {
        get() {
            return counter.failureCount;
        }
    },
    successCount: {
        get() {
            return counter.successCount;
        }
    },
    count: {
        get() {
            return counter.count;
        }
    }
});
const counter = () => {
    let success = 0;
    let failure = 0;
    let skip = 0;
    return Object.defineProperties({
        update(assertion) {
            const { pass, skip: isSkipped } = assertion;
            if (isSkipped) {
                skip++;
            }
            else if (!isAssertionResult(assertion)) {
                skip += assertion.skipCount;
                success += assertion.successCount;
                failure += assertion.failureCount;
            }
            else if (pass) {
                success++;
            }
            else {
                failure++;
            }
        }
    }, {
        successCount: {
            get() {
                return success;
            }
        },
        failureCount: {
            get() {
                return failure;
            }
        },
        skipCount: {
            get() {
                return skip;
            }
        },
        count: {
            get() {
                return skip + success + failure;
            }
        }
    });
};

const defaultTestOptions = Object.freeze({
    offset: 0,
    skip: false,
    runOnly: false
});
const noop = () => {
};
const TesterPrototype = {
    [Symbol.asyncIterator]: async function* () {
        await this.routine;
        for (const assertion of this.assertions) {
            if (assertion[Symbol.asyncIterator]) {
                // Sub test
                yield startTestMessage({ description: assertion.description }, this.offset);
                yield* assertion;
                if (assertion.error !== null) {
                    // Bubble up the error and return
                    this.error = assertion.error;
                    this.pass = false;
                    return;
                }
            }
            yield assertionMessage(assertion, this.offset);
            this.pass = this.pass && assertion.pass;
            this.counter.update(assertion);
        }
        return this.error !== null ?
            yield bailout(this.error, this.offset) :
            yield endTestMessage(this, this.offset);
    }
};
const testerLikeProvider = (BaseProto = TesterPrototype) => (assertions, routine, offset) => {
    const testCounter = counter();
    const withTestCounter = delegateToCounter(testCounter);
    let pass = true;
    return withTestCounter(Object.create(BaseProto, {
        routine: {
            value: routine
        },
        assertions: {
            value: assertions
        },
        offset: {
            value: offset
        },
        counter: {
            value: testCounter
        },
        length: {
            get() {
                return assertions.length;
            }
        },
        pass: {
            enumerable: true,
            get() {
                return pass;
            },
            set(val) {
                pass = val;
            }
        }
    }));
};
const testerFactory = testerLikeProvider();

const tester = (description, spec, { offset = 0, skip = false, runOnly = false } = defaultTestOptions) => {
    let executionTime = 0;
    let error = null;
    let done = false;
    const assertions = [];
    const collect = item => {
        if (done) {
            throw new Error(`test "${description}" 
tried to collect an assertion after it has run to its completion. 
You might have forgotten to wait for an asynchronous task to complete
------
${spec.toString()}
`);
        }
        assertions.push(item);
    };
    const specFunction = skip === true ? noop : function zora_spec_fn() {
        return spec(assert(collect, offset, runOnly));
    };
    const testRoutine = (async function () {
        try {
            const start = Date.now();
            const result = await specFunction();
            executionTime = Date.now() - start;
            return result;
        }
        catch (e) {
            error = e;
        }
        finally {
            done = true;
        }
    })();
    return Object.defineProperties(testerFactory(assertions, testRoutine, offset), {
        error: {
            get() {
                return error;
            },
            set(val) {
                error = val;
            }
        },
        executionTime: {
            enumerable: true,
            get() {
                return executionTime;
            }
        },
        skip: {
            value: skip
        },
        description: {
            enumerable: true,
            value: description
        }
    });
};

// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

const isAssertionResult = (result) => {
    return 'operator' in result;
};
const specFnRegexp = /zora_spec_fn/;
const zoraInternal = /zora\/dist\/bundle/;
const filterStackLine = l => (l && !zoraInternal.test(l) && !l.startsWith('Error') || specFnRegexp.test(l));
const getAssertionLocation = () => {
    const err = new Error();
    const stack = (err.stack || '')
        .split('\n')
        .map(l => l.trim())
        .filter(filterStackLine);
    const userLandIndex = stack.findIndex(l => specFnRegexp.test(l));
    const stackline = userLandIndex >= 1 ? stack[userLandIndex - 1] : (stack[0] || 'N/A');
    return stackline
        .replace(/^at|^@/, '');
};
const assertMethodHook = (fn) => function (...args) {
    // @ts-ignore
    return this.collect(fn(...args));
};
const aliasMethodHook = (methodName) => function (...args) {
    return this[methodName](...args);
};
const AssertPrototype = {
    equal: assertMethodHook((actual, expected, description = 'should be equivalent') => ({
        pass: fastDeepEqual(actual, expected),
        actual,
        expected,
        description,
        operator: "equal" /* EQUAL */
    })),
    equals: aliasMethodHook('equal'),
    eq: aliasMethodHook('equal'),
    deepEqual: aliasMethodHook('equal'),
    notEqual: assertMethodHook((actual, expected, description = 'should not be equivalent') => ({
        pass: !fastDeepEqual(actual, expected),
        actual,
        expected,
        description,
        operator: "notEqual" /* NOT_EQUAL */
    })),
    notEquals: aliasMethodHook('notEqual'),
    notEq: aliasMethodHook('notEqual'),
    notDeepEqual: aliasMethodHook('notEqual'),
    is: assertMethodHook((actual, expected, description = 'should be the same') => ({
        pass: Object.is(actual, expected),
        actual,
        expected,
        description,
        operator: "is" /* IS */
    })),
    same: aliasMethodHook('is'),
    isNot: assertMethodHook((actual, expected, description = 'should not be the same') => ({
        pass: !Object.is(actual, expected),
        actual,
        expected,
        description,
        operator: "isNot" /* IS_NOT */
    })),
    notSame: aliasMethodHook('isNot'),
    ok: assertMethodHook((actual, description = 'should be truthy') => ({
        pass: Boolean(actual),
        actual,
        expected: 'truthy value',
        description,
        operator: "ok" /* OK */
    })),
    truthy: aliasMethodHook('ok'),
    notOk: assertMethodHook((actual, description = 'should be falsy') => ({
        pass: !Boolean(actual),
        actual,
        expected: 'falsy value',
        description,
        operator: "notOk" /* NOT_OK */
    })),
    falsy: aliasMethodHook('notOk'),
    fail: assertMethodHook((description = 'fail called') => ({
        pass: false,
        actual: 'fail called',
        expected: 'fail not called',
        description,
        operator: "fail" /* FAIL */
    })),
    throws: assertMethodHook((func, expected, description) => {
        let caught;
        let pass;
        let actual;
        if (typeof expected === 'string') {
            [expected, description] = [description, expected];
        }
        try {
            func();
        }
        catch (err) {
            caught = { error: err };
        }
        pass = caught !== undefined;
        actual = caught && caught.error;
        if (expected instanceof RegExp) {
            pass = expected.test(actual) || expected.test(actual && actual.message);
            actual = actual && actual.message || actual;
            expected = String(expected);
        }
        else if (typeof expected === 'function' && caught) {
            pass = actual instanceof expected;
            actual = actual.constructor;
        }
        return {
            pass,
            actual,
            expected,
            description: description || 'should throw',
            operator: "throws" /* THROWS */
        };
    }),
    doesNotThrow: assertMethodHook((func, expected, description) => {
        let caught;
        if (typeof expected === 'string') {
            [expected, description] = [description, expected];
        }
        try {
            func();
        }
        catch (err) {
            caught = { error: err };
        }
        return {
            pass: caught === undefined,
            expected: 'no thrown error',
            actual: caught && caught.error,
            operator: "doesNotThrow" /* DOES_NOT_THROW */,
            description: description || 'should not throw'
        };
    })
};
const assert = (collect, offset, runOnly = false) => {
    const actualCollect = item => {
        if (!item.pass) {
            item.at = getAssertionLocation();
        }
        collect(item);
        return item;
    };
    const test = (description, spec, opts) => {
        const options = Object.assign({}, defaultTestOptions, opts, { offset: offset + 1, runOnly });
        const subTest = tester(description, spec, options);
        collect(subTest);
        return subTest.routine;
    };
    const skip = (description, spec, opts) => {
        return test(description, spec, Object.assign({}, opts, { skip: true }));
    };
    return Object.assign(Object.create(AssertPrototype, { collect: { value: actualCollect } }), {
        test(description, spec, opts = {}) {
            if (runOnly) {
                return skip(description, spec, opts);
            }
            return test(description, spec, opts);
        },
        skip(description, spec = noop, opts = {}) {
            return skip(description, spec, opts);
        },
        only(description, spec, opts = {}) {
            const specFn = runOnly === false ? _ => {
                throw new Error(`Can not use "only" method when not in run only mode`);
            } : spec;
            return test(description, specFn, opts);
        }
    });
};

const map = (fn) => async function* (stream) {
    for await (const m of stream) {
        yield fn(m);
    }
};
// ! it mutates the underlying structure yet it is more efficient regarding performances
const flatten = map((m) => {
    m.offset = 0;
    return m;
});
const isAssertionResult$1 = (result) => {
    return 'operator' in result;
};
const stringifySymbol = (key, value) => {
    if (typeof value === 'symbol') {
        return value.toString();
    }
    return value;
};

// @ts-ignore
const flatDiagnostic = ({ pass, description, ...rest }) => rest;
const Tap = {
    print(message, offset = 0) {
        this.log(message.padStart(message.length + (offset * 4))); // 4 white space used as indent (see tap-parser)
    },
    printYAML(obj, offset = 0) {
        const YAMLOffset = offset + 0.5;
        this.print('---', YAMLOffset);
        for (const [prop, value] of Object.entries(obj)) {
            this.print(`${prop}: ${JSON.stringify(value, stringifySymbol)}`, YAMLOffset + 0.5);
        }
        this.print('...', YAMLOffset);
    },
    printComment(comment, offset = 0) {
        this.print(`# ${comment}`, offset);
    },
    printBailOut(message) {
        this.print('Bail out! Unhandled error.');
    },
    printTestStart(message) {
        const { data: { description }, offset } = message;
        this.printComment(description, offset);
    },
    printTestEnd(message) {
        // do nothing
    },
    printAssertion(message) {
        const { data, offset } = message;
        const { pass, description } = data;
        const label = pass === true ? 'ok' : 'not ok';
        if (isAssertionResult$1(data)) {
            const id = this.nextId();
            this.print(`${label} ${id} - ${description}`, offset);
            if (pass === false) {
                this.printYAML(flatDiagnostic(data), offset);
            }
        }
        else if (data.skip) {
            const id = this.nextId();
            this.print(`${pass ? 'ok' : 'not ok'} ${id} - ${description} # SKIP`, offset);
        }
    },
    printSummary(endMessage) {
        this.print('', 0);
        this.printComment(endMessage.data.pass ? 'ok' : 'not ok', 0);
        this.printComment(`success: ${endMessage.data.successCount}`, 0);
        this.printComment(`skipped: ${endMessage.data.skipCount}`, 0);
        this.printComment(`failure: ${endMessage.data.failureCount}`, 0);
    },
    async report(stream) {
        const src = flatten(stream);
        let lastMessage = null;
        this.print('TAP version 13');
        for await (const message of src) {
            lastMessage = message;
            switch (message.type) {
                case "TEST_START" /* TEST_START */:
                    this.printTestStart(message);
                    break;
                case "ASSERTION" /* ASSERTION */:
                    this.printAssertion(message);
                    break;
                case "BAIL_OUT" /* BAIL_OUT */:
                    this.printBailOut(message);
                    throw message.data;
            }
        }
        this.print(`1..${lastMessage.data.count}`, 0);
        this.printSummary(lastMessage);
    }
};
const factory = (log) => {
    let i = 0;
    return Object.create(Tap, {
        nextId: {
            enumerable: true,
            value: () => {
                return ++i;
            }
        },
        log: { value: log }
    });
};

const indentedDiagnostic = ({ expected, pass, description, actual, operator, at = 'N/A', ...rest }) => ({
    wanted: expected,
    found: actual,
    at,
    operator,
    ...rest
});
const id = function* () {
    let i = 0;
    while (true) {
        yield ++i;
    }
};
const idGen = () => {
    let stack = [id()];
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            return stack[0].next();
        },
        fork() {
            stack.unshift(id());
        },
        merge() {
            stack.shift();
        }
    };
};
const IndentedTap = Object.assign({}, Tap, {
    printTestStart(message) {
        const { data: { description }, offset } = message;
        this.printComment(`Subtest: ${description}`, offset);
    },
    printAssertion(message) {
        const { data, offset } = message;
        const { pass, description } = data;
        const label = pass === true ? 'ok' : 'not ok';
        const id = this.nextId();
        if (isAssertionResult$1(data)) {
            this.print(`${label} ${id} - ${description}`, offset);
            if (pass === false) {
                this.printYAML(indentedDiagnostic(data), offset);
            }
        }
        else {
            const comment = data.skip === true ? 'SKIP' : `${data.executionTime}ms`;
            this.print(`${pass ? 'ok' : 'not ok'} ${id} - ${description} # ${comment}`, message.offset);
        }
    },
    printTestEnd(message) {
        const length = message.data.length;
        const { offset } = message;
        this.print(`1..${length}`, offset);
    }
});
const factory$1 = (log) => {
    const id = idGen();
    return Object.create(IndentedTap, {
        nextId: {
            enumerable: true,
            value: () => {
                return id.next().value;
            }
        },
        report: {
            enumerable: true,
            value: async function (stream) {
                this.print('TAP version 13');
                let lastMessage = null;
                for await (const message of stream) {
                    lastMessage = message;
                    switch (message.type) {
                        case "TEST_START" /* TEST_START */:
                            id.fork();
                            this.printTestStart(message);
                            break;
                        case "ASSERTION" /* ASSERTION */:
                            this.printAssertion(message);
                            break;
                        case "TEST_END" /* TEST_END */:
                            id.merge();
                            this.printTestEnd(message);
                            break;
                        case "BAIL_OUT" /* BAIL_OUT */:
                            this.printBailOut(message);
                            throw message.data;
                    }
                }
                this.printSummary(lastMessage);
            }
        },
        log: { value: log }
    });
};

const report = (factory) => (logger = console) => {
    const log = logger.log.bind(logger);
    return async (stream) => factory(log).report(stream);
};
const tapReporter = report(factory);
const indentedTapReporter = report(factory$1);

//@ts-ignore
const mochaTapLike = indentedTapReporter();
//@ts-ignore
const tapeTapLike = tapReporter();

const harnessFactory = ({ runOnly = false, indent = false } = {
    runOnly: false,
    indent: false
}) => {
    const tests = [];
    const rootOffset = 0;
    const collect = item => tests.push(item);
    const api = assert(collect, rootOffset, runOnly);
    let error = null;
    const factory = testerLikeProvider(Object.assign(api, TesterPrototype, {
        report: async function (reporter) {
            const rep = reporter || (indent ? mochaTapLike : tapeTapLike);
            return rep(this);
        }
    }));
    return Object.defineProperties(factory(tests, Promise.resolve(), rootOffset), {
        error: {
            get() {
                return error;
            },
            set(val) {
                error = val;
            }
        }
    });
};

const findConfigurationFlag = (name) => {
    if (typeof process !== 'undefined') {
        return process.env[name] === 'true';
        // @ts-ignore
    }
    else if (typeof window !== 'undefined') {
        // @ts-ignore
        return Boolean(window[name]);
    }
    return false;
};
const defaultTestHarness = harnessFactory({
    runOnly: findConfigurationFlag('RUN_ONLY')
});
let autoStart = true;
let indent = findConfigurationFlag('INDENT');
const rootTest = defaultTestHarness.test.bind(defaultTestHarness);
rootTest.indent = () => {
    console.warn('indent function is deprecated, use "INDENT" configuration flag instead');
    indent = true;
};
const test = rootTest;
const skip = defaultTestHarness.skip.bind(defaultTestHarness);
const only = defaultTestHarness.only.bind(defaultTestHarness);
rootTest.skip = skip;
const equal = defaultTestHarness.equal.bind(defaultTestHarness);
const equals = equal;
const eq = equal;
const deepEqual = equal;
const notEqual = defaultTestHarness.notEqual.bind(defaultTestHarness);
const notEquals = notEqual;
const notEq = notEqual;
const notDeepEqual = notEqual;
const is = defaultTestHarness.is.bind(defaultTestHarness);
const same = is;
const isNot = defaultTestHarness.isNot.bind(defaultTestHarness);
const notSame = isNot;
const ok = defaultTestHarness.ok.bind(defaultTestHarness);
const truthy = ok;
const notOk = defaultTestHarness.notOk.bind(defaultTestHarness);
const falsy = notOk;
const fail = defaultTestHarness.fail.bind(defaultTestHarness);
const throws = defaultTestHarness.throws.bind(defaultTestHarness);
const doesNotThrow = defaultTestHarness.doesNotThrow.bind(defaultTestHarness);
const createHarness = (opts = {}) => {
    autoStart = false;
    return harnessFactory(opts);
};
const start = () => {
    if (autoStart) {
        defaultTestHarness.report(indent ? mochaTapLike : tapeTapLike);
    }
};
// on next tick start reporting
// @ts-ignore
if (typeof window === 'undefined') {
    setTimeout(start, 0);
}
else {
    // @ts-ignore
    window.addEventListener('load', start);
}

exports.AssertPrototype = AssertPrototype;
exports.createHarness = createHarness;
exports.deepEqual = deepEqual;
exports.doesNotThrow = doesNotThrow;
exports.eq = eq;
exports.equal = equal;
exports.equals = equals;
exports.fail = fail;
exports.falsy = falsy;
exports.is = is;
exports.isNot = isNot;
exports.mochaTapLike = mochaTapLike;
exports.notDeepEqual = notDeepEqual;
exports.notEq = notEq;
exports.notEqual = notEqual;
exports.notEquals = notEquals;
exports.notOk = notOk;
exports.notSame = notSame;
exports.ok = ok;
exports.only = only;
exports.same = same;
exports.skip = skip;
exports.tapeTapLike = tapeTapLike;
exports.test = test;
exports.throws = throws;
exports.truthy = truthy;
