// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

function solution(inputArray) {
    let counter = 0;
    for (let i = 1; i < inputArray.length; i++) {
        while (inputArray[i-1] >= inputArray[i]) {
            inputArray[i] += 1;
            counter ++;
        }
    }
    return counter;
};
