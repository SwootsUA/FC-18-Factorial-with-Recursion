'use strict';

/**
 * Calculate the factorial of a number
 * @param {number} number - number to calculate its factorial
 * @returns {number} factorial of the number
 */
function calculateFactorial(number) {
    if (typeof number !== 'number' || number < 0 || Number.isInteger(number) === false || Number.isNaN(number) || !Number.isFinite(number)) {
        return NaN;
    }
    
    if (number === 0) {
        return 1;
    }

    return number * calculateFactorial(number - 1);
}

let userInputNumber = parseInt(prompt('Enter a number to calculate its factorial: '));

if (Number.isNaN(userInputNumber)) {
    alert(`${userInputNumber} is not a valid number, please provide a valid number`);
} else {
    let factorial = calculateFactorial(userInputNumber);

    if (Number.isNaN(factorial)) {
        alert(`${userInputNumber} is not a valid number, please provide a valid number`);
    } else {
        alert(`The factorial of ${userInputNumber} is ${factorial}`);
    }
}
