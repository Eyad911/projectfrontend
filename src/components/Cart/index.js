import React from "react";
import Nav from "../Nav";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
const Cart = () => {
  
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);

  // نستدعي اللوكل 
  const getLocalStorage = async () => {
    const item = await JSON.parse(localStorage.getItem("newUser"));
    setLocal(item);
  };

  
  const getData = async () => {
    const item = await axios.get(
      `http://localhost:5000/users/cart/${local.email}`
    );
    setAccount(item.data);
  };

 
  useEffect(() => {
    getLocalStorage();
    // eslint-disable-next-line
  }, []);

 
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [local]);

  


  // Remove from favorite
  const removeFavorite = (id) => {
    axios.put(`http://localhost:5000/users/removecart/${local.email}/${id}`);
    getLocalStorage();
  };
  return (
    <div>
      {/* <Nav /> */}
      <p>cart</p>
      {account.length &&
        account.map((item, i) => {
          return (
            <div>
              <div >
                {" "}
                <h1>{item.Name}</h1>
                <img src={item.Pic} alt="prouducts" />
              </div>
              
              <img  onClick={() => removeFavorite(item._id)}
              src="https://img.icons8.com/color/48/000000/cancel--v3.png"/>
            </div>
          );
        })}
      {/* {account.length &&
      account.map((item,i)=>{
        <div key={i}>
          <h1>{item[0].name}</h1>
          <img src={item[0].img} alt="character"/>
        </div>
      }) } */}
    </div>
  );
};

export default Cart;