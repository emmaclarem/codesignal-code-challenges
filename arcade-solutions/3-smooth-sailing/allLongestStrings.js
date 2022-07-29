// Given an array of strings, return another array containing all of its longest strings.

function solution(inputArray) {
    let arrayString = [];
    let longestLength = 0;

    for (let i=0; i < inputArray.length; i++) {
        // check all lengths and keep track of the largest value
        if (inputArray[i].length > longestLength) {
            longestLength = inputArray[i].length;
        };
    };

    for (let i=0; i < inputArray.length; i++) {
        // makes new array with all strings that match the longest length
        if (inputArray[i].length === longestLength) {
            arrayString.push(inputArray[i]);
        };
    };
    return arrayString;
};
