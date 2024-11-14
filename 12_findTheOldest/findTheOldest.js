const findTheOldest = function(array) {
    let sortedAge = array.toSorted((a, b) => {
        let aAge;
        let bAge;

        aAge = !(a.yearOfDeath) ? (new Date()).getFullYear() - a.yearOfBirth : a.yearOfDeath - a.yearOfBirth;
        bAge = !(b.yearOfDeath) ? (new Date()).getFullYear() - b.yearOfBirth : b.yearOfDeath - b.yearOfBirth;

        return aAge - bAge;
    });

    return sortedAge.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
