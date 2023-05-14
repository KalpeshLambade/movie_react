import React, { useState } from "react";
import "./CSS/style.css";
import { useNavigate } from "react-router-dom";
import { AuthContax } from "./Reducer/AuthProvider";
import { useContext } from "react";

const Login = () => {
  const { login, state } = useContext(AuthContax);
  // console.log(state.user);

  const route = useNavigate();

  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  const submmit = (e) => {
    let dataFromLs = JSON.parse(localStorage.getItem("T_userData"));
    let flag = false;
    let tempData;

    for (let i = 0; i < dataFromLs.length; i++) {
      if (
        dataFromLs[i].email === userData.email &&
        dataFromLs[i].password === userData.password
      ) {
        flag = true;
        tempData = dataFromLs[i];
      }
    }

    if (flag) {
      // login({user:userData.username});
      localStorage.setItem("T_currentUser", JSON.stringify(tempData));
      route("/");
      alert("Login sucessful");
    } else {
      alert("Login unsucssful");
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
          <div className="register_right display">
            <div className="display">
              <p>Login</p>
            </div>

            <form
              className="display"
              onSubmit={(e) => {
                submmit(e);
              }}
            >
              <label>Email</label>
              <input
                type="email"
                onChange={(e) => {
                  fectForm(e);
                }}
                name="email"
                value={userData.email}
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
                By clicking the "Log up" button below, I certify that I have
                read and agree to the TMDB terms of use and privacy policy.
              </label>

              <input type="submit" value="Login" />
              <label>
                Don't have an account{" "}
                <em
                  onClick={() => {
                    route("/");
                  }}
                  className="log_link"
                >
                  click here
                </em>{" "}
                to Sign up.
              </label>
            </form>
            {/* <p>
                Hello{state.user.username}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
