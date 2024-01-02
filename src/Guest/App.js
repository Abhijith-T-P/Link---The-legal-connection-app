import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import LawyerRegister from "./Pages/LawyerRegister/LawyerRegister";
import LoginTemplate from "./Pages/Home/Template";



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/tem/*" element={<LoginTemplate />} />
      <Route path="/login" element={<Login />} />
        

        <Route path="/Register" element={<Register />} />
        <Route path="/LawyerRegister" element={<LawyerRegister />} />

      </Routes>
    </div>
  );
};

export default App;
