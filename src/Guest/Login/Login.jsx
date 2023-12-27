import React from "react";
import "./login.css";
import { Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="conatiner">
        <div className="loginCard">
          <div className="heading">
            <div className="logo">
              <img src="https://seeklogo.com/images/M/minimalist-leaf-logo-AA0BE382CD-seeklogo.com.png" alt="logo" />
            </div>
            <Typography variant="h3"> Login</Typography>
          </div>
          <div className="content">
            <div className="input">
              <TextField
                id="standard-basic"
                label="Username/Email"
                variant="standard"
                type="text"
              />
            </div>
            <div className="input">
              <TextField
                id="standard-basic"
                label="Password...."
                variant="standard"
                type="password"
              />
            </div>
            <div className="button">
              
              <Button variant="outlined">Login</Button>
            </div>
            <div className="linkContainer">

            <div className="link">
              
              <Typography variant="subtitle2">
                Dont have an account
              </Typography>{" "}
              <div className="change"><span><Link to="../UserRegister">Join Now</Link>  </span> </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
