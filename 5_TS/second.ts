 
//  itll show error just in ts but it will convert the code in js.
// means every js code will work in ts not opposite.
//  let x = 10 ;
//  x = "hello";
//  console.log(x);


// ANY TYPE
let money;
money = 'sahil';
// money = 10;
// no error in money = 10 because its type is now any means any data type can be inside the variable.

let honey:unknown;
honey = 'sahil';
honey = 10;
// also workss as any type but before using the variable we have to confirm its data type.

money.toUpperCase();
// honey.toUpperCase();
// just like money we cant just consume the unknown data type. 

if(typeof(honey) === "string")
    console.log(honey.toUpperCase());
else if(typeof(honey) === "number"){
    console.log(honey + 10)
}


// ARRAY IN TS
let arr1 = [10,20,30,40,50];

// array of numbers only string and others will show error.
let arr2:number[] = [10,20,30,40,50,];


// means combination of number and strings both
let arr3:(number|string)[]=["a",'b','c',10]

// and if we dont mention the data type it will automaticlly detect it.
let arr4 =['a',10]


// extra types.
let arr5:(string|number|boolean)[] = ['sahil',10,true];


// TUPLE IN TS
// syntax is square brackets white assigining the data type ANS ',' FOR DIVIDING SECTION !!IMPORTANT 
// a tuple in ts is same as array in ts but we have to tell, assign the data type of each element inside arrar respectively.

let tuple1:[string,number,boolean,number] = ["sahil",20,true,5000];


// OBJECTS IN TS
// first method is simple same as we always do in js. TS will autodetect the data types.
let obj1 = {
    name : 'sahil',
    age: 19,
    balance: 0
}
// using data type 
// itll show error untill we fill all the key's as we already mentioned key type above it.
// inline method
let obj2:{name:string,age:number,balance:number} = {
    name : "helo",
    age:20,
    balance:0,
}

// external method

let obj3:{
    name:string,
    age:number,
    balance:number,
};

obj3 = {
    name:'yo',
    age:88,
    balance:0
}


// ALISES IN TS
// juust like aclasses and functions if we dont want to write the type again and again when it always samw we can give it a nickname.
type customer = {
    name:string,
    age:number,
    balance:number,
}

let obj4:customer = {
    name:"sahil",
    age:20,
    balance:999
}

// INTERFACE IN TS  (! important) 
// used with a keyword "interface".
// it is more powerfull then alises and used more in industry.
interface admin{
    name:string,
    age:number,
    balance:number,
}

let obj5:admin = {
    name:"sahil",
    age:22,
    balance:33,
    id:"1212212",
} 
// reaseon first it is obtimized means fast compilation.
// second has the ability to merge with another interface for example.

interface admin{
    id:string;
}
// if we try to do this with alises it will show error.



