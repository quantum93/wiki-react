import React from 'react';
import db from './db.json';
import {Scatter, Doughnut} from 'react-chartjs-2';
import { BrowserRouter, Route } from 'react-router-dom';
import Single from './Single';

// const for Doughnut plot
const dougnutState = {
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
// console.log(dougnutState.labels[3]);

const myChart = () => {
  //const for scatter plot
  let beerData=[];
  let beerId=[];
  let data=db.data.map(function(e) {
    if(e.abv && e.ibu) {
      beerData.push({['x']: parseFloat(e.abv), ['y']: parseFloat(e.ibu)})
      beerId.push(e.id)
    }
  });
  // console.log(beerData);

  return(
    <div>
      <div>
        <h1>This is chart page.</h1>
      </div>

        <Doughnut
          data={dougnutState}
          options={{
            title:{ display:true, text:'Beer in different category from 1107 beers', fontSize:20 },
            legend:{ display:true, position:'right' }
          }}
          onElementsClick = {elems => {
            console.log(elems[0])
            if (elems[0]) {
              console.log(elems[0]._index);
              let categoryId = dougnutState.labels[elems[0]._index]
              console.log(categoryId);
              window.location = `/category/${categoryId}`;
            } else {
              return;
            }
          }}
        />
        <div>
          <h2>The 56% of beers in API comes from North American Origin.</h2>
        </div>


        <Scatter
          data={
            { datasets: [{ label: 'ABV(%) vs. IBU', data: beerData }] }
          }
          options={{
            scales: {xAxes: [{type: 'linear', position: 'bottom'}]},
            title:{ display:true, text:'ABV(%) vs. IBU from 463 beers', fontSize:20}
          }}
          onElementsClick = {
            elems => {
              if(elems[0]) {
                let clickId = beerId[elems[0]._index]
                // window.location = '/beer/69tWZj';
                window.location = `/beer/${clickId}`;
              } else {
                return;
              }
            }
          }
        />

        <div>
          <h2>More than half of beers in API doesn't have IBU data.</h2>
        </div>
      </div>
  );
}

export default myChart;
