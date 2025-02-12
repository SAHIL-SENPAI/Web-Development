// promise is use to give you async day surely,in form of resolve or reject it will give you.
const promise = fetch("http://api.weatherapi.com/v1/current.json?key=2c95a84b196f4d8ab5c21033250702&q=London&aqi=yes");

// this will show promise pending beacause we tried to print the data without even waiting for it.
console.log(promise)

// using this we can wait for data to come but is not a good practice as data can sometime comes 
// under 100ms or sometimes even 1 min;
// setTimeout(() => {
//     console.log(promise)   
// }, 2000);

// actual ways to use promise;
// promise.then(data=>console.log(data))


// ".then" will only execute when we have data inside the variable/promise.
// promise.then((data)=>{
//     console.log(data)
// })


// by default promise returns header of the data and we were mostly working with the body which.
// as converting to jason file to be understood by our js that is also an async task so thats why its
// showing promise pending we have to wait for that too

// METHOD 2
// promise.then(data => {
//     const promise2 = data.json();
//     promise2.then((data)=>{
//         console.log(data)
//     });
// })

// METHOD 3
// const promise2 = promise.then(data => data.json());
// promise2.then((data) => {
//     console.log(data);
// })

// METHOD 4 AKA (PROMISE CHAINING)
// promise.then(data => data.json()).then(data => console.log(data))


// METHOD 5 (CLEAN CODE)
// promise
// .then(data => data.json())
// .then(data => console.log(data))

// CATHING ERROR IN PROMISES;
// we only once need to use .catch no matter the chaining it will check and show error for all.
promise
.then(data => data.json())
.then(data => console.log(data))
.catch(error => console.log(error))


