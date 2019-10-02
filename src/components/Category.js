import React from 'react';
import db from './db.json';

const Category = () => {
  let beerList=[];
  let data=db.data.map(function(e) {
    console.log(e.style)
    if(e.name) {
      beerList.push(e.name)
    }
  });

  return(
    <div>
      <h2>This is test</h2>
      <h2>{beerList}</h2>
    </div>
  )
}

export default Category;

// Test for logic

// let counter = 0;
// let category ="";
// for (let i=0; i <db.data.length; i++) {
//   let style = db.data[i].style
  // if(style && style.category.name !== category) {
  //   console.log(category = style.category.name)
  // }
  // if(style && style.category.name === "Malternative Beverages") {
  //   console.log(counter += 1);
  // }
//   if(!style) {
//     console.log(db.data[i].name);
//   }
// }
