// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

function solution(a) {
    //find the people among the trees
    let people = a.filter(element => element != -1); 
    //sort people by height
    let sortedPeople = people.sort((a,b)=> a-b); 
    
    //create new empty array to push sorted values into
    sortedList = []; 
    for (let i=0; i < a.length; i++){
        //if original value is -1, add it in the same place it was in
        if (a[i] === -1){ 
            sortedList.push(-1);
        }
        //if original value is a person, push the first element from sorted people
        else { 
            sortedList.push(sortedPeople.shift());
        };
    };
    return sortedList;
};
