import React from "react";
import "./CaseDashboard.css";

const CaseDashboard = () => {
  return (
    <div className="CaseDashboard">
      <div class="dashboard">
        <div class="service">
          <div class="card-client">
            <div class="service-picture">
              <img src="ser1.jpg" alt="Service 1" />
            </div>
            <p class="name-client">New Case</p>
          </div>
        </div>

        <div class="service">
          <div class="card-client">
            <div class="service-picture">
              <img src="ser2.jpg" alt="Service 2" />
            </div>
            <p class="name-client">Existing Case</p>
          </div>
        </div>

        <div class="service">
          <div class="card-client">
            <div class="service-picture">
              <img src="ser3.jpg" alt="Service 3" />
            </div>
            <p class="name-client">Service Three</p>
          </div>
        </div>

        <div class="service">
          <div class="card-client">
            <div class="service-picture">
              <img src="ser4.jpg" alt="Service 4" />
            </div>
            <p class="name-client">Service Four</p>
          </div>
        </div>

        <div class="service">
          <div class="card-client">
            <div class="service-picture">
              <img src="ser5.jpg" alt="Service 5" />
            </div>
            <p class="name-client">Service Five</p>
          </div>
        </div>

        <div class="service">
          <div class="card-client">
            <div class="service-picture">
              <img src="ser6.jpg" alt="Service 6" />
            </div>
            <p class="name-client">Service Six</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDashboard;
