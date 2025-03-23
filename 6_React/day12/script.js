import React, { useState } from "react";
import reactDOM from 'react-dom/client'
import Increment from "./components/increment";

function App(){

    const [count,setcount] = useState(0);

    return(
        <>

         <h1>counter is : {count}</h1>
         <Increment counts = {count} setcounts={setcount}></Increment>
         
        </>
    )

}

const root = reactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)