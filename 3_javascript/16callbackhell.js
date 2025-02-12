

// HERE WE ARE HARDCODING THE FUNCTION INSIDE A FUNCTION WHICH IS NOT A GOOD HABIT


// function fetchuser(){
//     console.log("fetching user Data....");
//     setTimeout(() => {
//         console.log("user data fetched sucessfully.");
//         const data = "sahil";
//         greet(data);
//     },2000);
// }

// function greet(name){
//     console.log("hello sahil");
// }

// function meet(name){
//     console.log("well meet at bd");
// }

// fetchuser();


// THATS WHERE CALLBACK FUNCTION ARE USED TO HELP US 


// function fetchuser(callback){
//     console.log("fetching user Data....");
//     setTimeout(() => {
//         console.log("user data fetched sucessfully.");
//         const data = "sahil";
//         callback();
//     },2000);
// }

// function greet(name){
//     console.log("hello sahil");
// }

// function meet(name){
//     console.log("well meet at bd");
// }

// fetchuser(meet);
// fetchuser(greet);


// WE MOSTLY FETCHING OBJECTS ON SITE

// function fetchuser(callback){
//         console.log("fetching user Data....");
//         setTimeout(() => {
//             console.log("user data fetched sucessfully.");
//             const obj = {
//                 name : "sahil",
//                 age : "20",
//                 city : "delhi"
//             }
//             callback(obj);
//         },2000);
// }
    
// function greet(obj){
//     console.log(`hello Mr.${obj.name}`);
// }
    
// function meet(obj){
//     console.log(`Hey ${obj.name} we'll meet at ${obj.city}`);
// }
    
// fetchuser(meet);


// WRONG METHOD USING HARDCODING VALUES;
// function placeorder(){
//     console.log("choosing the food...")
//     setTimeout(() => {
//         console.log("order placed sucessfully!")
//         making()
//     }, 2000);
// }

// function making(){
//     console.log("pizza prepration started.");
//     setTimeout(() => {
//         console.log("pizza was sucessfully packed!");
//         pickup()
//     }, 1000);
// }

// function pickup(){
//     console.log("delivery boy reaching the restaurant....");
//     setTimeout(() => {
//         console.log("your order is picked by the delivery boy.")
//         delivery();
//     }, 2000);
// }

// function delivery(){
//     console.log("OUt for delivery");
//     setTimeout(() => {
//         console.log("order delivered sucessfully!!")
//     }, 2000);
// }

// placeorder();


// SAME FUNCTION USING CALLBACK AND WHATS THE PROBLEM WE FACING USING CALLBACK????
// here how to take the second function also ??
// function placeorder(callback){
//     console.log("choosing the order...");
//     setTimeout(() => {
//         console.log("order placed sucessfully")
//         callback();
//     }, 2000);
// }


// function making(){
//     console.log("pizza prepration started.");
//     setTimeout(() => {
//         console.log("pizza was sucessfully packed!");
//     }, 1000);
// }


// function pickup(){
//     console.log("delivery boy reaching the restaurant....");
//     setTimeout(() => {
//         console.log("your order is picked by the delivery boy.")
//         delivery();
//     }, 2000);
// }

// placeorder(making);


// SOLUTION
// USE ARROW FUNCTION

function placeorder(callback){
    console.log("choosing the food...")
    setTimeout(() => {
        console.log("order placed sucessfully!")
        callback()
    }, 2000);
}

function making(callback){
    console.log("pizza prepration started.");
    setTimeout(() => {
        console.log("pizza was sucessfully packed!");
        callback()
    }, 1000);
}

function pickup(callback){
    console.log("delivery boy reaching the restaurant....");
    setTimeout(() => {
        console.log("your order is picked by the delivery boy.")
        callback()
    }, 2000);
}

function delivery(){
    console.log("OUt for delivery");
    setTimeout(() => {
        console.log("order delivered sucessfully!!")
    }, 2000);
}

placeorder(()=>{
    making(()=>{
        pickup(()=>{
            delivery()
        })
    })
});







