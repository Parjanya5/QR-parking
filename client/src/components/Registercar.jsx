import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Component.css'
import { toast } from 'react-toastify';

function Registercar() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle , setvehicle] = useState("");
  const [model , setmodel] = useState("");
  const [color, setcolor] = useState("");
  const [message, setmessage] = useState("");
  const [image, setimage] = useState("");
  const navigate = useNavigate();

  const registerdata = async (e) =>{
    e.preventDefault();
      const apiurl = `https://qr-parking-vzxn.onrender.com/post`
    try {
       const posting = await fetch(apiurl,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body:JSON.stringify({name,phone,vehicle,model,color,message,image})
    })
    const data = await posting.json();
    if(posting.ok){  
           toast.success(  data.message  || "Data Added Successfully");
           navigate('/home')
    }else{
      toast.error( "register failed");
    }
    } catch (error) {
       toast.error(error.message)
    }
  }
  


  return (
   <>
     <div className='d-flex rounded  bg-secondary bg-opacity-25 p-5 mt-5 gap-5'>
      <div>
        <p className='text-center fs-4 fw-bolder pb-3 animated-heading'>Register your car</p>
        <form  className='text-dark' onSubmit={registerdata}>
          <div className='d-flex gap-5 flex-wrap'>
            <div className='d-flex text-start flex-column gap-2'>
              <label htmlFor="" className=''>Your Name</label>
              <input type="text" name="name" id="" value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter Your Name' className='p-2 rounded bg-secondary bg-opacity-25' />
            </div>
            <div className='d-flex text-start flex-column gap-2'>
            <label htmlFor="" className=''>Vehicle no</label>
            <input type="text" name="vehicle"  id="" placeholder='Enter Your Name' value={vehicle} onChange={(e) => setvehicle(e.target.value)} className='text-uppercase p-2 rounded bg-secondary bg-opacity-25' />
            </div>
          </div>
          <div className='d-flex gap-5 mt-3 flex-wrap'>
            <div className='d-flex text-start flex-column gap-2'>
              <label htmlFor="" className=''>Vehicle Model</label>
              <input type="text" name="model" id="" placeholder='Enter Your Name' value={model} onChange={(e)=> setmodel(e.target.value)} className='p-2 rounded bg-secondary bg-opacity-25' />
            </div>
            <div className='d-flex text-start flex-column gap-2'>
            <label htmlFor="" className=''>Vehicle color</label>
            <input type="tel" name="color" id="" placeholder='Enter Your Name' value={color} onChange={(e)=> setcolor(e.target.value)} className='p-2 rounded bg-secondary bg-opacity-25' />
            </div>
          </div>
          <div className='d-flex text-start mt-3 flex-column gap-2'>
              <label htmlFor="" className=''>Contact</label>
              <input type="tel" name="phone" id="" placeholder='Enter Your Name' value={phone} onChange={(e)=> setPhone(e.target.value)} className='p-2 rounded bg-secondary bg-opacity-25' />
          </div>
          <div className='d-flex text-start mt-3 flex-column gap-2'>
              <label htmlFor="" className=''>Image</label>
              <input type="file" name="image" id="" placeholder='choose image' onChange={(e)=> setimage(e.target.value)}   className='p-2 rounded bg-secondary bg-opacity-25' />
          </div>
          <div className='d-flex text-start mt-3 flex-column gap-2'>
              <label htmlFor="" className=''>Your Message</label>
          <textarea className='p-2 rounded bg-secondary bg-opacity-25' name="message" id="" value={message} onChange={(e)=> setmessage(e.target.message)} placeholder='Please Enter Your Message for Scanner user person'></textarea>
          </div>
          <div className='d-flex justify-content-evenly mt-4 '>
            <button type="submit" className='btn btn-primary w-50'>Submit</button>
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
