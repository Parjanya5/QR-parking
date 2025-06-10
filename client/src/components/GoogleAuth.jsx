import React from 'react'
import Googleicon from './Googleicon'
import {useGoogleLogin } from '@react-oauth/google'

function GoogleAuth() {
     
     const responseGoogle = async (authresult)=>{
        try {
            console.log('i am auth result',authresult)
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
