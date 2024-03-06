import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import "../mainpadding.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/Firebase";
import law1 from "../../assets/icon/mylawyer.png";

const AllLawyersPage = () => {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    allLawyers();
  }, []);

  const allLawyers = async () => {
    try {
      const lawyersCollection = collection(db, "lawyer_collection");
      const lawyersSnapshot = await getDocs(lawyersCollection);
      const lawyersList = lawyersSnapshot.docs.map((doc) => doc.data());
      setLawyers(lawyersList);
      console.log(lawyersList);
    } catch (err) {
      console.log(err);
    }
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
                  <Button variant="contained" color="primary">
                    Request
                  </Button>
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
