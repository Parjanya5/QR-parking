import React from 'react'
import './App.css'
import Manage from './Manage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 

  return (
    <>
       <ToastContainer position="top-right" autoClose={3000} />
      <Manage/>
    </>
  )
}

export default App
