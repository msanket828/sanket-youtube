import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import VideoCardShimmer from "./VideoCardShimmer";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    getYoutubeVideos();
  }, []);

  const getYoutubeVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API);
    const data = await response.json();
    setVideoList(data.items);
  };
  return (
    <div className="py-5">
      <div className="flex flex-wrap justify-between">
        {videoList.length > 0
          ? videoList.map((video) => <VideoCard key={video.id} video={video} />)
          : Array(50)
              .fill(null)
              .map((i, index) => <VideoCardShimmer key={index} />)}
      </div>
    </div>
  );
};

export default VideoContainer;
