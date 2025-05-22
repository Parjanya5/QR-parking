import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaIdCard } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { MdAppRegistration } from "react-icons/md";
import { RiCarLine } from "react-icons/ri";
import Card from "./Card";
import "./Component.css";
import Button from "./Button";
import { useMediaQuery } from 'react-responsive';
import Spinner from "./Spinner";

function Home() {
  const [loding,setloading] = useState(false);
  const [carinfo, setcarinfo] = useState();
   const isWide = useMediaQuery({ minWidth: 768 }); // adjust as needed

  useEffect(() => {
    const fetchdata = async () => {
      const apiurl = `https://qr-parking-vzxn.onrender.com/get` ;
      try {
        const res = await fetch(apiurl , {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token' : localStorage.getItem('token')
          }
        })
        const data = await res.json();
        console.log(data);
        console.log(data[0]._id)
        setcarinfo(data);
      } catch (error) {
        console.log("fetch data function through error", error);
        setloading(true)
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      <section className="container-fluid d-flex  gap-3 mt-5 overflow-y-hidden">
        <div className={` row ${isWide ? '' : 'gap-2'}`}>
          <div className="col-12 col-lg-3 col-sm-6 col-md-12 col-xl-3 ">
          <div className="card d-flex flex-wrap justify-content-evenly  bg-secondary bg-opacity-25"  style={{height:'570px'}}>
             <Button />
            </div>
          </div>
          <div className="col-12 col-lg-9 col-sm-6col-md-12 col-xl-9 ">
            <div className="card overflow-auto custom-scroll bg-secondary bg-opacity-25" style={{height:'570px'}}> 
            {!carinfo? <Spinner loader={loding}/> :  carinfo=="" ? <Spinner loader={loding}/> :  carinfo && carinfo.map((car, index) => (
            <Card key={index} car={car} />
          ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
