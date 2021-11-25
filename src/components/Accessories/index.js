import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router';
import "./style.css"


const BASE_URL = "http://localhost:5000";
export const Accessories = () => {
  const navigate =useNavigate();
  const [local, setLocal] = useState("");
  const [remAdd, setRemAdd] = useState([]);
    const [Accessorie, setAccessorie] = useState([]);
    useEffect(() => {
        getAllAccessories();
    }, []);
    const getAllAccessories = async () => {
        const product = await axios.get(`${BASE_URL}/electronics`);
    
        setAccessorie(product.data.filter(item=>item.Kind === "Accessories"));
        // console.log(product.data);
      };

      const getLocalStorage = () => {
        const item = JSON.parse(localStorage.getItem("newUser"));
        setLocal(item);
      };
    
      useEffect(() => {
        if (JSON.parse(localStorage.getItem("newUser"))) {
          getDataEmail();
        }
        getLocalStorage();
        // eslint-disable-next-line
      }, []);

      const getDataEmail = async () => {
        const user = JSON.parse(localStorage.getItem("newUser"));
        const item = await axios.get(
          `http://localhost:5000/users/cart/${user.email}`
        );
        setRemAdd(item.data);
      };

      const removeOrAdd = async (id) => {
        let test = [];
    
        remAdd.forEach((item) => {
          test.push(item._id);
        });
    
        if (test.includes(id)) {
          // document.getElementById(`${id}`).innerHTML = "Add";
    
          await axios.put(
            `http://localhost:5000/users/removecart/${local.email}/${id}`
          );
        } else {
          // document.getElementById(`${id}`).innerHTML = "Remove";
    
          await axios.put(
            `http://localhost:5000/users/yourcart/${local.email}/${id}`
          );
        }
        test = [];
        getDataEmail();
        getLocalStorage();
    
      };

      const test1 = async () => {
        // console.log("here");
        let test = [];
    
        remAdd.forEach((item) => {
          // console.log("forEach");
          test.push(item._id);
        });
        console.log("test", test);
    
        if (test.length > 0) {
          console.log(" > 0");
          test.map((item) => {
            // console.log(item);
            // document.getElementById(`${item}`).innerHTML = "Remove";
          }
            );
        }
        test = []
      };
    
      useEffect(() => {
        test1()
      }, [remAdd]);



    return (
      <div className="mediaWrapper">
      <h1 className="Accessh1">Accessories</h1>
      <div className="mediaDiv">
        {Accessorie.map((item, i) => (
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
            src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-cart-supermarket-flatart-icons-flat-flatarticons.png"
            onClick={() => removeOrAdd(item._id)}/>
          </div>
        ))}
      </div>
    </div>
  );
}
