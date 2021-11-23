import React from 'react'
import './App.css';
import { Route, Routes } from "react-router-dom";
// import React ,{ useState,useEffect } from 'react';
// import axios from 'axios';
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import Signup from './components/Signup';
import Login from './components/Login';




function App() {

  return (
    
    <div className="App">
      <Nav />
      <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
