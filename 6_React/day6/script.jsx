import React,{useState} from "react";
import ReactDOM from  "react-dom/client"




// SELECTING AND UPDATING VALUES EVERYWHERE WE USED THAT IS NOT A GOOD IDEA ,
// RATHER WE CAN USE HOOK TO UPDATAE VALUES AUTOMATICALLY EVERYWHERE WE HAVE USE THE VALUES.
function Counter(){

    function increasecount (){
        count++;
        setcount(count);      
    }
    function decreasecount(){
        count--;
        setcount(count);
    }
    let [count,setcount] = useState(0);
    return(
    <div className="container">
        <h1>Count is : {count}</h1>
        <div className="buttons">
            <button onClick={increasecount}>Increment {count}</button>
            <button onClick={decreasecount}>Decrement {count}</button>
        </div>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter/>)

