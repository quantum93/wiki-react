import React from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA';

class Youtube extends React.Component{
  constructor(props) {
    super(props);
    this.state = {videos: [], selectedVideo: null};
    this.videoSearch(props.beerName);
  }

  videoSearch (term) {
    YTSearch({key:API_KEY, term: term}, videos => {
      this.setState({videos: videos, selectedVideo:videos[0]});
    });
  }

  render() {
    if(this.state.selectedVideo !== null) {
      let video=this.state.selectedVideo;
      const videoId = video.id.videoId;
      const url=`https://www.youtube.com/embed/${videoId}`;

      const videoSearch = _.debounce(term => {
        this.videoSearch(term);
      }, 300);

      const details = {
        fontSize: "2rem",
        marginTop: "10px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "4px"
      }

      return (
        <div>
          <h3>Video about your beer: {this.props.beerName}</h3>
          <div class="your-centered-div">
            <iframe width="640" height="360" src={url}></iframe>
          </div>
          <div style={details}>
            <div>{video.snippet.title}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h5>It is still loading...</h5>
        </div>
      )
    }
  }
}

export default Youtube;
