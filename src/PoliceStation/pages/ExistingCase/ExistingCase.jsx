import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/Firebase";
import "./ExistingCase.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ExistingCase = () => {
  const [caseDisp, setCaseDisp] = useState([]);

  const display = async () => {
    const data = await getDocs(collection(db, "PoliceComplaint"));
    const filteredData = data.docs.map((doc, key) => ({
      ...doc.data(),
      id: doc.id,
      timestamp: doc.data().timestamp.toDate(), // Convert timestamp to JavaScript Date object
    }));
    console.log(filteredData);
    // Sort the data by timestamp in descending order
    const sortedData = filteredData.sort((a, b) => b.timestamp - a.timestamp);
    setCaseDisp(sortedData);
  };

  useEffect(() => {
    display();
  }, []);

  return (
    <div className="ExistingCase">
      <h1>Existing Case</h1>
      <div className="caseContainer">
        {caseDisp.map((row, key) => (
          <div className="case" key={key}>
            <div className="name">Complaint Name: {row.complainantName}</div>
            <div className="description">
              Description: {row.complaintDescription}
            </div>
            <div className="date">
              Complaint Date: {row.timestamp.toDateString()}
            </div>
            <div className="viewbtn">
              <Link to={`../ViewCase/${row.id}`}>
                <Button variant="contained">View</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExistingCase;
