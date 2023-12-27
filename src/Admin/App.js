import React from "react";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";



const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home />} />
        
       
        
      </Routes>
    </div>
  );
};

export default App;
