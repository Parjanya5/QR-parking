import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { Edit, Trash2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMediaQuery } from 'react-responsive';
function Personal() {
  const [info, setinfo] = useState();
  const { state } = useLocation();
  const carinfo = state?.carinfo;
  console.log("i am personal", carinfo);
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  useEffect(() => {
    const posting = `https://qr-parking-vzxn.onrender.com/user/info/${id}`;
    const postdata = async () => {
      try {
        const posted = await fetch(posting, {
          method: "Get",
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        });
        const data = await posted.json();
        console.log(data);
        setinfo(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    postdata();
  }, []);

  const deleteuser = async () => {
    const dataurl = `https://qr-parking-vzxn.onrender.com/user/delete/${id}`;
    try {
      const deleteuser = await fetch(dataurl, {
        method: "DELETE",
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      });

      const confirmed = await deleteuser.json();
      if (deleteuser.ok) {
        toast.success(confirmed ? confirmed.message : "User deleted");
        localStorage.removeItem("token");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const Personal = ({ info }) => {
    if (!info) {
      return <p>Loading user info...</p>;
    }
  };
  const isWide = useMediaQuery({ minWidth: 768 }); // adjust as needed
  //  const [name,email,phone] = info.user
  return (
    <>
      {!info ? (
        <Spinner className="bg-warning" />
      ) : (
        <div className="card mb-3 ">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={
                  info.image
                    ? info.image
                    : "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-File.png"
                }
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body d-flex flex-column ">
                <tbody>
                  <tr className="d-flex gap-3 ">
                    <th>
                      <h5>Name : </h5>
                    </th>
                    <td>
                      <h5 className="card-title">
                        {info ? `${info.name}` : "sorry "}
                      </h5>
                    </td>
                  </tr>
                  <tr className="d-flex gap-3">
                    <th>
                      <b>Email: </b>
                    </th>
                    <td>
                      {" "}
                      <b className="card-text">
                        {info ? `${info.email}` : "Sorry"}
                      </b>
                    </td>
                  </tr>
                  <tr className="d-flex gap-3">
                    <th>
                      <b>Phone : </b>
                    </th>
                    <td>
                      {" "}
                      <b className="card-text">
                        {info ? `${info.phone}` : "Sorry"}
                      </b>
                    </td>
                  </tr>
                  <tr className="d-flex gap-3">
                    <th>
                      <b>Total Vehicle : </b>
                    </th>
                    <td>
                      {" "}
                      <b className="card-text">
                        {carinfo ? `${carinfo.length}` : "Sorry"}
                      </b>
                    </td>
                  </tr>
                  <tr className="d-flex gap-3 align-items-center">
                    <th>
                      <b>Your Vehicle's : </b>
                    </th>
                    <td>
                      <div class="dropdown">
                        <button
                          class="btn btn-light dropdown-toggle px-4  "
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></button>
                        <ul class="dropdown-menu">
                          {!carinfo ? (
                            <p className="px-2">Sorry no Vehicle found</p>
                          ) : (
                            carinfo.map((item, index) => (
                              <li key={index} className={`${isWide? "dropdown-item" :" "} bg-dark text-light p-2`}>
                                S.no : {++index} , Model : {item.model} , Number
                                : {item.vehicle}
                              </li>
                            ))
                          )}
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <div className="mt-4 d-flex justify-content-end gap-3">
                    <Edit
                      className="w-5 h-5 text-blue-500 cursor-pointer"
                      onClick={() =>
                        navigate("/updateUser", { state: { info } })
                      }
                    />
                    <Trash2
                      className="w-5 h-5 text-red-500 cursor-pointer ml-2"
                      onClick={deleteuser}
                    />
                  </div>
                </tbody>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Personal;
