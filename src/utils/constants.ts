const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_TOKEN

export const YOUTUBE_VIDEO_API = 
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + 
    YOUTUBE_API_KEY

export const YOUTUBE_VIDEO_SEARCH_API = (query: string)  => 
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + 
    query + "&key=" + YOUTUBE_API_KEY

export const YOUTUBE_SUGGEST_API =
    (query:string) => 
        "http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=" + 
    query
export const YOUTUBE_SUGGEST_API_LOCAL =
    (query:string) => 
        "http://localhost:5000/api/suggest?q=" + 
    query
export const YOUTUBE_SUGGEST_API_2 = (query:string) => 
"https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+ query + "&key=" + YOUTUBE_API_KEY


export const OFFSET_LIVE_CHAT = 50;