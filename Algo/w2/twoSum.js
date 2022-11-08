/* https://leetcode.com/problems/two-sum/

Given an array of integers, return indices of the
two numbers such that they add up to a specific target.

You may assume that each input would have EXACTLY ONE SOLUTION,
and you may not use the same element twice.

the array is unsorted, contains no floats, and there may be duplicate values

Given arr = [2, 11, 7, 15], target = 9,
Because arr[0] + arr[2] = 2 + 7 = 9
return [0, 2].

example 1
given: [2, 11, 7, 15]
target: 9
output: [0,2]

example 2
given: [3,2,4]
target: 6
output: [1,2]

example 3
given: [3,3]
target: 6
output: [0,1]
*/

function twoSums(arr, target) {
    let pointer = 0, runner = pointer+1;
    while( pointer < arr.length){
        const sum = arr[pointer]+arr[runner]
        if(sum === target){
            return [pointer, runner]
        }
        else{
            runner++;
        }
        if( runner >= arr.length){
            pointer++;
            runner = pointer+1
        }
    }
    return [];
}
//create variable pointer = 0; runner = pointer+1; 
//go through the given array while pointer < arr.length;
//if arr[pointer]+arr[runner] === target; return [pointer, runner]
//if arr[pointer]+arr[runner] !== target; runner++
//if runner >= arr.length; pointer++ , runner = (pointer+=1)

//outside the loop; then we return -1;


// use hashmap or objects to keep track of elements
function twoSums2(arr, target){
    let dict = {}
    for(let i =0; i< arr.length; i++){
        if(dict[arr[i]] == undefined){
            let diff = target - arr[i]
            dict[diff] = i
        }else{
            return [dict[arr[i]], i]
        }
    }
    return [];
}

//create an empty dictionary
//go through the loop from 0 to end;
//check if element inside the dictionary
//if NOT
//key = the difference between target and the element; value == index of the element;
//if YES
//return [key, i]


console.log(twoSums([2, 11, 7, 15], 9)); // [0,2]
// loop1 : dict = {};   dict = { 7:0 } 
// loop2:  dict = { 7:0 };  dict = { 7:0, '-2':1}
// loop3:  dict = { 7:0, '-2':1 };  dict[7] =0;  [dict[7], 2] => [0,2];
console.log(twoSums([3, 2, 4], 6)); // [1,2]
console.log(twoSums([3, 3], 6)); // [0,1]

//create variable pointer = 0; runner = pointer+1; 
//go through the given array while pointer < arr.length;
//if arr[pointer]+arr[runner] === target; return [pointer, runner]
//if arr[pointer]+arr[runner] !== target; runner++
//if runner >= arr.length; pointer++ , runner = (pointer+=1)

//outside the loop; then we return -1;

