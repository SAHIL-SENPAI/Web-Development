// INTERFACE IN DEEP
// question mark means aadhar is optional we can choose to let it empty , it wont throw error.
interface person{
    name:string,
    age:number,
    gender:string,
    aadhar?:number;
}

const person1:person = {
    name:'sahil',
    age:19,
    gender:"male",
}

// types in interface
// 1. partial
// 2. required
// 3. readonly

// if we want to make all the keys optional we use "partial"
// now even we skip many lines it wont show error
const person2:Partial<person> = {
    name:'sahil',
}

// all fields must be written it is "default" value.
// by all means even ? in interface is needed.
const person3:Required<person> = {
    name:"dd",
    age:33,
    gender:"male",
    aadhar:333,
}

// for reading only we cant changes the values.
// readonly R must be capital otherwise itll take other function.
const person4:Readonly<person> = {
    name:'sahil',
    age:30,
    gender:"male"
}
// error if we try to change the value.
// person4.name = "moon";


// ARRAY OF OBJECT IN TS USING INTERFACE. 

// itll be auto assigend if left empty.
interface people {
    name:string,
    age:number
}
const arr:people[] = [
    {name:"sahil",age:19},
    {name:"moon",age:18},
]

// FUNCTIONS IN TS.
// normal function in js
// function greet(a){
//     console.log(a);
//     return a+5;
// }

// in ts we have to mention the data type of parameters and return type both.
function meet(a:number):number{
    console.log(a);
    return a+5;
}

// if we want nothing to return we can do the datatype void. or left it empty for auto detector.
function beet(msg:string,val:number):void{
    console.log(msg,val);
}


// if we call function directly without giveing any argument till will print hello user otherwise hello + argument.
function neet(msg:string = "User"){
    console.log(`Hello ${msg}`);
}

function gate(person?:string){
    console.log(person || "sahil");
}


// ARROW FUNCTIONS IN TS.
// in js
// const sum = (a,b) => {
//     return a+b;
// }

// same as simple funcitonn.
const sum = (a:number,b:number):number =>{
    return a+b
}

// CALLBACK FUNCTIONN IN TS.

// IN JS
// function placeorder(order,callback){
//     const amount = order + 10;
//     callback(amount);
// }

// IN TS
// defining data type of both callback and placeorder function even tho declaring return type is not that important.
// function placeorder(order:number,callback:(amount:number)=>void):void{
//     const amount:number = order + 10;
//     callback(amount);
// }

// short code 
type chill = (amount:number)=>void;
function placeorder(order:number,callback:chill):void{
    const amount:number = order + 10;
    callback(amount);
}


// rest operator revision.
function total(...arr:number[]){
    let ans = 0;
    arr.forEach((val)=>ans = ans+val);
    console.log(ans);
}

total(1,2,3,4,5,3,43,33,11);

// CLASS IN TS
// class is a blurprint of how our OBJECT will look

class person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
}

const per1 = new person("sahil",20);
// EXTEND KEYWORD !IMORTANT
// in interface we can inherit others properties with this.
interface human {
    name: string,
    age: number,
}

interface teacher extends human{
    salary:string,
    id:number
}

// as teacher also contians properties of human and we dont want to merge them we can just inherit humans property in teacher.
const teach1:teacher = {
    salary:"20000",
    id:22,
    name:"leena",
    age:38
}


// left out part of classes
// inside class we can make functions without using the function keyword;

class chess {

    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    greet():void{     
        console.log(`hi ${this.name}`)
    }
}

// PS = when we use tsc all file in folder will run and collison may happen.try running the specific file using the commmand i told u previously
// public, private and protected
// public - class element can be accessed outside from it; (dafault)
// private - class element can not be accessed from outside.
// protected = only other class can access it not accessable from outside.

// this helps because at industry we will be working on large data base or code so to not do accidental changes 

class demo{
    name:string
    age:number
    balance:number

    constructor(a:string,b:number,c:number){
        this.name = a;
        this.age = b;
        this.balance = c;
    }
}

// we made the employee salary but where the other data of demo will come when it isnt even declared thats will while doing
// this we need to call the constructor demo in emplyee 
class employee extends demo{
    salary:number;

    // we made the data spaces;
    constructor(salary:number,name:string,age:number,balance:number){
        // called demo constructor and got the values. 
        super(name,age,balance);
        this.salary = salary;
    }

}

const e1 = new employee(100,'sahil',20,1000);

// GENERICS IN TS
// generics IS also knwon as template template as in capcut?
// problem

// what if we want to return same type when recevied string ,array boolean or anything that comes 
function value(a:number):number{
    return a ;
}

// FIRST SOLUTION( which is acutally the problem)
// like hell ill do this , 
function value1(a:(number|string|boolean|number[])):(number|string|boolean|number[]){
    return a;
}

// solution??? template yyyhhh
// it means what come is what returns. same same same everywhre.
function value2<T>(a:T):T{
    return a;
}

// SECOND use of this 
// you may ask what did this do
interface adminn<a>{
    name:string,
    age:number,
    addhar:a;
}

const obj9:adminn<number>={
    name:"sahil",
    age:20,
    addhar:123,
}

// here we may freely choose what to do with aaddhar we can either let it be number, string, bool anything we want now.
// wanna change more than one??

// hint
// 1. admin <t,a>
// 2. admin(number,string)







