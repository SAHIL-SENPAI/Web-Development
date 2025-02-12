let username = 'Sahil'

console.log(username.toUpperCase())
console.log(username.toLowerCase())
console.log(username[0])
console.log(username.charAt(0))

// searching in a string
let sentence = "youhello world my name is you sahil not very nice meeting you";
console.log(sentence.indexOf(" you "));
console.log(sentence.lastIndexOf ('you'));
console.log(sentence.includes("world"));


// extrecting part of a string
let part = sentence.slice(0,8);
console.log(sentence.substring(0,20));

let pate = sentence.replaceAll("you","fuck");
console.log(pate);

// from string to array data conversion
let data = "sahil.mayank.yogesh.monkey.yeshu.mukul.lucky.parag.tushar.bharat.deepanshu.aman";
let arr = data.split(".");
console.log(arr);

// remove extra space
let dudu = " yogesh ";
let susu = dudu.trim();
console.log(dudu,susu);
console.log(dudu.length,  susu.length);

let sttring = new String("sahil.mayank.yogesh.monkey.yeshu.mukul.lucky.parag.tushar.bh")
console.log(sttring," ",typeof(sttring),typeof(dudu))

console.log(dudu.length)







