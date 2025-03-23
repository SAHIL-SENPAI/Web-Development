import React,{useState,useEffect} from "react";
function Colorful(){

    let [color,setcolor] = useState('white');

    useEffect(()=>{
        document.body.style.backgroundColor = color;   
        console.log("colorful executed")
    },[color]);

    console.log("hii")


    return(
        <div id="container">
            <h1>background color changer</h1>
            <div className="buttons">
                <button onClick={()=>setcolor('blue')} style={{backgroundColor:"blue"}}>blue</button>
                <button onClick={()=>setcolor('red')} style={{backgroundColor:"red"}}>red</button>
                <button onClick={()=>setcolor('orange')} style={{backgroundColor:"orange"}}>orange</button>
                <button onClick={()=>setcolor('purple')} style={{backgroundColor:"purple"}}>purple</button>
                <button onClick={()=>setcolor('yellow')} style={{backgroundColor:"yellow"}}>yellow</button>
            </div>
        </div>
    )
}

export default React.memo(Colorful);