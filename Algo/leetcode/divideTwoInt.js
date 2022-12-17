/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    let negCount = 0;

    if(dividend < 0){
        dividend = 0 - dividend;
        negCount += 1;
    }
    if(divisor < 0){
        divisor = 0 - divisor;
        negCount += 1;
    }
    if( dividend >= 2147483647 && divisor === 1){
        if(negCount === 1) return -2147483648
        else return 2147483647
    }
    let i  = 0;
    while(dividend >= divisor){
        dividend -= divisor;
        i+=1;
    }
    if( negCount === 1){
        return ( 0 - i);
    }
    return i;
};