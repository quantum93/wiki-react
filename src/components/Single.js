import React from "react";
import Loader from "./Loader";
import Header from "./Header";
import PropTypes from "prop-types";
import {Bar} from 'react-chartjs-2';
import Generic from './generic.jpg';

class Single extends React.Component {
  constructor() {
    super();
    this.state = { beer: {}, loading: true };
  }

  static propTypes = {
    params: PropTypes.object
  };

  componentDidMount() {
    // console.log(`searching for ${this.props.match.params.beerId}`);
    this.loadBeer(this.props.match.params.beerId);
  }

  loadBeer = beerId => {
    // console.log(`Loading beer ${beerId}`);
    this.setState({ loading: true });
    fetch(`http://api.react.beer/v2/beer/${beerId}`)
      .then(data => data.json())
      .then(res => {
        this.setState({ beer: res.data, loading: false });
        // console.log(beerId)
      });
  };

  renderGlass = beer => {
    if (!beer.glass) return;
    return (
      <div className="glass">
        <img src={`/images/glass-${beer.glass.id}.jpg`} alt={beer.name} />
        <h3>{beer.glass.name} Glass</h3>
      </div>
    );
  };

  renderAbv = beer => {
    if (!beer.abv) return;
    return <div className="abv">ABV: {beer.abv}%</div>;
  };

  renderIbu = beer => {
    if (!beer.ibu) return;
    return <div className="ibu">IBU: {beer.ibu}</div>;
  };

  renderCategory = beer => {
    if (!beer.style.category) return;
    return <div className="category">Category: {beer.style.category.name}</div>;
  };

  renderFood = beer => {
    if (!beer.foodPairings) return;
    return <div className="foodPairings">Food Pairings: {beer.foodPairings}</div>;
  };

  // This is logic for the case for the beer data without large image.
  renderImage = beer => {
    if (beer.labels) {
      return <img className="label" src={beer.labels.large} alt={beer.name} />
    } else {
      return <img src={Generic} alt={beer.name} />
    }
  };


  render() {
    if (this.state.loading) {
      return <Loader message="Beer is the answer!" />;
    }

    const { beer } = this.state;
    // console.log(beer);
    // console.log(beer.style.category.name);

    // This is for chart of ABV value in bar style

    const state = {
      labels: ['ABV(%)', 'IBU'],
      datasets: [
        {
          label: beer.name,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 1,
          data: [beer.abv, beer.ibu]
        }
      ]
    }

    return (
      <div>
        <Header siteName="BREWVANA" />
        <div className="single-beer">

          <div className="desc">
            <h2>{beer.name}</h2>
            <p>{beer.description}</p>
          </div>

          <div className="deets">
            {this.renderImage(beer)}
            {this.renderGlass(beer)}
            {this.renderAbv(beer)}
            {this.renderIbu(beer)}
            {this.renderFood(beer)}
            {this.renderCategory(beer)}
          </div>

          <div>
            <Bar
              data={state}
              options={
                {
                  title:{ display:true, text:'Your Beer\'s ABV value', fontSize:20 },
                  legend:{ display:true, position:'right' }
                }
              }
            />
          </div>

          <div className="style">
            { (beer.style) ? (<h3>More Info on {beer.style.name}</h3>) : (<h3>More Info on {beer.name}</h3>) }
            { (beer.style) ? (<p>{beer.style.description}</p>) : (<p>{beer.description}</p>) }
          </div>

        </div>
      </div>
    );
  }
}

export default Single;
