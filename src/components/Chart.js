import React from 'react';
import db from './db.json';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

const myChart = () => {
  return(
    <div>
    <Bar
    data={state}
    options={{
      title:{
        display:true,
        text:'Average Rainfall per month',
        fontSize:20
      },
      legend:{
        display:true,
        position:'right'
      }
    }}
    />
    </div>
  );

}

export default myChart;
// let i;
// console.log(db.data.length-1);
// for (i = 0; i < db.data.length; i++) {
  //   if (db.data[i].abv) {
    //     console.log(i, db.data[i].abv);
    //     console.log(db.data[i].ibu);
    //     let style = db.data[i].style
    //     console.log(i, style ? style.category.name : "no category name");
    //   }
    // }
