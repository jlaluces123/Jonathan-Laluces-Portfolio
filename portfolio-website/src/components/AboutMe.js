import React from "react";
import "../styles/AboutMe.css";


export const AboutMe = (props) => {

  return (
    <div className = "about-me-wrapper"> 
      <div className = "left-side">
        <h2 className = "profile-name">Jonathan Laluces</h2>
        <p className = "title">Junior Full Stack Developer</p>

        <div className = "description-wrapper">              
          <p className = "description-text">
            Graduating high school in June 2018, I started my path to becoming a full stack
            web developer. With almost a year's worth of experience in software engineering and
            web development, I have steadily grown my skills. <br /><br /> 
            
            Along with becoming a developer, I am a classical cellist as well: playing for almost 
            11 years, and an annual 10K runner at my local running event.
          </p>
        </div> 
      </div> 

      <div className = "right-side">
        <div className = "image-wrapper" />
      </div>
    </div>                    
  );
};