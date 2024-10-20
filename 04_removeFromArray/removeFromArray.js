const removeFromArray = function(array, ...itemsToRemove) {

    for (item of itemsToRemove) {
        array.splice(array.indexOf(item), 1);
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
