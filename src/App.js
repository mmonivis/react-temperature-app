import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator.js'


class App extends Component {
  constructor(props) {
    super(props);
 
  }

  render() {
    return (
      <div className="App">
        <Calculator/>
      </div>
    );
  }
}

export default App;
