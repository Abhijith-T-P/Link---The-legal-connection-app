import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../mainpadding.css"
// Mock data for demonstration purposes
const myLawyersData = [
  { id: 1, name: "My Lawyer 1", specialization: "Criminal Defense" },
  { id: 2, name: "My Lawyer 2", specialization: "Family Law" },
  // Add more lawyers as needed
];

const MyLawyersPage = () => {
  const [myLawyers, setMyLawyers] = useState([]);

  useEffect(() => {
    // Fetch your lawyers data from your backend or data source
    // For demonstration, using mock data
    setMyLawyers(myLawyersData);
  }, []);

  const removeLawyer = (lawyerId) => {
    // Implement logic to remove the lawyer with the given id
    // For demonstration, updating state without backend interaction
    setMyLawyers((prevLawyers) => prevLawyers.filter((lawyer) => lawyer.id !== lawyerId));
  };

  return (
    <div className="maincontainer">
      <Typography variant="h4">My Lawyers</Typography>

      <div className="my-lawyers-list">
        {myLawyers.map((lawyer) => (
          <div key={lawyer.id} className="my-lawyer">
            <Typography variant="subtitle1">{lawyer.name}</Typography>
            <Typography variant="body2">{lawyer.specialization}</Typography>
            <Button onClick={() => removeLawyer(lawyer.id)} variant="outlined">
              Remove
            </Button>
          </div>
        ))}
      </div>

      <div className="add-lawyer-button">
        <Link to="/all-lawyers">
          <Button variant="contained" color="primary">
            Add More Lawyers
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MyLawyersPage;
