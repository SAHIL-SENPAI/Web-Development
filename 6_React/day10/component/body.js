import { useEffect, useState } from "react";

function Body(){

    const [Profile,setProfile] = useState([]);
    const [numberofProfile,setnumberofProfile] = useState("");

    async function generateProfile(count){
        const ran = Math.floor(1+Math.random()*10000)
        const response = await fetch(`https://api.github.com/users?since=${ran}per_page=${count}`);
        const data = await response.json();

        setProfile(data);  
    } 

    // so that itll call only once.
    useEffect(()=>{
        generateProfile(10);
    },[])

    return(
        <>
        <div className="but">
        <input type="text" placeholder="search here" value={numberofProfile} onChange={(e)=>setnumberofProfile(e.target.value)} />  
        <button onClick={()=>generateProfile(Number(numberofProfile))}>search</button>
        </div>
        <div id="container">
            {
                Profile.map((value)=>{
                    return(
                        <div key={value.id} className="card">
                            <img height={"350px"} src={value.avatar_url} alt="" />
                            <h2>{value.login}</h2>
                            <a href={value.html_url} target="_blank">github link</a>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Body;