"use strict";

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
const jadenCase = (str) => {
  const result = [];
  const words = str.split(" ");
  for (const word of words) {
    const chars = word.split("");
    chars[0] = chars[0].toUpperCase();
    result.push(chars.join(""));
  }
  return result.join(" ");
};

//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof jadenCase, "function");
assert.strictEqual(jadenCase.length, 1);
assert.strictEqual(jadenCase("my test"), "My Test");

// End of tests */
