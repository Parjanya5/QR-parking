import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdEmail, MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Component.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleAuth from "./GoogleAuth";

function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const loginuser = async (e) => {
    e.preventDefault();

    if (!email && !password) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      const fetching = await fetch(
        `https://qr-parking-vzxn.onrender.com/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const response = await fetching.json();
      if (fetching.ok) {
        console.log(response);
        navigate("/home");
        toast.success(`Welcome, ${response.name}`);
        localStorage.setItem("token", response.authToken);
        localStorage.setItem("id", response.its);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error, error.message, "error on login request");
    }
  };
  return (
    <>
      <>
        <div className="container-fluid bg-secondary bg-opacity-25 d-flex justify-content-center px-3 rounded flex-wrap">
          <div className=" py-5 px-5 rounded ">
            <p className="text-center fs-4 fw-bolder pb-3 animated-heading">
              <span className="text-danger fw-bolder">Sign</span>-in user
            </p>
            <form onSubmit={loginuser} className="d-flex gap-2 flex-column">
              <div className="d-flex flex-column gap-1">
                <label
                  htmlFor=""
                  className="text-start fs-5 fw-bold opacity-75"
                >
                  Enter your E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="px-2 py-2 bg-light rounded border-0 bg-opacity-25 "
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="d-flex flex-column gap-1">
                <label
                  htmlFor=""
                  className="text-start fs-5 fw-bold opacity-75"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  className="px-2 py-2 bg-light rounded border-0 bg-opacity-25 "
                  placeholder="Enter Your password"
                />
              </div>
              <div className="mt-3 d-flex justify-content-between gap-2 align-items-center  ">
                <button
                  type="submit"
                  className="btn btn-color btn-success rounded-pill w-50"
                >
                  Log in{" "}
                </button>
                <Link to={"/signup"} className=" text-danger">
                  Sign up user
                </Link>
              </div>
            </form>
            <p className=" fw-semibold mt-3">-OR-</p>
            <div>
              <GoogleAuth/>
            </div>
          </div>
          <div className="hide-on-desktop">
            <img
              src="https://hridoyhaque01.github.io/TechEdu/assets/img/sign_in.png"
              className=""
              alt="!Sorry src not found"
            />
          </div>
        </div>
      </>
    </>
  );
}

export default Login;
