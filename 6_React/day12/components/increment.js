import React,{useState} from "react";
import { useContext } from "react";
import GlobalContext from "./global";

const [decrement,setdecrement] = useState(0);


export default function Increment({counts,setcounts}){

        const data = useContext(GlobalContext)

    return(
        <>
            <h2>child counter is : {counts}</h2>
            <h2>decrement : {decrement}</h2>
            <button onClick={()=>setcounts(counts+1)}>increment</button>
        </>
    )
}