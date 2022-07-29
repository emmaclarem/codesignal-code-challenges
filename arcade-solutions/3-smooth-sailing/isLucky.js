// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half. Given a ticket number n, determine if it's lucky or not.

function solution(n) {
    //turns the integer into an array of integers
    var nArray = n.toString().split('').map((num)=>{return Number(num)});
    //get the length of half the ticket number so we can loop through each half
    let halfLength = (nArray.length) / 2;
    
    //sum integers in the first half of the number
    let firstSum = 0;
    for (i=0; i < halfLength; i++) {
        firstSum += nArray[i];
    }
    
    //sum integers in the second half of the number
    let secondSum = 0;
    for (i=halfLength; i < nArray.length; i++) {
        secondSum += nArray[i];
    }
    //compare first and second half sums
    return firstSum === secondSum;
};
