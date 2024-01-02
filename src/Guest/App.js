import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register/Register";
import LawyerRegister from "./Pages/LawyerRegister/LawyerRegister";
import LoginTemplate from "./Pages/Home/Template";



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/Login/*" element={<LoginTemplate />} />
      
        

        <Route path="/Register" element={<Register />} />
        <Route path="/LawyerRegister" element={<LawyerRegister />} />

      </Routes>
    </div>
  );
};

export default App;
