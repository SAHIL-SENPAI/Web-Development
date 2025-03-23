import React, { useEffect, useState } from "react";
import Colorful from "./src/components/color";
import ReactDOM from "react-dom/client"

function Main(){

    
    let [count,setcount] = useState(0);

    
    
    console.log("counter executed")
    return(
        <>

        <div className="counter">
            <h1>Counter is : {count}</h1>
            <button onClick={()=>{setcount(count+1)}}>Increment</button>
        </div>

        

        <Colorful name={count}/>


        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main/>)