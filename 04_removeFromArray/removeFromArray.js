const removeFromArray = function(array, itemToRemove) {
    return array.toSpliced(array.indexOf(itemToRemove), 1);
};

// Do not edit below this line
module.exports = removeFromArray;
