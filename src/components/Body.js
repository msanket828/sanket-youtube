import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  const isSidebarHidden = useSelector(
    (store) => store.firstSlice.isSidebarHidden
  );
  return (
    <div className="flex relative z-[99]">
      {!isSidebarHidden && <Sidebar />}
      {/* <MainContainer isSidebarHidden={isSidebarHidden} /> */}
      <Outlet />
    </div>
  );
};

export default Body;
