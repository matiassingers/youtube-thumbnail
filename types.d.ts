export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
}

/**
 * Gibt die YouTube-Thumbnails für eine Video-URL oder ID zurück.
 * @param url Die YouTube-URL oder Video-ID
 */
declare function youtubeThumbnail(url: string): Thumbnails;

export default youtubeThumbnail;
