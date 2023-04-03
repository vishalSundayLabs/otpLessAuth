import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Define the 'otpless' function
    window.otpless = (otplessUser) => {
     // Retrieve the user's details after successful login
     const waName = otplessUser.waName;
     const waNumber = otplessUser.waNumber;
         
     console.log('otpless console : ',otplessUser)
     // Handle the signup/signin process
     // ...
    };
   }, []);
  return (
    <div className="App">
      <div id="otpless"></div>
    </div>
  );
}

export default App;
