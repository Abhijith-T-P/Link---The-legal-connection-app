import React, { useState, useEffect } from "react";
import { Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "../mainpadding.css"
import law1 from "../../assets/icon/mycase.png";


const MyCasesPage = () => {
  
  return (
    <div className="payfinecontainer" style={{padding:"10px 220px"}}>
      <Typography variant="h4">My Cases</Typography>

      <Grid container spacing={2}>
        <Grid itemxs={12} md={6} lg={4}>
          <div className="finebody">
            <div className="fineHeading">
              <Typography variant="h6">Civil</Typography>
            </div>

            <div className="fineContainer">
              <div className="fineImg">
                <img src={law1} alt="fine img" />
              </div>

              <Typography variant="h6">ID : 123456789</Typography>
              <Typography variant="subtitle1">Abhith saji</Typography>
              <Typography variant="subtitle1">MA,LLB</Typography>
              <Link to="../">
                <Typography variant="subtitle1">View more</Typography>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>

      
    </div>
  );
};

export default MyCasesPage;

