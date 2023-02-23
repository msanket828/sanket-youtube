import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/firstYtSlice";
import { RiCloseFill } from "react-icons/ri";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { BiSearch } from "react-icons/bi";
import { cacheResults } from "../utils/searchSlice";

function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const handleSidebarMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const getSearchSuggestions = async () => {
    const data = await fetch(`${YOUTUBE_SEARCH_API + searchQuery}`);
    const searchResult = await data.json();
    setSuggestions(searchResult[1]);
    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: searchResult[1],
      })
    );
  };

  return (
    <div className="px-10 py-4 bg-white flex items-center shadow-md sticky top-0 z-[100]">
      <div className="flex w-25 items-center mr-20">
        <GiHamburgerMenu
          className="w-8 h-8 mr-5 cursor-pointer"
          onClick={handleSidebarMenu}
        />
        <img
          src="./assets/images/youtube.png"
          alt=""
          className="w-20 h-auto object-contain"
        />
      </div>
      <div className="relative">
        <div className="flex items-center">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search something"
            className="w-96 pl-4 p-1 text-xl rounded-l-full border-2"
            onChange={handleSearch}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="px-2 p-1 text-xl border rounded-r-full border-2">
            Search
          </button>
          {showSuggestions && (
            <div className="absolute w-96 shadow-sm bg-white top-full p-2">
              <ul>
                {suggestions &&
                  suggestions.map((suggestion, index) => {
                    return (
                      <li className="flex items-center p-1" key={index}>
                        <BiSearch />
                        <p className="ml-2 text-base font-semibold text-black">
                          {suggestion}
                        </p>
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="ml-auto">
        <BiUserCircle className="w-10 h-10 object-contain" />
      </div>
    </div>
  );
}

export default Head;
