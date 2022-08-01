const sumAll = function(min, max) {
    //checks if min or max are integers, returns error if they are not a integer
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    // returns error if min or max are less then 0(negative numbers)
    if (min < 0 || max <0) return 'ERROR';
    //if min, the starting value is greater then max the end value of the range then turn min into max and max into temp which is same as min
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    //loops through the range and sums each number
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
