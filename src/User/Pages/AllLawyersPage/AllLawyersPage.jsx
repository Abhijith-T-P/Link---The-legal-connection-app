import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import "../mainpadding.css";
import { collection, getDocs, addDoc, query, where, getDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../config/Firebase";
import law1 from "../../assets/icon/mylawyer.png";

const AllLawyersPage = () => {
  const [lawyers, setLawyers] = useState([]);
  const [userRequests, setUserRequests] = useState([]);

  useEffect(() => {
    allLawyers();
    getUserRequests();
  }, []);

  const allLawyers = async () => {
    try {
      const lawyersCollection = collection(db, "lawyer_collection");
      const lawyersSnapshot = await getDocs(lawyersCollection);
      const lawyersList = lawyersSnapshot.docs.map((doc) => doc.data());
      setLawyers(lawyersList);
    } catch (err) {
      console.log(err);
    }
  };

  const getUserRequests = async () => {
    try {
      const userId = sessionStorage.getItem("uid");
      const q = query(collection(db, "Collection_lawyer_connection"), where("userID", "==", userId));
      const querySnapshot = await getDocs(q);
      const userRequestsData = querySnapshot.docs.map((doc) => doc.data().lawyerID);
      setUserRequests(userRequestsData);
    } catch (error) {
      console.error("Error fetching user requests:", error);
    }
  };

  const handleRequest = async (lawyerId) => {
    try {
      const userId = sessionStorage.getItem("uid");
      await addDoc(collection(db, "Collection_lawyer_connection"), {
        userID: userId,
        lawyerID: lawyerId,
        cStatus: 0
      });
      console.log("Request sent successfully!");
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  const handleCancelRequest = async (lawyerId) => {
    try {
      const userId = sessionStorage.getItem("uid");
      const q = query(collection(db, "requests"), where("userID", "==", userId), where("lawyerID", "==", lawyerId));
      const querySnapshot = await getDocs(q);
      const requestId = querySnapshot.docs[0].id;
      await deleteDoc(doc(db, "requests", requestId));
      console.log("Request cancelled successfully!");
    } catch (error) {
      console.error("Error cancelling request:", error);
    }
  };

  const isRequestSent = (lawyerId) => {
    return userRequests.includes(lawyerId);
  };

  return (
    <div className="maincontainer">
      <Typography variant="h4">All Lawyers</Typography>
      {lawyers.length > 0 ? (
        <Grid container spacing={2}>
          {lawyers.map((lawyer, index) => (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <div className="finebody">
                <div className="fineHeading">
                  <Typography variant="h6">{lawyer.full_name}</Typography>
                </div>
                <div className="fineContainer">
                  <div className="fineImg">
                    {lawyer.profile_picture ? (
                      <img src={lawyer.profile_picture} style={{ maxHeight: "150px", objectFit: "cover" }} alt="Lawyer Profile" />
                    ) : (
                      <img src={law1} alt="Fine img" />
                    )}
                  </div>
                  <Typography variant="h6">Specialization: {lawyer.specialization}</Typography>
                  <Typography variant="subtitle1">Qualification : {lawyer.qualification}</Typography>
                  <Typography variant="subtitle1">ID: {lawyer.userId}</Typography>
                  {isRequestSent(lawyer.userId) ? (
                    <Button variant="outlined" color="secondary" onClick={() => handleCancelRequest(lawyer.userId)}>
                      Cancel Request
                    </Button>
                  ) : (
                    <Button variant="contained" color="primary" onClick={() => handleRequest(lawyer.userId)}>
                      Request
                    </Button>
                  )}
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6">No lawyer found</Typography>
      )}
    </div>
  );
};

export default AllLawyersPage;
