
import "./Home.css";

import Topbar from "../../Components/Topbar/Topbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../../Components/Footer/Footer";
import CaseDashboard from "../CaseDashboard/CaseDashboard";


const Home = () => {
  
  return (
    <div>
    <div className="Home">
      <div className="Container">
        <Topbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/CaseDashboard" element={<CaseDashboard />} />
          </Routes>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Home;
