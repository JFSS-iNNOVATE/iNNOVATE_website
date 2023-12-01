import React from 'react';
import "../page-styles/Resources.css"
import "../data/text.css"

const VideoColumn = ({ videoUrl, description, level }) => (
  <div className="video-column">
    <iframe
      width="100%" // Adjust the width as needed
      height="200" // Adjust the height as needed
      src={videoUrl}
      title="Embedded Video"
      allowFullScreen
    />
    <div className='description'>{description}</div>
    <div className='description'>({level})</div>
  </div>
);

const Resources = () => {
  return (
  
  <div className="video-container">
    
    <VideoColumn
      videoUrl="https://www.youtube.com/embed/7WxJEHfCeOE" 
      description="Getting Started With Replit"
      level="Junior"
    />
    <VideoColumn
      videoUrl="https://www.youtube.com/embed/0dgUHi0IucA"
      description="Intro to Python"
      level="Junior"
    />
    <VideoColumn
      videoUrl="https://www.youtube.com/embed/fAFaPCDIYCY"
      description="Python Loops"
      level="Junior"
    />
    <VideoColumn
      videoUrl="https://www.youtube.com/embed/zeq6Svm4-Es"
      description="Python Lists & Functions"
      level="Junior"
    />
    <div className='spacer'></div>
  </div>
  );
  }

export default Resources;
