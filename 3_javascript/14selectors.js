
const div = document.getElementById("first")
const didkv = document.getElementsByClassName("first")

const a = document.querySelector("#first")  
const aa = document.querySelector(".first")
// here only first element is selected
// we can use querySelector to select the first element of id or class

const b = document.querySelectorAll(".first")
// retutns node list
// here all elements are selected/targeted of a class
b[2].style.backgroundColor = "red"
// here we can target the third element of the class

// 2nd way
for(let val of b){
    val.style.backgroundColor = "red";
}
b.forEach(val =>{
    val.style.backgroundColor = "red";
})

// converting node list to array
const c = Array.from(b)

// TAG NAMES
const d = document.getElementsByTagName("div")
// returns HTML collection
// here only elements are targeted not the text nodes

// ques - is node list have its own iterator
// ans - no, it is not iterable

// ques - where for of loop is used
// ans - for of loop is used to iterate over the array or array like objects

// ques - then how it iterated over the node list
// ans - it is converted to array and then iterated

