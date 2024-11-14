const palindromes = function (phrase) {
    // remove period at end of phrase
    let newPhrase;
    let isPalindrome = true;
    if ([".", "?", "!"].includes(phrase.slice(-1))) {
        newPhrase = phrase.slice(0, -1);
    } else {
        newPhrase = phrase;
    }

    // remove commas and spaces
    newPhrase = newPhrase.split(", ").join("");
    newPhrase = newPhrase.split(" ").join("");
    newPhrase = newPhrase.toLowerCase();

    for (let i = 0; i < Math.floor(newPhrase.length / 2); i++) {
        if (!(newPhrase[i] === newPhrase[newPhrase.length - (i + 1)])) {
            isPalindrome = false;
        }
    }

    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
