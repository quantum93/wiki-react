import React from 'react';
import './App.css';
import Header from './Header';
import {Route, Switch} from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numBeers : 10
    }
  }

  render() {
    return (
      <div className="App">
      <Header siteName="BREWVANA"/>
      <button>{this.state.numBeers} 🍺</button>
      <p>Hello World</p>
      </div>
    );
  }
}

export default App;
