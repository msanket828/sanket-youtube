import React from "react";
import { AiFillHome, AiFillPlayCircle } from "react-icons/ai";
import { MdSubscriptions } from "react-icons/md";
import { BsFillLayersFill } from "react-icons/bs";
import { RiFolderHistoryFill } from "react-icons/ri";
import { BsCameraVideoFill } from "react-icons/bs";
import { MdWatchLater } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="p-4 shadow-lg fixed top-[72px] left-0 w-52 h-full">
      <ul className="sidebar-menu border-b-2 mb-4">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold bg-gray-200" : undefined
            }
            to=""
          >
            <AiFillHome />
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold bg-gray-500" : undefined
            }
            to="shorts"
          >
            <AiFillPlayCircle />
            <p>Shorts</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold bg-gray-500" : undefined
            }
            to="sub"
          >
            <MdSubscriptions />
            <p>Subscriptions</p>
          </NavLink>
        </li>
      </ul>
      <ul className="sidebar-menu">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold bg-gray-500" : undefined
            }
            to="library"
          >
            <BsFillLayersFill />
            <p>Library</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold bg-gray-500" : undefined
            }
            to="history"
          >
            <RiFolderHistoryFill />
            <p>History</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold bg-gray-500" : undefined
            }
            to="your-videos"
          >
            <BsCameraVideoFill />
            <p>Your videos</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold bg-gray-500" : undefined
            }
            to="watch-later"
          >
            <MdWatchLater />
            <p>Watch later</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold bg-gray-500" : undefined
            }
            to="like-videos"
          >
            <AiTwotoneLike />
            <p>Like videos</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
