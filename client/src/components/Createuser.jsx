import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Component.css'
import { useNavigate } from 'react-router-dom';

function Createuser() {
  const navigate = useNavigate();
  return (
   <>
   <div className='container-fluid signup-bg d-flex justify-content-center px-2 rounded bg-light flex-wrap'>
    <div className=' py-3 px-5 rounded '>
    <p className="text-center fs-4 fw-bolder pb-3 animated-heading">Sign-up user</p>
        <form action="http://localhost:4500/user/post" method='POST' className='d-flex gap-2 flex-column'>
          <div className='d-flex flex-column gap-1'>
            <label htmlFor="" className='text-start fs-5 fw-bold opacity-75 ' >Full Name</label>
            <input type="text" className='px-2 py-1 bg-light rounded border-bottom bg-opacity-25 text-dark ' name='name' autoFocus autoComplete placeholder='Full Name' />
          </div>
          <div className='d-flex flex-column gap-1' >
            <label htmlFor="" className='text-start fs-5 fw-bold opacity-75'>Email</label>
            <input type="email" className='px-2 py-1 bg-light rounded border-bottom bg-opacity-25 text-dark' name='email' placeholder='Enter Your Email' />
          </div>
          <div className='d-flex flex-column gap-1'>
            <label htmlFor=""className='text-start fs-5 fw-bold opacity-75'>Phone</label>
            <input type="number" className='px-2 py-1 bg-light rounded border-bottom bg-opacity-25 text-dark' name='phone' placeholder='Enter Your Phone Number' />
          </div>
          <div className='d-flex flex-column gap-1'>
            <label htmlFor="" className='text-start fs-5 fw-bold opacity-75'>Password</label>
            <input type="password" className='px-2 py-1 bg-light rounded border-bottom bg-opacity-25 text-dark' name='password' placeholder='Enter Your password' />
          </div>
          <div className='mt-3 d-flex justify-content-evenly gap-2  '>
            <button type="submit" onClick={()=> navigate('/signin')} className='btn btn-color btn-success rounded-pill w-75'>Create </button>
            <button type="reset" className='btn btn-color1 btn-danger rounded-pill text-light w-50 '>Reset </button>
          </div>
        </form>
    </div>
    <div className='hide-on-desktop'>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/man-scan-product-qr-code-9381450-7629974.png" alt="!Sorry src not found" />
    </div>
   </div>
   </>
  )
}

export default Createuser
