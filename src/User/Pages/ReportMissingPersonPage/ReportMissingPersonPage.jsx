import React, { useState } from "react";
import {
  Box,
  Button,
  
  TextField,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { db, storage } from "../../../config/Firebase";

import "./ReportMissingPersonPage.css";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const ReportMissingPersonPage = () => {
  const [missingPersonName, setMissingPersonName] = useState("");
  const [phone, setPhone] = useState("");
  
  const [details, setDetails] = useState("");
  const [photo, setPhoto] = useState(null);

  const [age, setAge] = useState("");

  const handleFileChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!photo) return(alert("Please enter a photo"));
      // Upload photo to storage
      const photoMetadata = {
        contentType: photo.type,
      };
      const fileStorageRef = ref(storage,"missingperson/"+photo.name);
      await  uploadBytesResumable(fileStorageRef,photo,photoMetadata)

      // Get the download URL of the uploaded photo
      const photoURL = await getDownloadURL(fileStorageRef);
      const uid = sessionStorage.getItem("SessionId");

      // Add missing person report to the database
      await addDoc(collection(db,"MissingPerson"),{
        UserID: uid,
        missingPersonName,
        phone,
        age,
        details,
        photoURL,
        timestamp: new Date(),
      });

      // Reset form after submission
      setMissingPersonName("");
      setPhone("");
      setDetails("");
      setAge("");
      setPhoto(null);

      alert("Missing person report submitted successfully!");
    } catch (error) {
      console.error("Error submitting missing person report:", error.message);
      alert("Error submitting missing person report. Please try again.");
    }
  };

  return (
    <Box className="MissingpersonContainer" component='form' onSubmit={ handleSubmit }>
      <div className="MPItems">
        <Typography variant="h4" sx={{ padding: "25px 0px" }}>
          Report Missing Person
        </Typography>
        <div>
          <TextField
            className="name"
            label="Missing Person Name"
            variant="standard"
            required
            sx={{width:"60%"}}
            margin="normal"
            value={missingPersonName}
            onChange={(e) => setMissingPersonName(e.target.value)}
          />

          <TextField
            label="Age"
            variant="standard"
            sx={{ mx: "15px", width: "20%" }}
            margin="normal"
            required
            type="number"
            className="agey"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Phone Number"
            variant="standard"
            required
            sx={{width:"83%"}}
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Details"
            variant="standard"
            multiline
            required
            rows={3}
            sx={{width:"83%"}}
            margin="normal"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>

        <input
          accept="image/*"
          style={{ display: "none" }}
          id="photo-upload"
          
          type="file"
          onChange={handleFileChange}
        />
        

        <Button variant="contained" color="primary" type="submit">
          Submit Report
        </Button>
      </div>
      <div className="imageUpload">
      <label htmlFor="photo-upload">
          <div className="photo_btn">
            <Button
            required
              component="span"
              variant="contained"
              sx={{
                width:300,height:70
              }}
              startIcon={<CloudUploadIcon />}
              margin="normal"
            >
              Upload Photo
            </Button>
          </div>
        </label>
        {photo && <Typography>{photo.name}</Typography>}
      </div>
   </Box>
  );
};

export default ReportMissingPersonPage;
