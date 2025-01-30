'use strict';

/**
 * Calculate the factorial of a number
 * @param {number} number - number to calculate its factorial
 * @returns {number} factorial of the number
 */
function calculateFactorial(number) {
    if (typeof number !== 'number' || number < 0 || Number.isNaN(number) || !Number.isInteger(number) || !Number.isFinite(number)) {
        return NaN;
    }
    
    if (number === 0) {
        return 1;
    }

    return number * calculateFactorial(number - 1);
}

// Test cases
console.log(calculateFactorial(10)); // 3628800
console.log(calculateFactorial(6)); // 720
console.log(calculateFactorial(5)); // 120
console.log(calculateFactorial(0)); // 1

// Faulty test cases
console.log(calculateFactorial('5')); // NaN
console.log(calculateFactorial(-5)); // NaN
console.log(calculateFactorial(5.5)); // NaN
console.log(calculateFactorial(Infinity)); // NaN