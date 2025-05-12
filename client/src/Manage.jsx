import React from 'react'
import Homepage from './page/Homepage'
import Mainlayout from './Layout/Mainlayout'
import SignupPage from './page/SignupPage'
import {Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'
import SigninPage from './page/SigninPage'
import Editpage from './page/Editpage'
import Notfoundpage from './page/Notfoundpage'
import Aboutpage from './page/Aboutpage'
import RegisterCarpage from './page/RegisterCarpage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QrReadpage from './page/QrReadpage'



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Mainlayout/>}>
            <Route index element={<Homepage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/signin' element={<SigninPage/>} />
            <Route path='/editcar' element={<Editpage/>} />
            <Route path='/about' element={<Aboutpage/>} />
            <Route path='/Registercar' element={<RegisterCarpage/>} />
            <Route path='/Qrscan/:id' element={<QrReadpage/>} />
            <Route path='*' element={<Notfoundpage/>} />
        </Route>

    )
)


function Manage() {
  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default Manage
