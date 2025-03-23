import React, { useEffect, useMemo, useState } from "react";
import reactDOM ,{createRoot} from "react-dom/client";

function App(){

    const [count,setcount] = useState(0);
    const [number,setnumber] =useState(null);
    // const [result,setresult] =useState('');
   

    function fibbonaci(n){
        if(n<=1){
          return n;
        }
        return fibbonaci(n-1) + fibbonaci(n-2);
    }

    const result = useMemo(()=>fibbonaci(number),[number])

    // useEffect(()=>setresult(fibbonaci(number)),[number]);
    
    return(
        <>
          <h1>Counter is : {count}</h1>
          <button onClick={()=>setcount(count+1)}>increase</button>
          <div>
            <h2>fibb number is :{result}</h2>
            <input type="number" value={number} onChange={(e)=>setnumber(e.target.value)}/>
          </div>
        </>
    )
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)
