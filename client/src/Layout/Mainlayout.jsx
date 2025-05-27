import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import AuthNavbar from "../components/AuthNavbar";

function Mainlayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
export default Mainlayout;
