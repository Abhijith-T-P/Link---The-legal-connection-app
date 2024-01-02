import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./Admin/App";
import Guest from "./Guest/App";
import User from "./User/App";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/Admin*" element={<Admin />} />
        <Route path="/*" element={<Guest />} />
        <Route path="/User*" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
