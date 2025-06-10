import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../components/Component.css'
function Notfoundpage() {
  return (
    <div>
       <section className='margin-padding'>
        <div className='container  d-flex flex-column gap-4 justify-content-center  align-items-center vh-100'
        >
            <div className='d-flex gap-3 align-items-center '>
           <FaExclamationTriangle className='text-warning fs-1'/>
           <div>

           <h3>404 Not Found </h3>
           <b className='px-3'>This page not Exist</b>
           </div>
            </div>
           
           <Link to={'/'} className='text-light nav-links btn btn-primary'>GO Back</Link>
        </div>
      </section>
    </div>
  )
}

export default Notfoundpage
