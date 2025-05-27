import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Component.css";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar fixed-top bg-dark bg-opacity-50 ">
        <div className="container-fluid d-flex pt-1">
          <div className="d-flex align-items-center px-2 ">
            <img
              src="https://vectorified.com/images/scan-qr-code-icon-17.png"
              className="rounded"
              alt=" src error"
              style={{ height: "50px" }}
            />
            <span className="navbar-brand fs-4 "><span className="text-danger fw-bolder">Scan</span> your car</span>
          </div>
          <div className="d-flex gap-4 hide-on-desktop px-3">
            <Link
              to={"/home"}
              className="text-decoration-none text-dark fs-5 border-class border1"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="text-decoration-none text-dark fs-5 border-class "
            >
              About
            </Link>
            <span
              className="texthover text-decoration-none text-dark fs-5 border-class texthover "
              onClick={logout}
            >
              <FaSignOutAlt className="px-1" /> Log-out
            </span>
          </div>
          <button
            className="navbar-toggler border-0 show-on-desktop"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end bg-secondary bg-opacity-50"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header ">
              <div className="d-flex align-items-center">
                <img
                  src="https://vectorified.com/images/scan-qr-code-icon-17.png"
                  className="rounded"
                  alt=" src error"
                  style={{ height: "50px" }}
                />
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <span className="text-danger fw-bolder">Scan</span>  your car
                </h5>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-3">
                <li className="nav-item">
                  <a
                    className="nav-link active bg-light rounded bg-opacity-50"
                    aria-current="page"
                    href="/Home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active bg-light rounded bg-opacity-50"
                    aria-current="page"
                    to={"/about"}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link  bg-light rounded bg-opacity-50 texthover"
                    onClick={logout}
                  >
                    <FaSignOutAlt /> Log-out
                  </Link>
                </li>
                {/* <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle bg-light rounded  bg-opacity-50" to={'/signin'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Login
            </Link>
            <ul className="dropdown-menu bg-light bg-opacity-50 gap-5">
              <li><Link className="dropdown-item bg-light opacity-50" to={'/signup'}><span className='d-flex gap-2 align-items-center justify-content-center'><FaUser/>Sign-up User</span></Link></li>
              <li><Link className="dropdown-item bg-light opcatiy-50" to={'/'}><span className='d-flex gap-2 align-items-center justify-content-center'><FaUser/>Sign-in User</span></Link></li>
            </ul>
          </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
