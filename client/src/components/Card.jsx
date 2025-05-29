import React from 'react';
import { MdSearch } from 'react-icons/md';
import { FiDownload } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import "./Component.css";


function CarItem({ car }) {

  const navigate = useNavigate();
  // const image1 = URL.createObjectURL(car.image)

  const deleteCardData = async (e) => {
     e.preventDefault();
    try {
      const response = await fetch(`https://qr-parking-vzxn.onrender.com/delete/${car._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token' : localStorage.getItem('token')
        }
      });
      if (response.ok) {
        console.log("Car deleted successfully");
        // window.location.reload();
        toast.success("Car deleted successfully");
        setTimeout(()=>{

          window.location.reload()
        },4000)

      } else {
        console.error("Failed to delete car");
        toast.error("Failed to delete car");
      }
    } catch (err) {
      console.error("Error deleting car:", err);
    }
  };

  const handleedit = ()=>{
      navigate('/editcar', {state: {car}})
  }
  
  console.log(`https://qr-parking-vzxn.onrender.com${car.image}`)

  return (
    <>
  <div class="card mb-3 pb-4 " style={{width: "540px;"}}>
  <div class="row g-2">
    <div class="col-md-4 ">
      <div className='d-flex flex-column align-items-center gap-1 bg-light p-4'>
        <b>After email alert <br/> scanner person get your information</b>
      <img src={car.qrdataurl} class="img-fluid rounded-start w-50" alt="..." />
      <b><MdSearch className='px-1 fs-3'/>Search owner</b>
      <a href={car.qrdataurl} download={`your Qr ${car.vehicle}`} className='btn btn-sm btn-primary'><FiDownload className='px-1 fs-4'/>Download QR</a>
      </div>
      <div className='d-flex mt-2 flex-column align-items-center gap-1 bg-light p-4'>
        <b>Scanner person direct call to you</b>
      <img src={car.qrdata} class="img-fluid rounded-start w-50" alt="..." />
      <b><MdSearch className='px-1 fs-3'/>Search owner</b>
      <a href={car.qrdata} download={`your Qr ${car.vehicle}`} className='btn btn-sm btn-primary'><FiDownload className='px-1 fs-4'/>Download QR</a>
      </div>
    </div>
    <div class="col-md-8 ">
      <div class="card-body  bg-light">
        <div>
        {/* <img src={`${URL.createObjectURL(car.image)}`} alt="QR Code" className="img-fluid rounded mb-2" width={'150px'}/> */}
        </div>
        <h5 class="card-title fw-bold ">{car.name}</h5>
        <p class="card-text" ><small class="text-body-secondary fw-bolder">Vehicle no : {car.vehicle}</small></p>
        <p class="card-text"><small class="text-body-secondary fw-bolder">Vehicle color : {car.color}</small></p>
        <p class="card-text"><small class="text-body-secondary fw-bolder">Contact : {car.phone}</small></p>
        <p class="card-text"><small class="text-body-secondary fw-bolder">Model : {car.model}</small></p>
        <p class="card-text">{!car.message=="" ?`Message : ${car.message}` : `Hello User ! This is My car  ${car.model}  on ${car.color} color , So  i approve your request please contact to me on my given number `}</p>
      <div className="d-flex gap-3 justify-content-evenly pb-1">
           <button className='btn btn-grad3 text-white px-2' onClick={handleedit}>Edit</button>
           <button className='btn btn-grad2 px-2' onClick={deleteCardData}>Delete</button>
       </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default CarItem;
