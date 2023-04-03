import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Signin from './signIn';
import Success from './Success';

function App() {
  return (
    <>
       <NavLink>
        <Route path='/' Component={Signin}></Route>
        <Route path='/success' Component={Success}></Route>
    </NavLink>
    </>

  );
}

export default App;
