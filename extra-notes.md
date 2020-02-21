# Extra Notes

## Guest Teacher 2/18/20
### General Statements
* It is important to just finish the labs as best you can, however long it takes
* Log your code as often as possible

### If/Else Statements
* return always stops the function in place and returns whatever is the current value of the function
* Example:
```
function canIDrink(age) {
    if (age >= 21) {
        return true;
    } else {
        return false;
    }
}

console.log(canIDrink(20.5)) // logs false
```


* the following two statements have the same output:

```
function canIDrink(age) {
    if (age === 5) {
        return 'balh';
    } else if (age === 6) {
        return 'blah';
    } else if (age === 7) {
        return 'suh';
    } else {
        return 'jol';
    }
}
```

```
function canIDrink(age) {
    if (age === 5) {
        return 'balh';
    }
    if (age === 6) {
        return 'blah';
    }
    if (age === 7) {
        return 'suh';
    }

    return 'jol';
}
```

### Switch Statement Syntax
* (need additional information on how these work)
* Example:
```
function canIDrink(age) {
    switch(age) {
        case 21:
            .......
            break;
        case 20:
            break;
        default:

    }
}
```

### For Loops
* Example:
```
const arr = [1,2,3,4,5,6];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} // logs each object in the array
```

### forEach() Function
* Example:
```
const arr = [1,2,3,4,5,6];

arr.forEach((num) => {
    console.log(num)
}) // same results as the for loop above
```

### Scoping
* Example:
```
function test(blah) {
    console.log(blah);
    var blah = 'blah';
    console.log(blah);
    // let blah = 'blah';
    // console.log(blah;)
}
test('bleh');
// let causes an error because it is trying to declare blah despite it already being a parameter. but var works. this logs 'bleh' then 'blah'
```

### Context
* probably the most confusing part of js
* `this` keyword
    * what is the execution context of this keyword?
    * who is asking to run this for me?
* Example:
```
function sayMyName() {
    console.log(this.name);
}

const haley = {
    name: 'haley',
    sayMyName: sayMyName
};

const john = {
    name: 'john',
    sayMyName: sayMyName
};

john.sayMyName(); // logs 'john'
haley.sayMyName(); // logs 'haley'
sayMyName(); // logs the window name, equivalent of console.log(window.name)
```

* call apply bind:
```
function sayMyName(suffix) {
    console.log(this.name + suffix);
}

const haley = {
    name: 'haley',
    sayMyName: sayMyName
};

const john = {
    name: 'john',
    sayMyName: sayMyName
};

//call

sayMyName.call(haley); // logs 'haley'
sayMyName.call(john, '!') // logs 'john!'; the second parameter is a string or object

// apply

sayMyNme.apply(haley, ['!']) // logs 'haley!' but the second parameter is an array

// bind

const func = sayMyName.bind(john, '!');

func(); // logs 'john!'
func.call(haley); // logs 'john!' because it was bound to that variable func. it cannot be changed
```

### Callbacks
```
setTimeout(() => {
    console.log('hello');
}, 2000);
// logs 'hello' after 2 seconds

console.log('goodbye');
// logs 'goodbye' immediately, before 'hello'
```

```
const arr = [1,2,3]

arr.forEach((num, index, arr) => {
    console.log(num); // logs each number: 1, 2, 3
    console.log(index); // logs each index position number: 0, 1, 2
    console.log(arr); // logs the entire array: [1,2,3], [1,2,3], [1,2,3]
    // num, index, arr are always passively available as parameters with this function
});
```

### Promises

```
function callMe() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.floor(Math.random() * 2);
                console.log("I'm doing stuff")
            if (random === 0) {
                resolve('done');
            } else {
                reject('rejected')
            }
        }, ms);
    });
}

const p = callMe();

p.then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)
};
```

* GET: basically what happens when you enter a search and press enter
* POST
* PUT
* DELETE

```
const p = fetch('https://jsonplaceholder.typicode.com/todos/1');

p.then((res) => {
    console.log('yay');
    console.log(res);
}, (err) => {
    console.log('oh no');
    console.log(err);
});
```

```
const p = fetch('https://jsonplaceholder.typicode.com/todos/1');

p.then((res) => {
    return res.json();
}, (err) => {
    console.log('oh no');
    console.log(err);
})
.then((res) => {
    console.log(res)
})
```

### Classes

```
class User {
    constructor() {
        console.log('hello')
    }
}

new User();
```

```
class ArrayMethods {
    constructor(arr) {
        this.arr = arr;
    }
    map() {}
    forEach() {}
    push() {}
    pop() {}
}

const arr = new ArrayMethods([1,2,3]);
arr.push(4) // [1,2,3,4]

arr.map((num) => {
    return num * 2; // [2,4,6,8]
});

arr.pop() // 3
```

### GOOGLING
* IT'S FINE TO STEAL CODE FROM THE INTERNET (just don't steal whole repositories)
    * take the bits you need to implement the functionality to want, if applicable
    * example) the random color function
* Don't have to search for complete sentences
    * What is the definition of scope in javascript vs. scope js


## 2/19/2020
### Arrays
```
[]
new Array
// these are equivalent
```
* functions automatically available with arrays:
    * forEach
    * map
    * reduce
    * filter
    * find
    * findIndex
    ```
    const arr = [1,2,3]
    arr.forEach((num) => {
        console.log(num)
    })
    // output, logged in separate lines: 1, 2, and 3
    ```

    ```
    const arr = [1,2,3]
    const mapped = arr.map((num) => {
        console.log(num)
        return num * 2
    })
    console.log(mapped)
    // logs num like before then logs [2,4,6] on a 4th line
    ```

    ```
    const sum = [1,2,3,4,5,6].reduce((sum, num) => {
        console.log('my current sum is ' + sum) 
        // loops and logs the sum, starting at 100, of each index to that point in their own lines; i.e. 100, 101, 103, 106, 110, 115
        return sum + num

    }, 100);
    console.log('my final sum is ' + sum) // logs 21

    const arr = [
        {name: 'john',
        age: 34},
        {name: 'jan',
        age: 28},
        {name: 'jason',
        age: 20}
    ]

    const ret = arr.reduce(() => {

    })
    ```