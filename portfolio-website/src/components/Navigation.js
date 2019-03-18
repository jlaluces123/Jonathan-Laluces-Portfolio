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
  
        <div className = "hamburger-menu" >
          <a className = "toggle" onClick = {this.clickMenu}>
            <svg className = {this.state.active ? "hide" : null} style={{ width: 40, height: 40 }} viewBox="0 0 24 24">
              <path fill="#fff" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>  
          </a>      
          <div className = {this.state.active ? "active-style" : "pages-list"}>
            <a className = "toggle" onClick = {this.clickMenu}>
              <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                <path fill="#fff" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
              </svg>
            </a>
            <ul className = "pages-menu">              
              <li><a className = "pages-menu-item" href="#home">Home</a></li>
              <li><a className = "pages-menu-item" href="#about">About</a></li>
              <li><a className = "pages-menu-item" href="#projects">Projects</a></li>
              <li><a className = "pages-menu-item" href="#blog">Blog</a></li>
              <li><a className = "pages-menu-item" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
  
      </div>
    ); // --> Return statement
  }  
}; // --> Navigation Brace

export default Navigation;