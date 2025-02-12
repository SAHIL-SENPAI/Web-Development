// js is single threaded and synchronous language means it will execute task one by one and at a time.
// for example;


// SYNC
// console.log("hello");
// const now = Date.now();
// while(Date.now()-now<2000){
// }
// console.log("20")

//ASYNC
console.log("hello");
setTimeout(() => {
    console.log(20);
}, 2000);
console.log(30)

// set timeout is not a part of js its a part of web api
// fact = addeventlistener is also not a partof js 
// every web api have a set of protocoles to accept arguments in js its in callback function

