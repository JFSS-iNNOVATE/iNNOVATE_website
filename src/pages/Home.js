import React from "react";
import Hero from "../components/HomepageHero"
import image from "../images/mission.png"
import '../page-styles/Home.css'
import '../data/text.css'
import data from "../data/text-data.json"
import juniorimg from '../images/juniorimg.png'
import seniorimg from '../images/seniorimg.png'
// import { useNavigate } from "react-router-dom";

const Home = () => {
    const textBold = {
        fontWeight: 'bold',
    };

    // const navigate = useNavigate()
    return (
    <div>
        <Hero />
        <div className="section">
            <div className="text">
                <div className={data.Home["Our Mission"][0].type}>{data.Home["Our Mission"][0].content}</div>
                <div className={data.Home["Our Mission"][1].type}>
                Our mission is to inspire, educate, and empower the next generation of technology leaders. Through accessible materials, resources, and online sessions, our organisation aims to <span style={textBold}>iNNOVATE</span> students.
                </div>
            </div>
            <div className="mission-image">
                <img src={image} alt="Our Mission" />
            </div>
        </div>
        <div className="divisionSection">
            <div className="subtitle-centered divisions">Divisions</div>
            <hr />
            <div className="description descriptionWhite"><span style={textBold}>iNNOVATE</span> offers two divisions: Junior and Senior. The Junior division consists of trained high school mentors to conduct free learning sessions with students grades 6-8 once a week. The Senior division coaches high schoolers skills to prepare them for the technology industry.</div>
        </div>
        <div className="homepage-section">
            <div className="columns">
                <div className="column">
                    <div className="subtitle-centered">Junior</div>
                    <div className="image-centered sized-image"><img src={juniorimg} alt="Junior Division" /></div>
                    <div className="description divisionText">Learn a programming language, 3D-modelling, and other tech savvy skills, for free by our trained mentors!</div>
                    <button class="button-31">Sign Up</button>
                </div>

                <div className="column">
                    <div className="subtitle-centered">Senior</div>
                    <div className="image-centered sized-image"><img src={seniorimg} alt="Senior Division" /></div>
                    <div className="description divisionText">Develop and strengthen essential tech skills required for the industry. Join us and stand out on post-secondary applications.</div>
                    <button class="button-31">Sign Up</button>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default Home;