import React, { useState, useEffect } from "react";
import { Typography, Grid, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import "../mainpadding.css";
import law1 from "../../assets/icon/mycase.png";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../config/Firebase";

const MyCasesPage = () => {
  const [loading, setLoading] = useState(true);
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const getCase = async () => {
      try {
        const id = sessionStorage.getItem("uid");
        const userRef = doc(db, "collection_user", id);
        const userData = await getDoc(userRef);
        const userID = userData.data().user_Id;
  
        const data = await collection(db, "PoliceComplaint");
        const querySnapshot = await getDocs(query(data, where("userId", "==", userID)));
  
        const filteredData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp.toDate().toLocaleDateString(), // Format timestamp to date only
        }));
        const cat = await collection(db, "CaseType");
        const subcatSnapshot = await getDocs(cat);
        const catData = subcatSnapshot.docs.map((doc) => ({
          ...doc.data(),
           id: doc.id,
        }));

        const subcat = await collection(db, "SubCaseType");
        const subcatSnapshot2 = await getDocs(subcat);
        const subcatData = subcatSnapshot2.docs.map((doc) => ({
          ...doc.data(),
           id: doc.id,
        }));
        const joindata = filteredData.map((data)=>({
          ...data,
          cat:catData.find((cat) => cat.id === data.caseCategory ),
          subcat:subcatData.find((subcat) => subcat.id === data.subCaseCategory ),
        }))
        
  
        setCases(joindata);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching cases:", error.message);
        setLoading(false); // Set loading to false in case of error
      }
    };
  
    getCase();
  }, []);

  return (
    <div className="payfinecontainer" style={{ padding: "10px 220px" }}>
      <Typography variant="h4">My Cases</Typography>

      {loading ? ( // Display loading spinner if data is loading
        <CircularProgress />
      ) : (
        cases.length === 0 ? ( // Display "No cases filed yet" if cases array is empty
          <Typography variant="subtitle1">No cases filed yet</Typography>
        ) : (
          <Grid container spacing={2}>
            {cases.map((item) => (
              <Grid key={item.id} item xs={12} md={6} lg={4}>
                <div className="finebody">
                  <div className="fineHeading">
                    <Typography variant="h6">{item.cat.CaseType}</Typography>
                  </div>
    
                  <div className="fineContainer">
                    <div className="fineImg">
                      <img src={law1} alt="fine img" />
                    </div>
    
                    <Typography variant="subtitle2">ID : {item.id}</Typography>
                    <Typography variant="subtitle1">{item.subcat.SubCaseCategory}</Typography>
                    <Typography variant="subtitle1">Filed on :{item.timestamp}</Typography>
                    <Typography variant="subtitle1">Lawyer :{item.lawyer || "Not Assigned"}</Typography>
                    <Link to={`../details/${item.id}`}>
                      <Typography variant="subtitle1">View more</Typography>
                    </Link>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        )
      )}
    </div>
  );
};

export default MyCasesPage;
