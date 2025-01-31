'use strict';

/**
 * Calculate the factorial of a number
 * @param {number} number - number to calculate its factorial
 * @returns {number} factorial of the number
 */
function calculateFactorial(number) {
    if (
        !Number.isInteger(number) ||
        number < 0 ||
        !Number.isFinite(number)
    ) {
        return NaN;
    }

    return number === 0 ? 1 : number * calculateFactorial(number - 1);
}

// Test cases
console.log(calculateFactorial(10)); // 3_628_800
console.log(calculateFactorial(6)); // 720
console.log(calculateFactorial(5)); // 120
console.log(calculateFactorial(0)); // 1

// Faulty test cases
console.log(calculateFactorial('5')); // NaN (Not a number)
console.log(calculateFactorial(-5)); // NaN (Negative number)
console.log(calculateFactorial(5.5)); // NaN (Not an integer)
console.log(calculateFactorial(Infinity)); // NaN (Infinite number)
