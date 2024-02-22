import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemText, Grid } from "@mui/material";
import "./LawyerClientsPage.css";
import { Link } from "react-router-dom";

const LawyerClientsPage = ({ lawyerId }) => {
  // Assume you have a function to fetch the lawyer's clients
  const fetchLawyerClients = async () => {
    // Your logic to fetch clients from the database based on the lawyerId
    // Example: const clients = await getLawyerClients(lawyerId);
    // Set the clients state with the fetched data
    // setClients(clients);
  };

  useEffect(() => {
    // Fetch lawyer's clients when the component mounts
    fetchLawyerClients();
  }, []);

  return (
    <div className="LawyerClientsPage" style={{ padding: "10px 220px" }}>
      <Typography variant="h4">Your Clients</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
        {/* {clients.length > 0 ? ( */}
        <List>
          <div className="clientsContainer">
            <div className="client-list">
              <div className="client-img">
                <img src="ds" alt="img" />
              </div>
              <div className="client-detail">
                <Typography variant="h6">Client Name</Typography>
                <Typography variant="subtitle1">ID :1234567</Typography>
                <Typography variant="subtitle1">
                  Phone : +91 9876543210
                </Typography>
                <Typography variant="subtitle1">Email : </Typography>
                <Typography variant="subtitle1">Address : </Typography>
              </div>
            </div>
          </div>
        </List>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        {/* {clients.length > 0 ? ( */}
        <List>
          <div className="clientsContainer">
            <div className="client-list">
              <div className="client-img">
                <img src="ds" alt="img" />
              </div>
              <div className="client-detail">
                <Typography variant="h6">Client Name</Typography>
                <Typography variant="subtitle1">ID :1234567</Typography>
                <Typography variant="subtitle1">
                  Phone : +91 9876543210
                </Typography>
                <Typography variant="subtitle1">Email : </Typography>
                <Typography variant="subtitle1">Address : </Typography>
              </div>
            </div>
          </div>
        </List>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        {/* {clients.length > 0 ? ( */}
        <List>
          <div className="clientsContainer">
            <div className="client-list">
              <div className="client-img">
                <img src="ds" alt="img" />
              </div>
              <div className="client-detail">
                <Typography variant="h6">Client Name</Typography>
                <Typography variant="subtitle1">ID :1234567</Typography>
                <Typography variant="subtitle1">
                  Phone : +91 9876543210
                </Typography>
                <Typography variant="subtitle1">Email : </Typography>
                <Typography variant="subtitle1">Address : </Typography>
              </div>
            </div>
          </div>
        </List>
        </Grid><Grid item xs={12} md={6} lg={4}>
        {/* {clients.length > 0 ? ( */}
        <List>
          <div className="clientsContainer">
            <div className="client-list">
              <div className="client-img">
                <img src="ds" alt="img" />
              </div>
              <div className="client-detail">
                <Typography variant="h6">Client Name</Typography>
                <Typography variant="subtitle1">ID :1234567</Typography>
                <Typography variant="subtitle1">
                  Phone : +91 9876543210
                </Typography>
                <Typography variant="subtitle1">Email : </Typography>
                <Typography variant="subtitle1">Address : </Typography>
              </div>
            </div>
          </div>
        </List>
        </Grid>
      </Grid>
      {/* ) : (
        <Typography variant="subtitle1">No clients available.</Typography>
      )} */}

      <div className="add-client-button">
        <Link to="/lawyer/add-client">
          {/* Provide a link to add new clients */}
          <Typography variant="subtitle2">Add New Client</Typography>
        </Link>
      </div>
    </div>
  );
};

export default LawyerClientsPage;
