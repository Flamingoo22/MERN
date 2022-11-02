/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/
const squareMatrix1 = [
    [1, 2, 3], //                                
    [4, 5, 6], //                               
    [9, 8, 9], //                                 
];
const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
*/


function diagonalDifference(sqrMatrix) {
    let i = 0, j = sqrMatrix.length -1, sumLeft = 0, sumRight = 0
    while(i < sqrMatrix.length){
        sumLeft += sqrMatrix[i][i];
        sumRight += sqrMatrix[j][i];
        i++;
        j--
    }
    console.log(sumRight-sumLeft)
    return Math.abs(sumRight-sumLeft);
}

/*
    create 2 temp variables, one start 0 to end, one starts from end to 0, 2 temps variables for each sum.
    create a loop going from first array to last array, it would be the same as the temp varaible start from 0 to end.
    in each iteration, we going to add the each index element to each sum
    after the loop, we subtract to find the differences
*/
diagonalDifference(squareMatrix1)
diagonalDifference(squareMatrix2)