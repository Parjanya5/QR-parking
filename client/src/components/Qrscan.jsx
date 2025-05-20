import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
// import axios from 'axios';

function Qrscan() {
  const [loader, setloader] = useState("false");

  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState(null);

  useEffect(() => {
    const finddata = `https://qr-parking-vzxn.onrender.com/find/${id}`;

    const finduser = async () => {
      try {
        const meta = await fetch(finddata);
        const datastore = await meta.json();
        setData(datastore);
        console.log(datastore);
      } catch (error) {
        console.log(error, " i am  facing error on find data");
        setloader(true);
      }
    };
    finduser();
  }, [id]);

  if (!data)
    return (
      <p>
        <Spinner loader={loader} />
      </p>
    );
  return (
    < >
      
      <div className="">
        <h1>Vehicle Details</h1>
        <div className="card" style={{width: "18rem"}}>
            <div className="d-flex justify-content-center">
          <img src={data.image} className="card-img-top rounded  " alt="..."  style={{width:'100px'}} />
            </div>
          <div className="card-body">
            <h5 className="card-title">Owner {data.name}</h5>
            <p className="card-text">
                Vehicle Number: {data.vehicle}
            </p>
            <p className="card-text">
                Vehicle Model: {data.model }
            </p>
            <p className="card-text">
                Vehicle Color: {data.color}
            </p>
            <p className="card-text">
                 Contact: {data.phone}
            </p>
            <p className="card-text">
               Message by user :  {data.message ? data.message : `Hello User ! 
               This is My car  ${data.model}  on ${data.color} color , 
               So  i also approved your request please contact to me on my given number ` }
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Qrscan;
