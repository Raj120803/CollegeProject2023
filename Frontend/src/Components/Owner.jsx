import React from 'react';
import { Link } from 'react-router-dom';
import "./owner.css";
import adminlogo from "./image/login_icon.png";
import logo from "./image/gymflex-removebg-preview (1).png"

function Owner() {
  function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "admin" && password === "User0507") {
      alert("Owner login success");
      window.location.reload()
      window.location.href = "/usertable";
    } else {
      alert("Login fail");
    }
  }

  return (
    <div>
      <header>
        <div className="main">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className='back8'>
            <li><Link to="/Login">BACK</Link></li>
          </ul>
        </div>
        <div className="login6">
          <img src={adminlogo} className="icon" alt="Admin Logo" />
          <h1>Login here</h1>
          <form>
            <p>Admin username</p>
            <input type="text" name="" placeholder="Enter Username" id="username" />
            <p>Password</p>
            <input type="password" name="" placeholder="Enter Password" id="password" />
            <input type="button" name="log" id="logbutton" value="Login" onClick={validate} />
          </form>
        </div>
      </header>
    </div>
  );
}

export default Owner;
