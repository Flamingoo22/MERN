function recursiveSplit(arr){
    mid=Math.floor(arr.length/2)
    let newArr = arr.slice(0,mid)
    let newArr2 = arr.slice(mid)
    let solution = []
    if(mid===0){
        solution.push(arr);
        return solution
    }
    return (
        recursiveSplit(newArr),
        recursiveSplit(newArr2)
    )
}

// let arr = [1,2,3,4,5,6,7,8,9,10]


// console.log(recursiveSplit(arr))
// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

var testArr = [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12]     99, 111, 9, 15, 49
// 88, 22
// 88
//solution = [9,12,15,22,44,49,88,99,111]
// main recursive function that will be passed in mergeSortedArrays(left, right)
// create a new sorted arr based on the given arr being recursively split and merged.
function mergeSort(arr) {
    if(arr.length == 1){
        return arr;
    }
    
    // console.log('*******************************')
    let firstHalfOfArr = arr.slice(0,Math.floor(arr.length/2))
    console.log(firstHalfOfArr)
    // console.log('-------------------------------')
    let secondHalfOfArr = arr.slice(Math.floor(arr.length/2))
    console.log(secondHalfOfArr)
    // console.log('*******************************')
    return mergeSortedArrays(mergeSort(firstHalfOfArr), mergeSort(secondHalfOfArr))
}

// helper function
// 👉 try solving this first! 
// return a new sorted array with all of the values of arr1 and arr2
var mergeArr1 = [11,22,33,33,44];
var mergeArr2 = [55,66,77,88,99];

var mergeArrA = [33,44,55];
var mergeArrB = [11,66];

var arrLeft = [22];
var arrRight = [11,33];
//                      arrLeft, arrRight
function mergeSortedArrays(arr1, arr2) {
    let newArr = []
    let arr2Index =0;
    for(let i =0; i<arr1.length; i++){
        for(let j=i; j< arr2.length; j++){
            if(arr1[i]>=arr2[j]){
                newArr.push(arr2[j]);
                arr2Index= j
            }else{
                newArr.push(arr1[i]);
            }
            break;
        }
    }
    let newArr2 = arr2.slice(arr2Index+1)
    let arr3 = newArr.concat(newArr2)
    return arr3;
}

// function mergeSortedArrays2(arr1, arr2){
//     let newArr = []
//     let arr1Index = 0;
//     let arr2Index = 0;
//     for ( let i =0; i<(arr1.length+arr2.length); i++){
//         if(arr1[arr1Index] < arr2[arr2Index]){
//             newArr.push(arr1[arr1Index])
//             arr1Index++
//         }
//         else
//         {
//             newArr.push(arr2[arr2Index])
//             arr2Index++
//         }
//     }
//     return newArr;
// }

console.log(mergeSortedArrays(mergeArr1,mergeArr2));

// console.log(mergeSort(testArr))

// let arr = [1,2,3,4,5,6,7,8]
// let newArr = arr.splice(0,5)
// console.log(arr)
// console.log(newArr)