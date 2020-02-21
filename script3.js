ageing = (years) => {
    const arr = {john: 25, jane: 30, james: 35}
    for (const property in arr) {
        console.log(`${property} will be ${arr[property] + Math.abs(years)} years old`)
        arr[property]= arr[property] + Math.abs(years);
    }
    return  arr;
}

console.log(ageing(10));
console.log(ageing(5));
console.log(ageing(-20));