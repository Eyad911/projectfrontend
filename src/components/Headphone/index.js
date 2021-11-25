import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import './style.css'


const BASE_URL = "http://localhost:5000";
export const Headphone = () => {
    const [headphone, setHeadphone] = useState([]);
    useEffect(() => {
        getAllHeadphone();
    }, []);
    const getAllHeadphone = async () => {
        const headphone = await axios.get(`${BASE_URL}/electronics`);
    
        setHeadphone(headphone.data.filter(item=>item.Kind === "Headphones"));
        // console.log(product.data);
        
      };


    return (
      <div className="mediaWrapper">
      <h1 className="Accessh1">headphones</h1>
      <div className="mediaDiv">
        {headphone.map((item, i) => (
          <div className="homeSongs" key={i}>
            <div>

              <img
                key={`img-${i}`}
                className="songImg"
                src={item.Pic}
                alt={`songImg-${i}`}
              />
              <p className="songName" key={`trackN-${i}`}>
                <b>{item.Name}</b>
              </p>
              <p className="artistName" key={`artN-${i}`}>
                {item.Price}
              </p>
            </div>
            <img
              className="favButton"
              src={`https://img.icons8.com/external-prettycons-solid-prettycons/60/000000
              /external-favorite-essentials-prettycons-solid-prettycons.png`}
              alt="favIcon"
              
            />
          </div>
        ))}
      </div>
    </div>
  );
}
