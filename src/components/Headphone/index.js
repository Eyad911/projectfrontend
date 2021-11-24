import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';


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
        <div>
            {headphone.map((item) => (
          <div className='divContener'>
          <img src={item.Pic} alt="Headphone"id='imgDev'/>
          <h2>{item.Name} </h2>
          <p>{item.Price}</p>
          
          
          </div>
        ))}
        </div>
    )
}
