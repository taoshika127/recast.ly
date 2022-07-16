var VideoPlayer = (props) => {
  var autoPlayString = props.state.toggled ? '?autoplay=1&mute=1' : '';
  return (<div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + props.video.id.videoId + autoPlayString} allowFullScreen autoPlay='true'>
      </iframe>
    </div>
    <div className="video-player-details">
      <button onClick={props.onToggle}>Auto-Toggle!</button>
      <h3>{props.video.snippet.title}</h3>
      <div>{props.video.snippet.description}</div>
    </div>
  </div>);
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
