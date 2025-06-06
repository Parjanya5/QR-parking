import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdUpdate } from "react-icons/md";
import { toast } from "react-toastify";

function Edit() {
  const { state } = useLocation();
  const car = state?.car;
  const navigate = useNavigate();

  console.log(car);

  //  States
  const [newname, setName] = useState(car.name ? car.name : " ");
  const [newmodel, setmodel] = useState(car?.model || "");
  // const [newimage, setimage] = useState(car?.image || "");
  const [preview, setpreview] = useState("");
  const [newphone, setphone] = useState(car?.phone || "");
  const [newcolor, setcolor] = useState(car?.color || "");
  const [newmessage, setmessage] = useState(car?.message || "");

  // const handlefilechange = (e) => {
  //   const selected = e.target.files[0];
  //   // if (selected) {
  //   //   setimage(selected);
  //   //   const objecturl = URL.createObjectURL(selected);
  //   //   setpreview(objecturl);
  //   //   localStorage.setItem("image", objecturl);
  //   // }

  // };

  // useEffect(() => {
  //   const savedpreview = localStorage.getItem("image");
  //   //  if(savedpreview && !preview){
  //   setpreview(savedpreview);
  //   //  }
  //   console.log(preview);
  //   console.log(savedpreview);
  // }, []);
  // // console.log(user,'data')

  const datameta = {
    name: newname,
    model: newmodel,
    image: preview, // user
    phone: newphone,
    color: newcolor,
    message: newmessage,
  };

  //  const updatelist = {

  //  }

  const updatedata = async () => {
    const url = `https://qr-parking-vzxn.onrender.com/put/${car._id}`;
    try {
      const process = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(datameta),
      });
      const data = await process.json();
      console.log(data.message, "data update succesfully");
      toast.success("Data Updated Successfully");
      navigate("/home");
    } catch (error) {
      console.log(`facing some error on update data `, error.message);
      toast.error("Facing some error on update data ");
    }
  };

  return (
    <>
      <div className="container card-mb-3 d-flex flex-wrap update-bg gap-2 px-2 mt-5 rounded flex-wrap ">
        <div className="row g-0">
        <div className="col-md-7 d-flex gap-2 flex-column p-5">
          <b className="fs-4 d-flex align-items-center justify-content-center animated-heading pb-3">
            <MdUpdate className="mx-2" />
            <span className="text-danger fw-bolder">Update</span>  Your car detail{" "}
          </b>
          <div className="d-flex gap-3 flex-column ">
            <div className="form-group d-flex gap-3 flex-wrap">
              <div className="d-flex flex-column gap-1">
                <label htmlFor="" className="text-start fs-5 ">
                  Your Name
                </label>
                <input
                  type="text"
                  className="p-2 bg-light fw-bold border-bottom bg-secondary bg-opacity-25  rounded"
                  value={newname}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="d-flex flex-column gap-1">
                <label htmlFor="" className="text-start fs-5 ">
                  Vehicle Model
                </label>
                <input
                  type="text"
                  className="p-2 bg-light fw-bold border-bottom bg-secondary bg-opacity-25 rounded"
                  name="name"
                  value={newmodel}
                  onChange={(e) => setmodel(e.target.value)}
                  id="name"
                  placeholder="Enter your Car model"
                />
              </div>
            </div>
            <div className="d-flex flex-column gap-1">
              <label htmlFor="" className="text-start fs-5 ">
                Vehicle Image
              </label>
              <input
                type="file"
                className="p-2 bg-light fw-bold border-bottom bg-secondary bg-opacity-25 rounded"
                accept="image/*"
                name="name"
                id="name"
                onChange={(e)=> setpreview(e.target.files[0])}
                placeholder="Enter your Car image"
              />
            </div>
            <div className="d-flex gap-3 flex-wrap">
              <div className="d-flex flex-column gap-1">
                <label htmlFor="" className="text-start fs-5 ">
                  Your Phone
                </label>
                <input
                  type="tel"
                  className="p-2 bg-light fw-bold border-bottom bg-secondary bg-opacity-25 rounded"
                  newname="name"
                  id="name"
                  value={newphone}
                  onChange={(e) => setphone(e.target.value)}
                  placeholder="Enter your Phone"
                />
              </div>
              <div className="d-flex flex-column gap-1">
                <label htmlFor="" className="text-start fs-5 ">
                  Vehicle color
                </label>
                <input
                  type="text"
                  className="p-2 bg-light fw-bold border-bottom bg-secondary bg-opacity-25 rounded"
                  newname="name"
                  id="name"
                  value={newcolor}
                  onChange={(e) => setcolor(e.target.value)}
                  placeholder="Enter your Car color"
                />
              </div>
            </div>
            <div className="d-flex flex-column gap-1">
              <label htmlFor="" className="text-start fs-5 ">
                Owner message
              </label>
              <textarea
                name=""
                id=""
                placeholder="Your Message to scan person "
                className="p-2 bg-light bg-opacity-25 fw-bold"
                value={newmessage}
                onChange={(e) => setmessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={updatedata}
              className="rounded w-50 d-flex align-content-center justify-content-center"
            >
              {" "}
              <MdUpdate className="mx-2 fs-3" />
              Update
            </button>
          </div>
        </div>
        <div className="col-md-5 d-flex align-items-center hide-on-desktop">
          <img
            src="https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-update-icon-concept-in-flat-style-on-blue-background-png-image_4825223.png"
            alt="Soory isnt available"
          />
        </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
