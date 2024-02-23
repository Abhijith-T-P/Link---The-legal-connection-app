import React, { useState } from "react";
import { Typography, TextField, Button, Grid } from "@mui/material";

const SearchUserPage = () => {
  const [userId, setUserId] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    // Here you can implement the logic to search for the user with the provided userId
    // For demonstration purposes, let's assume you have a function getUserDetailsById(userId) to fetch user details

    // Example fetch user details function
    const getUserDetailsById = (userId) => {
      // Implement your logic to fetch user details using userId
      // For now, return dummy data
      return {
        id: userId,
        name: "John Doe",
        email: "john.doe@example.com",
        // Add more user details as needed
      };
    };

    // Call the getUserDetailsById function to fetch user details
    const userDetails = getUserDetailsById(userId);

    if (userDetails) {
      // If user details are found, update state with the details
      setUserDetails(userDetails);
      setError("");
    } else {
      // If user details are not found, display an error message
      setError("User not found. Please enter a valid user ID.");
      setUserDetails(null);
    }
  };

  return (
    <div  className="SearchUserPage" style={{padding : "20px 220px"}}>
      <Typography variant="h4" gutterBottom>
        Search User
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <TextField
            label="User ID"
            variant="outlined"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Grid>
      {error && <Typography color="error">{error}</Typography>}
      {userDetails && (
        <div>
          <Typography variant="h6">User Details:</Typography>
          <Typography>ID: {userDetails.id}</Typography>
          <Typography>Name: {userDetails.name}</Typography>
          <Typography>Email: {userDetails.email}</Typography>
          {/* Display more user details as needed */}
        </div>
      )}
    </div>
  );
};

export default SearchUserPage;
