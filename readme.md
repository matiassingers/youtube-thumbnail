# youtube-thumbnail [![Build Status](http://img.shields.io/travis/matiassingers/youtube-thumbnail.svg?style=flat-square)](https://travis-ci.org/matiassingers/youtube-thumbnail) [![Dependency Status](http://img.shields.io/gemnasium/matiassingers/youtube-thumbnail.svg?style=flat-square)](https://gemnasium.com/matiassingers/youtube-thumbnail)
> get thumbnail images for youtube videos

## Install

```sh
$ npm install --save youtube-thumbnail
```


## Usage

```js
var youtubeThumbnail = require('youtube-thumbnail');

var thumbnail = youtubeThumbnail('https://www.youtube.com/watch?v=9bZkp7q19f0');

console.log(thumbnail);
// => { default: { url: 'http://img.youtube.com/vi/9bZkp7q19f0/default.jpg', ...
```


## CLI

```sh
$ npm install --global youtube-thumbnail
```

```sh
$ youtube-thumbnail --help

  Example
    youtube-thumbnail https://www.youtube.com/watch?v=9bZkp7q19f0
       =>  http://img.youtube.com/vi/9bZkp7q19f0/default.jpg

    youtube-thumbnail https://www.youtube.com/watch?v=9bZkp7q19f0 --high --open
       =>  http://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg

  Options
    --open
          opens the thumbnail image in your browser

    --medium
          returns the medium resolution thumbnail

    --high
          returns the high resolution thumbnail
```


## License

MIT © [Matias Singers](http://mts.io)
