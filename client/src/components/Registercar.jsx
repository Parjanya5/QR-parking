import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Component.css";
import { toast } from "react-toastify";

function Registercar() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setvehicle] = useState("");
  const [model, setmodel] = useState("");
  const [color, setcolor] = useState("");
  const [message, setmessage] = useState("");
  const [image, setimage] = useState("");
  const navigate = useNavigate();

const formdate = new FormData();
formdate.append("name", name);
formdate.append("phone", phone);
formdate.append("vehicle", vehicle);
formdate.append("model", model);
formdate.append("color",color)
formdate.append("image", image);
formdate.append("message",message)
 
  const registerdata = async (e) => {
    e.preventDefault();

    const apiurl = `https://qr-parking-vzxn.onrender.com/post`;
    try {
      const posting = await fetch(apiurl, {
        method: "POST",
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
        body: formdate,
      });
      const data = await posting.json();
      if (posting.ok) {
        toast.success(data.message || "Data Added Successfully");
        navigate("/home");
      } else {
        toast.error("register failed");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
 
  return (
    <>
      <div className="d-flex rounded card-mb-3  bg-secondary bg-opacity-25 p-5 mt-5 gap-5">
        <div className="row g-0 "> 
          <p className="text-center col-md-8 fs-4 fw-bolder pb-3 animated-heading">
            <span className="text-danger fw-bolder">Register</span>  your car
          </p>
          <form className="text-dark" onSubmit={registerdata}>
            <div className="d-flex gap-3 flex-wrap">
              <div className="d-flex text-start flex-column gap-2">
                <label htmlFor="" className="">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id=""
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  placeholder="Enter Your Name"
                  className="p-2 rounded bg-secondary bg-opacity-25 w-100"
                />
              </div>
              <div className="d-flex text-start flex-column gap-2">
                <label htmlFor="" className="">
                  Vehicle no
                </label>
                <input
                  type="text"
                  name="vehicle"
                  id=""
                  placeholder="Enter Your Number"
                  value={vehicle}
                  onChange={(e)=>setvehicle(e.target.value)}
                  className="text-uppercase p-2 rounded bg-secondary bg-opacity-25 w-100"
                />
              </div>
            </div>
            <div className="d-flex gap-3 mt-3 flex-wrap">
              <div className="d-flex text-start flex-column gap-2">
                <label htmlFor="" className="">
                  Vehicle Model
                </label>
                <input
                  type="text"
                  name="model"
                  id=""
                  placeholder="Enter Your Model"
                  value={model}
                  onChange={(e)=> setmodel(e.target.value)}
                  className="p-2 rounded bg-secondary bg-opacity-25 w-100"
                />
              </div>
              <div className="d-flex text-start flex-column gap-2">
                <label htmlFor="" className="">
                  Vehicle color
                </label>
                <input
                  type="text"
                  name="color"
                  id=""
                  placeholder="Enter Your Color"
                  value={color}
                  onChange={(e)=> setcolor(e.target.color)}
                  className="p-2 rounded bg-secondary bg-opacity-25 w-100"
                />
              </div>
            </div>
            <div className="d-flex text-start mt-3 flex-column  gap-2">
              <label htmlFor="" className="">
                Contact
              </label>
              <input
                type="tel"
                name="phone"
                id=""
                placeholder="Enter Your Phone"
                value={phone}
                onChange={(e)=> setPhone(e.target.phone)}
                className="p-2 rounded bg-secondary bg-opacity-25 w-100"
              />
            </div>
            <div className="d-flex text-start mt-3 flex-column gap-2">
              <label htmlFor="" className="">
                Image
              </label>
              <input
                type="file"
                name="image"
                id="" 
                accept="image/*"
                placeholder="choose image"
                onChange={(e)=> setimage(e.target.files[0])}
                className="p-2 rounded bg-secondary bg-opacity-25 w-100"
              />
            </div>
            <div className="d-flex text-start mt-3 flex-column gap-2">
              <label htmlFor="" className="">
                Your Message
              </label>
              <textarea
                className="p-2 rounded bg-secondary w-75 bg-opacity-25 w-100"
                name="message"
                id=""
                value={message}
                onChange={(e)=> setmessage(e.target.value)}
                placeholder="Please Enter Your Message for Scanner user person"
              ></textarea>
            </div>
            <div className="d-flex justify-content-start mt-4 gap-3 ">
              <button type="submit" className="btn btn-grad1 w-50">
                Submit
              </button>
              <button type="reset" className="btn btn-grad2 w-50">
                Reset
              </button>
            </div>
          </form>
        </div>
        <div className="d-flex col-md-4 align-items-center hide-on-desktop">
          <img
            src="https://static.vecteezy.com/system/resources/previews/021/179/570/original/fills-in-the-profile-data-form-businessman-fills-in-the-profile-data-form-free-png.png"
            className=""
            width={"200px"}
          />
        </div>
      </div>
    </>
  );
}

export default Registercar;
