//when we declare a variable using const, we are no longer able to set it equal to a different variable, but if the variable is an array or object we're still able to modify that object by pushing or popping values into or from it, or changing values that are stored in it.

    const arr = [1,2,3,4];
    arr.push(300); // even though arr is declared with `const` we can still push new values into it 



//If we want to prevent even those sorts of changes, we can use Object.freeze() to give our array or object Immutability.

    const arr2 = Object.freeze([1,2,3,4]);
    arr.push(300); // we're no longer allowed to change `arr2`

//SPREAD , CONCAT, SLICE;

const abc = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);

const needOne = [...abc, {"item": "thyme", "haveIngredient": false }];
// ...abc is making a copy of object;

//we can also use concat:
const needOne2 = abc.concat( [ { "item": "thyme", "haveIngredient": false } ] );

//use slice to replace:
const gotTheThyme = [ ...needOne2.slice(0, 5), { ...needOne2[5], "haveIngredient": true } ];

//use slice to remove the 2nd element
const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];
//the first slice giving us the ingredients at indexes 0 and 1, the second slice giving us all the ingredients with indexes from 3 to the end.


//SORTING:
const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
//items.sort(); // this will throw an error 

//We can however get around this with some clever use of the spread ... operator.

const sortedItems = [...items].sort();

//if what we're sorting are numbers it will not return the results we're expecting

const numbers = [10, 5, 3, 12, 22, 8];
numbers.sort();
/// this will return [10, 12, 22, 3, 5, 8 ]

//Sort numbers in ascending order:

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});


//Sort numbers in descending order:

const points2 = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});


// Sorting Objects
// Sometimes what we want to sort based off of is an attribute inside of an object, we can still do that using sort by using a callback function. Referring back to our groceryList example from above, we could sort the ingredient objects based on the ingredient name using the following.
const sortedGroceries = [...needOne].sort( (a, b) => a.item > b.item ? 1 : -1);

console.log(sortedGroceries);

