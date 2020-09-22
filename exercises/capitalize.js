"use strict";

/*
 * Create a `capitalize` function that takes a string
 * and transforms it to upper case only for the first letter,
 * and in lowercase for the rest of the string
 *
 */

// Your code:
const capitalize = (str) => {
  const result = str.toLowerCase().split("");
  result[0] = result[0].toUpperCase();
  return result.join("");
};

//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof capitalize, "function");
assert.strictEqual(capitalize("str"), "Str");
assert.strictEqual(capitalize("qsdqsdqsd"), "Qsdqsdqsd");
assert.strictEqual(capitalize("STR"), "Str");
assert.strictEqual(capitalize("zapZAP"), "Zapzap");
// End of tests */
