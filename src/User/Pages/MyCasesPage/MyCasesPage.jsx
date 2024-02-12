import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../mainpadding.css"
// Mock data for demonstration purposes
const myCasesData = [
  { id: 1, caseNo: "ABC123", lawyerName: "My Lawyer 1", caseDetails: "Details of Case 1" },
  { id: 2, caseNo: "XYZ456", lawyerName: "My Lawyer 2", caseDetails: "Details of Case 2" },
  // Add more cases as needed
];

const MyCasesPage = () => {
  const [myCases, setMyCases] = useState([]);

  useEffect(() => {
    // Fetch your cases data from your backend or data source
    // For demonstration, using mock data
    setMyCases(myCasesData);
  }, []);

  const removeCase = (caseId) => {
    // Implement logic to remove the case with the given id
    // For demonstration, updating state without backend interaction
    setMyCases((prevCases) => prevCases.filter((myCase) => myCase.id !== caseId));
  };

  return (
    <div className="payfinecontainer">
      <Typography variant="h4">My Cases</Typography>

      <div className="my-cases-list">
        {myCases.map((myCase) => (
          <div key={myCase.id} className="my-case">
            <Typography variant="subtitle1">Case No: {myCase.caseNo}</Typography>
            <Typography variant="body2">Lawyer: {myCase.lawyerName}</Typography>
            <Typography variant="body2">Details: {myCase.caseDetails}</Typography>
            <hr />
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default MyCasesPage;

