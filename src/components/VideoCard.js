import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeNumberVisible } from "../utils/constants";

const VideoCard = (props) => {
  const isSidebarHidden = useSelector(
    (store) => store.firstSlice.isSidebarHidden
  );
  const { snippet, statistics } = props.video;
  return (
    <Link to={`watch?v=${props?.video?.id}`}>
      <div
        className={`${
          isSidebarHidden ? "max-w-[340px] p-1 mb-4" : "max-w-sm p-1 mb-4"
        }`}
      >
        <img
          src={snippet?.thumbnails?.high?.url}
          alt="thumbnail"
          className="rounded-2xl"
        />
        <div className="flex items-start mt-4">
          <img
            src="https://via.placeholder.com/50X50"
            alt="channelPic"
            className="w-10 h-10 object-contain rounded-full mr-2"
          />
          <div>
            <h2 className="text-base font-bold mb-1">
              {snippet?.localized?.title}
            </h2>
            <p className="text-sm font-semibold text-gray-600 mb-1">
              {snippet?.channelTitle}
            </p>
            <p className="text-xs font-semibold text-gray-600">
              {makeNumberVisible(statistics?.viewCount)} Views
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
