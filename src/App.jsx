import React, { Component } from 'react';
import logo from './assets/images/coffee-beans.svg';
import Wrapper from "./components/Wrapper";
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title-h1">Coffee Click</h1>
  
        </header>

      </div>
    );
  }
}

export default App;
