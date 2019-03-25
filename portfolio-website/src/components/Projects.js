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
          <a href = "https://taco-run-c453f.firebaseapp.com/" target = "_blank">
            <img src = {ScreenShotOne} alt = "events-page" className = "app-screen-shot" />
          </a>
        </div>

        {/* Text Description */}
        <div className = "app-text-wrapper text-wrapper-1">
          <h1 className = "app-header">Let's Get Tacos</h1>
          <p className = "app-description">
            Let's Get Tacos is an event meet­up app centered around 
            avid taco eaters who love to eat with other people of the same interest.
          </p>
          <a className = "learn-more" href = "https://taco-run-c453f.firebaseapp.com/" target = "_blank">Learn More</a>
        </div>
      </div>

      <div className = "row row-2">
         {/* Picture of App */}
         <div className = "app-pic-wrapper">
          <a href = "https://github.com/jlaluces123/TakeNotes" target = "_blank">
            <img src = {ScreenShotTwo} alt = "events-page" className = "app-screen-shot" />
          </a>
        </div>

        {/* Text Description */}
        <div className = "app-text-wrapper text-wrap">
          <h1 className = "app-header">Take Notes</h1>
          <p className = "app-description">
            Take Notes is a simple note taking app that allows users to: create, review, 
            update, and delete their notes!
          </p>
          <a className = "learn-more" href = "github.com/jlaluces123" target="_blank">Learn More</a>
        </div>
      </div>
    </div>
  );
};