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




function App() {

  return (
    
    <div className="App">
      <Nav />
      <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
    </div>
  );
}

export default App;
