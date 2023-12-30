import React, { useEffect, useState } from "react";
import logo from "../../../Assets/Images/Logo/LinkLogo2.svg";
import { storage } from "../../../config/Firebase";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "styled-components";
import "./register.css";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../config/Firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Register = () => {
  const [cleared, setCleared] = React.useState(false);
  const [showdistrict, setShowDistrict] = useState([]);
  const [showplace, setShowPlace] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [adharpic, setAdharpic] = useState([]);

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  const [gender, setGender] = React.useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const [place, setPlace] = React.useState("");

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };
  const [district, setDistrict] = React.useState("");

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
    fetchPlace(event.target.value);
  };

  const fetchPlace = async (Id) => {
    const placeRef = collection(db, "Place");

    // Create a query against the collection.
    const q = query(placeRef, where("District", "==", Id));

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc, key) => ({
      id: key + 1,
      placeId: doc.id,
      ...doc.data(),
    }));
    setShowPlace(data);
    console.log(data);
  };

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

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async () => {
    const photometadata = {
      contentType: photo.type,
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, "images/" + photo.name);
    await uploadBytesResumable(storageRef, photo, photometadata); //ref,file varialbe,file type

    const url = await getDownloadURL(storageRef); //creating url for image

    
    console.log(url);
    
    const adhatMeatdata = {
      contentType: adharpic.type,
    };
    
    const AdharStorageRef = ref(storage, "Adhar/" + adharpic.name);
    await uploadBytesResumable(AdharStorageRef, adharpic, adhatMeatdata); 
    const adharUrl = await getDownloadURL(AdharStorageRef);
    console.log(adharUrl);
    
    await addDoc(collection(db, "photo"), {
      url,
      adharUrl,
    });
  };
  
  return (
    <div className="Register">
      <div className="registerconatiner">
        <div className="RegisterCard">
          <div className="heading">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <Typography variant="h3">User Register</Typography>
          </div>
          <div className="content">
            <div className="inputName">
              <TextField
                id="standard-basic"
                label="First name "
                variant="standard"
                type="text"
                className="name"
                style={{
                  paddingRight: "10px",
                  width: "45%",
                  justifyContent: "flex-end",
                }}
              />

              <TextField
                className="name"
                id="standard-basic"
                label="Last name "
                variant="standard"
                type="text"
              />
            </div>
            <div className="input">
              <TextField
                id="standard-basic"
                label="Phone number .... "
                variant="standard"
                type="number"
                style={{ width: "100%" }}
              />
            </div>
            <div className="input">
              <TextField
                id="standard-basic"
                label="Eamil address .... "
                variant="standard"
                type="email"
                style={{ width: "100%" }}
              />
            </div>
            <div className="input">
              <TextField
                id="standard-multiline-static"
                label="Addresss"
                multiline
                rows={4}
                placeholder="Your Address...."
                variant="standard"
                style={{ width: "100%" }}
              />
            </div>
            <div className="input">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Gnder
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={gender}
                  onChange={handleGenderChange}
                  label="Gender"
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
              </LocalizationProvider>
            </div>
            <div className="input">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 170 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={district}
                  onChange={handleDistrictChange}
                  label="district"
                >
                  {showdistrict.map((dist, key) => (
                    <MenuItem value={dist.districtId}>{dist.district}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 170 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Place
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={place}
                  onChange={handlePlaceChange}
                  label="Place"
                >
                  {showplace.map((pla, key) => (
                    <MenuItem value={pla.placeId}>{pla.Place}</MenuItem>
                  ))}{" "}
                </Select>
              </FormControl>
            </div>
            <div className="input">
              <TextField
                id="standard-basic"
                label="Adhar number .... "
                variant="standard"
                type="number"
                style={{ width: "100%" }}
              />
            </div>
            <div className="input">
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload your Photo
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => setPhoto(event.target.files[0])}
                />
              </Button>
              <Button
                component="label"
                variant="contained"
                onChange={(event) => setAdharpic(event.target.files[0])}
                startIcon={<CloudUploadIcon />}
              >
                Upload Adhar
                <VisuallyHiddenInput type="file" />
              </Button>
            </div>
            <div className="input">
              <TextField
                id="standard-basic"
                label="Confirm password...."
                variant="standard"
                type="password"
                style={{ width: "100%" }}
              />
            </div>
            <div className="input">
              <TextField
                id="standard-basic"
                label="Confirm password...."
                variant="standard"
                type="password"
                style={{ width: "100%" }}
              />
            </div>

            <div className="otherLogin"></div>
            <div className="button">
              <Button variant="outlined" onClick={handleSubmit}>
                Register
              </Button>
            </div>
            <div className="linkContainer">
              <div className="link">
                <Typography variant="subtitle2">
                  Already have an account
                </Typography>
                <div className="change">
                  <span>
                    <Link to="../Login">Login</Link>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
