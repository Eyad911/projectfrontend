import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';


const BASE_URL = "http://localhost:5000";
export const Printers = () => {
    const [printer, setPrinter] = useState([]);
    useEffect(() => {
        getAllPhones();
    }, []);
    const getAllPhones = async () => {
        const printer = await axios.get(`${BASE_URL}/electronics`);
    
        setPrinter(printer.data.filter(item=>item.Kind === "Printer"));
        // console.log(product.data);
        
      };


    return (
        <div>
            {printer.map((item) => (
          <div className='divContener'>
          <img src={item.Pic} alt="printerspic" id='imgDev'/>
          <h2>{item.Name} </h2>
          <p>{item.Price}</p>
          
          
          </div>
        ))}
        </div>
    )
}
