import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_CATEGORIES_API } from "../utils/constants";
import { updateVideos } from "../utils/firstYtSlice";
import Genres from "./Genres";
import VideoContainer from "./VideoContainer";

const MainContainer = (props) => {
  const [activeGenres, setActiveGenres] = useState("All");
  const [genresList, setGenresList] = useState([]);
  const isSidebarHidden = useSelector(
    (store) => store.firstSlice.isSidebarHidden
  );
  const dispatch = useDispatch();
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const fetchData = await fetch(YOUTUBE_CATEGORIES_API);
    const data = await fetchData.json();
    setGenresList(data?.items);
  };

  const handleGenres = (title, id) => {
    setActiveGenres(title);
    dispatch(updateVideos(id));
  };
  return (
    <div className={`${!isSidebarHidden ? "ml-52 px-10 py-5" : "px-10 py-5"}`}>
      <div className="generes-container w-full">
        {genresList.map((generes) => (
          <Genres
            key={generes?.id}
            title={generes?.snippet?.title}
            id={generes?.id}
            handleGenres={handleGenres}
            activeGenres={activeGenres}
          />
        ))}
      </div>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
