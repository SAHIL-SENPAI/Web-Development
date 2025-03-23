import { Outlet,Link } from "react-router";

export default function About(){
    return (
        <>
            <nav>
            <Link to='/about'>TEAM</Link>
            <Link to='compnay'>COMPNAY</Link>    
            </nav>
            <h1>Welcome to About section</h1>
            <Outlet></Outlet>
        </>
    )
}