// obejct1.__proto__ = object2;  // linking the objects into 1
/* 
Recreate Object.entries() method
Given an object,
return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
};
const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
];


const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
};
const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
];

obj1.__proto__ = obj2;
//   obj1.firstName = 'Jon';

function entries(obj) {
// remember to pseudocode the steps FIRST!
//create an variable result array for us to return in the end,
//loop through objects with enhanced for loop;
//push the [key, object[key]] into the result array;
//return the result array;

    let result = []
    for(let key in obj){
        result.push([key, obj[key]])
    }
    return result;
}

  //   console.log(entries(obj1));
  //   console.log(entries(obj2));

/* ==== B O N U S ====
Given a table name string and an object whose key value pairs represent column names and values for the columns
return a SQL insert statement string
Tip: string interpolation (using back ticks, the key to the left of num 1 key)
Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expectedA = "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

//   // Bonus:
const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
const expectedB =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";

    function insert(tableName, columnValuePairs) {
        //use enhance forloop to grab the keys and values of the obejct;
        //return a string interpolation with table name , keys , and 
        let keys = [];
        let values = [];
        
        let keyString = '';
        let valueString = '';

        for(let key in columnValuePairs) {
            keys.push(key)
            typeof columnValuePairs[key] === 'string' ?
                values.push(`'${columnValuePairs[key]}'`)
            :
                values.push(columnValuePairs[key])
        }
        for(let i in keys) {
            if(!keys[i+1]){
                keyString += (keys[i] + ', ')
                valueString += (values[i] + ', ')
            } else {
                keyString += keys[i]
                valueString += values[i]
            }
        }
        // console.log(keyString)
        // console.log(valueString)
        // return(`INSERT INTO ${tableName} (${keys.join(", ")}) VALUES (${values.join(", ")});"`)
        return(`INSERT INTO ${tableName} (${keyString}) VALUES (${valueString});"`)
    }
    

// console.log(insert(table, insertData1));
console.log(insert(table, insertData2));

// let array  = [1,2,34,5,6,7]
// for(let i in array){
//     console.log(i)
// }