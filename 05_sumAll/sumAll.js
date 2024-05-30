const sumAll = function(firstNumber, secondNumber) {
    if(firstNumber < 0 ||secondNumber < 0) {
        return 'ERROR';
    }
    if(typeof(firstNumber) != 'number' || typeof(secondNumber) != 'number') {
        return 'ERROR';
    }
    
    let sum = 0;
    let min = Math.min(firstNumber, secondNumber);
    let max = Math.max(firstNumber, secondNumber);
    for (let i = min; i <= max; i ++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
