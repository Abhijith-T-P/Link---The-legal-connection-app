import React from "react";
import "./Topbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Images/Logo/LinkLogo2.svg"

const Topbar = () => {
  return (
    <div className="AdminTopbar">
      <div className="container">
        <div className="items">
          <div className="logo">
            <img src={logo} alt="logo" />
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
