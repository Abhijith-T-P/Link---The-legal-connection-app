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
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { db, storage } from "../../../config/Firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

import "./PoliceComplaintPage.css";

const PoliceComplaintPage = () => {
  const [complainantName, setComplainantName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [complaintDescription, setComplaintDescription] = useState("");
  const [documents, setDocuments] = useState(null);
  const [caseCategory, setCaseCategory] = useState("");
  const [subCaseCategory, setSubCaseCategory] = useState("");
  const [showCaseCategory, setShowCaseCategory] = useState([]);
  const [displaySubcat, setDisplaySubcat] = useState([]);

  const handleFileChange = (event) => {
    setDocuments(event.target.files[0]);
  };

  useEffect(() => {
    handleCaseCategoryChange();
    getCaseCat();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      var documentURLs = "";
      // Upload documents to storage
      if (documents) {
        const documentMetadata = {
          contentType: documents.type,
        };
        const fileStorageRef = ref(
          storage,
          "policeComplaintDocument/" + documents.name
        );

        await uploadBytesResumable(fileStorageRef, documents, documentMetadata);
        documentURLs = await getDownloadURL(fileStorageRef);
      }
      // Add police complaint to the database
      const uid = sessionStorage.getItem("SessionId");
      await addDoc(collection(db, "PoliceComplaint"), {
        UserID: uid,
        complainantName,
        contactNumber,
        documentURLs,
        vStatus: 0,
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

  const getCaseCat = async () => {
    try {
      const CaseCat = await getDocs(collection(db, "CaseType"));
      const filteredCat = CaseCat.docs.map((docs) => ({
        id: docs.id,
        ...docs.data(),
      }));
      setShowCaseCategory(filteredCat);
    } catch (error) {
      console.error("Error fetching case categories:", error.message);
    }
    handleCaseCategoryChange();
  };

  const handleCaseCategoryChange = async () => {
    try {
      console.log(caseCategory);

      const querysub = query(
        collection(db, "SubCaseType"),
        where("CaseCategory", "==", caseCategory)
      );
      const data = await getDocs(querysub);
      const datamapped = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDisplaySubcat(datamapped);
    } catch (error) {
      console.error("Error fetching sub-case categories:", error.message);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="PoliceComplaintContainer"
    >
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

        <FormControl fullWidth>
          <InputLabel id="case-category-label">Case Category</InputLabel>
          <Select
            labelId="case-category-label"
            id="case-category"
            value={caseCategory}
            label="Case Category"
            onChange={(e) => {
              setCaseCategory(e.target.value);
              handleCaseCategoryChange();
            }}
          >
            {showCaseCategory.map((row, key) => (
              <MenuItem key={key} value={row.id}>
                {row.CaseType}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="sub-case-category-label">
            Sub Case Category
          </InputLabel>
          <Select
            labelId="sub-case-category-label"
            id="sub-case-category"
            value={subCaseCategory}
            label="Sub Case Category"
            onChange={(e) => setSubCaseCategory(e.target.value)}
          >
            {displaySubcat.map((row, key) => (
              <MenuItem key={key} value={row.id}>
                {row.SubCaseCategory}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

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