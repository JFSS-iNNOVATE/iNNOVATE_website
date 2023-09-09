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

const Resources = () => (
  <div className="video-container">
    <VideoColumn
      videoUrl="https://www.youtube.com/embed/rfscVS0vtbw" 
      description="Learn Python - Full Course for Beginners [Tutorial]"
      level="Junior"
    />
    <VideoColumn
      videoUrl="https://www.youtube.com/embed/rfscVS0vtbw"
      description="Description for Video 2"
      level="Junior"
    />
    <VideoColumn
      videoUrl="https://www.youtube.com/embed/rfscVS0vtbw"
      description="Description for Video 3"
      level="Junior"
    />
    <VideoColumn
      videoUrl="https://www.youtube.com/embed/rfscVS0vtbw"
      description="Description for Video 3"
      level="Junior"
    />
    <div className='spacer'></div>
  </div>
);

export default Resources;
