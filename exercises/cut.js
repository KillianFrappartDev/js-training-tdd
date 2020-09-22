"use strict";

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
const cutFirst = (str) => {
  return str.slice(2, str.length);
};

const cutLast = (str) => {
  return str.slice(0, str.length - 2);
};

const cutFirstLast = (str) => {
  let result;
  result = str.slice(2, str.length);
  return result.slice(0, result.length - 2);
};

//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof cutFirst, "function");
assert.strictEqual(typeof cutLast, "function");
assert.strictEqual(typeof cutFirstLast, "function");

assert.strictEqual(cutFirst.length, 1);
assert.strictEqual(cutLast.length, 1);
assert.strictEqual(cutFirstLast.length, 1);

assert.strictEqual(cutFirst("hello"), "llo");
assert.strictEqual(cutLast("hello"), "hel");
assert.strictEqual(cutFirstLast("hello"), "l");

// End of tests */
