import React from "react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
const Login = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getData = async () => {
    const items = await axios.get("https://ecom-911.herokuapp.com/users");
    setUsers(items.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const registerPage = () => {
    navigate("/signup");
  };

  const submitlogin = (e) => {
    e.preventDefault();
    let check = false;
    // eslint-disable-next-line
    // console.log(users);
    // console.log(users[0].email);
    // console.log("log email",email);
    // console.log("log pass",password);
    users.map((item) => {
      // console.log(item.email);
      // console.log(item.password);
      if (item.email === email && item.password === password) {
        check = true;
      }
      return check;
    });
    if (check) {
      try {
        localStorage.setItem("newUser", JSON.stringify({ email }));
        navigate("/home");
      } catch (error) {
        console.log("error ", error);
      }
    } else {
      window.alert("Wrong email or password ");
    }
  };

  return (
    <div>
      <div className="contener">
        <div className="formDiv">
          <h2 id="firsth2">Log In</h2>
          <form onSubmit={submitlogin}>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control form-group"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control form-group input2"
            />
            <input
              type="submit"
              className="btn btn-primary btn-block btnL"
              value="Login"
            />
            <p onClick={registerPage}>Don't have an account ?</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
