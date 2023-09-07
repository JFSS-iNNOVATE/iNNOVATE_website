import React from 'react';
import image from '../images/GettyImages-1047699430.png'
import '../component-styles/HomepageHero.css'

function Hero() {
  return (
    <div className="hero">
      <div className="blurry-background">
        <img src={image} alt="iNNOVATE" />
        <div className="hero-content">
          <div className='title'>iNNOVATE</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
