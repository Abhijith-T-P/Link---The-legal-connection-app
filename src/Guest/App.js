import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register/Register";
import LawyerRegister from "./Pages/LawyerRegister/LawyerRegister";
import LoginTemplate from "./Pages/Home/Template";
import PoliceStationRegister from "./Pages/StationRegister/StationRegister";
import Index from "./Pages/index/Index";



const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/*" element={<LoginTemplate />} />
        <Route path="/Index" element={<Index />} />
        

      
        

       

      </Routes>
    </div>
  );
};

export default App;
