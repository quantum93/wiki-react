import React from 'react';
import PropTypes from 'prop-types';

function Header (props) {
    return (
      <h1>{props.siteName}</h1>
    )
}

Header.propTypes = {
  siteName: PropTypes.string.isRequired
}

// class Header extends React.Component {
//   render() {
//     return (
//       <h1>BREWVANA</h1>
//     )
//   }
// }

export default Header;
