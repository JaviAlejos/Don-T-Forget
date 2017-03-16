import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Don't Forget</h1>
        </div>
        <p className="App-intro">
            <h2>The Web that remnind you all</h2>
            <br/>
            <span>Do you usually forget birthdays?</span>
            <br/>
            <span>Do you usually forget your passwords?</span>
            <br/>
            <span>Do you usually forget buy something?</span>
            <br/>
            <h3>This is your Website!!!!</h3>


        </p>
      </div>
    );
  }
}

export default App;
