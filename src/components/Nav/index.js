import React from 'react'
// import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate();
    return (
        <div className="mainDiv">
             <ul className="ulist">
        {/* <li
          onClick={() => {
            navigate(-1);
          }}
        >
          <img
            className="backIcon"
            src="https://img.icons8.com/material-outlined/48/000000/circled-left--v1.png"
            alt="Go Back btn"
          />
          Go Back 
        </li> */}
        <li
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            navigate("/home");
          }}
        >
          catag
        </li>
        <li
          onClick={() => {
            navigate("/accessories");
          }}
        >
          Podcasts
        </li>
        {/* <li
          onClick={() => {
            navigate("/signup");
          }}
        >
          SignUp
        </li>
        <li
          onClick={() => {
            navigate("/login");
          }}
        >
          LogIn
        </li> */}
      </ul>
       <h2 id="ecomH1"  onClick={() => {
            navigate("/home");
          }} >ecom </h2>
        </div>
    )
}
