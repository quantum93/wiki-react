import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends React.Component {
  static propTypes = {
    siteName: PropTypes.string
  }

  render() {
    return (
      <div class="container">
        <h1>
          <Link to="/">{this.props.siteName}</Link>
        </h1>
      </div>
    );
  }
};

export default Header;
