import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../District/District.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/Firebase";

const Subcategory = () => {
  const Cat = collection(db, "Lawyer_Category");

  const [category, setCategory] = useState("");
  const [dispalyData, setDispalyData] = useState([]);

  const showCategory = async () => {
    const data = await getDocs(Cat);
    const filtereData = data.docs.map((doc, key) => ({
      ...doc.data(),
      ID: doc.id,
    }));
    setDispalyData(filtereData);
  };

  useEffect(() => {
    showCategory();
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
              />
            </div>  

            <div className="btn">
              <Button variant="outlined" type="submit" className="btn">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subcategory;
