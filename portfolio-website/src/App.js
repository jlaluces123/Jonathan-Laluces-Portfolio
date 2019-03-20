import React, { Component } from 'react';
import './App.css';

// --> Components Imports
import Navigation from "./components/Navigation.js";
import Home from "./components/Home.js";

class App extends Component {    

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>

        <section className = "home-section">
          <Home />
        </section>

        <section className = "about-me-section" name = "about-me">
        
        </section>
      </div>
    );
  }
}

export default App;
