'use strict';

var test = require('tape');
var youtubeThumbnail = require('./');

test('returns HTTPS thumbnails for a YouTube URL', function(t) {
  var thumbnail = youtubeThumbnail('https://www.youtube.com/watch?v=9bZkp7q19f0');

  t.deepEqual(thumbnail, {
    'default': {
      url: 'https://img.youtube.com/vi/9bZkp7q19f0/default.jpg',
      width: 120,
      height: 90
    },
    medium: {
      url: 'https://img.youtube.com/vi/9bZkp7q19f0/mqdefault.jpg',
      width: 320,
      height: 180
    },
    high: {
      url: 'https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg',
      width: 480,
      height: 360
    }
  });
  t.end();
});

test('accepts a YouTube video ID', function(t) {
  var thumbnail = youtubeThumbnail('9bZkp7q19f0');

  t.equal(thumbnail.default.url, 'https://img.youtube.com/vi/9bZkp7q19f0/default.jpg');
  t.end();
});
