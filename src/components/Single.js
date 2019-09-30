import React from "react";
import Loader from "./Loader";
import Header from "./Header";
import PropTypes from "prop-types";

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
        console.log(beerId)
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

  renderFood = beer => {
    if (!beer.foodPairings) return;
    return <div className="foodPairings">Food Pairings: {beer.foodPairings}</div>;
  };

  render() {
    if (this.state.loading) {
      return <Loader message="Beer is the answer no matter what the question is!" />;
    }

    const { beer } = this.state;
    console.log(beer);
    console.log(beer.style.categoryId);

    return (
      <div>
        <Header siteName="BREWVANA" />
        <div className="single-beer">
          <div className="desc">
            <h2>{beer.name}</h2>
            <p>{beer.description}</p>
          </div>

          <img className="label" src={beer.labels.large} alt={beer.name} />

          <div className="deets">
            {this.renderGlass(beer)}
            {this.renderAbv(beer)}
            {this.renderIbu(beer)}
            {this.renderFood(beer)}
          </div>

          <div className="style">
            { (beer.style) ?
              (<h3>More Info on {beer.style.name}</h3>)
              : (<h3>More Info on {beer.name}</h3>)
            }
            { (beer.style) ?
              (<p>{beer.style.description}</p>)
              : (<p>{beer.description}</p>)
            }
          </div>

        </div>
      </div>
    );
  }
}

export default Single;
