import React, { useState, useEffect } from "react";
import { Typography, CircularProgress, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, getDocs, updateDoc, where } from "firebase/firestore";
import { db } from "../../../config/Firebase";

const CaseDetailsPage = () => {
  const [loading, setLoading] = useState(true);
  const [caseDetails, setCaseDetails] = useState(null);
  const [selectedLawyer, setSelectedLawyer] = useState("");
  const [lawyers, setLawyers] = useState([]);
  const [joindata, setJoindata] = useState([]); // State to store joined data
  const { id } = useParams();

  useEffect(() => {
    const fetchCaseDetails = async () => {
      try {
        const caseRef = doc(db, "PoliceComplaint", id);
        const caseSnapshot = await getDoc(caseRef);
        
        if (caseSnapshot.exists()) {
          setCaseDetails({ id: caseSnapshot.id, ...caseSnapshot.data() });
        } else {
          console.log("No such case found!");
        }
      } catch (error) {
        console.error("Error fetching case details:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseDetails();
  }, [id]);

  const lawyerConnection = async (uid) => {
    try {
      const lawyersCollection = collection(db, "Collection_lawyer_connection");
      const querySnapshot = await getDocs(lawyersCollection);
      const lawyersList = querySnapshot.docs
        .filter((doc) => doc.data().userID === uid)
        .map((doc) => ({
          id: doc.id,
          lawyerID: doc.data().lawyerID,
        }));

      const lawyerCollection = collection(db, "lawyer_collection");
      const lawyersDetails = [];

      for (const lawyer of lawyersList) {
        const q = where(lawyerCollection, "userId", "==", lawyer.lawyerID);
        const querySnapshot2 = await getDocs(q);
        const lawyerDetails = querySnapshot2.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        lawyersDetails.push(...lawyerDetails);
      }

      const getSpecilisation = collection(db, "Lawyer_Category");
      const getSpecilisationSnapshot = await getDocs(getSpecilisation);
      const getSpecilisationList = getSpecilisationSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const joindata = lawyersDetails.map((item) => ({
        ...item,
        catName: getSpecilisationList.find((cat) => cat.id === item.specialization),
      })).filter((item) => item.catName && item.catName.id);
      
      setJoindata(joindata); // Set the joined data in state
      setLawyers(lawyersDetails);
    } catch (error) {
      console.error("Error fetching lawyers:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogLawyer = async () => {
    try {
      const upadtedb = doc(db, "PoliceComplaint", id);
      await updateDoc(upadtedb, { lawyer: selectedLawyer });
      console.log("Lawyer updated successfully!");
    } catch (error) {
      console.error("Error updating lawyer:", error);
    }
  };
  
  useEffect(() => {
    console.log("Joindata:", joindata); // Log joindata whenever it changes
  }, [joindata]);

  return (
    <div className="details-container" style={{ padding: "20px" }}>
      <Typography variant="h4">Case Details</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        caseDetails && (
          <div className="case-details">
            <Typography variant="subtitle1">Case ID: {caseDetails.id}</Typography>
            <Typography variant="subtitle1">Complainant Name: {caseDetails.complainantName}</Typography>
            <Typography variant="subtitle1">Contact Number: {caseDetails.contactNumber}</Typography>
            <Typography variant="subtitle1">Complaint Description: {caseDetails.complaintDescription}</Typography>
            {caseDetails.lawyer ? (
              <Typography variant="subtitle1">Lawyer: {caseDetails.lawyer}</Typography>
            ) : (
              <div>
                <Button variant="outlined" color="primary" onClick={() => lawyerConnection(sessionStorage.getItem("uid"))}>Add Lawyer</Button>
                {lawyers.length > 0 && (
                  <div>
                    <FormControl>
                      <InputLabel id="lawyer-select-label">Select Lawyer</InputLabel>
                      <Select
                        labelId="lawyer-select-label"
                        id="lawyer-select"
                        value={selectedLawyer}
                        label="Lawyer"
                        onChange={(e) => setSelectedLawyer(e.target.value)}
                      >
                        {lawyers.map((lawyer) => (
                          <MenuItem key={lawyer.id} value={lawyer.userId}>
                            {lawyer.full_name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Button variant="outlined" color="primary" onClick={handleLogLawyer}>Submit</Button>
                  </div>
                )}
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default CaseDetailsPage;
