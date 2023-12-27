import React from "react";
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import { Route, Routes } from "react-router-dom";
import Test from "../Test/Test";
import Category from "../Category/Category";
import Casetype from "../CaseType/Casetype";
import District from "../District/District";
import Jurisdiction from "../Jurisdiction/Jurisdiction";
import Place from "../Place/Place";

const Home = () => {
  return (
    <div className="Home">
      <div className="Container">
        <Topbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/CaseType" element={<Casetype />} />
            <Route path="/District" element={<District />} />
            <Route path="/Jurisdiction" element={<Jurisdiction />} />
            <Route path="/Place" element={<Place />} />
          
          </Routes>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Home;
