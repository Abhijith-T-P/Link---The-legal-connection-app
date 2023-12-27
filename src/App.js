import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./Admin/App";
import Login from "./Guest/Login/Login";
import Register from "./Guest/Register/Register";
import LawyerRegister from "./Guest/LawyerRegister/LawyerRegister";



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/Admin*" element={<Admin />} />
        <Route path="/" element={<Login />} />
        <Route path="/UserRegister" element={<Register />} />
        <Route path="/LawyerRegister" element={<LawyerRegister />} />

      </Routes>
    </div>
  );
};

export default App;
