import React, { useEffect, useState } from "react";
import "./Topbar.css";
import { Link, useNavigate,  } from "react-router-dom";
import { Typography } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/Firebase";

const Topbar = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  // const userData = async () => {
  //   const id = sessionStorage.getItem("SessionId");
  //   console.log(id);
  //   const docRef = doc(db, "collection_user", id);
  //   const docSnapUser = await getDoc(docRef);
  //   const userData = {
  //     ...docSnapUser.data(),
  //     id: docSnapUser.id,
  //   };
  //   setUser(userData);
  // };

  // const Logout = () => {
  //   //clear sessionid
  //   sessionStorage.removeItem("SessionId");
  //   navigate("../../Login");
  // };

  // useEffect(() => {
  //   userData();
  // }, []);
  return (
    <div className="Topbar">
      <div className="container">
        <div className="items">
          <div className="logo">
            <img src="" alt="logo" />
          </div>
          <div className="mid">
            <div className="containerBottom"></div>
          </div>
          <nav>
            <div className="nav">
              <Link to="./#">notset</Link>{" "}
            </div>
            <div className="nav">
              <Link to="./">Home</Link>{" "}
            </div>
            <div className="nav">
              <Link to="./CaseRequests">Requests</Link>{" "}
            </div>
          </nav>
        </div>
        <div className="UserContainer">
            <Link to="./LawyerProfile">
          <div className="Lawyer">

            <div className="Detail">
              <div className="userName">
                <Typography variant="subtitle1">{user.user_name}</Typography>
                <Typography variant="subtitle2">Lawyer</Typography>
              </div>
            </div>
            <div className="logo" >
              <img src="https://source.unsplash.com/random" alt="logo" />
            </div>
          </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Topbar;