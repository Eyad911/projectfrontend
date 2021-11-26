import axios from "axios";
import React from "react";
import "./style.css"
// import $ from "jquery"
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
const Profile = () => { 
  const navigate = useNavigate();
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);
  const [edit, setEdit] = useState("");

  
  const getData = async () => {
   
    if(local){
    const item = await axios.get(
      `http://localhost:5000/users/email/${local.email}`
    );
    setAccount(item.data);} else {window.alert("login or signup")
    navigate('/')
  }
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

// const showOption = ()=>{
// $('.show').show();
// navigate("/profile")

// }

  const editName = async (e) => {
    e.preventDefault();
    if (edit.length > 0) {
       const editFullName = await axios.put(`http://localhost:5000/users/edit/${local.email}`, {
            fullName: edit,
        });
        console.log(editFullName);
        document.getElementById("fullName").value = "";
        getData();
      } else {
        console.log("");
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
             {/* <button id="btnshow" onClick={()=>{showOption()}} >edit!</button> */}
             
            <form>
              <h1>Full Name:</h1>
              <h3> {item.fullName}</h3>
              <input type="submit" value="Edit" onClick={editName}  className="show"/>
              <input type="text" placeholder="Edit You FullName" onChange={(e) => setEdit(e.target.value)} id="fullName"  />
          
            <h1>User Name:</h1>
            <h3>{item.userName}</h3>
            <h1>Email:</h1>
            <h3>{item.email}</h3> </form>
            
           
            <button className="btn btn-danger btn-block" onClick={kick}>Logout</button>

            <p>{item.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
