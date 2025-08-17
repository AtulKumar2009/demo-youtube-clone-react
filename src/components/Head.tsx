import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SUGGEST_API_LOCAL } from "../utils/constants";
import type { RootState } from "../store/store";
import { cacheResults } from "../store/searchSlice";

type SuggestionSubtype = number[];
type SuggestionsJson = [
  string, // query
  string[], // suggestions
  unknown[], // unused/empty
  {
    "google:suggestsubtypes": SuggestionSubtype[];
  }
];

const Head = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Array<string>>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const searchCache = useSelector((store: RootState) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery] ?? []);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGEST_API_LOCAL(searchQuery));
    const json: SuggestionsJson = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ query: searchQuery, suggestions: json[1] }));
  };
  // Handler for suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    navigate(`/results?search_query=${encodeURIComponent(suggestion)}`);
  };

  // Handler for form submit
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/results?search_query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          src="/hamburgerIcon.png"
          alt="menu"
          onClick={toggleMenuHandler}
        />
        <Link to="/">
          <img className="h-8 mx-2" src="/youtubeLogo.png" alt="youtube-logo" />
        </Link>
      </div>
      <div className="col-span-10 text-center">
        <div className="flex justify-center">
          <div className="relative w-1/2">
            <form className="flex" onSubmit={handleFormSubmit}>
              <input
                name="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
                className="w-full border border-gray-400 p-2 rounded-l-full"
                type="text"
                autoComplete="off"
              />
              <button className="border border-grey-400 px-5 py-2 rounded-r-full bg-gray-100">
                🔍︎
              </button>
            </form>

            {showSuggestions && (
              <div className="absolute text-left left-0 right-0 bg-white py-2 px-5 shadow-lg rounded-lg w-full">
                <ul>
                  {suggestions.map((s: string) => (
                    <li
                      key={s}
                      className="py-1 px-2 hover:bg-gray-100 cursor-pointer"
                      onMouseDown={() => handleSuggestionClick(s)}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <img className="h-8" src="/userIcon.png" alt="user-logo" />
      </div>
    </div>
  );
};

export default Head;
