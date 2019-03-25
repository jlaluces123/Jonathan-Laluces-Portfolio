import React from "react";
import "../styles/Projects.css";
import ScreenShotOne from "../images/Events Page ScreenShot.png";
import ScreenShotTwo from "../images/TakeNotes.png";

export const Projects = props => {
  return (
    <div className = "projects-wrapper">
      <div className = "row">
        {/* Picture of App */}
        <div className = "app-pic-wrapper">
          <img src = {ScreenShotOne} alt = "events-page" className = "app-screen-shot" />
        </div>

        {/* Text Description */}
        <div className = "app-text-wrapper">
          <h1 className = "app-header">Let's Get Tacos</h1>
          <p className = "app-description">Well hellothere</p>
        </div>
      </div>

      <div className = "row row-2">
         {/* Picture of App */}
         <div className = "app-pic-wrapper">
          <img src = {ScreenShotTwo} alt = "events-page" className = "app-screen-shot" />
        </div>

        {/* Text Description */}
        <div className = "app-text-wrapper">
          <h1 className = "app-header">Let's Get Tacos</h1>
          <p className = "app-description">Well hellothere</p>
        </div>
      </div>
    </div>
  );
};