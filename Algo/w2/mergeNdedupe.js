// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

// function mergeDedupe(arr1, arr2) { 
//     let Arr2Index = 0;
//     let newArrIdx = 0;
//     //conditional to check which last index is greater
//     if(arr1[arr1.length-1] < arr2[arr2.length-1]){
//         [arr1,arr2] = [arr2,arr1];
//     }
//     // let temp = [arr1[0]];

//     for(i = 0; i < arr1.length ; i++){
//         for(j = Arr2Index; j <= arr2.length;j++){
//         }
//             if(arr1[i]>arr2[j]){
//                 if(temp[newArrIdx] == arr2[j]){
//                     temp.push(arr2[j]);
//                     Arr2Index++;
//                     newArrIdx++;
//                 }else{
//                     continue
//                 }
//             }else{
//                 if(temp[newArrIdx] == arr1[i]){
//                     temp.push(arr1[i]);
//                     newArrIdx++;
//                 }
//                 break;
//             }
//             if(Arr2Index == arr2.length){
//                 if(temp[newArrIdx] == arr1[i]){
//                     temp.push(arr1[i]);
//                     newArrIdx++;
//                 }
//             }
//         }
//     console.log(temp)
//     return temp;
// }

const mergeDedupe = (arr1, arr2) =>{
    let newArr = [];
    let i = 0;
    let j = 0;
    let tlength = arr1.length + arr2.length
    let z = 0;
    if(arr1[arr1.length-1] < arr2[arr2.length-1]){
        [arr1,arr2] = [arr2,arr1];
    }
    while( z < tlength) {
        // console.log(`-------------Loop: ${z}----------------`)
        // console.log(`newArr: ${newArr}`)
        // console.log(`newArr last element: ${newArr[newArr.length-1]}`)
        // console.log(`Arr1 at index ${i}: ${arr1[i]}`)
        // console.log(`Arr2 at index ${j}: ${arr2[j]}`)
        if(arr1[i] <= arr2[j] || arr2[j]===undefined){
            if(arr1[i] != newArr[newArr.length-1]){
                newArr.push(arr1[i])
            }
            i++
        }
        else if(arr1[i] > arr2[j]){
            if(arr2[j] != newArr[newArr.length-1]){
                newArr.push(arr2[j])
            }
            j++
        }
        z++
    }
    console.log(newArr)
    return newArr;
}

function mergeDedupe(arr1, arr2) {
    let i = 0;
    let j = 0;
    let newArr = [];
    let totalLength = arr1.length + arr2.length
    let z = 0;
    if(arr1[arr1.length-1] < arr2[arr2.length-1]){
        [arr1,arr2] = [arr2,arr1];
    }
    while(z < totalLength) {
        if(arr1[i] <= arr2[j] || arr2[j] === undefined ){
            if(newArr[newArr.length - 1] != arr1[i]) {
                newArr.push(arr1[i])
            }
            i++
        }else if(arr2[j] <= arr1[i]) {
            if(newArr[newArr.length - 1] != arr2[j]) {
                newArr.push(arr2[j])
            }
            j++
        }
        z++;
    }
    //loop remainder of longer array
    console.log(newArr);
    return newArr;
}

mergeDedupe(arrA, arrB)