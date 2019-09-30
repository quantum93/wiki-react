import React from 'react';
import db from './db.json';

const Chart = () => {

  let i;
  console.log(db.data.length-1);
  for (i = 0; i < db.data.length; i++) {
    if (db.data[i].abv) {
      console.log(i, db.data[i].abv);
      console.log(db.data[i].ibu);
      let style = db.data[i].style
      console.log(i, style ? style.category.name : "no category name");
    }
  }

  return (
    <div>
      <h1>This is Chart page.</h1>
    </div>
  )


}

export default Chart;
