import React, { useEffect, useState } from "react";
import "./Topbar.css";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/Firebase";

const Topbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [userPhoto, setUserPhoto] = useState(null);

  useEffect(() => {
    userData();
  }, []);

  const userData = async () => {
    try {
      const userId = sessionStorage.getItem("uid");
      if (!userId) {
        // If userId is null or undefined, navigate to the login page
        navigate("../../Login");
        return; // Exit the function early
      }

      const docRef = doc(db, "collection_user", userId);
      const docSnapUser = await getDoc(docRef);
      const userData = {
        ...docSnapUser.data(),
        id: docSnapUser.id,
      };
      setUser(userData);
      setUserPhoto(userData.user_photo); // Set the user_photo
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleLogout = () => {
    // Clear sessionId
    sessionStorage.removeItem("uid");
    navigate("../../Login");
  };

  return (
    <div className="Topbar">
      <div className="container">
        <div className="items">
          <div className="logo">
            <h1>Link</h1>
          </div>
          <div className="mid">
            <div className="containerBottom"></div>
          </div>
          <nav>
            <div className="nav">
              <Link to="./MyCasesPage">My Cases</Link>
            </div>
            <div className="nav">
              <Link to="./PolicePage">POLICE</Link>
            </div>
            <div className="nav">
              <Link to="">LAWYER</Link>
            </div>
            <div className="nav">
              <Link to="">Home</Link>
            </div>
          </nav>
        </div>
        <div className="UserContainer">
          <div className="User">
            <div className="Detail">
              <div className="userName">
                <Typography variant="subtitle1">{user.user_name}</Typography>
                <Typography variant="subtitle2">User</Typography>
              </div>
            </div>
            <div className="logo" onClick={handleLogout}>
              <img src={userPhoto || "https://source.unsplash.com/random"} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
