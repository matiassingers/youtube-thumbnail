#!/usr/bin/env node
'use strict';

var pkg = require('./package.json');
var spawn = require('child_process').spawn;
var youtubeThumbnail = require('./');
var argv = process.argv.slice(2);

function help() {
  console.log([
    '',
      '  ' + pkg.description,
    '',
    '  Example',
    '    youtube-thumbnail https://www.youtube.com/watch?v=9bZkp7q19f0',
    '       =>  https://img.youtube.com/vi/9bZkp7q19f0/default.jpg',
    '',
    '    youtube-thumbnail https://www.youtube.com/watch?v=9bZkp7q19f0 --high --open',
    '       =>  https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg',
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

function openUrl(url) {
  var command;
  var args;

  if(process.platform === 'darwin'){
    command = 'open';
    args = [url];
  } else if(process.platform === 'win32'){
    command = 'cmd.exe';
    args = ['/c', 'start', '', url];
  } else {
    command = 'xdg-open';
    args = [url];
  }

  var child = spawn(command, args, {
    detached: true,
    stdio: 'ignore'
  });

  child.on('error', function(error){
    console.error(error.message);
    process.exit(1);
  });
  child.unref();
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

var thumbnail;

try {
  thumbnail = youtubeThumbnail(argv[0]);
} catch(error){
  console.error(error.message);
  process.exit(1);
}

var url = thumbnail.default.url;

if (argv.indexOf('--medium') !== -1) {
  url = thumbnail.medium.url;
}

if (argv.indexOf('--high') !== -1) {
  url = thumbnail.high.url;
}

console.log(url);
if (openImage) {
  openUrl(url);
}
