// import {moment} from "moment";

var VideoListDetails = (props) => {
  console.log(props.video);
  return (
    <div className="video-list-entry details">
      <div className="channel-title">
        {'Channel Name: '}{props.video.snippet.channelTitle}
      </div>
      <div className="time-stamp">
        {'Created On: '}{moment(props.video.snippet.publishedAt).format('MMM Do YY')}
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListDetails.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListDetails;
