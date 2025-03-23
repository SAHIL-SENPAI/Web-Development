import React, { useEffect, useRef, useState } from "react";
import reactDOM from "react-dom/client";

function App(){

    const [number,setnumber] = useState(0);
    let money = useRef(0);
    
    
    return(
        <>
            <div>
                <h1>COUNTER : {number}</h1>
                <button onClick={()=>setnumber(number+1)}>increment</button>
            </div>
            <div>
                <h1>MONEY : {money.current}</h1>
                <button onClick={()=>{
                    money.current=money.current+1;
                    console.log(money.current);
                }}>increment</button>
            </div>
        </>
    )

}

const root = reactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)