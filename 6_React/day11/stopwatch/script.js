import React, { useRef, useState } from "react";
import reactDOM from "react-dom/client"

function Stopwatch(){

    const [time,settime] = useState(0);
    const [isrunning,setisrunning] = useState(false);
    const setintervalreference = useRef(null);

    function start(){

        if(!isrunning){

            setintervalreference.current = setInterval(() => {
                settime((prev)=>prev+1);
            },1000);

            setisrunning(true);
        }
    }

    function stop(){
        clearInterval(setintervalreference.current);
        setintervalreference.current = null;
        setisrunning(false);
    }

    function reset(){
        clearInterval(setintervalreference.current);
        setintervalreference.current = null;
        settime(0);
        setisrunning(false);
    }

    return(
        <>
            <h2>TIMER : { time }</h2>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <button onClick={reset}>reset</button>
        </>
    )

}

const root = reactDOM.createRoot(document.getElementById('root'));
root.render(<Stopwatch/>)