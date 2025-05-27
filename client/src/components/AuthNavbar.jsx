import React from "react";

function AuthNavbar() {
  return (
    <>
      <nav className="navbar   fixed-top bg-dark bg-opacity-50 mb-2">
        <div className="container-fluid mx-3 ">
          <div className="d-flex align-items-center pt-2">
            <img
              src="https://vectorified.com/images/scan-qr-code-icon-17.png"
              className="rounded"
              alt=" src error"
              style={{ height: "50px" }}
            />
            <span className="navbar-brand fs-4"><span className="text-danger fw-bolder">Scan</span> your car</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default AuthNavbar;
