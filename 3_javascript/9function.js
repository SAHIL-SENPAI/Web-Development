// functions
function greet(){
    console.log("hello world")
}


// function inside variables
const meet = function(){
    console.log("i love food")
}

// calling a function
greet();
meet();

//functions with arguments and parameters
function summ(num1,num2) {
    return num1 + num2;
}
// point to notice , returning functions must be stored somewhere to be shown on screen
console.log(summ(4,5))

// ARROW FUNCTION ************** IMORTANT

// STEP 1
// function keyword removed with =>
const fun = ()=>{
      console.log("hello world")
}

// STEP 2
// we also can remove return statement and brackets
const bum =(number1,number2)=>{
    return number1 + number2;
}

// STEP 3 {FINAL}
const sum = (number1,number2)=>number1+number2;

const cube = num => num*num*num;


// REST OPERATIOR INSIDE FUNCTION
// it makes array of the passed agruments
function addition(...number){
     let sum = 0;
     for(let i = 0 ; i<number.length ; i++){
        sum += number[i];
     }
     return sum;
}

console.log(addition(1,2,3,4,5))


// passing object in function
const info ={
    name : "lemon",
    type : 'fruit',
    origin : 'earth',
}

// 1st way
function sample(obj){
   console.log(obj.name,obj.origin)
}
sample(info)

// 2nd way
function sample2({name,origin}){
    console.log(name,origin)
}

sample2(info)
