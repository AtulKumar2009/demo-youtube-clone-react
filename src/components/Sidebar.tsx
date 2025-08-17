import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store: RootState) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">You {">"}</h1>
      <ul>
        <li>History</li>
        <li>Playlists</li>
        <li>Liked videos</li>
        <li>Watch Later</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
