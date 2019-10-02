import React from 'react';
import slug from 'slugify';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Beer extends React.Component {
  static propTypes = {
    details: PropTypes.object.isRequired
  }

  render() {
    const { name, labels, id } = this.props.details;
    const image = labels ? labels.medium : 'null.jpg';

    const isOrganic = this.props.details.isOrganic;
    let myReturn = "";

    if (isOrganic === "N") {
      myReturn = "beer";
    } else if (isOrganic === "Y") {
      myReturn = "beer-organic"
    }
    // console.log(myReturn);

    return (
      <div className={myReturn}>
        <Link to={`/beer/${id}/${slug(name)}`}>
          <h2>{name}</h2>
          <img src={image} alt={name} />
        </Link>
      </div>
    );
  }
}
export default Beer;
