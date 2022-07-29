// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array. Sequences containing only one element are considered to be strictly increasing.

function solution(sequence) {
    let decreases = 0;
    for (let i = 1; i < sequence.length; i++) {
        // checks if there's more than one decrease in the sequence
        if (sequence[i-1] >= sequence[i]) {
            decreases++;
            if (decreases > 1) {
                return false;
            };
            // makes comparisons by removing both i and i-1, simulating removing one element
            if (sequence[i-2] >= sequence[i] && sequence[i-1] >= sequence[i+1]) {
                return false;
            };    
        };
    }; return true;
};

// my initial solution below which passes all tests except for 4 of the hidden tests

// function solution(sequence) {
//     if (sequence.length <= 2) { //checks for arrays with 2 or less elements
//         return true;
//     };

//     let noDupes = []; //checks for arrays with more than 1 set of duplicate elements, or more than two repeats of one element
//     for (let i = 0; i < sequence.length; i++) {
//         if (!noDupes.includes(sequence[i])) {
//             noDupes.push(sequence[i]);
//         };
//     }; 
//     if (noDupes.length < sequence.length-1) {
//         return false;
//     };
    
//     let trueCount = 0; //keeps track of true results
//     for (let i = 0; i < sequence.length; i++) {
//         let seqCopy = sequence.map((x) => x)
//         seqCopy.splice(i, 1); //create copy of the array with one element removed
//         //console.log(seqCopy);
        
//         let sortedSeqCopy = seqCopy.map((x) => x)
//         sortedSeqCopy.sort((a,b) => a-b); //create sorted copy of the splices array
//         //console.log(sortedSeqCopy);
        
//         if (seqCopy.toString() === sortedSeqCopy.toString()) {
//              trueCount++; //compare spliced array to sorted array
//         };
//     }; return (trueCount >= 1 ); //if at least one of the loops was true, returns true, otherwise returns false
// };
