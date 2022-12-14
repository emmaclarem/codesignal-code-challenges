// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

//Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

function solution(matrix) {
    let roomsSum = 0;
    for (let i = 0; i < matrix[0].length; i++) { //loops through rows
        for (let j = 0; j < matrix.length; j++) { //loops through columns
            if (matrix[j][i] === 0) {
                break; //if haunted, stop counting that column
            }
            roomsSum += matrix[j][i]; //add price of not-haunted rooms to counter
        }
    } return roomsSum;
};
