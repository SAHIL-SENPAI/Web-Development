
// NEED OF BUNDLER:
// rather than using cdn for react and reactdom we call just copy and past whole react file in our code and then 
// convert it to byte code for fast execution.but sill copying the whole code is not optimized thats why we use
// bundler it will take the part from the react that is used in our code and give us a new bundled optimized file.

// BUNDLER?
// it is used to make production ready code.
// it using npm we can download any famous bundler we want
// it will install depencencies aka files.
// bundler remove extra spaces,comment and unused code.
// it also read all your files and make a bundle of code that is used also removes extra part of react & reactdomthat is not
// used in your code.
// it basically optimizes your code.

// FAMOUS BUNDLERS;
// Webpack
// Vite
// Parcel(well use this one)





// INSTALLING PARCEL IN OUT FILE.
// 1. go to the folder you want to bundle.
//  npm init
// 2. npm install parcel

// it will return a folder called node_modules. inside node modules many other that parcle there any many others
// files there ? when bundler was first made it also used others modules those are the modeules we need for our 
// parcel to work.(aka all files that parcel depends upon)

// 3.npm install react
// 4.npm install react-dom

// installed readt and react-dom will go inside node modules.
// 2 files are formed called package.json and package-lock.json.??
// note -- we prefer using react form npm cause npm hass latest versionn of react called react 19, whereas cdn use 18th
// PACKAGE.JSON -- has info about what our code depends upon.
// PACKAGE-LOCK.JSON -- has info about exact versionn of modules\packages we used in our code. cause they will change with every update.


// GIT TIP #1
// never push node_modules folder in your github account.
// because node_modules size is 300mb + and we can just push package-lock and package json , 
// therefor when someone copy our code and run "npm install" the node_module folder will required packages will be 
// automatically installed in his pc.

// if package-lock.json is not present it willl get the versions from package.json which has approx version values.

// AFTER INSTALLING REACT AND REACT DOM WE MUST IMPORT THEM TO USE IN OUR FILE
// AS IMPORT IS NOT A PART OF LATEST JS, WE NEED TO TELL THE BROWSER THAT WE ARE USING MODULE JS
// BY ADDING    type=module in html script

import React from "react"
import ReactDOM from 'react-dom/client'

// STILL WONT RUN
// USE NPX parcel index.html to make your website live.

// USING THIS 2 FOLDERS WILL BE MADE .PARCEL-CACHE AND DIST
// DIST FOLDER CONTAINS YOUR BUNDLED FILES WILL YOULL USE FOR YOUR WEBSITE
// Npx gives your main file index.html to parcle to bundle it .
// normal build time is 300+ms but using cache it will be around 3ms.

// INSIDE DIST FOLDER.
// one index.html file , second one js file which is optimized . and last js map file 
// our optimized file is so messy and hard to read and altered and js map is like the key to revert back the changes.
// it is better not to push map file anywhere because if your dont want someone to read your code remove it. and let them suffer

// NOTE -- our code is for git hub but dist code is especilly for machine\ production.
// FACT -- PARCEL even optimixe images

// LETS GET STARTED WITH REACT
                                    //tag attributes children
const element1  = React.createElement("h1",{},"hello world");
const element2 = React.createElement("h2",{},"byy")
const reactroot = ReactDOM.createRoot(document.getElementById("root"));
// reactroot.render(element1);

// render will remove all previous data and add the selected data.

// how to add 2 elements then.
// put them in a div and render that div.
/* <div>
    <h1>hello world</h1>
    <h2>byy</h2>
</div> */

const div1 = React.createElement("div",{},[element1,element2])
reactroot.render(div1);

// BIGGEST POBLEM HERE IS IF WE HAVE TO WRITE A MULTI LEVEL HTML CODE THAT IT WILL BE MORE COMPLEX THEN JS.💀
// THERE IS A MODEULE CALLED JSX (java script XML) which will help us write html code in js/react it is automatically
// comes with node_modules. called babel.
// JSX uses babel to convert HTML CODE into ----> react createElement() ---> react returns js obj or react emement ---> by render gtml element is formed.
// babel is a transpiler because just like ts it is converting jsx code into react.

// JSX SYNTAX.
const element = (
    <div>
        <h1>apple</h1>
        <h2>banana</h2>
    </div>
)

// here it expects only one element so if we want to return may elements without wrapping them inside another div.
const element3 = (
    <>
        <h1 id="first" className="second">apple</h1>
        <h2>banana</h2>
    </>
)
// we can also add attributes easilyl.
// here class is refered as classname so it wont conflict with the keyword class in js.
// empty tags used to send multiple elements.

const fruit = "mango";

const element4 = (
    <>
        <h1>apple , {fruit}</h1>
        <h2 money={22} >banana</h2>
    </>
)
// here 22 will go as number.
// we can use elements inside jsx using these {} brackets.
// we can even use {} inside attributes.
// object and arrays call also be passed using this.


const obj2 = {
    background:"black",
    color:"pink",
    "font-size":"30px"
}

const ele = (
    <>
        <h2 style={obj2}>mwahhhh</h2>
    </>
)

// {{background:"black",color:"pink",fontsize:"30px"}}
// double brackets is used when we do this inline one because style expects object second because jxs emements uses{}

reactroot.render(ele)


// REACT COMPONENTS
// 1.CLASS BASED 
// old , not used anymore

// 2.FUNCTION PASED
// well use this one


function greet(){
    return <h1>welcome to yt</h1>
}

const element8 = greet();
reactroot.render(element8);
// or
// reactroot.render(greet());


// calling multiple functions in render.
const e1 = greet();
const e2 = greet();
const e3 = greet();

const topush = (
    <>
    {e1} {e2} {e3}
    </>
)

// or
// const topush = (
//     <>
//     {greet()} {greet()} {greet()}
//     </>
// )

reactroot.render(topush);








