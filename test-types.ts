import youtubeThumbnail = require('./');

const thumbnails: youtubeThumbnail.Thumbnails = youtubeThumbnail('9bZkp7q19f0');
const thumbnail: youtubeThumbnail.Thumbnail = thumbnails.default;

thumbnail.url.toUpperCase();
thumbnail.width.toFixed();
thumbnail.height.toFixed();
