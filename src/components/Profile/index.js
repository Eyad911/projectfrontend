import axios from "axios";
import React from "react";
import "./style.css"
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
const Profile = () => { 
  const navigate = useNavigate();
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
  const kick =()=>{
    // eslint-disable-next-line
    localStorage. clear()
     navigate("/login");
    }

  return (
    <div>
      {account.map((item, i) => {
        return (
          <div key={i} className="formDiv">
            <form>
              <h1>Full Name:</h1>
              <h3> {item.fullName}</h3>
              <input type="submit" value="Edit" onClick={editName} />
              <input type="text" onChange={(e) => setEdit(e.target.value)} id="fullName" />
            <h1>User Name:</h1>
            <h3>{item.userName}</h3>
            <h1>Email:</h1>
            <h3>{item.email}</h3></form>
            
           
            <button className="btn btn-danger btn-block" onClick={kick}>Logout</button>

            <p>{item.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
