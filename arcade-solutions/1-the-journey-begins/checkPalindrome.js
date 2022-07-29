// Given a string, check if it is a palindrome.

function solution(inputString) {
    let reversedString = inputString.split('').reverse().join('');
    if (reversedString === inputString) {
        return true;
    } else {
        return false;
    }
};
