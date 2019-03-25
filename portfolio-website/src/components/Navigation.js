import React from "react";
import "../styles/Navigation.css";
import Logo from "../images/Logo.png";

// --> Module Imports
import { Link, Events, animateScroll as scroller } from "react-scroll";


class Navigation extends React.Component {
  state = {
    active: false
  };

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });
  };

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  };

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
    console.log("scrollTo invoked");
  };

  clickMenu = (event) => {
    event.preventDefault();    
    let currentState = this.state.active;
    this.setState({ active: !currentState }); // --> Flip Flop
  };

  render() {
    return (
      <div className = "navigation-wrapper">
        <img className = "logo" src = {Logo} alt = "logo" />
  
        <div className = "hamburger-menu" >
          <a className = "toggle" onClick = {this.clickMenu} href = "/#">
            <svg className = {this.state.active ? "hide" : null} style={{ width: 40, height: 40 }} viewBox="0 0 24 24">
              <path fill="#fff" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>  
          </a>      
          <div className = {this.state.active ? "active-style" : "pages-list"}>
            <a className = "toggle" onClick = {this.clickMenu} href = "/#">
              <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                <path fill="#fff" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
              </svg>
            </a>
            <ul className = "pages-menu">              
              <li><Link to = "home" className = "pages-menu-item" smooth = {true} onClick = {() => this.scrollTo()}>Home</Link></li>
              <li><Link to = "about-me" className = "pages-menu-item" smooth = {true} onClick = {() => this.scrollTo()}>About</Link></li>
              <li><Link to = "skills" className = "pages-menu-item" smooth = {true} onClick = {() => this.scrollTo()}>Skills</Link></li>
              <li><Link to = "projects" className = "pages-menu-item" smooth = {true} onClick = {() => this.scrollTo()}>Projects</Link></li>
              <li><Link to = "writing" className = "pages-menu-item" smooth = {true} onClick = {() => this.scrollTo()}>Writing</Link></li>
            </ul>
          </div>
        </div>
  
      </div>
    ); // --> Return statement
  }  
}; // --> Navigation Brace

export default Navigation;