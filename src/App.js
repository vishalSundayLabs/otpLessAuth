import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Signin from './signIn';
import Success from './Success';

function App() {
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
    <>
      <div>
        signIn
      </div>
    </>

  );
}

export default App;
