import React, { useState, useEffect } from "react";
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

const NewCase = () => {
  const [complainantName, setComplainantName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [complaintDescription, setComplaintDescription] = useState("");
  const [documents, setDocuments] = useState(null);
  const [showCasetypes, setShowCasetypes] = useState([]);
  const [caseCategory, setCaseCategory] = useState("");
  const [subCaseCategory, setSubCaseCategory] = useState(""); // State for selected sub case category
const [displaySubcat ,setDispalySubcat] = useState([]);
  useEffect(() => {
    getCaseCat();
    handleCaseCategoryChange();
    
  }, [caseCategory]);

  const getCaseCat = async () => {
    try {
      const data = await getDocs(collection(db, "CaseType"));
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setShowCasetypes(filteredData);
      console.log(filteredData);

      const getSubCat = await getDocs(collection(db, "SubCaseType"));
      const filteredSubCat = getSubCat.docs.map((doc) => ({
        SubcatId: doc.id,
        ...doc.data(),
      }));
      console.log("subCat: " , filteredSubCat);
   

    // const joinData = filteredData.map((category)=>({
    //  ...category,
    //  subcategory:filteredSubCat.find((subcategory)=>subcategory.CaseCategory === category.id)
    // }))
    
    //  setDispalySubcat(joinData);
    // console.log("Joindata:",joinData);

    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    setDocuments(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      var documentURLs = "";
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
      const uid = sessionStorage.getItem("SessionId");

      await addDoc(collection(db, "PoliceComplaint"), {
        Pid: uid,
        complainantName,
        contactNumber,
        documentURLs,
        vStatus: 0,
        complaintDescription,
        caseCategory,
        subCaseCategory, // Add sub case category to the document
        timestamp: new Date(),
      });

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

  const handleCaseCategoryChange = async () => {
 
   console.log(caseCategory);
    const querysub = query(collection(db,"SubCaseType"),where("CaseCategory","==",caseCategory))
    const data = await getDocs(querysub)
     const datamapped = data.docs.map((doc)=>({
      id:doc.id,
      ...doc.data(),
     }))
     console.log(datamapped)
     setDispalySubcat(datamapped)
  };

  // const handleSubCaseCategoryChange = (event) => {
  //   setSubCaseCategory(event.target.value);
  // };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="NewCaseContainer"
      style={{ padding: "10px 220px" }}
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
            onChange={(e)=>{setCaseCategory(e.target.value);handleCaseCategoryChange()}}
          >
            {showCasetypes.map((row,key) => (
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
            onChange={(e)=>setSubCaseCategory(e.target.value)}
          >
            {displaySubcat.map((row,key)=>(
              <MenuItem key={key} value = {row.id}>{row.SubCaseCategory}</MenuItem>
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
        <label htmlFor="document-upload">
          <Button
            required
            component="span"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            margin="normal"
          >
            Upload Document if any
          </Button>
        </label>
      </div>
      <div className="upload">
        <Button variant="contained" color="primary" type="submit">
          File Complaint
        </Button>
      </div>
    </Box>
  );
};

export default NewCase;
