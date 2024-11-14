const fibonacci = function(n) {
    if (n == 0) return 0;
    if (n < 0) return "OOPS";

    let firstNum = 1;
    let sum = 1;

    for (let i = 2; i < n; i++) {
        [firstNum, sum] = [sum, firstNum + sum];
    }

    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
