import React from "react";
import '../component-styles/Footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <p>&copy; {new Date().getFullYear()} iNNOVATIVE. All rights reserved.</p>
                <hr />
                <p>Made by Edison Ying, Haris Khawja, Roy Zhang</p>
            </footer>
        </div>
    )
}

export default Footer;