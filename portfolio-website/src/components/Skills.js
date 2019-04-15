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
    this.setState({
      activeOne: true,
      frontEndArray: ['HTML', 'CSS', 'LESS', 'Material-UI', 'Flex-Box', 'React', 'Redux', 'JavaScript' ],
      backEndArray: ['Python', 'NodeJS', 'Express', 'Knex', 'SQLite', 'C']
    });        
  };

  componentDidUpdate() { // --> this.setState isn't instant, so we use a didUpdate() to counter-act that
    console.log("update");
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
      <div className = {this.state.activeOne ? "skills-section-wrapper background-one" : "skills-section-wrapper background-two"}>
        <div className = "image-overlay">
          <h1 className = "skills-header">Skills</h1>
    
          {/* Tabs For Front End and Back End */}
          <div className = "skills-tab-wrapper">
    
            <ul className = "tab-list">
              <li value = "1" className = "tab-item" onClick = {this.handleTabChange}>Front End</li>          
              <li value = "2" className = "tab-item" onClick = {this.handleTabChange}>Back End</li>
            </ul>

            {/* Tab Now renders either the front-end or back-end list */}
            {this.state.activeOne === true ? (
              // console.log("tab one is up") --> verify if the tab one is open by default
              <ul className = "skill-tab">
                {this.state.frontEndArray.map(element => {
                  return <a rel="noopener noreferrer" className = "skill-item" key = {element}>{ element }</a>;
                })}
              </ul>
            ) : (
              <ul className = "skill-tab">
                {this.state.backEndArray.map(element => {
                  return <a rel="noopener noreferrer" className = "skill-item" key = {element}>{ element }</a>;
                })}
              </ul>
            )}
            
              
          </div>
        </div>
      </div>
    );
  }
};


export default Skills;