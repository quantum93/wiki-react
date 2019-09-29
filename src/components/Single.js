import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';

class Single extends React.Component {
  constructor() {
    super();
    this.state = { beer:{}, loading:true };
  }

  static propTypes = {
    params: PropTypes.object
  };

  componentDidMount() {
    console.log(`searching for ${this.props.match.params.beerId}`);
    this.loadBear(this.props.match.params.beerId);
  }

  loadBeer = (beerId) => {
    console.log(`Loading beer ${beerId}`);
    this.setState({loading:true});
    fetch(`http://api.react.beer/v2/beer/${beerId}`)
    .then(data => data.json())
    .then(res => {this.setState({beer:res.data, loading:false});
    });
  };



  render() {

    const { beer } = this.state;

    return(
      <div className="single-beer">
        <div className="desc">
          <h2>{beer.name}</h2>
          <p>{beer.description}</p>
        </div>
      </div>

    )
  }
}

export default Single;
