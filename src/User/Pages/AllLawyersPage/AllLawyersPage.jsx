import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

// Mock data for demonstration purposes
const lawyersData = [
  { id: 1, name: "Lawyer 1", specialization: "Criminal Defense" },
  { id: 2, name: "Lawyer 2", specialization: "Family Law" },
  { id: 3, name: "Lawyer 3", specialization: "Civil Litigation" },
  // Add more lawyers as needed
];

const AllLawyersPage = () => {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    // Fetch lawyers data from your backend or data source
    // For demonstration, using mock data
    setLawyers(lawyersData);
  }, []);

  return (
    <div className="AllLawyersPage">
      <Typography variant="h4">All Lawyers</Typography>

      <div className="lawyers-list">
        {lawyers.map((lawyer) => (
          <Link to={`/lawyer-details/${lawyer.id}`} key={lawyer.id}>
            <div className="lawyer">
              <Typography variant="subtitle1">{lawyer.name}</Typography>
              <Typography variant="body2">{lawyer.specialization}</Typography>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllLawyersPage;
