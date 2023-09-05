import React from "react";
import Hero from "../components/HomepageHero"
import image from "../images/mission.png"
import '../page-styles/Home.css'

const Home = () => {
    return (
    <div>
        <Hero />
        <div className="section">
            <div className="text">
                <div className="header">Our Mission:</div>
                <div className="content">
                Our mission is to inspire, educate, and empower the next generation of technology leaders. Through accessible materials, resources, and online sessions, our organisation aims to iNNOVATE students.

                </div>
            </div>
            <div className="mission-image">
                <img src={image} alt="Our Mission Image" />
            </div>
        </div>
    </div>
    )
}

export default Home;