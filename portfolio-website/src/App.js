import React, { Component } from 'react';
import './App.css';

// --> Components Imports
import Navigation from "./components/Navigation.js";
import Home from "./components/Home.js";
import { AboutMe } from "./components/AboutMe.js";

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
          <AboutMe />
        </section>
      </div>
    );
  }
}

export default App;
