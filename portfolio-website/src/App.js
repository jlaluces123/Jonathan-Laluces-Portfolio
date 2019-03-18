import React, { Component } from 'react';
import './App.css';

// --> Components Imports
import { Navigation } from "./components/Navigation.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
      </div>
    );
  }
}

export default App;
