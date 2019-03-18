import React from "react";

export const Navigation = (props) => {  

  return (
    <div className = "navigation-wrapper">
      <h3 className = "navigation-header">Jonathan Laluces</h3>

      <div className = "hamburger-menu" onClick = {props.clickMenu}>
        <button className = "close-toggle">X</button>
        <ul className = "pages-list">
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