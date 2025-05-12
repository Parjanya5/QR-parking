import React from 'react'
import { FaIdCard } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';
import { FaRegAddressCard } from 'react-icons/fa';
import { MdAppRegistration } from 'react-icons/md';
import { RiCarLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
function Button() {
    return (
    <>       
                   <Link to={'/personalcar'} className='btn btn-light'>
                  <FaIdCard className='fs-2 py-2'/>Personal Detail
                   </Link>
                   <Link to={'/registercar'} className='btn btn-light'>
                  
                  <RiCarLine size={24} className="me-2" />Register Car
                   </Link>
                   <Link to={`/Qrscan/:id`} className='btn btn-light'>
                  
                  <FaRegAddressCard size={24} className="me-2" />Scan Qr
                   </Link>
    </>
  )
}

export default Button
