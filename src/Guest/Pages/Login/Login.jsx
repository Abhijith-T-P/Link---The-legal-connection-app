import React from "react";
import "./login.css";
import { Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mainlogin">

   
    <div className="leftContainer">
      <div className="h1input">
        <Typography variant="h1">Login</Typography>
      </div>
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
          <Typography variant="subtitle2">Dont have an account .</Typography>{" "}
          <div className="change">
            <span>
              <Link to="../r">Join Now</Link>{" "}
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
     </div>
  );
};

export default Login;
