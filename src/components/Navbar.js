import React from "react";
import "../component-styles/Navbar.css";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import jwt_decode from "jwt-decode"

const Navbar = () => {
    function handleCallback(response) {
        var userObject = jwt_decode(response.credential)
        console.log(userObject);
      }
    
      useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
          client_id: "680968852601-6h8k53sd636mg9hfu2eqmvs8vjtg8skj.apps.googleusercontent.com",
          callback: handleCallback
        });
    
        google.accounts.id.renderButton(
          document.getElementById("LoginDiv"), 
          {theme: "outline", size: "large"}
        );
      }, []);
    
    return (
        <nav className="nav">
            <div className="logo"><Link to="/">LOGO</Link></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Resources">Resources</Link></li>
                <li><Link to="/Forum">Forums</Link></li>
                <li><div className="google-login" id="LoginDiv"></div></li>
            </ul>
        </nav>
    )
}

export default Navbar;