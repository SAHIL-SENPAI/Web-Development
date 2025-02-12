// shallow copy
let obj1 = {
    a:true,
    b:"mew"
}

let obj2 = obj1;

// deep copy
let obj3 = structuredClone(obj1);
console.log(obj3)


// nested objects
const user = {
    name : "sahil",
    balance : 5000,
    address:{
        state:"haryana",
        city:"rewari",
    },
    array : [1,2,3,4,5],
}

console.log(user.address.state)
console.log(user["address"]["city"])

// ok so remember the obj.assign method that creates deep copy its negative point is that it
// cant create deep copy for nested objects, that only works for simple object thats why
// our best option is to use structure clone;

const usercopy = Object.assign({},user)

usercopy["name"] = "Moon";
usercopy['address']['state']='dhaka'

console.log(user)
console.log(usercopy)

// thats why we  use deep copy aka struecture clone as an more efficient method
const ussercopy = structuredClone(user);
console.log(ussercopy)


//DESTRUCTURING OF OBJECTS
let obj = {
    name:"sahil",
    money:430,
    balance:30,
    age:20,
}

const {name:fullname,money:amount} = obj;
console.log(fullname,amount)

//DESTRUCTURING OF ARRAY
//leave space to leave item
const arr = [11,22,33,44,55,66,77,88,99,0o0];
console.log(arr.at(-1))
const [,first,second,,third] = arr;
console.log(first,second,third)

// DESTRUCTURING NESTED OBJECTS
// use above user obj for this one 
const {address:{city,state}} = user;
console.log(city,state)

// DESTRUCTURING ARRAY INSID OF OBJECTS
const {array:[,a,b,,c]} = user;
console.log(a,b,c)

// basics of function inside object
const lemon = {
    username : "lemon",
    fun : function(){
        console.log("hello world")
        return -1;
    }
}


lemon.fun();
console.log(lemon.fun())

// PROTOTYPES
// giving one object others properties access;
// 1st method
const melon = {};
melon.taste = 'yummy'
melon.__proto__ = lemon;
console.log(melon)
console.log(melon.username)


//2nd method
const melon2 = Object.create(lemon)
// go and see prototypes on console

let array = [1,2,3,4,4]
console.log(Array.prototype == array.__proto__)
console.log(array.__proto__.__proto__ == Object.prototype)
