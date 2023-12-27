import React from "react";
import "./register.css";
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

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Register = () => {
  const [cleared, setCleared] = React.useState(false);

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  const [code, setCode] = React.useState("");

  const handleChange = (event) => {
    setCode(event.target.value);
  };
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
  };
  return (
    <div className="Register">
      <div className="conatiner">
        <div className="RegisterCard">
          <div className="heading">
            <div className="logo">
              <img
                src="https://seeklogo.com/images/M/minimalist-leaf-logo-AA0BE382CD-seeklogo.com.png"
                alt="logo"
              />
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
              <FormControl variant="standard" sx={{ m: 1, minWidth: 75 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={code}
                  onChange={handleChange}
                  label="Country"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>+91</MenuItem>
                  <MenuItem value={20}>+1</MenuItem>
                  <MenuItem value={30}>+6</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="standard-basic"
                label="Phone .... "
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
                  <MenuItem value=""></MenuItem>
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
                  <MenuItem value=""></MenuItem>
                  <MenuItem value="District">District</MenuItem>
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
                  <MenuItem value=""></MenuItem>
                  <MenuItem value="Male">Place</MenuItem>
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
                <VisuallyHiddenInput type="file" />
              </Button>
              <Button
                component="label"
                variant="contained"
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

            <div className="otherLogin">
              
            </div>
            <div className="button">
              <Button variant="outlined">Register</Button>
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
