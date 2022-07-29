// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

function solution(statues) {
    let smallestStatue = Math.min(...statues);
    let biggestStatue = Math.max(...statues);
    // get the total number of statues needed to have a full sequence
    let desiredLength = biggestStatue - smallestStatue + 1;
    //find the difference between the amount of statues we have and the amount we need
    let diff = desiredLength - statues.length;
    return diff;
};
