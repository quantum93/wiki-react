import React from 'react';
import db from './db.json';
import Loader from './Loader';
import Beer from './Beer';
import PropTypes from "prop-types";

const Category = (props) => {
  const labels = ['Hybrid/mixed Beer','European-germanic Lager','North American Lager',
  'North American Origin Ales','British Origin Ales','Belgian And French Origin Ales',
  'Irish Origin Ales','German Origin Ales','International Styles','Mead, Cider, & Perry',
  'Malternative Beverages','Other Lager','No style information'];

  let beerName=[];
  let beerId=[];

  let data=db.data.map(function(e) {
    if(e.style && e.style.category.name === labels[props.categoryNu]) {
      beerName.push(e.name)
      beerId.push(e.id)
    }
  });

  // console.log(beerName.length);
  console.log(props.categoryNu);
  return(
    <div>
    {beerName.map((value, index) =>{
      return <h2 key={index}>{value}</h2>
    })}
    </div>
  );
}

Category.propTypes = {
  categoryNu: PropTypes.number
};

export default Category;
