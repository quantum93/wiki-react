import React from 'react';
import db from './db.json';
import {Scatter, Doughnut, Bar} from 'react-chartjs-2';

// const for Doughnut plot
const dougnutState = {
  labels: ['Hybrid/mixed Beer','European-germanic Lager','North American Lager','North American Origin Ales','British Origin Ales','Belgian And French Origin Ales',
  'Irish Origin Ales','German Origin Ales','International Styles','Mead, Cider, & Perry','Malternative Beverages','Other Lager','No style information'],
  datasets: [
    { label: 'Category',
    backgroundColor: ['#B21F00','#C9DE00','#2FDE00','#00A6B4','#6800B4','#ffd077','#c3b8ff','#1a8f65','#ebc4dc','#8c9dad','#004ea8','#dd6400','#2a292a'],
    data: [147, 45, 97, 522, 97, 102, 21, 39, 3, 3, 11, 4, 15] }
  ]
}

const barState = {
  labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
  datasets: [
    { label: "Year created in total 1107 records",
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'],
        borderColor: [
        'rgba(0,0,0,1)',
        'rgba(0,0,0, 1)',
        'rgba(0,0,0, 1)',
        'rgba(0,0,0, 1)',
        'rgba(0,0,0, 1)',
        'rgba(0,0,0, 1)',
        'rgba(0,0,0, 1)',
        'rgba(0,0,0, 1)',
        'rgba(0,0,0, 1)'],
        borderWidth:1,
      data: [0, 249, 106, 183, 205, 103, 134, 129, 0]}
  ]
}
// console.log(dougnutState.labels[3]);

class myChart extends React.Component {
  render() {
    // if (this.props.categoryNu) {
    //   window.location = `/category/${dougnutState.labels[this.props.categoryNu]}`;
    // }
    let beerHistory=[];
    let history=db.data.map(function(e) {
      if(e.createDate && parseInt(e.createDate.slice(0,4)) === 2019 ) {
        console.log(e.createDate.slice(0,4));
      }
    });

    let beerData=[];
    let beerId=[];
    let data=db.data.map(function(e) {
      if(e.abv && e.ibu) {
        beerData.push({['x']: parseFloat(e.abv), ['y']: parseFloat(e.ibu)})
        beerId.push(e.id)
      }
    });

    return(
      <div>
      <Bar data={barState} />
      <div>
      <h2>There is no update in 2019.</h2>
      </div>

      <Scatter
      data={
        { datasets: [{ label: 'ABV(%) vs. IBU', data: beerData }] }
      }
      options={{
        scales: {xAxes: [{type: 'linear', position: 'bottom'}]},
        title:{ display:true, text:'ABV(%) vs. IBU from 463 beers', fontSize:20}
      }}
      onElementsClick = { elems => {
        if(elems[0]) {
          let clickId = beerId[elems[0]._index]
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

    <Doughnut
    data={dougnutState}
    options={{
      title:{ display:true, text:'Beer in different category from 1107 beers', fontSize:20 },
      legend:{ display:true, position:'right' }
    }}
    onElementsClick = {elems => {
      if (elems[0]) {
        {this.props.myCallback(elems[0]._index)}
        // this.props.categoryNu = elems[0]._index;
        console.log(this.props);
        // let categoryId = dougnutState.labels[elems[0]._index]
        // window.location = `/category/${categoryId}`;
      } else {
        return;
      }
    }}
    />
    <div>
    <h2>The 56% of beers in API comes from North American Origin.</h2>
    </div>
    
    </div>
  );
}
}



export default myChart;
