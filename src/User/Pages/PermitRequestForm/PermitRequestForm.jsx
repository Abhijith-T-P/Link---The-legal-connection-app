import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../../config/Firebase";
import "./PermitRequestForm.css"
const PermitRequestForm = () => {
  const [permitType, setPermitType] = useState("");
  const [applicantName, setApplicantName] = useState("");
  const [applicantAddress, setApplicantAddress] = useState("");
  const [reason, setReason] = useState("");
  const [permit, setPermit] = useState("");
  const [applicantNumber, setApplicantNumber] = useState([]);

  const handlePermitTypeChange = (event) => {
    setPermitType(event.target.value);
  };
  useEffect(() => {
    getPermit();
  }, []);

  const getPermit = async () => {
    const permitData = await getDocs(collection(db, "Permit"));
    const filteredPermit = await permitData.docs.map((doc, key) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setPermit(filteredPermit);
    console.log(filteredPermit);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add the permit request to the database
      const permitRequestRef = await addDoc(collection(db, "permitRequests"), {
        permitType,
        applicantName,
        applicantNumber,
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
      setApplicantNumber("");
      getPermit();
    } catch (error) {
      console.error("Error submitting permit request:", error);
    }
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit}className="permitForm">
      <div className="permitContainer">
        <Typography variant="h4">Submit Permit Request</Typography>

        <FormControl fullWidth margin="normal">
          <InputLabel id="permit-type-label">Permit Type</InputLabel>
          {Array.isArray(permit) && permit.length > 0 ? (
            <Select
              labelId="permit-type-label"
              id="permit-type-select"
              required
              variant="standard"
              value={permitType}
              onChange={handlePermitTypeChange}
              label="Permit Type"
            >
              {permit.map((row, key) => (
                <MenuItem key={key} value={row.id}>
                  {row.permit}
                </MenuItem>
              ))}
            </Select>
          ) : (
            <Typography variant="body2">Wait...</Typography>
          )}
        </FormControl>

        <TextField
          label="Applicant Name"
          variant="standard"
          required
          fullWidth
          margin="normal"
          value={applicantName}
          onChange={(e) => setApplicantName(e.target.value)}
        />
        <TextField
          label="Applicant Number"
          variant="standard"
          required
          fullWidth
          margin="normal"
          value={applicantNumber}
          onChange={(e) => setApplicantNumber(e.target.value)}
        />

        <TextField
          label="Applicant Address"
          variant="standard"
          required
          fullWidth
          margin="normal"
          value={applicantAddress}
          onChange={(e) => setApplicantAddress(e.target.value)}
        />
        <TextField
          id="standard-multiline-static"
          label="Detail"
          required
          value={reason}
          multiline
          fullWidth
          rows={3}
          onChange={(e) => setReason(e.target.value)}
          variant="standard"
        />
        <div className="Button">

        <Button variant="contained" color="primary" type="submit">
          Submit Permit Request
        </Button>
        </div>
      </div>
    </Box>
  );
};

export default PermitRequestForm;
