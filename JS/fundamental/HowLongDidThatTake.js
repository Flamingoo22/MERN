Number.prototype.isPrime = function() {
    for( let i=2 ; i*i < this; i++ ) {
        if( this % i === 0) {
            return false;
        }
    }
    return true;
}

// Number.prototype.isPrime = function(){
//     let array = [2];
//     for( let i = 0; i < array.length; i++){
//         if(this %array[i] === 0){
//             array.push(this.Number);
//             return false;
//         }
//     }
//     return true
// }


const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = -1;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}

console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);