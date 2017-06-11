'use strict';

var test = require('tape');
var imageDimensions = require('request-image-size');
var youtubeThumbnail = require('./');

var sizes = [
  'default',
  'medium',
  'high',
  'maxres'
];

test('match example cases', function(t) {
  t.plan(sizes.length * 2);

  var thumbnail = youtubeThumbnail('https://www.youtube.com/watch?v=9bZkp7q19f0');

  sizes.forEach(function(size){
    imageDimensions(thumbnail[size].url, function(err, dimensions) {
      if (size === 'maxres') {
        t.pass('Maximum resolution can be a variable width');
        t.pass('Maximum resolution can be a variable height');
      } else {
        t.equal(thumbnail[size].height, dimensions.height, 'Height for size: ' + size);
        t.equal(thumbnail[size].width, dimensions.width, 'Width for size: ' + size);
      }
    });
  });
});
