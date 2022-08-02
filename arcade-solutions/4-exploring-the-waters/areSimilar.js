// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays. Given two arrays a and b, check whether they are similar.

function solution(a, b) {
    // returns true if a and b are exactly equal
    if (a.toString() === b.toString()) {
        return true;
    } 
    
    //create new empty arrays to store different values
    let array1 = [];
    let array2 = [];
    for (let i = 0; i < a.length; i++){
        // if the characters at that index don't match, push them to the storage arrays to manipulate later
        if (a[i] !== b[i]) {
            array1.push(a[i]);
            array2.push(b[i]);
        }
    } 
    
    // checks if swapping the different values results in the same string
    array1 = array1.join('');
    array2 = array2.reverse().join('');
    //console.log(array1);
    //console.log(array2);
    return array1 === array2;
}