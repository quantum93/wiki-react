import React from 'react';
import PropTypes from 'prop-types';

class Results extends React.Component {
  Results.propTypes = {
    loading: PropTypes.bool.isRequired,
    beers: PropTypes.array.isRequired
  }

  render() {
    return(
      <div className="results">
        <div className="beers">
          {this.props.beers.map((details, i) =>
            <Beer details={details} key={details.id} />
          )}
        </div>
      </div>
    )
  }
}

export default Results;
