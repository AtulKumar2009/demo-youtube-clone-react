import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/appSlice";
import { useSearchParams } from "react-router";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const [searchParams] = useSearchParams();
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row px-5 gap-6 md:gap-8 mt-6">
        <div className="md:flex-[8] flex-1">
          <iframe
            className="rounded-lg shadow-lg w-full h-full aspect-video"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="md:flex-[2] w-full mt-6 md:mt-0">
          <LiveChat />
        </div>
      </div>
      <div className="px-5 mt-8">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
