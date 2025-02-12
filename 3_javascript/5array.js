let array = [1,2,45,"yogesh",null,"kunal"];
console.log(array[3]);
console.log(array.length);
console.log(array.at(3));

// bad habit
let newarray = array;
console.log(array==newarray)
newarray[3]='mayank';
console.log(array)

// good habit
let anotherarray = structuredClone(array);
anotherarray[3]="yogesh";
console.log(anotherarray)

anotherarray.push("hello");
anotherarray.push('yellow');
anotherarray.unshift(10);
console.log(anotherarray)

console.log(array.indexOf('mayank'))
console.log(array.lastIndexOf('mayank'))
console.log(array.includes("mayank"))

// adding in middle of an array
// spliced part is removed from the original string
let user_data = [20,"sahil",100,"moon",200,"moon",300,"alice"]
console.log(typeof(user_data.toString()))
user_data.splice(2,0,100,"mayank",400,"rohit")
console.log(user_data)

let newstr = user_data.toString();
console.log(newstr)
let newstr2 = user_data.join();
console.log(newstr2)
const newstr3 = user_data.join("#");
console.log(newstr3)

// array inside array
// 1st method
let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]
let a4 = [...a1,...a2,...a3]
console.log(a4)

// 2nd method
let a5 = a1.concat(a2,a3)
console.log(a5)

// 3rd method but 2d array
let a6 = []
a6.push(a1,a2,a3)
console.log(a6)
console.log(a6[1][1])


// 3d array
a1.push(a2)
let a7 =[]
a7.push(a1,a3);
console.log(a7)
console.log(a7[0][3][2])

// how to remove dimentions on any d array
console.log(a7.flat(Infinity))

// to find if its really an arry or not
console.log(Array.isArray(a7))