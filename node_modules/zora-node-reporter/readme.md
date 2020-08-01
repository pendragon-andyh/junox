# zora-node-reporter

A reporter which takes advantage of TTYs to create very informative, straight to the point reports:

1. A test files diagnostic
2. A diagnostic per failing assertion (with location, semantic structure, and detailed difference between expected and actual value)
3. A summary counter.

<details>
    <summary> Report screen shot</summary>

![test report screen shot](./media/test_report.png)

</details>

## installation

``npm install zora-node-reporter``

## usage

In a **Nodejs** environment

```javascript
import {createHarness} from 'zora';
import {reporter} from 'zora-node-reporter';

const h = createHarness();

const {test} = h;

test(`hello world`, t => {
    t.ok(true);

    t.test('nested', t => {
        t.eq('foo', 'fob');
    });
});

test(`hello world`, t => {
    t.ok(true);

    t.test('nested', t => {
        t.eq('foo', 'fob');
    });
});

h.report(reporter());
```