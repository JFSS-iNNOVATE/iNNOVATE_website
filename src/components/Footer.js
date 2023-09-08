import React from "react";
import '../component-styles/Footer.css'

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} iNNOVATIVE. All rights reserved.</p>
            <hr />
            <p>Made by Edison Ying, <a href="https://hariskhawja.github.io/">Haris Khawja</a>, Roy Zhang</p>
            <p>Email: <a href="mailto: jfss.innovate@gmail.com">jfss.innovate@gmail.com</a></p>
        </footer>
    )
}

export default Footer;