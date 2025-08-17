import type { YouTubeVideoBase } from "../types/youtube";

const VideoCard = ({ info }: { info: YouTubeVideoBase }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="">{channelTitle}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
