import React from "react";
import "../component-styles/Navbar.css";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import jwt_decode from "jwt-decode";
import iNNOVATELogo from '../images/iNNOVATELogo.png'

var userObject = {}
const Navbar = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 900);
    const [user, setUser] = useState({});
    const [toggled, setToggled] = useState(0);

    function handleCallback(response) {
        userObject = jwt_decode(response.credential)
        console.log(userObject);
        setUser(userObject);

        if (toggled == 1 && isSmallScreen == 1) {
            document.getElementById("LoginDiv").hidden = true;
        }

        else if (isSmallScreen == 0) {
            document.getElementById("LoginDiv").hidden = true;
        }

    }

    function signOut() {
        setUser({});
        document.getElementById("LoginDiv").hidden = false;
    }

    function navToggle() {
        if (toggled == 0) {
            setToggled(1);
        }

        else {
            setToggled(0);
        }
    }

    useEffect(() => {
        if (user.name) {
            return;
        }
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

        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 900);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };

    }, [toggled, user.name]);
    
    return (
        <nav className="nav">
            <div className="logoContainer"><Link to="/"><img className="logo" src={iNNOVATELogo}/></Link></div>
            {isSmallScreen ? (
                <ul className="menu">
                <li><button onClick={navToggle}>☰</button></li>
                {toggled == 1 && 
                <li><ul className="menuList">
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
                    <button onClick={ () => {
                        signOut();

                    }} className="sign-out" id="pfp">Sign Out</button>
                }</li>
            </ul></li>}
            </ul>
            ) : (
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
            )}
        </nav>
    )
}

export {Navbar, userObject};