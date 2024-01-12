import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { db, storage } from "../../../config/Firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";


import "./PoliceComplaintPage.css"
const PoliceComplaintPage = () => {
  const [complainantName, setComplainantName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [complaintDescription, setComplaintDescription] = useState("");
  const [documents, setDocuments] = useState(null);

  const handleFileChange = (event) => {
    setDocuments(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      var documentURLs = "";
      // Upload documents to storage
      if (documents) {
   
        const documentMetadata = {
          contentType: documents.type,  
        };
        const fileStorageRef = ref(
          storage,
          "policeComplaintDocument/"
          +documents.name
        );

        await uploadBytesResumable(fileStorageRef, documents, documentMetadata);
        documentURLs = await getDownloadURL(fileStorageRef);
      }
      // Add police complaint to the database
      await addDoc(collection(db, "PoliceComplaint"), {
        complainantName,
        contactNumber,
        documentURLs,
        vStatus:0,
        complaintDescription,
        timestamp: new Date(),
      });

      // Reset form after submission
      setComplainantName("");
      setContactNumber("");
      setComplaintDescription("");
      setDocuments(null);

      alert("Police complaint filed successfully!");
    } catch (error) {
      console.error("Error filing police complaint:", error.message);
      alert("Error filing police complaint. Please try again.");
    }
  };

  return (
    <Box component= "form"  onSubmit={handleSubmit} className="PoliceComplaintContainer">
      <div className="complaintitem">
        <Typography variant="h4">File a Police Complaint</Typography>

        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          value={complainantName}
          onChange={(e) => setComplainantName(e.target.value)}
        />

        <TextField
          label="Contact Number"
          variant="outlined"
          fullWidth
          type="number"
          margin="normal"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />

        <TextField
          label="Complaint Description"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
          margin="normal"
          value={complaintDescription}
          onChange={(e) => setComplaintDescription(e.target.value)}
        />

        <input
          style={{ display: "none" }}
          id="document-upload"
          type="file"
          onChange={handleFileChange}
        />
        
        <Button variant="contained" color="primary" type="submit">
          File Complaint
        </Button>
      </div>
      <div className="upload">
        
      <label htmlFor="document-upload">
          <Button
            required
            component="span"
            variant="contained"
            sx={{
              width: 300,
              height: 70,
            }}
            startIcon={<CloudUploadIcon />}
            margin="normal"
          >
            Upload Document if any
          </Button>
        </label>
      </div>
    </Box>
  );
};

export default PoliceComplaintPage;
