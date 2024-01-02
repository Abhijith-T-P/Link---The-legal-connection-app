import React from "react";
import "./login.css";
import { Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="loginCard">
        <div className="right">
          <div className="welcome">
            <Typography variant="h4">Welcome to</Typography>
            <Typography variant="h1"> LINK</Typography>
          </div>
        </div>
        <div className="left">
          <div className="leftContainer">
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
                  Dont have an account .
                </Typography>{" "}
                <div className="change">
                  <span>
                    <Link to="../Register">Join Now</Link>{" "}
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
