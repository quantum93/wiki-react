import React from "react";
import Header from "./Header";
import PropTypes from "prop-types";
import Loader from "./Loader";

class Single extends React.Component {
  constructor() {
    super();
    this.state = { beer: {}, loading: true };
  }

  static propTypes = {
    params: PropTypes.object
  };

  componentDidMount() {
    console.log(`searching for ${this.props.match.params.beerId}`);
    this.loadBeer(this.props.match.params.beerId);
  }

  loadBeer = beerId => {
    console.log(`Loading beer ${beerId}`);
    this.setState({ loading: true });
    fetch(`http://api.react.beer/v2/beer/${beerId}`)
      .then(data => data.json())
      .then(res => {
        this.setState({ beer: res.data, loading: false });
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

  render() {
    if (this.state.loading) {
      return <Loader message="🍻 Beer is the answer no matter what the question is!" />;
    }

    const { beer } = this.state;
    console.log(beer.style);

    return (
      <div>
        <Header siteName="Beer me!" />
        <div className="single-beer">
          <div className="desc">
            <h2>{beer.name}</h2>
            <p>{beer.description}</p>
          </div>
          <div className="deets">
            {this.renderGlass(beer)}
            {this.renderAbv(beer)}
          </div>
        </div>
      </div>
    );
  }
}

export default Single;
