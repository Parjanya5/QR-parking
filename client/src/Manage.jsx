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
import Personalpage from './page/Personalpage'
import UpdateUserPage from './page/UpdateUserPage'
import Authlayout from './Layout/Authlayout'
import GoogleAuth from './components/GoogleAuth'



const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route  element={<Mainlayout/>}>
            <Route path='/Home' element={<Homepage/>} />
            <Route path='/editcar' element={<Editpage/>} />
            <Route path='/about' element={<Aboutpage/>} />
            <Route path='/Registercar' element={<RegisterCarpage/>} />
            <Route path='/personal' element={<Personalpage/>} />
            <Route path='/Qrscan/:id' element={<QrReadpage/>} />
            <Route path='/UpdateUser' element={<UpdateUserPage/>} />
        </Route>

         {/* Auth layout for signin/signup only */}
      <Route element={<Authlayout />}>
        <Route index element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/googleauth" element={<GoogleAuth/>} />
          <Route path='*' element={<Notfoundpage/>} />
      </Route>
</>
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
