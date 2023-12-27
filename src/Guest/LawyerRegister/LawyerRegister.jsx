import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

const LawyerRegister = () => {
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

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
            <Typography variant="h3">Lawyer Register</Typography>
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
                  value={age}
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
            <div className="input"></div>
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

export default LawyerRegister;
