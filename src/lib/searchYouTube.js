import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  console.log(query);
  // TODO
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {q: query},
    contentType: 'application/json',
    success: callback,
    error: function(error) {
      console.error('chatterbox: Failed to fetch messages', error);
    }
  });
  // var data = {'q': query};
  // var url = new URL('https://app-hrsei-api.herokuapp.com/api/recastly/videos');
  // for (let k in data) { url.searchParams.append(data[k]); }
  // fetch(url, {
  //   method: 'GET',
  //   headers: {'Content-type': 'application/json;charset=UTF-8"'}
  // })//api for the get request
  //   .then(response => response.json())
  //   .then(data => console.log(data));
};

export default searchYouTube;
