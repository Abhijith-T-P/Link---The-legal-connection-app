import React from "react";
import { Route, Routes } from "react-router-dom";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./Pages/Home/Home";







const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Topbar" element={<Topbar />} />
     
    
       

      </Routes>
    </div>
  );
};

export default App;
