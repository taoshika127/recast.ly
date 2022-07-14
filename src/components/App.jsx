import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.videos = exampleVideoData;
    this.video = exampleVideoData[0];
    this.state = {videoList: this.videos, videoPlayer: this.video};

    //this.onClick = this.onClick.bind(this);
  }


  onClick (video) {
    console.log("passed video value", video);
    // console.log(this.video);

    this.setState({videoPlayer: video});
  }

  render () {
    return (

      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7"></div>
          <div><h5><em>videoPlayer</em> view goes here</h5>
            <VideoPlayer video={this.state.videoPlayer} state={this.state}/>
          </div>
        </div>
        <div className="col-md-5">
          <div><h5><em>videoList</em> view goes here</h5>
            <VideoList videos={this.state.videoList} state={this.state} onClickEvent={this.onClick.bind(this)}/>
          </div>
        </div>
      </div>);

  }
}


ReactDOM.render(<App />, document.getElementById('app'));
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
