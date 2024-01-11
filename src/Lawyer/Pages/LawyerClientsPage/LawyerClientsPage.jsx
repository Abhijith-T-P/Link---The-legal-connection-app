import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
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

  // Assume clients is an array of client objects with properties like clientId and clientName
  const clients = [
    { clientId: 1, clientName: "Client 1" },
    { clientId: 2, clientName: "Client 2" },
    { clientId: 3, clientName: "Client 3" },
    // Add more clients as needed
  ];

  return (
    <div className="LawyerClientsPage">
      <Typography variant="h4">Your Clients</Typography>

      {clients.length > 0 ? (
        <List>
          {clients.map((client) => (
            <ListItem key={client.clientId}>
              <ListItemText primary={client.clientName} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="subtitle1">No clients available.</Typography>
      )}

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
