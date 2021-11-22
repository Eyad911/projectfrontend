import React from 'react'
// import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate();
    return (
        <div>
             <ul>
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
            navigate("/home");
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            navigate("/electronics");
          }}
        >
          Songs
        </li>
        <li
          onClick={() => {
            navigate("/podcasts");
          }}
        >
          Podcasts
        </li>
        <li
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </li>
       
      </ul>

        </div>
    )
}
