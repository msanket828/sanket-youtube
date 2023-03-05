import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { MY_API_KEY, YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import VideoCardShimmer from "./VideoCardShimmer";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  const [catVideoList, setCatVideoList] = useState([]);
  const id = useSelector((store) => store.firstSlice.selectedGenres);

  useEffect(() => {
    getYoutubeCategoriesVideos();
  }, [id]);

  const getYoutubeCategoriesVideos = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=${id}&maxResults=50&regionCode=US&key=${MY_API_KEY}`
    );
    const data = await response.json();
    setCatVideoList(data?.items);
  };

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  const getYoutubeVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API);
    const data = await response.json();
    setVideoList(data?.items);
  };

  if (catVideoList) {
    return (
      <div className="py-5">
        <div className="flex flex-wrap justify-between">
          {catVideoList.length > 0
            ? catVideoList.map((video) => (
                <VideoCard
                  key={video.id.videoId}
                  video={video}
                  id={video.id.videoId}
                />
              ))
            : Array(50)
                .fill(null)
                .map((i, index) => <VideoCardShimmer key={uuidv4()} />)}
        </div>
      </div>
    );
  }

  if (videoList) {
    return (
      <div className="py-5">
        <div className="flex flex-wrap justify-between">
          {videoList.length > 0
            ? videoList.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))
            : Array(50)
                .fill(null)
                .map((i, index) => <VideoCardShimmer key={uuidv4()} />)}
        </div>
      </div>
    );
  }
};

export default VideoContainer;
