// problems in javascript
// example one
let age = 20;
age = "twenty";
console.log(age);

// example two;
// no error alswer will be undefined
const obj = {
    name:"sahil",
    age:20,
}
console.log(obj.data)

// example third
// needed output 200 but this will show NaN still no error will be thrown
let balance = 20;
balance = "twenty";
console.log(balance*10);


// to fix this we need ts , it will show what the errors are ;