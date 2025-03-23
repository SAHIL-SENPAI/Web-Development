

// // normal name function will also work but if we want to make JSX funciton use first letter capital
// function Greet(){
//     return <h1>hello world</h1>
// }

// const root = reactDOM.createRoot(document.getElementById("root"));
// // root.render(greet())
// root.render(<Greet/>)


// // how to pass arguments in JSX function
// function Meet(props){
//     return (
    //         <h1>hello {props.name}, your age is {props.age} and your salary is {props.salary}</h1>
//     )
// }

// const element = <Meet name="sahil" age="20" salary="1000"/>

// root.render(element)




import React, { useState } from "react"
import reactDOM from "react-dom/client"

import Card from "./components/card";
import Footer from "./components/footer";
import Header from "./components/header";
import { data } from "./components/data";

// MYNTRA WEBSITE



function App(){

    let [A,setA] = useState(data);

    function shortarray(){
        A.sort((a,b)=>a.price - b.price)
        setA([...A]);
    }
    function priceabove1000(){
        const B = data.filter((value)=>value.price > 999)
        setA(B)
    }
    return(
        <>

        <Header/>

        <button onClick={shortarray} className="pricesorter">Sort By Price</button>
        <button onClick={priceabove1000} className="pricesorter">Price above 1000</button>

        
        <div id="card-box">
            {A.map((value,index) => <Card key={index} cloth={value.cloth} offer={value.offer} price={value.price}/>)}
        </div>

        <Footer/>
        </>
    )
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)