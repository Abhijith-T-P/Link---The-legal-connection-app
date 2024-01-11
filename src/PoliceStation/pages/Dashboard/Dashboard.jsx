import "./dashboard.css";
import hbg1 from "../../assets/images/police.jpg";
import bgp1 from "../../assets/images/policebg.mp4";
import ser1 from "../../assets/icon/alert-em.png";
import ser2 from "../../assets/icon/pasport.png";
import ser3 from "../../assets/icon/fileCase.png";
import ser4 from "../../assets/icon/fine.png";
import ser5 from "../../assets/icon/lawyer.png";
import ser6 from "../../assets/icon/missing.png";
import ser7 from "../../assets/icon/permit.png";
import ser8 from "../../assets/icon/calender.png";
import ser9 from "../../assets/icon/policeStation.png";
import { Typography } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import CaseDashboard from "../CaseDashboard/CaseDashboard";


const Dashboard = () => {
 
  return (
    <div className="Dashboard">
      <div className="hero">
        <div className="left">
          <div className="heroText">
            <h4>STREAMLINE </h4>
            <h1>LEGAL</h1>
            <h5>COLABRATION</h5>
          </div>
        </div>
        <div className="right">
        <video src={bgp1} type="video/mp4" playsinline="playsinline" autoPlay muted loop
  style={{
    
  }}
></video>
        </div>
      </div>
      <main>
        <div className="services">
          <Link to= "./CaseDashboard">

          <div className="service">
            <div class="card-client">
              <div class="Service-picture">
                <img src={ser6} alt="img" />
              </div>
              <p class="name-client"> CASE DASHBOARD</p>
            </div>
          </div>
          </Link>
         
         
          <Link to="./Passport">

          <div className="service">
            <div class="card-client">
              <div class="Service-picture">
                <img src={ser2} alt="img" />
              </div>
              <p class="name-client"> Pasport verification</p>
            </div>
          </div>
          </Link>
          <div className="service">
          <Link to="./PermitApprovalPage">

            <div class="card-client">
              <div class="Service-picture">
                <img src={ser7} alt="img" />
              </div>
              <p class="name-client"> Permit Request</p>
            </div>
          </Link>
          </div>
          <div className="service">
            <div class="card-client">
              <div class="Service-picture">
                <img src={ser8} alt="img" />
              </div>
              <p class="name-client"> Upcoming events</p>
            </div>
          </div>
          <Link to="./PoliceEmergencyRequestsPage">

          <div className="service">
            <div class="card-client">
              <div class="Service-picture">
                <img src={ser1} alt="img" />
              </div>
              <p class="name-client"> Emergency Request</p>
            </div>
          </div>
          </Link>
        </div>
      </main>
      
        
    </div>
  );
};

export default Dashboard;
