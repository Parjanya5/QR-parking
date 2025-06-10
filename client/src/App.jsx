import React from 'react'
import './App.css'
import Manage from './Manage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
 

  return (
    <>
      <GoogleOAuthProvider clientId='47264003075-s3ei9cd6hjams9d2ptupi5lsi9g6lkfc.apps.googleusercontent.com'> 
       <ToastContainer position="top-right" autoClose={3000} />
      <Manage/>
    </GoogleOAuthProvider>
    </>
  )
}

export default App
