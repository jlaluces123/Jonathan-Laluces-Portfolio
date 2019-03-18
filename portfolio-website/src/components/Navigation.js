import React from "react";
import "../styles/Navigation.css";

export const Navigation = (props) => {  

  return (
    <div className = "navigation-wrapper">
      <h3 className = "navigation-header">Jonathan Laluces</h3>

      <div className = "hamburger-menu">
        <svg style={{ width: 40, height: 40 }} viewBox="0 0 24 24" onClick = {props.clickMenu}>
          <path fill="#fff" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>        
        <ul className = "pages-list">
          <button className = "close-toggle">X</button>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>

    </div>
  ); // --> Return statement
}; // --> Navigation Brace