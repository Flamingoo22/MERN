// .map()
// One of the functions that we'll be using most frequently is map. Map will make a copy of an array and apply our own twist to it... using a callback function that takes in each element of the array returning what we want to do to each element

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );

const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );

// .filter()
//Sometimes we want to get an array with only some of the values, we can do something similar and provide a callback function, this time one that returns true if we want the value or false if we don't want the value

const values2 = [1, 2, 3, 4, 5];
const evens = values2.filter( val => val % 2 === 0 );
// This will create a list of only the even values... [2, 4] if we wanted the odds we could get them by changing the === to !==

// If we want only the groceries that have the letter "o" in them we could write...

const groceries2 = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries2.filter( item => item.includes("o") );

//We can do anything we want with that callback function as long as it returns true or false. We can even chain filter and map together if we want to.

const values3 = [1, 2, 3, 4, 5];
const oddCubes = values3.filter( val => val % 2 !==0 ).map( val => val**3 );
//This will filter out the even numbers and cube the ones that are left over. [1, 27, 125]


const array1 = [1, 2, 3, 4];


//.reduce()
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);

console.log(sumWithInitial);
// expected output: 10