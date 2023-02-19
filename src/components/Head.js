import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/firstYtSlice";
import { RiCloseFill } from "react-icons/ri";

function Head() {
  const dispatch = useDispatch();
  const handleSidebarMenu = () => {
    dispatch(toggleMenu());
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
      <div className="flex items-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search something"
          className="w-96 pl-4 p-1 text-xl rounded-l-full border-2"
        />
        <button className="px-2 p-1 text-xl border rounded-r-full border-2">
          Search
        </button>
      </div>
      <div className="ml-auto">
        <BiUserCircle className="w-10 h-10 object-contain" />
      </div>
    </div>
  );
}

export default Head;
