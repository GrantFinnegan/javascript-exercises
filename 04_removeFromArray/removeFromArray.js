const removeFromArray = function(array, ...args) {
    let outputArray = [];
    for (element of array) {
        if ( !(args.includes(element)) ) {
            outputArray.push(element);
        }
    }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
