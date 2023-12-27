import React, { useEffect, useState } from "react";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { db } from "../../../config/Firebase";
import {
  addDoc,
  collection,
  
  getDocs,
} from "firebase/firestore";
import "./Casetype.css";

const Casetype = () => {
  const casetype = collection(db, "CaseType");
  const [caseType, setCaseType] = useState("");

  const insCase = async () => {
    try {
      await addDoc(casetype, {
        CaseType: caseType,
      });
      alert(`${caseType} inserted `);
    } catch (error) {
      console.error(error);
    }
  };
  const getData = async () => {
    const data = await getDocs(casetype);
    const filteredData = data.docs.map((doc, key) => ({
      ...doc.data(),
      ID: doc.id,
    }));
    console.log(filteredData);
  };
  useEffect(() => {
    getData();
  },[]);

  return (
    <div className="Casetype">
      <div className="wrapper">
        <Typography variant="h3" className="h1">
          Casetype
        </Typography>
        <div className="form">
          <div className="formWrapper">
            <div className="input">
              <TextField
                id="outlined-basic"
                label=" Casetype name"
                required
                value={caseType}
                onChange={(e) => setCaseType(e.target.value)}
              />
            </div>
            <div className="btn">
              <Button
                variant="outlined"
                type="submit"
                className="btn"
                onClick={insCase}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div className="table">
          <div className="tableCasetype">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">id</TableCell>
                    <TableCell align="center">Casetype</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row" align="center">
                      id
                    </TableCell>
                    <TableCell align="center">CasetypeName </TableCell>
                    <TableCell align="center">
                      <Button variant="outlined" type="submit" className="btn">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casetype;
