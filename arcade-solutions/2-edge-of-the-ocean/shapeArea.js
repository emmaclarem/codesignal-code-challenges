// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
//A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. 

function solution(n) {
    // checks if it is an n-interesting polygon
    if (n >= 10**4 || n < 1) {
        return false;
    };
    // find area of the polygon
    return (n**2 + (n-1)**2);
}
