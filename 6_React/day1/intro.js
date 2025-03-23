// REACT IS A LIBRARY OF JAVA SCRIPT;
// WELL LEARN THE NEED OF REACT TODAY;
// TO UNDERSTAND REACT WE MUST FIRST MAKE REACT OURSELF;

// <div id = "root">   </div>
// if we want to add element in this root div using javascript itll take time , long code, we can make js functions
//to ease the code (simple functions) but there are many edge cases to cover others bugs may happen;
//or write complex code for the function.
//FOR EXAMPLE

// creating an element;

const React = {

    createElement:function(tag,styles,children){

        if(typeof children === 'object'){
            for(let val of children){
                element.append(val);
            }
        }
        else{
            const element = document.createElement(tag);
            element.innerText = children;
            for(let key in styles){
                element.style[key] = styles[key];
            }
            return element;
        }
    }

}

const header1 = React.createElement("h1",{},"hello")
const header2 = React.createElement("h2",{fontsize:"25px",background:'Red',color:"white"},"this is second heading")

// here we made a object react and added a key called areate element to create the element we want;
// now we dont have to write the code again and again and we can make any tag using this function a little easily


// RENDERING / DOM MANIPULATION
// normal
const root = document.getElementById("root");
root.append(header1);
root.append(header2);

// USING ReactDom
const reactDom = {
    render : function(element,root){
       root.append(element);
    }
}

reactDom.render(header1,document.getElementById("root"));
reactDom.render(header2,document.getElementById("root"));

// why we are making another function for doing the same task ? what is react dom;
// well by doing this we give access of adding and removein of element to react dom and it will helps in lot of ways
// like while we press button on a website and then suddenly press another button it wont get clicked because js is 
// a single threaded languange it first it will load all the data on website and then move to another task.
// but if we give the adding and removal of element to reactdom it can decide to stop the process in middle and do 
// the new task plus many more belefits.



// CREATING UL USING THIS FUNCION.

const li1 = reactDom.createElement("li",{},"HTML");
const li2 = reactDom.createElement("li",{},"CSS")
const li3 = reactDom.createElement("li",{},"JS")

const ul = reactDom.createElement('ul',{},[li1,li2,li3]);
// if we want to pass array in this function we must add one more condition in our function.
// if(typeof children === 'object'){
//     for(let val of children){
//         element.append(val);
//     }
// }
// type of children is object because at the end array is also an object.



// CONCLUSION , 
// THIS IS CALLED REACT LIBRARY, EITHER WE MAKE ONE OURSELF BY STRUGGLE AND COUNTLESS HOURS OR WE CAN USE ALREADY MADE 
// LIBRARY WITH MANY CASES HANDELED WHICH WE MAY FACE IN FUTURE .
// REACT IS AND OBJECT OF JS WHICH HAS BEEN MADE BY SOMEONE AND WE'LL USE THAT IN OUT CODE.
// FACEBOOK DEVELOPERS MADE THIS LIBRARY;





