const reverseString = function(word) {
    wordArray = word.split("");
    n = wordArray.length;

    for (let i = 0; i < n/2 ; i++) {
        [wordArray[i], wordArray[n - (i+1)]] = [wordArray[n - (i+1)], wordArray[i]]
    }

    return wordArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
