// Write a function that reverses characters in (possibly nested) parentheses in the input string. Input strings will always be well-formed with matching ()s.

function solution(inputString) {
    // loops for as long as there are parenthesis in the string
    while (inputString.includes('(')) {
        //get the closing bracket
        let endBracket = inputString.indexOf(')');
        //get the opening bracket
        let startBracket = inputString.lastIndexOf('(', endBracket);
        //slice out the section between the brackets
        let toReverse = inputString.slice(startBracket+1, endBracket);
        //reverse the sliced chunk
        let reversedStr = toReverse.split('').reverse().join('');
        //concatenates the reversed string back into its original place without parentheses
        inputString = inputString.slice(0, startBracket) + reversedStr +  inputString.slice(endBracket+1);
    };
    return inputString;
};
