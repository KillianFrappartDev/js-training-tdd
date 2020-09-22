"use strict";

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
const keepFirst = (str) => {
  return str.slice(0, 2);
};

const keepLast = (str) => {
  return str.slice(str.length - 2, str.length);
};

const keepFirstLast = (str) => {
  return str.slice(2, 4);
};

//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof keepFirst, "function");
assert.strictEqual(typeof keepLast, "function");
assert.strictEqual(typeof keepFirstLast, "function");

assert.strictEqual(keepFirst.length, 1);
assert.strictEqual(keepLast.length, 1);
assert.strictEqual(keepFirstLast.length, 1);

assert.strictEqual(keepFirst("hello"), "he");
assert.strictEqual(keepLast("hello"), "lo");
assert.strictEqual(keepFirstLast("hello"), "ll");
// End of tests */
