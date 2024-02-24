import React, { useEffect, useState } from "react";
import { storage, auth, db } from "../../../config/Firebase";

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
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "styled-components";
import "./register.css";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { createUserWithEmailAndPassword } from "firebase/auth";

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

const LawyerRegister = () => {
  const [cleared, setCleared] = React.useState(false);
  const [districtOptions, setDistrictOptions] = useState([]);
  const [placeOptions, setPlaceOptions] = useState([]);
  const [licensePhoto, setLicensePhoto] = useState([]);
  const [idProofPhoto, setIdProofPhoto] = useState([]);

  const [gender, setGender] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [dob, setDob] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  const generateRandomId = () => {
    // Generate an 8-digit random number
    const randomId = Math.floor(10000000 + Math.random() * 90000000);

    return randomId.toString(); // Convert to string
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handlePlaceChange = (event) => {
    setSelectedPlace(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    fetchPlaceOptions(event.target.value);
  };

  const fetchPlaceOptions = async (districtId) => {
    const placeRef = collection(db, "Place");

    // Create a query against the collection.
    const q = query(placeRef, where("District", "==", districtId));

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc, key) => ({
      id: key + 1,
      placeId: doc.id,
      ...doc.data(),
    }));
    setPlaceOptions(data);
    console.log(data);
  };

  const fetchDistrictOptions = async () => {
    const querySnapshot = await getDocs(collection(db, "districts"));
    const data = querySnapshot.docs.map((doc, key) => ({
      id: key + 1,
      districtId: doc.id,
      ...doc.data(),
    }));
    setDistrictOptions(data);
    console.log(data);
  };

  useEffect(() => {
    fetchDistrictOptions();
  }, []);

  const handleSubmit = async () => {
    alert("Registration successful!");
    try {
      const randomId = generateRandomId();

      // Check if the generated ID already exists in the database
      let userRef = doc(db, "lawyer_collection", randomId);
      let userSnapshot = await getDoc(userRef); // Import getDoc from firebase/firestore

      // If the generated ID already exists, generate a new one until it's unique
      while (userSnapshot.exists()) {
        const newRandomId = generateRandomId();
        userRef = doc(db, "lawyer_collection", newRandomId);
        userSnapshot = await getDoc(userRef); // Import getDoc from firebase/firestore
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = userCredential.user.uid;

      const licensePhotoMetadata = {
        contentType: licensePhoto.type,
      };
      const idProofPhotoMetadata = {
        contentType: idProofPhoto.type,
      };

      const licenseStorageRef = ref(storage, "license/" + licensePhoto.name);
      await uploadBytesResumable(
        licenseStorageRef,
        licensePhoto,
        licensePhotoMetadata
      );

      const licenseUrl = await getDownloadURL(licenseStorageRef);

      const idProofStorageRef = ref(storage, "idProof/" + idProofPhoto.name);
      await uploadBytesResumable(
        idProofStorageRef,
        idProofPhoto,
        idProofPhotoMetadata
      );

      const idProofUrl = await getDownloadURL(idProofStorageRef);

      await setDoc(doc(db, "lawyer_collection", userId), {
        userId: randomId,
        license_photo: licenseUrl,
        id_proof: idProofUrl,
        full_name: firstName + " " + lastName,
        email: email,
        mobile: mobile,
        address: address,
        gender: gender,
        place: selectedPlace,
        dob: dob,
      });
      // Clear all fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setMobile("");
    setAddress("");
    setGender("");
    setSelectedDistrict("");
    setSelectedPlace("");
    setDob("");
    setLicensePhoto(null);
    setIdProofPhoto(null);

    // Redirect to ../login
    window.location.href = "../login";
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert(errorCode);
    }
  };

  return (
    <div className="reg">
      <div className="RegisteContent">
        <div className="heading">
          <Typography variant="h2">Lawyer Registration</Typography>
        </div>
        <div className="inputName">
          <TextField
            id="standard-basic"
            label="First name"
            onChange={(event) => setFirstName(event.target.value)}
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
            onChange={(event) => setLastName(event.target.value)}
            label="Last name"
            style={{
              width: "50%",
            }}
            variant="standard"
            type="text"
          />
        </div>
        <div className="input">
          <TextField
            id="standard-basic"
            label="Phone number"
            onChange={(e) => setMobile(e.target.value)}
            variant="standard"
            type="number"
            style={{ width: "100%" }}
          />
        </div>
        <div className="input">
          <TextField
            id="standard-basic"
            label="Email address"
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
            type="email"
            style={{ width: "100%" }}
          />
        </div>
        <div className="input">
          <TextField
            id="standard-multiline-static"
            label="Address"
            multiline
            rows={4}
            placeholder="Your Address"
            onChange={(e) => setAddress(e.target.value)}
            variant="standard"
            style={{ width: "100%" }}
          />
        </div>
        <div className="input">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Gender
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

          <TextField
            id="standard-multiline-static"
            label="Date of Birth"
            type="date"
            onChange={(e) => setDob(e.target.value)}
            variant="standard"
            style={{ width: "100%" }}
          />
        </div>

        <div className="input">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 170 }}>
            <InputLabel id="demo-simple-select-standard-label">
              District
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={selectedDistrict}
              onChange={handleDistrictChange}
              label="District"
            >
              {districtOptions.map((dist, key) => (
                <MenuItem key={key} value={dist.districtId}>
                  {dist.district}
                </MenuItem>
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
              value={selectedPlace}
              onChange={handlePlaceChange}
              label="Place"
            >
              {placeOptions.map((pla, key) => (
                <MenuItem key={key} value={pla.placeId}>
                  {pla.Place}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="input">
          <Button
            sx={{ m: 1, Width: " 80%" }}
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload your License
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => setLicensePhoto(event.target.files[0])}
            />
          </Button>
          <Button
            component="label"
            variant="contained"
            onChange={(event) => setIdProofPhoto(event.target.files[0])}
            startIcon={<CloudUploadIcon />}
          >
            Upload ID proof
            <VisuallyHiddenInput type="file" />
          </Button>
        </div>
        <div className="input">
          <TextField
            id="standard-basic"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            variant="standard"
            type="password"
            style={{ width: "100%" }}
          />
        </div>
        <div className="input">
          <TextField
            id="standard-basic"
            label="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
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
      </div>
      <div className="linkContainer">
        <div className="link">
          <Typography variant="subtitle2">Already have an account</Typography>
          <div className="change">
            <span>
              <Link to="../">Login</Link>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerRegister;
