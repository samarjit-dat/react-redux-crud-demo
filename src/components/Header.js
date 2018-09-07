import React from 'react'
import '../assets/App.css' 
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <div className="nav-bar">
            
                <ul className="nav-left">
                    <li className="left-nav"><Link className="header-name-left" to="/">Home</Link></li>
                    <li className="left-nav"><NavLink className="header-name-left" to="/about">About</NavLink></li>
                    <li className="left-nav"><NavLink className="header-name-left" to="/contact">Contact</NavLink></li>
                </ul>
           
            
                <ul className="nav-right">
                    <li className="right-nav"><NavLink className="header-name-right" to="/login">Login</NavLink></li>
                    <li className="right-nav"><NavLink className="header-name-right" to="/signup">Signup</NavLink></li>
                </ul>
           
        </div>
    )
}
export default Header;