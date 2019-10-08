
  // render() {
  //   let beerList=[];
  //   let data=db.data.map(function(e) {
  //     if(e.style && e.style.category.name === "Malternative Beverages") {
  //       beerList.push(e.name)
  //     }
  //   }
  //
  //   return(
  //     <div>
  //       <h2>This is test</h2>
  //       <h2>{beerList}</h2>
  //       <h2>{beerList.length}</h2>
  //     </div>
  //   );
  // }

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

// console.log(scatterState);

// let i;
// let counter = 0;
// let category ="";
// console.log(db.data.length-1);
// for (i = 0; i < db.data.length; i++) {
//     if (db.data[i].abv) {
//         console.log(i, db.data[i].abv);
//         console.log(db.data[i].ibu);
//         let style = db.data[i].style
//         console.log(i, style ? style.category.name : "no category name");
//       }
//     }

// for (i=0; i <db.data.length; i++) {
//   let style = db.data[i].style
  // if(style && style.category.name !== category) {
  //   console.log(category = style.category.name)
  // }
  // if(style && style.category.name === "Malternative Beverages") {
  //   console.log(counter += 1);
  // }
  // if(!style) {
  //   console.log(counter += 1);
  // }
// }

// let i;
// let counter = 0;
// for(i=0; i<db.data.length; i++) {
//   if(db.data[i].isOrganic === "Y") {
//     console.log(i, db.data[i].name, counter += 1)
//   }
// }

// <Crawler exact path="/crawler" component={Crawler} />
//
// const Root = function() {
//   return (
//       <div>
//         <Route exact path="/" component={App} />
//         <Route exact path="/chart" component={Chart} />
//         <Route path="/search/:searchTerm" component={App} />
//         <Route path="/beer/:beerId" component={Single} />
//         <Route path="/category/:categoryId" component={Category} />
//       </div>
//   );
// };
//
// render(<Root/>, document.querySelector('#root'));


import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './App.css';

const API_KEY = 'AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {videos: [], selectedVideo: null};
    this.videoSearch('Guinness');
  }

  videoSearch (term) {
    YTSearch({key:API_KEY, term: term}, videos => {
      this.setState({videos: videos, selectedVideo:videos[0]});
    });
  }


  render() {
    this.state.selectedVideo ? console.log(this.state.selectedVideo.id) : console.log(this.state.selectedVideo);


    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div className="App">
        <h5>Youtube Search:</h5>
        <VideoDetail video={this.state.selectedVideo}/>

      </div>
    );
  }
}

export default App;


~~~~~~~~~~~~~~~~~~~~~~~~~

import React from 'react';

const VideoDetail = ( {video} ) => {
  if (!video) { return <div>Loading...</div>;}

  const videoId = video.id.videoId;
  const url=`https://www.youtube.com/embed/${videoId}`;
  // console.log(videoId);
  return (
    <div>
      <iframe src={url}></iframe>
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
    </div>
  )
}

export default VideoDetail;
