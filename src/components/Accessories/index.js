import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';


const BASE_URL = "http://localhost:5000";
export const Accessories = () => {
    const [Accessorie, setAccessorie] = useState([]);
    useEffect(() => {
        getAllAccessories();
    }, []);
    const getAllAccessories = async () => {
        const product = await axios.get(`${BASE_URL}/electronics`);
    
        setAccessorie(product.data.filter(item=>item.Kind === "Accessories"));
        // console.log(product.data);
        
      };


    return (
        <div>
            {Accessorie.map((access) => (
          <div className='divContener'>
          <img src={access.Pic} alt="Access"id='imgDev'/>
          <h2>{access.Name} </h2>
          <p>{access.Price}</p>
          
          
          </div>
        ))}
        </div>
    )
}
