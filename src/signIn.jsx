import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Signin = () => {
    let Nav = useNavigate()
    useEffect(() => {
        // Define the 'otpless' function
        window.otpless = (otplessUser) => {
         // Retrieve the user's details after successful login
         const waName = otplessUser.waName;
         const waNumber = otplessUser.waNumber;
             
         console.log('otpless console : ',otplessUser)
         console.log(waName)
         // Handle the signup/signin process
         // ...
        };
       }, []);
  return (
    <div>Signin</div>
  )
}

export default Signin