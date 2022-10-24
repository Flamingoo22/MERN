//javascript nonblocking single threaded language;
    //it can be run even if there is an error;
//ECMA:
    //organization makes the standard

    //A function is equals to what it returns;

        //let and const act as anchors for when we declare a variable;
const say = function(name){
    return this;
}

const say2 = (name) =>{
    return this;
}
console.log()

// console.log(say("i"))
console.log(say2("i"))