import React from "react";

// --> Style sheet
import "../styles/Home.css";

// --> Module Imports
import Typing from "react-typing-animation";

export const Home = () => {
  return (
    <div className = "home-wrapper" id = "home">
      <Typing className = "typing-component">
        <h1 className = "intro-text">console.log("Hello Wordl");</h1>                
        <Typing.Backspace count = {5} />        
        <h1 className = "intro-text">ld");</h1>
      </Typing>      
    </div>
  );
};