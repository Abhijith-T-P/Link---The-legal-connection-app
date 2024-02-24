import React, { useEffect, useState } from "react";
import "./login.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../../config/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const id = userCredential.user.uid;

      console.log(id);
      const docRefUser = doc(db, "collection_user", id);
      const docSnapUser = await getDoc(docRefUser);

      const docRefAdmin = doc(db, "Admin_collection", id);
      const docSnapAdmin = await getDoc(docRefAdmin);

      const docRefLawyer = doc(db, "lawyer_collection", id);
      const docSnapLawyer = await getDoc(docRefLawyer);

      const docRefPS = doc(db, "police_station_collection", id);
      const docSnapPS = await getDoc(docRefPS);

      if (docSnapUser.exists()) {
      sessionStorage.setItem("uid", id);

        navigate("../../../User/");
      } else if (docSnapAdmin.exists()) {
      sessionStorage.setItem("aid", id);

        navigate("../../../Admin/");
      } else if (docSnapLawyer.exists()) {
      sessionStorage.setItem("lid", id);

        navigate("../../../Lawyer/");
      } else if (docSnapPS.exists()) {
      sessionStorage.setItem("pid", id);

        navigate("../../police");
      } else {
        return;
      }

      // sessionStorage.setItem("userId", user)
      // navigate('../../../User/')
      console.log(id);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    }
  };

  const CheckAuth = async () => {
    if (sessionStorage.getItem("SessionId")) {
      const id = sessionStorage.getItem("SessionId");
      const docRef = doc(db, "collection_user", id);
      const docSnapUser = await getDoc(docRef);

      const docRefAdmin = doc(db, "Admin_collection", id);
      const docSnapAdmin = await getDoc(docRefAdmin);

      const docRefLawyer = doc(db, "lawyer_collection", id);
      const docSnapLawyer = await getDoc(docRefLawyer);

      const docRefPS = doc(db, "police_station_collection", id);
      const docSnapPS = await getDoc(docRefPS);

      if (docSnapUser.exists()) {
        navigate("../../../User/");
      } else if (docSnapAdmin.exists()) {
        navigate("../../../Admin/");
      } else if (docSnapLawyer.exists()) {
        navigate("../../../Lawyer/");
      } else if (docSnapPS.exists()) {
        navigate("../../police");
      } else {
        return;
      }
    }
  };

  useEffect(() => {
    CheckAuth();
  }, []);

  return (
    <Box className="mainlogin" component="form" onClick={handleLogin}>
      <div className="leftContainer">
        <div className="h1input">
          <Typography variant="h1">Login</Typography>
        </div>
        <div className="input">
          <TextField
            id="standard-basic"
            label="Username/Email"
            required
            variant="standard"
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input">
          <TextField
            id="standard-basic"
            label="Password...."
            variant="standard"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="button">
          <Button variant="outlined" type="button">
            Login
          </Button>
        </div>
        <div className="linkContainer">
          <div className="link">
            <Typography variant="subtitle2">Dont have an account .</Typography>{" "}
            <div className="change">
              <span>
                <Link to="../../Register">Join Now</Link>{" "}
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Login;
