export interface CommentType {
  name: string;
  text: string;
  key: string;
  replies: CommentType[];
}
export interface YouTubeThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface YouTubeThumbnails {
  default: YouTubeThumbnail;
  medium: YouTubeThumbnail;
  high: YouTubeThumbnail;
  standard?: YouTubeThumbnail;
  maxres?: YouTubeThumbnail;
}

export interface YouTubeSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YouTubeThumbnails;
  channelTitle: string;
  tags?: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized?: {
    title: string;
    description: string;
  };
  defaultAudioLanguage?: string;
}

export interface YouTubeStatistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}


export interface YouTubeVideoBase {
  kind: string;
  etag: string;
  snippet: YouTubeSnippet;
}

export interface YouTubeVideo extends YouTubeVideoBase {
  id: string;
  statistics: YouTubeStatistics;
}

export interface YouTubeVideoSearch {
  kind: string;
  etag: string;
  id: YouTubeVideoSearchId;
  snippet: YouTubeSnippet;
}

export interface YouTubeVideoSearchId {
  kind: string,
  videoId: string
}



export interface YouTubeVideoListResponse {
  kind: string;
  etag: string;
  items: YouTubeVideo[];
  nextPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

export interface YouTubeVideoSearchListResponse {
  kind: string;
  etag: string;
  items: YouTubeVideoSearch[];
  nextPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}