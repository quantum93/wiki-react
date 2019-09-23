import React from 'react';
import './App.css';
import Header from './Header';
import {Route, Switch} from "react-router-dom";

class App extends React.component {
  constructor() {
    super();
    this.state = {
      numBeers: 10
    };
  }

  return (
    <div className="App">
    <Header siteName="BREWVANA"/>
    <p>Hello World</p>
    </div>
  );
}

export default App;
