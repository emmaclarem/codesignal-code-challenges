// Given two strings, find the number of common characters between them.

function solution(s1, s2) {
    let commonChar = 0;
    let s1Array = s1.split('');
    let s2Array = s2.split('');
    
    for (let i=0; i < s1.length; i++) {
        //loops through characters to compare
        const charToCompare = s1Array.shift(); 
        // checks if the second array contains the character to compare     
        if (s2Array.indexOf(charToCompare) != -1) { 
            commonChar++;
            //deletes element which has been counted
            delete s2Array[s2Array.indexOf(charToCompare)]; 
        }
    } return commonChar;
};
