import React from "react";
import "../component-styles/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="logo"><Link to="/">LOGO</Link></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Forum">Forums</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;