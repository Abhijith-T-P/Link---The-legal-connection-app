import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../config/Firebase";


const PermitRequestForm = () => {
  const [permitType, setPermitType] = useState("");
  const [applicantName, setApplicantName] = useState("");
  const [applicantAddress, setApplicantAddress] = useState("");
  const [reason, setReason] = useState("");

  const handlePermitTypeChange = (event) => {
    setPermitType(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Add the permit request to the database
      const permitRequestRef = await addDoc(collection(db, "permitRequests"), {
        permitType,
        applicantName,
        applicantAddress,
        reason,
        timestamp: new Date(),
      });

      console.log("Permit request submitted with ID: ", permitRequestRef.id);

      // Clear form fields after submission
      setPermitType("");
      setApplicantName("");
      setApplicantAddress("");
      setReason("");
    } catch (error) {
      console.error("Error submitting permit request:", error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Submit Permit Request</Typography>

      <FormControl fullWidth margin="normal">
        <InputLabel id="permit-type-label">Permit Type</InputLabel>
        <Select
          labelId="permit-type-label"
          id="permit-type-select"
          value={permitType}
          onChange={handlePermitTypeChange}
          label="Permit Type"
        >
          <MenuItem value="Event">Event Permit</MenuItem>
          <MenuItem value="Travel">Travel Permit</MenuItem>
          {/* Add more permit types as needed */}
        </Select>
      </FormControl>

      <TextField
        label="Applicant Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={applicantName}
        onChange={(e) => setApplicantName(e.target.value)}
      />

      <TextField
        label="Applicant Address"
        variant="outlined"
        fullWidth
        margin="normal"
        value={applicantAddress}
        onChange={(e) => setApplicantAddress(e.target.value)}
      />

      <TextField
        label="Reason"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Permit Request
      </Button>
    </div>
  );
};

export default PermitRequestForm;
