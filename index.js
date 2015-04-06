'use strict';

var getYouTubeID = require('get-youtube-id');

module.exports = function(url){
  var id = getYouTubeID(url);

  if(!id && url.length === 11){
    id = url
  }

  return {
    'default': {
      url: 'http://img.youtube.com/vi/' + id + '/default.jpg',
      width: 120,
      height: 90
    },
    medium: {
      url: 'http://img.youtube.com/vi/' + id + '/mqdefault.jpg',
      width: 320,
      height: 180
    },
    high: {
      url: 'http://img.youtube.com/vi/' + id + '/hqdefault.jpg',
      width: 480,
      height: 360
    },
  }
};
