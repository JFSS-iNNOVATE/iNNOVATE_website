import React from "react";
import '../component-styles/Footer.css'

const Footer = () => {
    return (
        <footer>
            <p className="firstFooter">&copy; {new Date().getFullYear()} iNNOVATE. All rights reserved.</p>
            <hr />
            <p>Made by Edison Ying, <a href="https://hariskhawja.github.io/">Haris Khawja</a>, Roy Zhang</p>
            <p>Powered by <a href="https://johnfraser.peelschools.org/">John Fraser Secondary School</a></p>
            <p>Contact/Email: <a href="mailto: jfss.innovate@gmail.com">jfss.innovate@gmail.com</a></p>
        </footer>
    )
}

export default Footer;