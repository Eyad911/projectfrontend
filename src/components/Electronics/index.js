// import React from 'react'
import React ,{ useState,useEffect } from 'react';
import axios from 'axios';

const BASE_URL = "http://localhost:5000";
export const Electronics = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
      getAllelEctronics();
    }, []);
  
    const getAllelEctronics = async () => {
      const product = await axios.get(`${BASE_URL}/electronics`);
  
      setProduct(product.data);
      // console.log(product.data);
      
    };

    return (
        <div>
            {product.map((prod) => (
          <div className='divContener'>
          <img src={prod.Pic}  alt="Products"id='imgDev'/>
          <h2>{prod.Name} </h2>
          <p>{prod.Price}</p>
          
          
          </div>
        ))}
        </div>
    )
}
