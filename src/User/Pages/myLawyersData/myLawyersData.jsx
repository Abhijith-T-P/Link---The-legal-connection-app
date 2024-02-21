import React, { useState, useEffect } from "react";
import { Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "../mainpadding.css";
import law1 from "../../assets/icon/mylawyer.png";

// Mock data for demonstration purposes

const MyLawyersPage = () => {
  return (
    <div className="maincontainer">
      <Typography variant="h4">My Lawyers</Typography>
      <Grid container spacing={2}>
        <Grid itemxs={12} md={6} lg={4}>
          <div className="finebody">
            <div className="fineHeading">
              <Typography variant="h6">Abhith Saji</Typography>
            </div>

            <div className="fineContainer">
              <div className="fineImg">
                <img src={law1} alt="fine img" />
              </div>

              <Typography variant="h6">Criminal</Typography>
              <Typography variant="subtitle1">MA,LLB</Typography>
              <Typography variant="subtitle1">ID : 123456789</Typography>
              <Link to="../">
                <Typography variant="subtitle1">View Profile</Typography>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>

      <div className="add-lawyer-button">
        <Link to="/all-lawyers">
          <Button variant="contained" color="primary">
            Add Lawyers
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MyLawyersPage;
