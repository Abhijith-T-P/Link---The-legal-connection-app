import React from "react";
import "./Topbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

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
        <div className="searchContainer">
          <div className="search">
            <div className="input">
              <input type="text" placeholder="Search..." />
            </div>
            <div className="icon">
              <SearchOutlinedIcon className="icon" />
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
