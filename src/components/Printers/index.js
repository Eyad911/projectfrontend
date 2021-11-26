import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const BASE_URL = "http://localhost:5000";
export const Printers = () => {
  const [printer, setPrinter] = useState([]);
  const [local, setLocal] = useState("");
  const [remAdd, setRemAdd] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    getAllPhones();
  }, []);
  const getAllPhones = async () => {
    const printer = await axios.get(`${BASE_URL}/electronics`);

    setPrinter(printer.data.filter((item) => item.Kind === "Printer"));
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

    if (local) {
      if (test.includes(id)) {
        await axios.put(
          `http://localhost:5000/users/removecart/${local.email}/${id}`
        );
      } else {
        await axios.put(
          `http://localhost:5000/users/yourcart/${local.email}/${id}`
        );
      }
      test = [];
      getDataEmail();
      getLocalStorage();
    } else {
      window.alert("you should login or signup");
      Navigate("/login");
    }
  };

  const test1 = async () => {
    // console.log("here");
    let test = [];

    remAdd.forEach((item) => {
      // console.log("forEach");
      test.push(item._id);
    });
    console.log("test", test);
  };

  useEffect(() => {
    test1();
    // eslint-disable-next-line
  }, [remAdd]);

  return (
    <div className="mediaWrapper">
      <h1 className="Accessh1">Printers</h1>
      <div className="mediaDiv">
        {printer.map((item, i) => (
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
              alt="btnlogo"
              onClick={() => removeOrAdd(item._id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
