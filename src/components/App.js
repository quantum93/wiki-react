import React from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import Results from './Results';

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
    fetch(`https://api.punkapi.com/v2/beers/${searchTerm}&type=beer`)
    .then(data => data.json())
    .then(beers => {
      console.log(beers);
      const filteredBeers = beers.data.filter(beer => !!beer.labels);
     this.setState({ beers: filteredBeers });
    })
    .catch(err => console.error(err));
  };

  componentDidMount() {
    this.loadBeers();
  }

  render() {
    return (
      <div className="App">
      <Header siteName="BREWVANA" />
      <Search />
      <button onClick={this.incrementBeers}>{this.state.numBeers} 🍺</button>
      <Results beers={this.state.beers}  />
      <p>Hello World</p>
      </div>
    );
  }
}

export default App;
