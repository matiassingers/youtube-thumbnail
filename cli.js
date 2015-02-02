#!/usr/bin/env node
'use strict';

var pkg = require('./package.json');
var open = require('open');
var youtubeThumbnail = require('./');
var argv = process.argv.slice(2);

function help() {
  console.log([
    '',
      '  ' + pkg.description,
    '',
    '  Example',
    '    youtube-thumbnail https://www.youtube.com/watch?v=9bZkp7q19f0',
    '       =>  http://img.youtube.com/vi/9bZkp7q19f0/default.jpg',
    '',
    '    youtube-thumbnail https://www.youtube.com/watch?v=9bZkp7q19f0 --high --open',
    '       =>  http://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg',
    '',
    '  Options',
    '    --open',
    '          opens the thumbnail image in your browser',
    '',
    '    --medium',
    '          returns the medium resolution thumbnail',
    '',
    '    --high',
    '          returns the high resolution thumbnail'
  ].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
  help();
  return;
}

if (argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

var openImage = (argv.indexOf('--open') !== -1);

var thumbnail = youtubeThumbnail(argv[0]);
var url = thumbnail.default.url;

if (argv.indexOf('--medium') !== -1) {
  url = thumbnail.medium.url;
}

if (argv.indexOf('--high') !== -1) {
  url = thumbnail.high.url;
}

console.log(thumbnail.default.url);
if (openImage) {
  return open(url);
}
