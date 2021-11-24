import axios from "axios";
import React from "react";
// import Nav from "../Nav";
import { useState, useEffect } from "react";
const Profile = () => {
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);
  const [edit, setEdit] = useState("");

  
  const getData = async () => {
    console.log("get data function");
    const item = await axios.get(
      `http://localhost:5000/users/email/${local.email}`
    );
    setAccount(item.data);
  };


  const getDataLS = () => {
    setLocal(JSON.parse(localStorage.getItem("newUser")));
  };

  useEffect(() => {
    getDataLS();
  }, []);
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [local]);

  const editName = async (e) => {
    e.preventDefault();
    if (edit.length > 0) {
       const editFullName = await axios.put(`http://localhost:5000/users/edit/${local.email}`, {
            fullName: edit,
        });
        console.log(editFullName);
        document.getElementById("fullName").value = "";
        getData();
        // setEdit("");
      } else {
        console.log("fill it");
      }
  };

  return (
    <div>
      {account.map((item, i) => {
        return (
          <div key={i}>
            <form>
              <h1>Full Name: {item.fullName}</h1>
              <input type="submit" value="Edit" onClick={editName} />
              <input type="text" onChange={(e) => setEdit(e.target.value)} id="fullName" />
            </form>
            <h2>User Name: {item.userName}</h2>
            <h2>Email: {item.email}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
