// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

function solution(a) {
    let team1 = [];
    let team2 = [];

    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            team1.push(a[i]);
        }
        else {
            team2.push(a[i]);
        }
    }

    let team1Weight = 0;
    for (let i = 0; i < team1.length; i++) {
        team1Weight += Number(team1[i]);
        //console.log(team1Weight);
    }

    let team2Weight = 0;
    for (let i = 0; i < team2.length; i++) {
        team2Weight += Number(team2[i]);
        //console.log(team2Weight);
    }

    let teamWeights = [team1Weight, team2Weight];
    return teamWeights;
};
