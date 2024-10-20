const removeFromArray = function(array, ...itemsToRemove) {
    for (item of itemsToRemove) {
        array = array.filter(value => value != item);
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
