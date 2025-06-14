import React from 'react'
import Googleicon from './Googleicon'
import {useGoogleLogin } from '@react-oauth/google'
import { googleAuth } from './api'

function GoogleAuth() {
     
     const responseGoogle = async (authresult)=>{
        try {
            if(authresult['code']){
               const result  = await googleAuth(authresult['code'])
               console.log(result)
               const {email,name,image} = result.data.user
               const token = result.data.token ;
               console.log(token)
               console.log(email , name, image)
            }
        } catch (error) {
            console.log(`error while routing google code : `, error)
        }
     }


    const googlelogin = useGoogleLogin({
        onSuccess : responseGoogle,
        onError : responseGoogle,
        flow : 'auth-code'
    })
  return (
   <>
   <button className='bg-light text-dark' onClick={googlelogin}><Googleicon/> Sign-in with Google</button>
   </>
  )
}

export default GoogleAuth
