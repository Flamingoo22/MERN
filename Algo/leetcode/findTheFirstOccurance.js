/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let hLength = haystack.length;
    let nLength = needle.length;
    for(let i = 0; i< hLength; i++){
        if( haystack.substring(i,i+nLength) === needle){
            return i
        }
    }
    return -1
};