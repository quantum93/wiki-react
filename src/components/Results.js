import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';
import Loader from './Loader';

class Results extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    beers: PropTypes.array.isRequired
  }

  render() {
    if (this.props.loading) {
      return <Loader message="🍻 Beer is the answer no matter what the question is!" />
    }
    return(
      <div className="results">
        <div className="beers">
          {this.props.beers.map((details, i) => <Beer details={details} key={details.id} />)}
        </div>
      </div>
    )
  }
};

export default Results;
