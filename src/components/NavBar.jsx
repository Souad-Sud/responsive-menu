import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../navbar.css"
 
 

function NavBar() {
    const [burgerOpen, setBurgerOpen] = useState(false);


  return (
    <nav> 
        <Link to="/" className="logo">Logo</Link>

        <div className="burger-menu" onClick={()=> setBurgerOpen(!burgerOpen)}>
             
            <span></span>
            <span></span>
            <span></span>

        </div>
        <ul className={burgerOpen ? "open" : ""}>
            <li>
                <NavLink  to = "/">Home</NavLink>
            </li>

            <li>
                <NavLink to = "/contact">Contact</NavLink>
            </li>

            <li>
                <NavLink to = "/about">About</NavLink>
            </li>
        </ul>
    
    </nav>
  )
}

export default NavBar
