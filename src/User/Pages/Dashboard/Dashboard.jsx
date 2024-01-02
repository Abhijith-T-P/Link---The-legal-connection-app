import React from "react";
import "./dashboard.css";
import hbg1 from "../../../Assets/background/signing.jpeg"

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="hero">
        <div className="left">
          <div className="heroText">
            <h3>COMPLETE </h3>
            <h1>LEGAL</h1>
            <h2>Service</h2>
          </div>
        </div>
        <div className="right">
          <img src={hbg1} alt="sliding img" />
        </div>
      </div>
      <main>
        <div className="services">
          <div className="service"><div className="sItem"><img src="" alt="s1" /></div></div>
          <div className="service"><div className="sItem">service</div></div>
          <div className="service"><div className="sItem">service</div></div>
          <div className="service"><div className="sItem">service</div></div>
          <div className="service"><div className="sItem">service</div></div>
          <div className="service"><div className="sItem">service</div></div>
          
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
