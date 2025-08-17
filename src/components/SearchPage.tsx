import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_SEARCH_API } from "../utils/constants";
import type {
  YouTubeVideoSearch,
  YouTubeVideoSearchListResponse,
} from "../types/youtube";
import VideoCard from "./VideoCard";

const SearchPage = () => {
  const [videos, setVideos] = useState<YouTubeVideoSearch[]>([]);
  const [query] = useSearchParams();
  useEffect(() => {
    getSearchResult();
  }, []);
  const getSearchResult = async () => {
    const data = await fetch(
      YOUTUBE_VIDEO_SEARCH_API(query.get("search_query") ?? "")
    );
    const json: YouTubeVideoSearchListResponse = await data.json();
    console.log(json);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap gap-4 justify-center p-2 bg-gray-50 min-h-screen">
      {videos
        .filter((video) => video.id.kind == "youtube#video")
        .map((video) => (
          <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
            <div className="transition-transform duration-200 hover:scale-105 shadow-lg rounded-xl bg-white">
              <VideoCard info={video} />
            </div>
          </Link>
        ))}
    </div>
  );
};

export default SearchPage;
