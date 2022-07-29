// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function solution(inputArray) {
    let largestProduct = -1001;
    for (i = 0; i < inputArray.length; i++) {
        let product = (inputArray[i] * inputArray[i + 1]);
        if (product > largestProduct) {
            largestProduct = product;
        };
    }; return largestProduct;
};
