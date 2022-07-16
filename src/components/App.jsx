import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from '../../src/components/VideoList.js';
import VideoPlayer from '../../src/components/VideoPlayer.js';
import searchYoutube from '../lib/searchYoutube.js';
import Search from './search.js';
// import { BrowserRouter } from "react-router-dom";

class App extends React.Component {

  constructor (props) {
    super(props);
    this.videos = [];
    this.video = {
      id: {
        videoId: ''
      },
      snippet: {
        title: '',
        description: '',
        publishedAt: '',
        channelTitle: ''
      }
    };
    this.state = {
      videoList: this.videos,
      videoPlayer: this.video,
      value: '',
      toggled: false,
    };
    this.search = searchYoutube;
  }

  componentDidMount(q = 'cat') {
    this.search(q, (data) => {
      var debounceFn = _.debounce(function() {
        this.setState({
          videoList: data,
          videoPlayer: data[0]
        });
      }, 500, true).bind(this);
      debounceFn();
    });
  }

  handleChange(event) {
    this.setState({value: document.getElementById('input')?.value});
    console.log(this.state.value);
    // this.search(this.state.value);
    this.componentDidMount(document.getElementById('input')?.value);
  }

  onClick (video) {
    console.log('passed video value', video);
    // console.log(this.video);

    this.setState({videoPlayer: video});
  }

  onToggle () {
    console.log('clicked')
    this.setState({toggled: !this.state.toggled});
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5>
              <Search state={this.state} handleChange={this.handleChange.bind(this)}/>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7"></div>
          <div><h5><em>videoPlayer</em> view goes here</h5>
            <VideoPlayer video={this.state.videoPlayer} state={this.state} onToggle={this.onToggle.bind(this)}/>
          </div>
        </div>
        <div className="col-md-5">
          <div><h5><em>videoList</em> view goes here</h5>
            <VideoList videos={this.state.videoList} state={this.state} onClickEvent={this.onClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

//ReactDOM.render(<App />, document.getElementById('app'));
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
