import React from "react";
import reactDOM from 'react-dom/client'
import { Route,BrowserRouter,Routes, Link } from "react-router";
import About from "./components/about";
import Contact from "./components/contact";
import Details from "./components/details";
import Home from "./components/home";
import Team from "./components/ABOUT/team";
import Compnay from "./components/ABOUT/compnay";

function App(){


    return(    
            <BrowserRouter>

                <nav>
                    <Link to='/'>HOME</Link>
                    <br/>
                    <Link to='/about'>ABOUT</Link>
                    <br/>
                    <Link to='/details'>DETAILS</Link>
                    <br/>
                    <Link to='/contact'>CONTACT</Link>
                </nav>


                <Routes>
                    <Route path="/" element = {<Home></Home>}></Route>
                    <Route path="/contact" element = {<Contact></Contact>}></Route>
                    <Route path="/details" element = {<Details></Details>}></Route>
                    <Route path="/about" element={<About></About>}>
                        <Route index element={<Team></Team>}></Route>
                        <Route path="compnay" element={<Compnay></Compnay>}></Route>
                    </Route>
                </Routes>

            </BrowserRouter>
    )

}

const root = reactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)