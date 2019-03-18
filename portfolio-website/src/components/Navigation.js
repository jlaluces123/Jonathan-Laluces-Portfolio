import React from "react";
import "../styles/Navigation.css";

// --> Helper Function to handle opening the Burger Menu


class Navigation extends React.Component {
  state = {
    active: false
  };

  clickMenu = (event) => {
    event.preventDefault();    
    let currentState = this.state.active;
    this.setState({ active: !currentState }); // --> Flip Flop
  };

  render() {
    return (
      <div className = "navigation-wrapper">
        <h3 className = "navigation-header">Jonathan Laluces</h3>
  
        <div className = "hamburger-menu">
          <a className = "toggle" onClick = {this.clickMenu}>
            <svg style={{ width: 40, height: 40 }} viewBox="0 0 24 24">
              <path fill="#fff" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>  
          </a>      
          <ul className = {this.state.active ? "active-style" : "pages-list"}>
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
  }  
}; // --> Navigation Brace

export default Navigation;