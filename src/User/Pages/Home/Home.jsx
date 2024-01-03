
import "./Home.css";

import Topbar from "../../Components/Topbar/Topbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import PermitRequestForm from "../PermitRequestForm/PermitRequestForm";
import Footer from "../../../PoliceStation/Components/Footer/Footer";
import EmergencyRequestPage from "../EmergencyRequestPage/EmergencyRequestPage";


const Home = () => {
  
  return (
    <div>


    <div className="Home">
      <div className="Container">
        <Topbar />
        <div className="content">
          <Routes>
          <Route path="/" element={<Dashboard />} />
            <Route path="/permit" element={<PermitRequestForm />} />
            <Route path="/EmergencyRequest" element={<EmergencyRequestPage />} />

          </Routes>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Home;
