import React, { Component } from 'react';
import './App.css';

// --> Components Imports
import Navigation from "./components/Navigation.js";
import Home from "./components/Home.js";
import Skills from "./components/Skills.js";
import { AboutMe } from "./components/AboutMe.js";
import { Projects } from "./components/Projects.js";


class App extends Component {    

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>

        <section className = "home-section" name = "home">
          <Home />
        </section>

        <section className = "about-me-section" name = "about-me">
          <AboutMe />
        </section>

        <section className = "skills-section" name = "skills">
          <Skills />
        </section>

        <section className = "projects-section" name = "projects">
          <Projects />
        </section>
      </div>
    );
  }
}

export default App;
