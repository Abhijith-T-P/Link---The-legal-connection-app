import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemText, Grid } from "@mui/material";
import "./LawyerAcceptedCasesPage.css";
const LawyerAcceptedCasesPage = ({ lawyerId }) => {
  // Assume you have a function to fetch the lawyer's accepted cases
  const fetchAcceptedCases = async () => {
    // Your logic to fetch accepted cases from the database based on the lawyerId
    // Example: const acceptedCases = await getLawyerAcceptedCases(lawyerId);
    // Set the acceptedCases state with the fetched data
    // setAcceptedCases(acceptedCases);
  };

  useEffect(() => {
    // Fetch lawyer's accepted cases when the component mounts
    fetchAcceptedCases();
  }, []);

  // Assume acceptedCases is an array of case objects with properties like caseId and caseTitle
  const acceptedCases = [
    { caseId: 1, caseTitle: "Case 1" },
    { caseId: 2, caseTitle: "Case 2" },
    { caseId: 3, caseTitle: "Case 3" },
    // Add more accepted cases as needed
  ];

  return (
    <div className="LawyerAcceptedCasesPage" style={{ padding: "10px 220px" ,paddingBottom:"50px" }}>
      <div className="Title">

      <Typography variant="h4">Accepted Cases</Typography>
      </div>

      {/* {acceptedCases.length > 0 ? (
        <List>
          {acceptedCases.map((caseItem) => (
            <ListItem key={caseItem.caseId}>
              <ListItemText primary={caseItem.caseTitle} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="subtitle1">No accepted cases available.</Typography>
      )} */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <div className="acepted-cases">
            <div className="acepted-cases-list">
              <Typography variant="h6">Client Name</Typography>
              <Typography variant="subtitle1">Case ID : 123456789</Typography>
              <Typography variant="subtitle1">Category</Typography>
              <Typography variant="subtitle1">Subcategory</Typography>
              <Typography variant="subtitle1">View more</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div className="acepted-cases">
            <div className="acepted-cases-list">
              <Typography variant="h6">Client Name</Typography>
              <Typography variant="subtitle1">Case ID : 123456789</Typography>
              <Typography variant="subtitle1">Category</Typography>
              <Typography variant="subtitle1">Subcategory</Typography>
              <Typography variant="subtitle1">View more</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div className="acepted-cases">
            <div className="acepted-cases-list">
              <Typography variant="h6">Client Name</Typography>
              <Typography variant="subtitle1">Case ID : 123456789</Typography>
              <Typography variant="subtitle1">Category</Typography>
              <Typography variant="subtitle1">Subcategory</Typography>
              <Typography variant="subtitle1">View more</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div className="acepted-cases">
            <div className="acepted-cases-list">
              <Typography variant="h6">Client Name</Typography>
              <Typography variant="subtitle1">Case ID : 123456789</Typography>
              <Typography variant="subtitle1">Category</Typography>
              <Typography variant="subtitle1">Subcategory</Typography>
              <Typography variant="subtitle1">View more</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LawyerAcceptedCasesPage;
