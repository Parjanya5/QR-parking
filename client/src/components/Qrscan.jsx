import React, { useEffect, useState } from "react";
import { useParams ,useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
// import axios from 'axios';

function Qrscan() {
  const [loader, setloader] = useState(true);
  const [error, seterror] = useState(null);
  const navigate = useNavigate()
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState(null);

  useEffect(() => {
    
    const finduser = async () => {
      setloader(true)
      try {
        const finddata = `https://qr-parking-vzxn.onrender.com/find/${id}`;
        const meta = await fetch(finddata);
       
        if(!meta.ok){
            throw new Error("Data not found or fetch failed");
        }

        const datastore = await meta.json();
        setData(datastore);
        console.log(datastore);
        navigate(`/Qrscan/${id}`)
        setloader(false)
      } catch (error) {
        console.log(error, " i am  facing error on find data");
        setloader(false);
        seterror(error.message)
      }
      finally{
        setloader(false)
      }
    };
    finduser();
  }, [id]);

if (loader) return <Spinner />;

  if (error) return <p className="text-danger">❌ {error}</p>;

  if (!data) return <p>No data found.</p>;
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
