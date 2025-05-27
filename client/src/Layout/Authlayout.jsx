import React from "react";
import AuthNavbar from "../components/AuthNavbar";
import { Outlet } from "react-router-dom";

function Authlayout() {
  return (
    <>
      <AuthNavbar />
      <Outlet />
    </>
  );
}

export default Authlayout;
