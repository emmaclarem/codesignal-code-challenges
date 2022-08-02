// Given a string, find out if its characters can be rearranged to form a palindrome.

function solution(inputString) {
    let notMatchingLetters = 0;
    for (let i = 0; i < inputString.length; i++) {
        // gets a count of each letter within the string
        let count = inputString.split(inputString[i]).length - 1;
        // if there's an odd number of that letter, up the counter
        if (count % 2 != 0) {
            notMatchingLetters++;
        }
    // if there's more than one letter with an odd number or occurences, it cannot be rearranged to be a palindrome
    } return notMatchingLetters <= 1;
}
