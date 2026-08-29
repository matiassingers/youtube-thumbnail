/**
 * Returns the YouTube thumbnails for a video URL or ID.
 * @param url The YouTube video URL or ID.
 */
declare function youtubeThumbnail(url: string): youtubeThumbnail.Thumbnails;

declare namespace youtubeThumbnail {
  interface Thumbnail {
    url: string;
    width: number;
    height: number;
  }

  interface Thumbnails {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
  }
}

export = youtubeThumbnail;
