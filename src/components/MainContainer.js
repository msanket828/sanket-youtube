import React, { useState } from "react";
import VideoContainer from "./VideoContainer";
import Genres from "./Genres";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

const MainContainer = (props) => {
  const [activeGenres, setActiveGenres] = useState("All");
  const isSidebarHidden = useSelector(
    (store) => store.firstSlice.isSidebarHidden
  );
  const genresList = [
    "All",
    "Music",
    "Dance",
    "News",
    "Trending",
    "Tv",
    "Vlogs",
  ];
  const handleGenres = (title) => {
    setActiveGenres(title);
  };
  return (
    <div className={`${!isSidebarHidden ? "ml-52 px-10 py-5" : "px-10 py-5"}`}>
      {genresList.map((generes) => (
        <Genres
          key={uuidv4()}
          title={generes}
          handleGenres={handleGenres}
          activeGenres={activeGenres}
        />
      ))}
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
