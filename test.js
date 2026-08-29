'use strict';

var assert = require('assert');
var youtubeThumbnail = require('./');

function test(name, callback){
  callback();
  console.log('ok - ' + name);
}

test('returns HTTPS thumbnails for a YouTube URL', function(){
  assert.deepEqual(youtubeThumbnail('https://www.youtube.com/watch?v=9bZkp7q19f0'), {
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
});

test('accepts a YouTube video ID', function(){
  var thumbnail = youtubeThumbnail('9bZkp7q19f0');

  assert.equal(thumbnail.default.url, 'https://img.youtube.com/vi/9bZkp7q19f0/default.jpg');
});

test('rejects missing and malformed inputs', function(){
  assert.throws(function(){
    youtubeThumbnail();
  }, /must be a string/);
  assert.throws(function(){
    youtubeThumbnail('not-a-youtube-url');
  }, /Invalid YouTube URL/);
});

test('rejects shell metacharacters in parsed video IDs', function(){
  assert.throws(function(){
    youtubeThumbnail('https://youtu.be/$(id)aaaaaa');
  }, /Invalid YouTube URL/);
});
