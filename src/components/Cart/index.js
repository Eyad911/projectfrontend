import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {  useNavigate } from "react-router";
const Cart = () => {
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);
const Navigate =useNavigate()
  // نستدعي اللوكل
  const getLocalStorage = async () => {
    const item = await JSON.parse(localStorage.getItem("newUser"));
    setLocal(item);
  };

  const getData = async () => {
    if(local){
    const item = await axios.get(
      `http://localhost:5000/users/cart/${local.email}`
    );
    setAccount(item.data);
    }else {window.alert("you should login or signup")
  Navigate("/login")}
  };

  useEffect(() => {
    getLocalStorage();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [local]);

  const removeFavorite = (id) => {
    axios.put(`http://localhost:5000/users/removecart/${local.email}/${id}`);
    getLocalStorage();
  };
  return (
    <div className="mediaWrapper">
      <h1 className="Accessh1">Cart</h1>
      <div className="mediaDiv">
        {account.length &&
        account.map((item, i) => (
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
           alt="btnlogo"
            onClick={() => removeFavorite(item._id)}
                src="https://img.icons8.com/color/48/000000/cancel--v3.png"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;


