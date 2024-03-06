import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../config/Firebase";
import { Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import "./ViewCase.css";
import badge from "../../assets/images/kp-badge.png";
const ViewCase = () => {
  const { id } = useParams();
  console.log(id);
  const [caseDisp, setCaseDisp] = useState([]);

  const dispaly = async () => {
    try {
      const userData = await getDoc(doc(db, "PoliceComplaint", id));
      const filteredData = userData.data();

      // Fetch the CaseType document
      const caseTypeDoc = await getDoc(
        doc(db, "CaseType", filteredData.caseCategory)
      );
      const caseType = caseTypeDoc.data().CaseType;

      // Fetch the SubCaseType document
      const subCaseTypeDoc = await getDoc(
        doc(db, "SubCaseType", filteredData.subCaseCategory)
      );
      const subCaseCategory = subCaseTypeDoc.data().SubCaseCategory;

      // Merge the details with filteredData
      const mergedData = {
        ...filteredData,
        caseType: caseType || "",
        subCaseCategory: subCaseCategory || "",
      };

      setCaseDisp(mergedData);
      console.log(mergedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    dispaly();
  }, []);

  return (
    <div className="ViewCase" style={{ padding: "10px 220px" }}>
      <Typography variant="h2">Case View</Typography>

      <div className="caseVieContainer">
        <div className="CaseContainer">
          <div className="caseHeader">
            <div className="pIcon">
              <img src={badge} alt="police badge" />
            </div>
            <div className="pdetails">
              <Typography
                variant="h4"
                sx={{ fontFamily: "Times New Roman, Times, serif" }}
              >
                Kreala Police department
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontFamily: "Times New Roman, Times, serif" }}
              >
                Case report
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontFamily: "Times New Roman, Times, serif" }}
              >
                Station name
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontFamily: "Times New Roman, Times, serif" }}
              >
                Station Addres line 1
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontFamily: "Times New Roman, Times, serif" }}
              >
                Station Addres line 2
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontFamily: "Times New Roman, Times, serif" }}
              >
                Phone :7896541230
              </Typography>
            </div>
          </div>
          <div className="hr"></div>
          <div className="caseDetails">
            <Typography
              variant="h4"
              sx={{ fontFamily: "Times New Roman, Times, serif" }}
            >
              {" "}
              Complainant{" "}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ fontFamily: "Times New Roman, Times, serif" }}
            >
              Report Filed:{" "}
              {caseDisp.timestamp
                ? new Date(caseDisp.timestamp.seconds * 1000).toDateString()
                : ""}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontFamily: "Times New Roman, Times, serif" }}
            >
              {" "}
              Name: {caseDisp.complainantName}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ fontFamily: "Times New Roman, Times, serif" }}
            >
              {" "}
              DOB: {caseDisp.complainantAge}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontFamily: "Times New Roman, Times, serif" }}
            >
              Number : {caseDisp.contactNumber}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontFamily: "Times New Roman, Times, serif" }}
            >
              Address : {caseDisp.complainantPhone}
            </Typography>
            <div className="caseinfo">
              <Typography
                variant="h4"
                sx={{ fontFamily: "Times New Roman, Times, serif" }}
              >
                Case info
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontFamily: "Times New Roman, Times, serif" }}
              >
                Type: {caseDisp.caseType} - {caseDisp.subCaseCategory}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontFamily: "Times New Roman, Times, serif" }}
              >
                Description: {caseDisp.complaintDescription}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontFamily: "Times New Roman, Times, serif" }}>
  Attachment file: {caseDisp.documentURLs ? <Link to={caseDisp.documentURLs}>Click</Link> : "Not Uploaded"}
</Typography>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCase;
