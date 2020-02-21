// Coding Drills
// Drill 1
// function cutIt(str, index) {
//     var str = str.slice(0, index) + str.slice(index + 1);
//     console.log(str) // when this works, return the variable instead of console.log it
// }

// cutIt("fourties", 6)

// Drill 2
// One arguement, an array of objects
// let arr = [
//     {dog: 'dog'},
//     {cat: 'cat'},
//     {fox: 'fox'},
//     {dog: 'puppy'},
//     {cat: 'kitten'}
// ]

// function merge(arr) {
//     return Object.assign(...arr);
// }
// console.log(merge(arr))


// Drill 3
// Make a function that returns a calculator object
// e.g.
// makeCalculator(3) => {add, subtract, multiply, divide, pow}
// ret.add(6) // 9
// ret.subtract(10) // 7
// and so on

// function makeCalculator(val1) {
//     return({
//         add: (val2) => {
//             return val1 + val2;
//         },
//         subtract: (val2) => {
//             return val1 - val2
//         },
//         multiply: (val2) => {
//             return val1 * val2
//         },
//         divide: (val2) => {
//             return val1 / val2
//         },
//         pow: (val2) => {
//             return Math.pow(val1, val2)
//         },
//     });
// }

// let results = makeCalculator(4);
// console.log(results.add(6))
// console.log(results.subtract(3))
// console.log(results.multiply(5))
// console.log(results.divide(2))
// console.log(results.pow(4))

// Drill 4
// Make a function thats an object as an argument
// return: 
// [['name', 'steve'], ['age', 37]]

const o ={
    name: "steve",
    age: 46,
    birth: "10/9/73",
    email: "steve@email.com"
}

function entries(obj) {
    const ret = []

    for (let key in obj) {
        ret.push([key, obj[key]])
    }

    return ret;
}
console.log(entries(o))