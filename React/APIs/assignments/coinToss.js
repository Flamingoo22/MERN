function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

// function fiveHeadsSync() {
//     let headsCount = 0;
//     let attempts = 0;
//     while(headsCount < 5) {
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if(result === "heads") {
//             headsCount++;
//         } else {
//             attempts++;
//             headsCount = 0;
//         }
//     }
//     return `It took ${attempts+1} tries to flip five "heads"`;
// }
// console.log( fiveHeadsSync() );
// console.log( "This is run after the fiveHeadsSync function completes" );

const fiveHeads = new Promise( (resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    // your code here!
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    if(attempts > 100){
        reject(`Fail after 100 flips`)
    }else{
        resolve(`It took ${attempts+1} flips to flip five "heads"`)
    }
});

fiveHeads
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );