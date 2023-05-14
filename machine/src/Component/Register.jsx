import React, { useState } from "react";
import "./CSS/style.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const route = useNavigate();

  const [userData, setuserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submmit = (e) => {
    // alert("ok");
    e.preventDefault();

    let dataFromLs = JSON.parse(localStorage.getItem("T_userData")) || [];
    let flag = false;

    for (let i = 0; i < dataFromLs.length; i++) {
      if (dataFromLs[i].email === userData.email) {
        flag = true;
      }
    }

    if (flag) {
      alert("User Already Exsited");
    } 
    else if(userData.password.length <8){
      alert("Password should be 8 character")

    }
    else {
      dataFromLs.push(userData);
      localStorage.setItem("T_userData", JSON.stringify(dataFromLs));
      setuserData({ username: "", email: "", number:"", password: "" });
      route('/login')
      alert("Login Sucessful");
    }
  };

  const fectForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setuserData({ ...userData, [name]: value });
  };

  return (
    <>
      <div id="register">
        <div className="display">
          <div className="register_left">
            <div className="register_left_top display">
              <p>Benefits of being a member</p>
            </div>
            <div className="register_left_bot display">
              <ul className="display">
                <li>
                  Find something to watch on your subscribed streaming services
                </li>
                <li>
                  Find something to watch on your subscribed streaming services
                </li>
                <li>
                  Find something to watch on your subscribed streaming services
                </li>
                <li>
                  Find something to watch on your subscribed streaming services
                </li>
                <li>
                  Find something to watch on your subscribed streaming services
                </li>
                <li>
                  Find something to watch on your subscribed streaming services
                </li>
              </ul>
            </div>
          </div>

          <div className="register_right display">
            <div className="display">
              <p>Sign up for an account</p>
              <p>
                Signing up for an account is free and easy. Fill out the form
                below to get started. JavaScript is required to to continue.
              </p>
            </div>

            <form
              className="display"
              onSubmit={(e) => {
                submmit(e);
              }}
            >
              <label>Username</label>
              <input
                type="text"
                onChange={(e) => {
                  fectForm(e);
                }}
                name="username"
                value={userData.username}
              />

              <label>Email</label>
              <input
                type="email"
                onChange={(e) => {
                  fectForm(e);
                }}
                name="email"
                value={userData.email}
              />

              <label>Number</label>
              <input
                type="text"
                onChange={(e) => {
                  fectForm(e);
                }}
                name="number"
                value={userData.number}
              />

              <label>Password </label>
              <input
                type="text"
                onChange={(e) => {
                  fectForm(e);
                }}
                name="password"
                value={userData.password}
              />

              <label>
                By clicking the "Sign up" button below, I certify that I have
                read and agree to the TMDB terms of use and privacy policy.
              </label>

              <input type="submit" value="Sign Up" />

              <label>
                Already have an account <em onClick={()=> {route('/login')}} className="log_link">click here</em> to Log in.
              </label>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
