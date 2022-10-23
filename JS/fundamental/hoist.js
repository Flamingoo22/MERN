//1
console.log(hello);                                   
var hello = 'world';                                 
//var hello;
//console.log(hello);//console.log undefine;
//hello = "world";


//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//needle = haystack;
//test();//function test is called; system console "magnet";
//function test(){ //function declaration
//needle = 'magnet' // local scope needle = 'magnet';



//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
/*
brendan = 'super cool';
function print(){ // function declaration;
brendon = 'only okay'; // variable is defined with-in function;

system log: 'super cool';
*/


//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
/*
food = 'chicken';
system log: chicken;
eat(); // function eat() is called; system log: half-chicken;
function eat(){// eat() declaration
food = 'half-chicken';
food reassigned to 'gone'; 
}
*/



//5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
/*
mean() // type error, mean is not a function;
*/

6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
/*
console.log(genre); //undefine
genre = 'disco';
rewind(); // (local scope)genre = rock; logs: rock; (local scope)genre = r&b; logs: r&b;
console.log(genre) //disco ;
*/

7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
/*
dojo = san jose;
console.log(dojo) // logs: san jose;
learn(); // (local scope) dojo = seattle; logs: seattle; (local scope) dojo = 'burbank'; logs: burbank;
console.log(dojo) // logs: san jose;
*/
// 8 - Bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
/*
console.log(makeDojo('Chicago', 65)) 
function called makeDojo with arguments = [name = 'Chicago', students = 65];
const dojo = {} // create a local scope constant dictionary dojo;
dojo.name = Chicago;
dojo.students = 65;
if(dojo.students > 50){
    dojo.hiring = true;
}
return dojo; // dojo ={name:Chicago, students:65, hiring:true};

console.log(makeDojo('Berkeley',0))
function called makeDojo with arguments = [name='Berkeley', students=0];
const dojo = {} //^^^^
dojo.name = 'Berkeley';
dojo.students = 0;
if(dojo.student > 50){
    dojo.hiring = true; // condition not meet, move to else if;
}
else if(dojo.students <= 0){
    dojo = 'closed for now' // dojo is declared as a const dictionary object, cannot be reassign to string; typeError;
}
*/