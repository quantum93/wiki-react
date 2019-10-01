import React from 'react';
import db from './db.json';
import {Doughnut} from 'react-chartjs-2';

const state = {
  labels: ['Hybrid/mixed Beer',
           'European-germanic Lager',
           'North American Lager',
           'North American Origin Ales',
           'British Origin Ales',
           'Belgian And French Origin Ales',
           'Irish Origin Ales',
           'German Origin Ales',
           'International Styles',
           'Mead, Cider, & Perry',
           'Malternative Beverages',
           'Other Lager',
           'No style information'
          ],
  datasets: [
    {
      label: 'Category',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4',
        '#ffd077',
        '#c3b8ff',
        '#1a8f65',
        '#ebc4dc',
        '#8c9dad',
        '#004ea8',
        '#dd6400',
        '#2a292a'
      ],
      data: [147, 45, 97, 522, 97, 102, 21, 39, 3, 3, 11, 4, 15]
    }
  ]
}

const myChart = () => {
  return(
    <div>
        <Doughnut
          data={state}
          options={{
            title:{ display:true, text:'Beer in different category', fontSize:20 },
            legend:{ display:true, position:'right' }
          }}
        />
      </div>
  );

}

export default myChart;

let i;
let counter = 0;
let category ="";
console.log(db.data.length-1);
// for (i = 0; i < db.data.length; i++) {
//     if (db.data[i].abv) {
//         console.log(i, db.data[i].abv);
//         console.log(db.data[i].ibu);
//         let style = db.data[i].style
//         console.log(i, style ? style.category.name : "no category name");
//       }
//     }

for (i=0; i <db.data.length; i++) {
  let style = db.data[i].style
  // if(style && style.category.name !== category) {
  //   console.log(category = style.category.name)
  // }
  if(style && style.category.name === "Malternative Beverages") {
    console.log(counter += 1);
  }
  // if(!style) {
  //   console.log(counter += 1);
  // }
}
