import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/Firebase";


const SetVisitDatePass = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [visitDate, setVisitDate] = useState("");

  useEffect(() => {
    // Fetch the list of users from the database
    const fetchUsers = async () => {
      try {
        const usersRef = collection(db, "users");
        const usersSnapshot = await getDocs(usersRef);
        const userList = usersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userList);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleSetVisitDate = () => {
    // Implement your logic to set the visit date
    console.log(`Setting visit date ${visitDate} for user ${selectedUser}`);
  };

  return (
    <div>
      <Typography variant="h4">Set Visit Date for Passport Verification</Typography>

      <FormControl fullWidth margin="normal">
        <InputLabel id="user-label">Select User</InputLabel>
        <Select
          labelId="user-label"
          id="user-select"
          value={selectedUser}
          onChange={handleUserChange}
          label="Select User"
        >
          {users.map((user) => (
            <MenuItem key={user.id} value={user.id}>
              {user.fullName} {/* Update with the correct property name */}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label="Visit Date"
        type="date"
        fullWidth
        margin="normal"
        value={visitDate}
        onChange={(e) => setVisitDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Button variant="contained" color="primary" onClick={handleSetVisitDate}>
        Set Visit Date
      </Button>
    </div>
  );
};

export default SetVisitDatePass;
