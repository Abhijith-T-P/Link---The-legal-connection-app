import React from "react";
import "./Topbar.css";

import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Topbar = () => {
  return (
    <div className="Topbar">
      <div className="container">
        <div className="items">
          <div className="logo">
            <img src="https://seeklogo.com/images/M/minimalist-leaf-logo-AA0BE382CD-seeklogo.com.png" alt="logo" />
          </div>
          <nav>
            <div className="nav"><Link to="/Product">Product</Link>  </div>
            <div className="nav"><Link to="/">Home</Link> </div>
            <div className="nav">Home</div>
          </nav>
        </div>
        <div className="UserContainer">
          <div className="User">
          <div className="Detail">
            <div className="userName">
              <Typography variant="subtitle1">Usernamame</Typography>
              <Typography variant="subtitle2">User</Typography>
          </div>
            </div>
            <div className="logo">
              <img src="https://source.unsplash.com/random" alt="logo" />
            </div>
           
          </div>
        </div>
      </div>
      <div className="containerBottom">
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>User</li>
            <li>Police</li>
            <li>Lawyer</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Topbar;
