const fibonacci = function(countArg) {
    if (countArg == 0) return 0;
    if (countArg < 0) return 'OOPS';

    let previousNumber = 0;
    let currentNumber = 1;
    for (let i = 1; i < countArg; i++) {
        let nextNumber;
        nextNumber = currentNumber + previousNumber;
        previousNumber = currentNumber;
        currentNumber = nextNumber;
    }

    return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;
