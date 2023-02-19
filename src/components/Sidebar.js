import React from "react";
import { AiFillHome, AiFillPlayCircle } from "react-icons/ai";
import { MdSubscriptions } from "react-icons/md";
import { BsFillLayersFill } from "react-icons/bs";
import { RiFolderHistoryFill } from "react-icons/ri";
import { BsCameraVideoFill } from "react-icons/bs";
import { MdWatchLater } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="p-4 shadow-lg fixed top-[72px] left-0 w-52 h-full">
      <ul className="sidebar-menu border-b-2 mb-4">
        <li>
          <AiFillHome />
          <p>Home</p>
        </li>
        <li>
          <AiFillPlayCircle />
          <p>Shorts</p>
        </li>
        <li>
          <MdSubscriptions />
          <p>Subscriptions</p>
        </li>
      </ul>
      <ul className="sidebar-menu">
        <li>
          <BsFillLayersFill />
          <p>Library</p>
        </li>
        <li>
          <RiFolderHistoryFill />
          <p>History</p>
        </li>
        <li>
          <BsCameraVideoFill />
          <p>Your videos</p>
        </li>
        <li>
          <MdWatchLater />
          <p>Watch later</p>
        </li>
        <li>
          <AiTwotoneLike />
          <p>Like videos</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
