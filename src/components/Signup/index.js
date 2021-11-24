import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import './style.css'

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      userName: "",
      email: "",
      password: "",
    };

    //bind functions
    this.changeFullName = this.changeFullName.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.submitSignUp = this.submitSignUp.bind(this);
  }
  

  changeFullName(e) {
    this.setState({
      fullName: e.target.value
    });
  }

  changeUserName(e) {
    this.setState({
      userName: e.target.value,
    });
  }

  changeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  changePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  submitSignUp(event) {
    event.preventDefault();
    const riges = {
      fullName: this.state.fullName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
    };
    // console.log(this.state.fullName.length);
    // console.log(this.state.userName.length);
    // console.log(this.state.email.length);
    // console.log(this.state.password.length);



    if (
      this.state.fullName.length > 0 &&
      this.state.userName.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0
    ) {
      axios
        .post("http://localhost:5000/users/signup", riges)
        .then((res) => console.log(res));

       

      window.location = "/home";

      this.setState({
        fullName: "",
        userName: "",
        email: "",
        password: "",
      });
    } else window.alert("fill all fields");
  }
  logInPage(){
    
  }

  render() {
    return (
      <div>
        <div className="contener">
          <div className="formDiv">
            <form onSubmit={this.submitSignUp}>
            <h2 id="firsth2">SignUp</h2>
              <input
                type="text"
                placeholder="Full Name"
                onChange={this.changeFullName}
                value={this.state.fullName}
                className="form-control form-group"
              />
              <input
                type="text"
                placeholder="User Name"
                onChange={this.changeUserName}
                value={this.state.userName}
                className="form-control form-group input2"
              />
              <input
                type="email"
                placeholder="Email"
                onChange={this.changeEmail}
                value={this.state.email}
                className="form-control form-group input2"
              />
              <input
                type="password"
                placeholder="Password"
                onChange={this.changePassword}
                value={this.state.password}
                className="form-control form-group input2"
              />
              <input
                type="submit"
                className="btn btn-danger btn-block btnL"
                value="SignUp"
              />
               
            </form>
          </div>
        </div>
      </div>
    );
  }
}
