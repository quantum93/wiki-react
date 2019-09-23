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

  incrementBeers = () => {
    const beerAmount = this.state.numBeers + 1;
    this.setState({ numBeers: beerAmount });
  };

  render() {
    return (
      <div className="App">
      <Header siteName="BREWVANA"/>
      <button onClick={this.incrementBeers}>{this.state.numBeers} 🍺</button>
      <p>Hello World</p>
      </div>
    );
  }
}

export default App;
