import React, {useRef} from 'react';
import { MdSearch } from 'react-icons/md';
import { FiDownload } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import "./Component.css";


function CarItem({ car }) {

  const navigate = useNavigate();
  const canvasRef = useRef(null);


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
  
  // console.log(`https://qr-parking-vzxn.onrender.com${car.image}`) 

 const downloadQRWithText = () => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');

  // Choose the QR image you want to use
  const qrImageSrc = car.qrdataurl ;

  const image = new Image();
  image.crossOrigin = 'anonymous';
  image.src = qrImageSrc;
  image.textAlign = 'center'

  image.onload = () => {
    // Set canvas size to image size
    canvas.width = image.width+10;
    canvas.height = image.height + 50; // extra space for text

    // Fill background (optional)
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the QR image
    ctx.drawImage(image, 0, 0);

    // Set text properties
    ctx.font = '14px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';

    // Add your custom text (e.g., vehicle no. and contact)
     
   // First line
     ctx.font = '14px Arial';
    ctx.fillText('Owner information', canvas.width / 2, canvas.height - 40);

  // Second line (vehicle number)
    ctx.font = '16px Arial';
    ctx.fillText(`Vehicle: ${car.vehicle}`, canvas.width / 2, canvas.height - 20);
    // Create a link to download the canvas image
    const link = document.createElement('a');
    link.download = `My Qr ${car.vehicle}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };
};
 const downloadQRWithsecond = () => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');

  // Choose the QR image you want to use
  const qrImageSrc = car.qrdata ;

  const image = new Image();
  image.crossOrigin = 'anonymous';
  image.src = qrImageSrc;
  image.textAlign = 'center',

  image.onload = () => {
    // Set canvas size to image size
      const minWidth = 300; // Make sure text fits well
  canvas.width = Math.max(image.width, minWidth);
    canvas.width = image.width+10;
    canvas.height = image.height + 60; // extra space for text

    // Fill background (optional)
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the QR image
    ctx.drawImage(image, 0, 0);

    // Set text properties
    ctx.font = '14px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';

    // Add your custom text (e.g., vehicle no. and contact)
     
   // First line
     ctx.font = '14px Arial';
    ctx.fillText('Owner information', canvas.width / 2, canvas.height - 40);

  // Second line (vehicle number)
    ctx.font = '14px Arial';
    ctx.fillText(`No : ${car.vehicle}`, canvas.width / 2, canvas.height - 20);
    // Create a link to download the canvas image
    const link = document.createElement('a');
    link.download = `Your Qr ${car.vehicle}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };
};


  return (
    <>
  <div class="card mb-3 pb-4 " style={{width: "540px;"}}>
  <div class="row g-2">
    <div class="col-md-4 ">
      <div className='d-flex flex-column align-items-center gap-1 bg-light p-4'>
        <b>After email alert <br/> scanner person get your information</b>
      <img src={car.qrdataurl} class="img-fluid rounded-start w-50" alt="..." />
      <b><MdSearch className='px-1 fs-3'/>Search owner</b>
      <button className='btn btn-success px-2' onClick={downloadQRWithText}>
  <FiDownload className='px-1 fs-4' />Download QR 
</button>
      {/* <a href={car.qrdataurl} download={`your Qr ${car.vehicle}`} className='btn btn-sm btn-primary'><FiDownload className='px-1 fs-4'/>Download QR</a> */}
      </div>
      <div className='d-flex mt-2 flex-column align-items-center gap-1 bg-light p-4'>
        <b>Scanner person direct call to you</b>
      <img src={car.qrdata} class="img-fluid rounded-start w-50" alt="..." />
      <b><MdSearch className='px-1 fs-3'/>Search owner</b>
         <button className='btn btn-success px-2' onClick={downloadQRWithsecond}>
     <FiDownload className='px-1 fs-4' />Download QR 
     </button>
      {/* <a href={car.qrdata} download={`your Qr ${car.vehicle}`} className='btn btn-sm btn-primary'><FiDownload className='px-1 fs-4'/>Download QR</a> */}
      </div>
    </div>
    <div class="col-md-8 ">
      <div class="card-body  bg-light">
        <div>
          {localStorage.setItem('image',car.image)}
        <img src={car.image ? `https://qr-parking-vzxn.onrender.com/uploads/${car.image}` : `http://www.fotolip.com/wp-content/uploads/2016/05/Car-Clipart-1.png`} alt="QR Code" className="img-fluid rounded mb-2" style={{height:'100px'}}/>
        </div>
        <h5 class="card-title fw-bold ">{car.name}</h5>
        <p class="card-text" ><small class="text-body-secondary fw-bolder">Vehicle no : {car.vehicle}</small></p>
        <p class="card-text"><small class="text-body-secondary fw-bolder">Vehicle color : {car.color}</small></p>
        <p class="card-text"><small class="text-body-secondary fw-bolder">Contact : {car.phone}</small></p>
        <p class="card-text"><small class="text-body-secondary fw-bolder">Model : {car.model}</small></p>
        <p class="card-text">{!car.message=="" ?`Message : ${car.message}` : `Message :  Hello User ! This is My car  ${car.model}  on ${car.color} color , So  i approve your request please contact to me on my given number `}</p>
      <div className="d-flex gap-3 justify-content-evenly pb-1">
           <button className='btn btn-warning text-white px-2' onClick={handleedit}>Edit</button>
           <button className='btn btn-danger px-2' onClick={deleteCardData}>Delete</button>
       </div>
      </div>
    </div>
  </div>
</div>
 <canvas ref={canvasRef} style={{ display: 'none' }} />
    </>
  );
}

export default CarItem;
