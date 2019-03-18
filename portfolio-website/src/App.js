import React, { Component } from 'react';
import './App.css';

// --> Components Imports
import { Navigation } from "./components/Navigation.js";

class App extends Component {

  clickMenu = (e) => {
    e.preventDefault();
    console.log("Menu Clicked")
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation 
            clickMenu = {this.clickMenu}
          />
        </header>
      </div>
    );
  }
}

export default App;
