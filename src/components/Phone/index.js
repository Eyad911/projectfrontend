import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';


const BASE_URL = "http://localhost:5000";
export const Phone = () => {
    const [phone, setPhone] = useState([]);
    useEffect(() => {
        getAllPhones();
    }, []);
    const getAllPhones = async () => {
        const phone = await axios.get(`${BASE_URL}/electronics`);
    
        setPhone(phone.data.filter(item=>item.Kind === "Phone"));
        // console.log(product.data);
        
      };


    return (
        <div>
            {phone.map((access) => (
          <div className='divContener'>
          <img src={access.Pic} alt="phonespic" id='imgDev'/>
          <h2>{access.Name} </h2>
          <p>{access.Price}</p>
          
          
          </div>
        ))}
        </div>
    )
}
