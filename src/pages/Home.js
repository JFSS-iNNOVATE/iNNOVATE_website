import React from "react";
import Hero from "../components/HomepageHero"
import image from "../images/mission.png"
import '../page-styles/Home.css'
import '../data/text.css'
import data from "../data/text-data.json"

const Home = () => {
    return (
    <div>
        <Hero />
        <div className="section">
            <div className="text">
                <div className={data.Home["Our Mission"][0].type}>{data.Home["Our Mission"][0].content}</div>
                <div className={data.Home["Our Mission"][1].type}>
                    {data.Home["Our Mission"][1].content}
                </div>
            </div>
            <div className="mission-image">
                <img src={image} alt="Our Mission" />
            </div>
        </div>
    </div>
    )
}

export default Home;