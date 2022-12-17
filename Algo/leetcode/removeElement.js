/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//     let result = [];
//     for (let num of nums){
//         if(num != val){
//             result.push(num)
//         }
//     }
//     return result
// };

// var removeElement = function(nums, val) {
//     for (let i = 0; i < nums.length; i++){
//         if(nums[i] === val){
//             nums.splice(i,1)
//         }
//     }
//     return nums
// };

var removeElement = function(nums, val) {
    let k = 0;
    let i = 0;
    while(i< nums.length){
        if(nums[i] === val){
            nums.splice(i,1)
            k++
        }
        else{
            i++
        }
    }
    console.log(nums)
    return k
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2))