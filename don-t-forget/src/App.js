import React, { Component } from 'react';
import logo from '../public/Remember.png' ;
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} height="90%" width="60%" alt="logo" />
        </div>
        <p className="App-intro">
            <h2 className="App-fuente-intro">The Web that remnind you all</h2>
            <span className="App-fuente">Do you usually forget birthdays?</span>
            <br/>
            <span className="App-fuente">Do you usually forget your passwords?</span>
            <br/>
            <span className="App-fuente">Do you usually forget buy something?</span>
            <br/>
            <h3 className="App-fuente-intro">This is your Website!!!!</h3>


        </p>
      </div>
    );
  }
}

export default App;
