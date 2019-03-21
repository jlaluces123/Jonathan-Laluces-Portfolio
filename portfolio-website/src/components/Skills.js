import React from "react";
import "../styles/Skills.css";

class Skills extends React.Component {
  state = {
    frontEndArray: [],
    backEndArray: [],
    activeOne: false,
    activeTwo: false,
  }

  componentDidMount = () => {
    // --> We want the first tab to be open by default 
    this.setState({ activeOne: true });
    console.log(`activeOne: ${this.state.activeOne} || activeTwo: ${this.state.activeTwo}`)
    console.log("did mount");
  };

  componentDidUpdate() { // --> this.setState isn't instant, so we use a didUpdate() to counter-act that
    console.log("updated");
    console.log(`activeOne: ${this.state.activeOne} || activeTwo: ${this.state.activeTwo}`)
  };

  handleTabChange = (event) => {
    event.preventDefault();        
    event.target.value === 1 ? (      
      this.setState({ activeOne: true, activeTwo: false })     
    ) : (
      this.setState({ activeTwo: true, activeOne: false })      
    );    
  };  
  
  render() {
    return (
      <div className = "skills-section-wrapper">
        <h1 className = "skills-header">Skills</h1>
  
        {/* Tabs For Front End and Back End */}
        <div className = "skills-tab-wrapper">
  
          <ul className = "tab-list">
            <li value = "1" className = "tab-item" onClick = {this.handleTabChange}>Front End</li>          
            <li value = "2" className = "tab-item" onClick = {this.handleTabChange}>Back End</li>
          </ul>
  
          <ul className = "front-end-tab">
            {this.state.frontEndArray.map(element => {
              return <a href = "/#" className = "skill-item">{ element }</a>;
            })}
          </ul>
  
          <ul className = "back-end-tab">
            {this.state.backEndArray.map(element => {
              return <a href = "/#" className = "skill-item">{ element }</a>;
            })}
          </ul>
        </div>
      </div>
    );
  }
};


export default Skills;