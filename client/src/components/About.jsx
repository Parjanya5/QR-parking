import React from 'react'
import { FaCar, FaLock, FaWhatsapp, FaQrcode, FaEdit, FaUserShield, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";

function About() {
  return (
    <>
        <div className="max-w-4xl mx-auto py-12 px-6 mt-5 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">About QR Parking</h1>

      <p className="text-lg text-gray-700 mb-6">
        <strong>QR Parking</strong> is a modern solution for everyday parking communication problems. 
        In busy cities, people often park in tight spaces—sometimes blocking other vehicles by mistake. 
        Our platform helps car owners connect instantly using a secure and contactless method powered by QR codes.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-3">Our Mission</h2>
      <p className="text-gray-700 mb-6 ">
        Our goal is to make urban and residential parking smarter and stress-free. 
        By enabling drivers to communicate quickly through a QR-based system, we reduce parking conflicts, avoid towing issues, 
        and promote courteous behavior—all while keeping your personal contact details safe.
      </p>

       <div className='d-flex justify-content-evenly pt-4 flex-wrap'>
        <div>
        <h2 className="text-2xl text-start px-3  font-semibold text-gray-800 mb-4">How QR Parking Works</h2>
      <ul className="list-disc text-start  list-unstyled list-inside list-unstyled text-gray-700 mb-6 space-y-2">
        <li className=''><strong className='px-3'>Step 1:</strong> Register your car on our platform with basic details.</li>
        <li className=''><strong className='px-3'>Step 2:</strong> We generate a unique QR code for your car.</li>
        <li className=''><strong className='px-3'>Step 3:</strong> Stick the QR code visibly inside your car.</li>
        <li><strong className='px-3'>Step 4:</strong> If someone scans it, they can send you a message or alert.</li>
        <li><strong className='px-3'>Step 5:</strong> You get a WhatsApp notification and can decide if you want to respond or <br/>share your contact/location.</li>
      </ul>
        </div>
        <div>
        <h2 className="text-2xl text-start font-semibold text-gray-800 mb-4 ">Key Features</h2>
      <ul className="space-y-4 text-start text-gray-700 list-unstyled mb-6">
        <li className="flex items-center gap-2">
          <FaCar className="text-blue-500" /> Easy car registration with unique QR generation
        </li>
        <li className="flex items-center gap-2">
          <FaLock className="text-green-600" /> Privacy protected – your number isn’t shared without approval
        </li>
        <li className="flex items-center gap-2">
          <FaWhatsapp className="text-green-500" /> Real-time WhatsApp alerts when someone tries to reach you
        </li>
        <li className="flex items-center gap-2">
          <FaQrcode className="text-purple-500" /> QR code scannable from any phone—no app download required
        </li>
        <li className="flex items-center gap-2">
          <FaEdit className="text-yellow-500" /> Easy to manage, update, or delete your car details anytime
        </li>
      </ul>
        </div>
       </div>
{/* 
        <div className='d-flex justify-content-evenly'>
            <div>  <h2 className="text-2xl font-semibold text-start pt-3 text-gray-800 mb-4">Who Can Use QR Parking?</h2>
      <ul className="list-disc  list-inside text-start text-gray-700 mb-6 ml-4 space-y-1">
        <li>Individual car owners</li>
        <li>Residents of gated societies or apartments</li>
        <li>Corporate offices with limited parking space</li>
        <li>Event organizers or malls with temporary parking zones</li>
      </ul></div>
            <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-5">Why Choose Us?</h2>
      <p className="text-gray-700 mb-6">
        Most parking problems arise from miscommunication. <br/>
        QR Parking solves this using a modern, respectful,  <br/>and non-intrusive approach. 
        We are focused on giving users control, privacy, and <br/> convenience—all in one simple tool.
      </p>
            </div>
        </div> */}

      <h2 className="text-2xl font-semibold text-center pt-3 text-gray-800 mb-4">Who Can Use QR Parking?</h2>
      <ul className="list-disc text-start list-unstyled text-center list-inside  text-gray-700 mb-6 ml-4 space-y-1">
        

        <li className='mb-1'>Individual car owners</li>
        <li>Residents of gated societies or apartments</li>
        <li>Corporate offices with limited parking space</li>
        <li>Event organizers or malls with temporary parking zones</li>
       
      </ul>

      <h2 className="text-2xl font-semibold  text-gray-800 mb-4 pt-2">Why Choose Us?</h2>
      <p className="text-gray-700 mb-6">
        Most parking problems arise from miscommunication. 
        QR Parking solves this using a modern, respectful, and non-intrusive approach. 
        We are focused on giving users control, privacy, and convenience—all in one simple tool.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-3">Contact & Support</h2>
      <p className="text-gray-700 flex items-center gap-2">
        <FaRegEnvelope className="text-red-500" /> <strong>Email:</strong> parjanyakumar8@gmail.com
      </p>
      <p className="text-gray-700 flex items-center gap-2 mt-2">
        <FaPhoneAlt className="text-green-600" /> <strong>WhatsApp:</strong> +91-XXXXXXXXXX
      </p>
    </div>
    </>
  )
}

export default About
