'use strict';

var getYouTubeID = require('get-youtube-id');

module.exports = function(url){
  if(typeof url !== 'string'){
    throw new TypeError('YouTube URL or video ID must be a string');
  }

  var id = getYouTubeID(url);

  if(!id && /^[A-Za-z0-9_-]{11}$/.test(url)){
    id = url;
  }

  if(!/^[A-Za-z0-9_-]{11}$/.test(id || '')){
    throw new Error('Invalid YouTube URL or video ID');
  }

  return {
    'default': {
      url: 'https://img.youtube.com/vi/' + id + '/default.jpg',
      width: 120,
      height: 90
    },
    medium: {
      url: 'https://img.youtube.com/vi/' + id + '/mqdefault.jpg',
      width: 320,
      height: 180
    },
    high: {
      url: 'https://img.youtube.com/vi/' + id + '/hqdefault.jpg',
      width: 480,
      height: 360
    }
  };
};
