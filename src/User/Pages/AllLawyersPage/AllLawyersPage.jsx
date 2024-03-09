import React, { useState, useEffect } from "react";
import { Typography, Button, Grid, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import law1 from "../../assets/icon/mylawyer.png";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../../config/Firebase";

const AllLawyersPage = () => {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    allLawyers();
  }, []);

  const allLawyers = async () => {
    try {
      const lawyersCollection = collection(db, "lawyer_collection");
      const lawyersSnapshot = await getDocs(lawyersCollection);
      const lawyersList = lawyersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(lawyersList);
      
      const getSpecialisation = collection(db, "Lawyer_Category");
      const getSpecialisationSnapshot = await getDocs(getSpecialisation);
      const getSpecialisationList = getSpecialisationSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(getSpecialisationList);
      
      const joinedData = lawyersList.map((item) => ({
        ...item,
        catName: getSpecialisationList.find((cat) => cat.id === item.specialization),
      })).filter((item) => item.catName && item.catName.id);
      
      setLawyers(joinedData);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className="maincontainer">
      <Typography variant="h4">All Lawyers</Typography>
      {loading ? (
        <CircularProgress /> // Display loading animation
      ) : (
        lawyers.length > 0 ? (
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
                        <img
                          src={lawyer.profile_picture}
                          style={{ maxHeight: "150px", objectFit: "cover" }}
                          alt="Lawyer Profile"
                        />
                      ) : (
                        <img src={law1} alt="Fine img" />
                      )}
                    </div>
                    <Typography variant="h6">
                      Specialization: {lawyer.catName.categoryName}
                    </Typography>
                    <Typography variant="subtitle1">
                      Qualification : {lawyer.qualification}
                    </Typography>
                    <Typography variant="subtitle1">
                      ID: {lawyer.userId}
                    </Typography>
                    {/* Rest of the code for handling requests */}
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="h6">No lawyer found</Typography>
        )
      )}
    </div>
  );
};

export default AllLawyersPage;
