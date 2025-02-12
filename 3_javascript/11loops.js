let objee = {
    name:"sahil",
    money:430,
    balance:30,
    age:20,
}

let obj2 = {
    username : "yogesh",
    userage : 15,
    proffession : "vollyball player",
}




// for(let data in objee){
//     console.log(data," ",objee[data])
// }

// type of keys
// 1. writable
// 2. enumeraable
// 3. configurable

let obj = {};
obj.name = "moon";
console.log(Object.getOwnPropertyDescriptor(obj,'moon'));

// for of loop
const arr = [1,2,3,4,5,6]
for(let data of arr){
    console.log(data);
}

let str = 'mynameissahil'
for(let char of str){
    console.log(char)
}

// ERROR OBJECT IS NOT ITERABLE, OBJ TYPE DOSNT HAVE ITS OWN ITERATOR
// for(let data of objee){
//     console.log(data)
// }

for(let data of Object.keys(objee)){
    console.log(data,objee[data])
}


// passing functions inside functions
// first way
function names(fun){
    console.log("hello world");
    fun();
}

function greet(){
    console.log("mew mew")
}

// names(greet)


// second way
names(function yellow(){
    console.log(
        "wssap fuckers"
    )
})


// best example of functions inside functions is set interval function
// function fetchdata(){
//     console.log("i am fetching data");
// }

// setInterval(fetchdata,2000);


// FOR EACH CALLBACK FUNCTION
let arora = [1,2,3,4,5,6];



// arora.forEach(function(num){
//     console.log(num);
// })

// MORE SIMPLIFIED USING ARROW FUN
arora.forEach(num=>console.log(num))
arora.forEach((num,index)=>console.log(index," ",num))

// FILTER
// filter takes values based on true and false
// real world use of filter
const students = [
    {name:"sahil",marks:100,age:20},
    {name:"moon",marks:90,age:18},
    {name:"nitin",marks:88,age:20},
    {name:"sam",marks:20,age:17}
]

const result = students.filter((obj)=>{
    return obj.marks >89
})

// const result = students.filter(obj=>obj.marks>89)

// we can also use destructuring here
// const result = students.filter(({marks})=>marks>89);


console.log(result)


// MAPS
// it is same as for each but here we can also store result 
const answer = arora.map(num=>num*num)
console.log(answer)

// chaining of functions
const arr1 = [1,2,3,4,5,6,7,8,9,10];
const result1 = arr1.filter(num=>num>=5).map(num=>num*num)
console.log(result1)



