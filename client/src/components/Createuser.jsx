import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Component.css'
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';

function Createuser() {
  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  const [phone , setphone] = useState();
  const navigate = useNavigate();
  

  
  const handlesubmit = async (e)=>{
    e.preventDefault();
     
    if(!email || !password || !name || !phone){
      toast.error('Please fill all the fields');
    }

    try {
       const fetches = await fetch(`http://localhost:4500/user/post` , {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({name,email,phone,password})
    })
     
     const res = await fetches.json();

    if(fetches.ok){
      console.log(res)
      toast.success('User created successfully');
      navigate('/');
    }
    else{
      toast.error(res.message);
    }
     
    } catch (error) {
      toast.error(error.message, 'user not created')
    }
   
  }


  return (
   <>
   <div className='container-fluid bg-secondary bg-opacity-25 d-flex justify-content-center px-2 rounded  flex-wrap'>
    <div className=' py-3 px-5 rounded '>
    <p className="text-center fs-4 fw-bolder pb-3 animated-heading">Sign-up user</p>
        <form  onSubmit={handlesubmit} className='d-flex gap-2 flex-column'>
          <div className='d-flex flex-column gap-1'>
            <label htmlFor="" className='text-start fs-5 fw-bold opacity-75 ' >Full Name</label>
            <input type="text" className='px-2 py-1 bg-light rounded border-bottom bg-opacity-25 text-dark ' value={name} onChange={(e)=> setName(e.target.value)} name='name' autoFocus autoComplete placeholder='Full Name' />
          </div>
          <div className='d-flex flex-column gap-1' >
            <label htmlFor="" className='text-start fs-5 fw-bold opacity-75'>Email</label>
            <input type="email" className='px-2 py-1 bg-light rounded border-bottom bg-opacity-25 text-dark' name='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Your Email' />
          </div>
          <div className='d-flex flex-column gap-1'>
            <label htmlFor=""className='text-start fs-5 fw-bold opacity-75'>Phone</label>
            <input type="number" className='px-2 py-1 bg-light rounded border-bottom bg-opacity-25 text-dark' name='phone' value={phone} onChange={(e)=> setphone(e.target.value)} placeholder='Enter Your Phone Number' />
          </div>
          <div className='d-flex flex-column gap-1'>
            <label htmlFor="" className='text-start fs-5 fw-bold opacity-75'>Password</label>
            <input type="password" className='px-2 py-1 bg-light rounded border-bottom bg-opacity-25 text-dark' name='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter Your password' />
          </div>
          <div className='mt-3 d-flex justify-content-evenly gap-2  '>
            <button type="submit" className='btn btn-color btn-success rounded-pill w-75'>Create </button>
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
