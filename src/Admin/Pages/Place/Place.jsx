import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../District/District.css";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/Firebase";

const Place = () => {
  const palcedb = collection(db, "Place");
  const [showdistrict, setShowDistrict] = useState([]);
  const [district, setDistrict] = useState("");
  const [placevalue, setPlacevalue] = useState("");
  const [dispalayData, setDispayData] = useState([]);

  useEffect(() => {
    fetchData();
    showPlace();
  }, []);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "districts"));
    const data = querySnapshot.docs.map((doc, key) => ({
      id: key + 1,
      districtId: doc.id,
      ...doc.data(),
    }));
    setShowDistrict(data);
    console.log(data);
  };

  const insPlace = async () => {
    try {
      await addDoc(palcedb, {
        District: district,
        Place: placevalue,
      });
      alert(`${placevalue} inserted`);
      setPlacevalue("");
    } catch (error) {
      console.error(error);
    }
  };

  const showPlace = async () => {
    const dispalayData = await getDocs(palcedb);
    const filterdData = dispalayData.docs.map((doc, key) => ({
      ...doc.data(),
      ID: doc.id,
    }));
    setDispayData(filterdData);

    console.log(filterdData);
  };

  return (
    <div className="Place">
      <div className="wrapper">
        <Typography variant="h3" className="h1">
          Place
        </Typography>
        <div className="form">
          <div className="formWrapper">
            <div className="input"></div>
            <div className="input">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">District </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={district}
                  label="District"
                  onChange={(e) => setDistrict(e.target.value)}
                >
                  {showdistrict.map((doc, key) => (
                    <MenuItem value={doc.district}>{doc.district}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="input">
              <TextField
                id="outlined-basic"
                label="Place name"
                required
                value={placevalue}
                onChange={(e) => setPlacevalue(e.target.value)}
              />
            </div>

            <div className="btn">
              <Button
                variant="outlined"
                type="submit"
                onClick={insPlace}
                className="btn"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div className="table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Sl.No</TableCell>
                  <TableCell align="center">Place</TableCell>
                  <TableCell align="center">District</TableCell>
                  <TableCell align="center">Action</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                
                }
                {dispalayData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell align="center">{row.Place}</TableCell>
                    <TableCell align="center">{row.District}</TableCell>
                    <TableCell align="center">Update</TableCell>
                    <TableCell align="center">Delete</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Place;