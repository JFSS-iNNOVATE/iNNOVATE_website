import React from "react";
import "../component-styles/Navbar.css";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import jwt_decode from "jwt-decode"

var userObject = {}
const Navbar = () => {
    const [user, setUser] = useState({});
    function handleCallback(response) {
        userObject = jwt_decode(response.credential)
        console.log(userObject);
        setUser(userObject);
        document.getElementById("LoginDiv").hidden = true;
    }

    function signOut() {
        setUser({});
        document.getElementById("LoginDiv").hidden = false;
        window.location.reload();
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

        google.accounts.id.prompt();
    }, []);
    
    return (
        <nav className="nav">
            <div className="logo"><Link to="/">LOGO</Link></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Resources">Resources</Link></li>
                <li><Link to="/Forum">Forums</Link></li>
                <li><div className="google-login" id="LoginDiv"></div></li>
                <li>{user.picture &&
                    <div>
                       <img src={user.picture} className="pfp"></img>
                    </div>
                }</li>
                <li>{Object.keys(user).length != 0 &&
                    <li><button onClick={ () => signOut()} className="sign-out" id="pfp">Sign Out</button></li>
                }</li>
            </ul>
        </nav>
    )
}

export {Navbar, userObject};