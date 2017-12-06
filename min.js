'use strict'

/*
 * Create the function `min` that takes 2 number arguments
 * and returns the greatest
 * You must not just use `Math.min`, make your own.
 * see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
 *
 * @notions Functions, Ternary
 * @next sign
 */

// Your code :

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof min, 'function')
assert.strictEqual(min.length, 2)
assert.strictEqual(abs.toString().contains('Math'), false)
assert.notStrictEqual(min, Math.min)
assert.strictEqual(min(0, -2), -2)
assert.strictEqual(min(-1, 10), -1)
assert.strictEqual(min(-13.2, -222), -222)
assert.strictEqual(min(132, 133), 132)
// End of tests */