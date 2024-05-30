const repeatString = function(stringToRepeat, numOfTimes) {
    let outputString = '';
    
    if(numOfTimes < 0) return 'ERROR';

    for (let i = 0; i < numOfTimes; i++) {
        outputString += stringToRepeat;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
