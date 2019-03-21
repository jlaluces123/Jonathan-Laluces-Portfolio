import React from "react";

// --> Style sheet
import "../styles/Home.css";

// --> Module Imports
import Typing from "react-typing-animation";
import { Link, Events, animateScroll as scroller } from "react-scroll";

class Home extends React.Component {

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

  render() {
    return (
      <div className = "home-wrapper" id = "home">
  
        {/* Full overlay on top of background image */}
        <div className = "typing-overlay">
          {/* Typing Component */}
          <Typing className = "typing-component" startDelay = {20}>
            <h1 className = "intro-text">return "Hello Wordl";</h1>                
            <Typing.Backspace count = {4} />        
            <h1 className = "intro-text">ld";</h1>
          </Typing>  
    
          {/* Scroll to About Me Section */}
          <Link 
            className = "learn-more-wrapper" 
            to = "about-me"
            smooth = {true}
            onClick = {() => this.scrollTo()}
          >      
            <h3>Check Out My Work!</h3>              
            <svg style={{ width: 24, height:24 }} viewBox="0 0 24 24">
              <path fill="#000000" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,10L12,15L17,10H7Z" />
            </svg>      
          </Link>    
        </div> 
        {/* Full overlay on top of background image */}
  
  
      </div>
    );
  };  
};

export default Home;