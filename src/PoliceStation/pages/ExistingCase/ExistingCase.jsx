import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../config/Firebase";
import "./ExistingCase.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const ExistingCase = () => {
  const [caseDisp, setCaseDisp] = useState([]);

  const dispaly = async () => {
    const data = await getDocs(collection(db, "PoliceComplaint"));
    const filteredData = data.docs.map((doc, key) => ({
      ...doc.data(),
      id: doc.id,
      timestamp: doc.data().timestamp.toDate(), // Convert timestamp to JavaScript Date object
    }));
    console.log(filteredData);
    setCaseDisp(filteredData);
  };

  useEffect(() => {
    dispaly();
  }, []);

  return (
    <div className="ExistingCase">
      <h1>Existing Case</h1>
<div className="caseContainer">

      {caseDisp.map((row, key) => (
          <div className="case">
          <div className="name">Complaintey name : {row.complainantName} </div>
          <div className="discription">
            Description : {row.complaintDescription}{" "}
          </div>
          <div className="date">
            Complaint date : {row.timestamp.toDateString()}{" "}
          </div>
          <div className="viewbtn">
            <Link to ={`../ViewCase/${row.id}`}>
            <Button variant="contained" >View</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
      </div>
  );
};

export default ExistingCase;
