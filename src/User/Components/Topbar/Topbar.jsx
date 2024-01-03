import React, { useEffect, useState } from "react";
import "./Topbar.css";

import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/Firebase";

const Topbar = () => {
  const [user, setUser] = useState([]);
  const userData = async () => {
    const id = sessionStorage.getItem("SessionId");
    const docRef = doc(db, "collection_user", id);
    const docSnapUser = await getDoc(docRef);
    const userData = {
      ...docSnapUser.data(),
      id: docSnapUser.id,
    };
    setUser(userData);
  };
  useEffect(() => {
    userData();
  }, []);
  return (
    <div className="Topbar">
      <div className="container">
        <div className="items">
          <div className="logo">
            <img src= "" alt="logo" />
          </div>
          <div className="mid">
          <div className="containerBottom">
        
      </div>
          </div>
          <nav>
            <div className="nav"><Link to="/Product">Product</Link>  </div>
            <div className="nav"><Link to="/">Home</Link> </div>
            <div className="nav"><Link to="/">Home</Link> </div>
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
            <div className="logo">
              <img src="https://source.unsplash.com/random" alt="logo" />
            </div>
           
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Topbar;
