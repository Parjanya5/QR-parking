import React, { useState } from "react";
import "./Component.css";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaCheckCircle,
  FaEdit,
} from "react-icons/fa";
import { toast } from "react-toastify";

function Updatauser() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const info = state?.info;

  const [name, setUser] = useState(info.name);
  const [email, setemail] = useState(info.email);
  const [phone, setphone] = useState(info.phone);
  // const [password, setpassword] = useState("");
  // const [pass1, setpass1] = useState("");

  const updateuser = async () => {
    const id = localStorage.getItem("id");
    const urlis = `https://qr-parking-vzxn.onrender.com/user/put/${id}`;

    //   if (password !== pass1) {
    //   return toast.error("Passwords do not match!");
    // }
    try {
      const updation = await fetch(urlis, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ name, email, phone }),
      });
      const data = await updation.json();
      console.log(data);
      if (updation.ok) {
        toast.success(data.message);
        navigate("/personal");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="card mb-3 col-12 col-lg-9 col-sm-6col-md-12 col-xl-9   updateuser setwidth">
        <div className="row g-0 ">
          <div className="d-flex gap-2 align-items-center">
            <div className="col-md-4 hide-on-desktop">
              <img
                src="https://icon-library.com/images/edit-profile-icon/edit-profile-icon-11.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <b className="text-center fs-5 animated-heading"><span className="text-danger fw-bolder">Update</span>  user</b>
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex gap-2 align-items-center">
                  <label htmlFor="">
                    <FaUser />
                  </label>
                  <input
                    type="email"
                    value={name}
                    onChange={(e) => setUser(e.target.value)}
                    className="rounded bg-light text-dark px-2"
                    name=""
                    id=""
                  />
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <label htmlFor="">
                    <FaEnvelope />
                  </label>
                  <input
                    type="email"
                    className="rounded bg-light text-dark px-2"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    name=""
                    id=""
                  />
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <label htmlFor="">
                    <FaPhone />
                  </label>
                  <input
                    type="email"
                    className="rounded bg-light text-dark px-2"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                    name=""
                    id=""
                  />
                </div>
                {/* <div className='d-flex gap-2 align-items-center'>
            <label htmlFor=""><FaLock/></label>
            <input type="email" className='rounded bg-light text-dark px-2' placeholder='Enter your password' value={pass1} onChange={(e)=> setpass1(e.target.value)} name="" id="" />
        </div> 
        <div className='d-flex gap-2 align-items-center'>
            <label htmlFor=""><FaCheckCircle/></label>
            <input type="email" className='rounded bg-light text-dark px-2' name="" id=""  placeholder='Re-enter passowrd' value={password} onChange={(e)=> setpassword(e.target.value)}/>
        </div>  */}
                <div className="d-flex gap-2 align-items-center justify-content-start">
                  <button
                    type="button"
                    className="btn btn-grad px-4"
                    onClick={updateuser}
                  >
                    <FaEdit /> update user
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='d-flex gap-2 align-items-center'>
            <label htmlFor="">Email</label>
            <input type="email" className='rounded bg-light text-dark' name="" id="" />
        </div> */}
    </>
  );
}

export default Updatauser;
