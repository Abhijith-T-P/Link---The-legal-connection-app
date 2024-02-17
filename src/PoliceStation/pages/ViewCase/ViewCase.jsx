import {  doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../config/Firebase";
import { Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const ViewCase = () => {
  const { id } = useParams();
  console.log(id);
  const [caseDisp, setCaseDisp] = useState([]);

  const dispaly = async () => {
    const data = await getDoc(doc(db, "PoliceComplaint", id));

    console.log(data.data());
    setCaseDisp(data.data());
  };

  useEffect(() => {
    dispaly();
  }, []);

  return (
    <div className="ViewCase" style={{ padding: "10px 220px" }}>
      <Typography variant="h2">Case View</Typography>

      <div className="caseVieContainer">
          <div className="CaseContainer">
            <div className="Name">Complainte name : {caseDisp.complainantName} </div>
            <div className="type">Type : </div>
            <div className="number">Number : {caseDisp.contactNumber} </div>
            <div className="description">
              Description : {caseDisp.complaintDescription}{" "}
            </div>
            {/* <div className="date">Date : {caseDisp.timestamp.toDateString()} </div> */}
            <div className="img">Document link : {caseDisp.documentURLs} </div>
            <Link to ={caseDisp.documentURLs} >Click</Link>
          </div>
      </div>
    </div>
  );
};

export default ViewCase;
