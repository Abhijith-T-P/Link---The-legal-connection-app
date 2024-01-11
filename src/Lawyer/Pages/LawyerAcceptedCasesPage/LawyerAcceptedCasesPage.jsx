import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

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
    <div className="LawyerAcceptedCasesPage">
      <Typography variant="h4">Accepted Cases</Typography>

      {acceptedCases.length > 0 ? (
        <List>
          {acceptedCases.map((caseItem) => (
            <ListItem key={caseItem.caseId}>
              <ListItemText primary={caseItem.caseTitle} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="subtitle1">No accepted cases available.</Typography>
      )}
    </div>
  );
};

export default LawyerAcceptedCasesPage;
