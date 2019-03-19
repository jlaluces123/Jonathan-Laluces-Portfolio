import React from "react";

// --> Style sheet
import "../styles/Home.css";

// --> Module Imports
import Typing from "react-typing-animation";

export const Home = () => {
  return (
    <div className = "home-wrapper" id = "home">

    <div className = "typing-overlay">
      <Typing className = "typing-component" startDelay = {20}>
        <h1 className = "intro-text">return "Hello Wordl";</h1>                
        <Typing.Backspace count = {4} />        
        <h1 className = "intro-text">ld";</h1>
      </Typing>  
      </div> 


    </div>
  );
};