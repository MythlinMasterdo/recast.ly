var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      videoEmbeddable: true,
      part: 'snippet',
      type: 'video'
    },
    success: function(data) {

      callback(data.items);
    },
    error: function(error) {
      console.error('ajax request didnt work: ', error);
    }
  });
};

window.searchYouTube = searchYouTube;
