const reverseString = function(stringToReverse = "") {
    let outputString = '';

    for (let i = 0; i < stringToReverse.length; i++) {
        outputString = stringToReverse.at(i) + outputString;
    }

    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
