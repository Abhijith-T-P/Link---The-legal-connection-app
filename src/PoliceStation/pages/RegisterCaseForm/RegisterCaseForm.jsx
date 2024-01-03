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
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./RegisterCaseForm.css";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const generateCaseNumber = () => {
  // Generate a 6-digit random number as a case number
  return Math.floor(100000 + Math.random() * 900000);
};

const RegisterCaseForm = () => {
  const [caseTitle, setCaseTitle] = useState("");
  const [caseType, setCaseType] = useState("");
  const [caseDescription, setCaseDescription] = useState("");
  const [caseFile, setCaseFile] = useState(null);
  const [generatedCaseNumber, setGeneratedCaseNumber] = useState(null);

  const handleCaseTypeChange = (event) => {
    setCaseType(event.target.value);
  };

  const handleFileChange = (event) => {
    setCaseFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    // Generate a 6-digit case number
    const caseNumber = generateCaseNumber();
    setGeneratedCaseNumber(caseNumber);

    // Perform actions on form submission
    console.log("Submitting case registration form...");
    console.log("Case Number:", caseNumber);
    console.log("Case Title:", caseTitle);
    console.log("Case Type:", caseType);
    console.log("Case Description:", caseDescription);
    console.log("Case File:", caseFile);
    // You can add logic to send this data to a backend, etc.
  };

  return (
    <div className="register-case-form">
      <Typography variant="h4">Register a Case</Typography>

      <TextField
        label="Case Title"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setCaseTitle(e.target.value)}
      />

      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel id="case-type-label">Case Type</InputLabel>
        <Select
          labelId="case-type-label"
          id="case-type-select"
          value={caseType}
          onChange={handleCaseTypeChange}
          label="Case Type"
        >
          <MenuItem value="Criminal">Criminal</MenuItem>
          <MenuItem value="Civil">Civil</MenuItem>
          <MenuItem value="Family">Family</MenuItem>
          {/* Add more case types as needed */}
        </Select>
      </FormControl>

      <TextField
        label="Case Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        onChange={(e) => setCaseDescription(e.target.value)}
      />

      <input
        accept="application/pdf"
        style={{ display: "none" }}
        id="case-file-upload"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="case-file-upload">
        <Button
          component="span"
          variant="outlined"
          startIcon={<CloudUploadIcon />}
          margin="normal"
        >
          Upload Case Documents
        </Button>
      </label>
      {caseFile && <Typography>{caseFile.name}</Typography>}

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Register Case
      </Button>

      {generatedCaseNumber && (
        <Typography variant="subtitle1" style={{ marginTop: "10px" }}>
          Your Case Number: {generatedCaseNumber}
        </Typography>
      )}

      <div className="link-container">
        <Typography variant="subtitle2">
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </div>
    </div>
  );
};

export default RegisterCaseForm;
