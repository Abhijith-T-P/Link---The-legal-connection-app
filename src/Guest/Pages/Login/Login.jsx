import React, { useEffect, useState } from "react";
import "./login.css";
import { Button, TextField, Typography } from "@mui/material";
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
        password,
      );
      const id = userCredential.user.id;
      const docRefUser = doc(db, "collection_user", id);
      const docSnapUser = await getDoc(docRefUser);

      const docRefAdmin = doc(db, "Admin_collection", id);
      const docSnapAdmin = await getDoc(docRefAdmin);

      const docRefLawyer = doc(db, "lawyer_collection", id);
      const docSnapLawyer = await getDoc(docRefLawyer);

      const docRefPS = doc(db, "collection_user", id);
      const docSnapPS = await getDoc(docRefPS);

      sessionStorage.setItem("SessionId", id);
      if (docSnapUser.exists()) {
        navigate("../../../User/");
      } 
      else if (docSnapAdmin.exists()) {
        // navigate("../../../User/");
      }
      else if (docSnapLawyer.exists()) {
        // navigate("../../../User/");
      }
      else if (docSnapPS.exists()) {
        // navigate("../../../User/");
      }
      else{
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

      const docRefPS = doc(db, "collection_user", id);
      const docSnapPS = await getDoc(docRefPS);

      if (docSnapUser.exists()) {
        navigate("../../../User/");
      } 
      else if (docSnapAdmin.exists()) {
        // navigate("../../../User/");
      }
      else if (docSnapLawyer.exists()) {
        // navigate("../../../User/");
      }
      else if (docSnapPS.exists()) {
        // navigate("../../../User/");
      }
      else{
        return;
      }
    }
  };

  useEffect(() => {
    CheckAuth();
  }, []);

  return (
    <div className="mainlogin">
      <div className="leftContainer">
        <div className="h1input">
          <Typography variant="h1">Login</Typography>
        </div>
        <div className="input">
          <TextField
            id="standard-basic"
            label="Username/Email"
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
          <Button variant="outlined" onClick={handleLogin}>
            Login
          </Button>
        </div>
        <div className="linkContainer">
          <div className="link">
            <Typography variant="subtitle2">Dont have an account .</Typography>{" "}
            <div className="change">
              <span>
                <Link to="../r">Join Now</Link>{" "}
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
