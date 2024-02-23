import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

const MessageUserPage = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearchUser = () => {
    // Here you will implement the logic to search for the user using the userId
    // This is where you will interact with Firebase to search for the user based on the userId
    // For the sake of this example, let's assume you have a dummy user data object
    const dummyUserData = {
      id: "123456",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      address: "123 Main St, City, Country",
    };

    // Set the userData state to the dummy user data
    setUserData(dummyUserData);
  };

  return (
    <div className="MessageUserPage" style={{padding : "20px 220px"}}>
      <Typography variant="h4">Message User</Typography>
      <TextField
        label="User ID"
        variant="outlined"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearchUser}>
        Search
      </Button>
      {userData && (
        <div>
          <Typography variant="h5">User Details</Typography>
          <Typography>Name: {userData.name}</Typography>
          <Typography>Email: {userData.email}</Typography>
          <Typography>Phone: {userData.phone}</Typography>
          <Typography>Address: {userData.address}</Typography>
          {/* Here you can add a message input field and send button */}
        </div>
      )}
    </div>
  );
};

export default MessageUserPage;
