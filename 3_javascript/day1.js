let name = 'sahil';
let password = 123423;
let username_available = true;

console.log(typeof(name),typeof(password),typeof(username_available))
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_VALUE)


// 52 bit mentisa where actual number  is stored

console.log(Math.pow(2,52))

// basics of array, object , function
const array = [10,"sahil",true,undefined,null,65,77];
console.log(array);
array[3] = "moon";
console.log(array)


// we use object to store relational data in one place without calling many
// variables we can just call one object for easy access.
const obj1 = {
    username : "sahil",
    password : "121212",
    gender : "male",
}
console.log(obj1);


// FUNCTION--FUNCTION_NAME--PARAMETERS--WORK_OF_FUNCTION.
// we can store functions in variables too
const fun = function(){
    console.log("hello world")
}

fun();

// basics of type conversion;
const balance = "5000";
let num = Number(balance);
console.log(typeof(num),typeof(balance))


let x = true;
console.log(Number(x));

let bet = "100 exp";
console.log(Number(bet))

let nx = null;
console.log(Number(nx))

let nammme = 'sahil'
console.log(Boolean(nammme))

let gammme = ''
console.log(Boolean(gammme))



