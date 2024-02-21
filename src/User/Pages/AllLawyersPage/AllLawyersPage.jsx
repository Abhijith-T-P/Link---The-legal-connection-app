import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import "../mainpadding.css"
import law1 from "../../assets/icon/mylawyer.png";



const AllLawyersPage = () => {
  

  return (
    <div className="maincontainer">
      <Typography variant="h4">All Lawyers</Typography>

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
              <Button
                  variant="contained"
                  color="primary"
                  // onClick={handleSubmit}
                >
                  request
                </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AllLawyersPage;
