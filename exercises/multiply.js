"use strict";

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code:
const multiply = (a, b) => {
  if (a === 0 || b === 0) {
    return 0;
  }

  let isPositive;
  switch (true) {
    case a > 0:
      b > 0 ? (isPositive = true) : (isPositive = false);
      break;

    case a < 0:
      b < 0 ? (isPositive = true) : (isPositive = false);
      break;

    default:
      console.log("ERROR SWITCH");
      break;
  }

  let result = 0;
  let counter = Math.abs(a);

  while (counter !== 0) {
    isPositive ? (result += Math.abs(b)) : (result -= Math.abs(b));
    counter--;
  }

  return result;
};

//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof multiply, "function");
assert.strictEqual(multiply.length, 2);
assert.strictEqual(multiply.toString().includes("Math.imul"), false);
assert.strictEqual(multiply.toString().includes("*"), false);
assert.strictEqual(multiply.toString().includes("/"), false);
assert.strictEqual(multiply(34, 78), 2652);
assert.strictEqual(multiply(123, 0), 0);
assert.strictEqual(multiply(0, -230), 0);
assert.strictEqual(multiply(0, 0), 0);
assert.strictEqual(multiply(123, -22), -2706);
assert.strictEqual(multiply(-22, 123), -2706);
assert.strictEqual(multiply(-22, -123), 2706);
// End of tests */
