// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function solution(picture) {
    let width = picture[0].length+2;
    picture.unshift(''); //add an empty array at the beginning for the top border
    picture.push(''); //add an empty array at the end for the bottom border
    
    while (picture[0].length < width) { 
        //adds astrisks to the first and last strings until length matches the desired length
        picture[0] = '*' + picture[0];
        picture[picture.length-1] = '*' + picture[picture.length-1];
    }; 
            
    for (let i = 1; i < picture.length-1; i++) { 
        // adds asterisks before and after each text string until length matches desired length
        while (picture[i].length < width) {
            picture[i] = '*' + picture[i];
            picture[i] = picture[i] + '*';
        }
    } return picture;
};
