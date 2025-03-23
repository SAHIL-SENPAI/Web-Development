import React,{useState,useEffect,useCallback} from "react";
import reactDOM from "react-dom/client";


function PasswordGenerator(){

    const [Password,setpassword] = useState("");
    const [length,setlength] = useState(10);
    const [HasNumber,sethasnumber] = useState(false);
    const [HasSpecialcharacter,setHasSpecialcharacter] = useState(false);

    const generatepassword = useCallback (() => {
        let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if(HasNumber){
            str+="0123456789"
        }
        if(HasSpecialcharacter){
            str+= '@!~#$%^&*()_+?><":}{'
        }
        let Pass = ''
        for(let i = 0 ; i<length ; i++){
            Pass += str[Math.floor(Math.random()*str.length)]
        }

        setpassword(Pass);
    },[length,HasNumber,HasSpecialcharacter])
    
    useEffect(()=>{
        generatepassword();
    },[generatepassword])

    return(
        <>
        <h1>{Password}</h1>
        <div className="second">
            <input type="range" max={40} min={5} value={length} onChange={(e)=>setlength(e.target.value)}></input>
            <input type="checkbox" defaultChecked = {HasNumber}  onChange={()=>sethasnumber(!HasNumber)}></input>
            <input type="checkbox" defaultChecked={HasSpecialcharacter} onChange={()=>setHasSpecialcharacter(!HasSpecialcharacter)}></input>
        </div>
        </>
    )
}

const root = reactDOM.createRoot(document.getElementById("root"))
root.render(<PasswordGenerator/>)