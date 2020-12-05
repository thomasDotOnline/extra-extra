import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'

class App extends Component {
  constructor() {
    super();
      this.state = {
        apiKey: '278983db180340719b79ae2970998432',
  }

  };
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
