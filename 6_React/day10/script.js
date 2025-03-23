import React,{useState,useEffect,useCallback} from "react";
import reactDOM, { createRoot } from "react-dom/client"
import Header from "./component/header";
import Body from "./component/body";

function Githubprofile(){
    return(
        <>

        <Header></Header>
        <Body></Body>
        

        </>
    )
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<Githubprofile/>)
