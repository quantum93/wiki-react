import React from 'react';
import './App.css';
import Header from './Header';

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

  loadBeers = (searchTerm = "random") => {
    fetch(`https://api.punkapi.com/v2/beers/${searchTerm}`)
    .then(data => data.json())
    .then(beers => {
      console.log(beers);
    })
    .catch(err => console.error(err));
  };

  componentDidMount() {
    this.loadBeers();
  }

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
