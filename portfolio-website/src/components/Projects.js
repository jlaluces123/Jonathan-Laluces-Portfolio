import React from "react";
import "../styles/Projects.css";

import ScreenShotOne from "../images/Events Page ScreenShot.png";
import ScreenShotTwo from "../images/TakeNotes.png";
import ScreenShotThree from "../images/DevBlog.png";
import ScreenShotFour from "../images/Huddle.png";

export const Projects = props => {
  return (
    <div className = "projects-wrapper">
      <h1 className = "projects-header">Projects</h1>
      <div className = "row">
        {/* Picture of App */}
        <div className = "app-pic-wrapper">
          <a rel="noopener noreferrer" href = "https://taco-run-c453f.firebaseapp.com/" target = "_blank">
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

          <p className = "app-description">
            Front End Tech: React, Redux, Material-UI, Styled Components, Firebase Authentication Service, and Axios.
          </p>

          <p className = "app-description">
            Back End Tech: Node.JS, Express, Knex, BcryptJS, Cors, Faker, PostgreSQL, and Heroku for deployment
          </p>

          <a className = "learn-more" rel="noopener noreferrer" href = "https://taco-run-c453f.firebaseapp.com/" target = "_blank">Learn More</a>
        </div>
      </div>

      <div className = "row row-2">
         {/* Picture of App */}
         <div className = "app-pic-wrapper">
          <a rel="noopener noreferrer" href = "https://github.com/jlaluces123/TakeNotes" target = "_blank">
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

          <p className = "app-description">
            Front End Tech: React, Redux, and Axios.
          </p>

          <p className = "app-description">
            Back End Tech: Node.js, Express, Knex, Cors, and BcryptJS.
          </p>

          <a className = "learn-more" rel="noopener noreferrer" href = "https://www.github.com/jlaluces123/TakeNotes" target="_blank">Learn More</a>
        </div>
      </div>

      <div className = "row">
        {/* Picture of App */}
        <div className = "app-pic-wrapper">
          <a rel="noopener noreferrer" href = "https://hungry-shannon-d42678.netlify.com/" target = "_blank">
            <img src = {ScreenShotThree} alt = "events-page" className = "app-screen-shot" />
          </a>
        </div>

        {/* Text Description */}
        <div className = "app-text-wrapper text-wrapper-1">
          <h1 className = "app-header">Gatsby Blog Website</h1>

          <p className = "app-description">
            This is a blog website I made for fun to learn Gatsby as well as using a bit of GraphQL! I take advantage of markdown
            to create the blogs
          </p>        

          <p className = "app-description">
            Front-End Tech: React, Gatsby
          </p>         

          <p className = "app-description">
            Back-End Tech: GraphQL
          </p>

          <a className = "learn-more" rel="noopener noreferrer" href = "https://hungry-shannon-d42678.netlify.com/" target = "_blank">Learn More</a>
        </div>
      </div>

      <div className = "row row-2">
         {/* Picture of App */}
         <div className = "app-pic-wrapper">
          <a rel="noopener noreferrer" href = "https://unruffled-ride-b6c4c7.netlify.com" target = "_blank">
            <img src = {ScreenShotFour} alt = "events-page" className = "app-screen-shot" />
          </a>
        </div>

        {/* Text Description */}
        <div className = "app-text-wrapper text-wrap">
          <h1 className = "app-header">Huddle Landing Page Code Challenge</h1>

          <p className = "app-description">
            This is a front-end code challenge I did from Front End Mentor to freshen up on my base front-end
            skills.
          </p>

          <p className = "app-description">
            Front End Tech: HTML, CSS
          </p>          

          <a className = "learn-more" rel="noopener noreferrer" href = "https://unruffled-ride-b6c4c7.netlify.com" target="_blank">Learn More</a>
        </div>
      </div>
    </div>
  );
};