import React from 'react'
import './App.css';
import { Route, Routes } from "react-router-dom";
// import React ,{ useState,useEffect } from 'react';
// import axios from 'axios';
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import { Landpage } from './components/Landpage';
import { Accessories } from './components/Accessories';
import { Phone } from './components/Phone';
import { Printers } from './components/Printers';
import { Headphone } from './components/Headphone';
import Cart from './components/Cart';




function App() {

  return (
    
    <div className="App">
      <Nav />
      
      <Routes>
          <Route exact path="/" element={<Landpage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/accessories" element={<Accessories />} />
          <Route exact path="/phone" element={<Phone />} />
          <Route exact path="/printers" element={<Printers />} />
          <Route exact path="/headphones" element={<Headphone />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
    </div>
  );
}

export default App;
