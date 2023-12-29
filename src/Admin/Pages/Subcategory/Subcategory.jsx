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
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../../config/Firebase";

const Subcategory = () => {
  const Cat = collection(db, "Lawyer_Category");
  const subCat = collection(db, "lawyerSubCategory");
  const [category, setCategory] = useState("");
  const [subCatVal, setSubCatVal] = useState("");
  const [dispalaySubLaw, setDispalySubLaw] = useState([]);
  const [dispalyData, setDispalyData] = useState([]);

  const showCategory = async () => {
    const data = await getDocs(Cat);
    const filtereData = data.docs.map((doc, key) => ({
      ...doc.data(),
      ID: doc.id,
    }));
    setDispalyData(filtereData);
    showLawyerSub();
  };

  const addSubCat = async () => {
    try {
      await addDoc(subCat, {
        SubCategory: subCatVal,
        Category: category,
      });
      alert(`${subCatVal} inserted Succesfulley`);
      showLawyerSub();
      setCategory("");
      setSubCatVal("  ");
    } catch (error) {
      console.error(error);
    }
  };

  const showLawyerSub = async () => {
    const subLawyerData = await getDocs(subCat);
    const filteredSubLawyer = subLawyerData.docs.map((doc, key) => ({
      ...doc.data(),
      ID: doc.id,
    }));
    setDispalySubLaw(filteredSubLawyer);
    setSubCatVal("");
  };

  const deletevalue = async (id) => {
    await deleteDoc(doc(subCat, id));
    showLawyerSub();
    alert("Deleted");
  };

  useEffect(() => {
    showCategory();
    showLawyerSub();
  }, []);
  return (
    <div className="Subcategory">
      <div className="wrapper">
        <Typography variant="h3" className="h1">
          Subcategory
        </Typography>
        <div className="form">
          <div className="formWrapper">
            <div className="input">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={(event) => setCategory(event.target.value)}
                >
                  {dispalyData.map((doc, key) => (
                    <MenuItem value={doc.ID}>{doc.categoryName} </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="input">
              <TextField
                id="outlined-basic"
                label="Subcategory name"
                required
                onChange={(e) => setSubCatVal(e.target.value)}
              />
            </div>

            <div className="btn">
              <Button
                variant="outlined"
                type="submit"
                onClick={addSubCat}
                className="btn"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TableContainer component={Paper} sx={{ Width: "600px" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Sl .No</TableCell>
                <TableCell align="center">LawyerSubcategory</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">Action</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dispalaySubLaw.map((row, index) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">{row.SubCategory}</TableCell>
                  <TableCell align="center">{row.Category}</TableCell>
                  <TableCell align="center">
                    <Button variant="outlined">Update</Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      onClick={() => deletevalue(row.ID)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Subcategory;
