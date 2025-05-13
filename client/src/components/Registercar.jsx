import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Component.css'
import { toast } from 'react-toastify';

function Registercar() {

  const navigate = useNavigate();

  


  return (
   <>
     <div className='d-flex rounded  update-bg p-5 mt-5 gap-5'>
      <div>
        <p className='text-center fs-4 fw-bolder pb-3 animated-heading'>Register your car</p>
        <form action="http://localhost:4500/post" method='POST'>
          <div className='d-flex gap-5 flex-wrap'>
            <div className='d-flex text-start flex-column gap-2'>
              <label htmlFor="" className=''>Your Name</label>
              <input type="text" name="name" id="" placeholder='Enter Your Name' className='p-2 rounded bg-secondary bg-opacity-25' />
            </div>
            <div className='d-flex text-start flex-column gap-2'>
            <label htmlFor="" className=''>Vehicle no</label>
            <input type="text" name="vehicle"  id="" placeholder='Enter Your Name' className='text-uppercase p-2 rounded bg-secondary bg-opacity-25' />
            </div>
          </div>
          <div className='d-flex gap-5 mt-3 flex-wrap'>
            <div className='d-flex text-start flex-column gap-2'>
              <label htmlFor="" className=''>Vehicle Model</label>
              <input type="text" name="model" id="" placeholder='Enter Your Name' className='p-2 rounded bg-secondary bg-opacity-25' />
            </div>
            <div className='d-flex text-start flex-column gap-2'>
            <label htmlFor="" className=''>Vehicle color</label>
            <input type="tel" name="color" id="" placeholder='Enter Your Name' className='p-2 rounded bg-secondary bg-opacity-25' />
            </div>
          </div>
          <div className='d-flex text-start mt-3 flex-column gap-2'>
              <label htmlFor="" className=''>Contact</label>
              <input type="tel" name="phone" id="" placeholder='Enter Your Name' className='p-2 rounded bg-secondary bg-opacity-25' />
          </div>
          <div className='d-flex text-start mt-3 flex-column gap-2'>
              <label htmlFor="" className=''>Image</label>
              <input type="file" name="image" id="" placeholder='choose image'    className='p-2 rounded bg-secondary bg-opacity-25' />
          </div>
          <div className='d-flex text-start mt-3 flex-column gap-2'>
              <label htmlFor="" className=''>Your Message</label>
          <textarea className='p-2 rounded bg-secondary bg-opacity-25' name="message" id="" placeholder='Please Enter Your Message for Scanner user person'></textarea>
          </div>
          <div className='d-flex justify-content-evenly mt-4 '>
            <button type="submit" className='btn btn-primary w-50' onClick={()=> {
              navigate('/')
              toast.success('car added succesfully')
            }}>Submit</button>
            <button type="reset" className='btn btn-danger'>Reset</button>
          </div>
        </form>
      </div>
      <div className='d-flex align-items-center hide-on-desktop'>
        <img src='https://static.vecteezy.com/system/resources/previews/021/179/570/original/fills-in-the-profile-data-form-businessman-fills-in-the-profile-data-form-free-png.png' className='' width={'200px'}/>
      </div>
     </div>
   </>
  )
}

export default Registercar
