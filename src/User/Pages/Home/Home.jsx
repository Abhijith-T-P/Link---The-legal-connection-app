import React from "react";
import "./Home.css";

import Topbar from "../../Components/Topbar/Topbar";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./Dashboard/Dashboard";


const Home = () => {
  return (
    <div className="Home">
      <div className="Container">
        <Topbar />
        <div className="content">
          <Routes>
           <Route path="/" element={<Dashboard/>}/>
          
          </Routes>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
