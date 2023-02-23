import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { hideSidebar } from "../utils/firstYtSlice";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const isSidebarHidden = useSelector(
    (store) => store.firstSlice.isSidebarHidden
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideSidebar());
  }, []);

  return (
    <div className={`${!isSidebarHidden ? "ml-52 px-10 py-5" : "px-10 py-5"}`}>
      <iframe
        className="w-[1200px] h-[650px] object-contain"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
