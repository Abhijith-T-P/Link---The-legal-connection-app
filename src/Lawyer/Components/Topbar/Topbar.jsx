import React, { useEffect, useState } from "react";
import "./Topbar.css";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/Firebase";

const Topbar = () => {
  const navigate = useNavigate();
  const [lawyer, setLawyer] = useState(null);

  useEffect(() => {
    const userData = async () => {
      const lid = sessionStorage.getItem("lid");
      if (!lid) {
        navigate("../login");
        return;
      }
      const docRef = doc(db, "lawyer_collection", lid);
      const docSnapUser = await getDoc(docRef);
      const userData = {
        ...docSnapUser.data(),
        id: docSnapUser.id,
      };
      setLawyer(userData);
    };

    userData();
  }, [navigate]);

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
              <Link to="/product">Product</Link>{" "}
            </div>
            <div className="nav">
              <Link to="/">Home</Link>{" "}
            </div>
            <div className="nav">
              <Link to="/">Home</Link>{" "}
            </div>
          </nav>
        </div>
        <div className="UserContainer">
          <div className="User">
            <div className="Detail">
              <div className="userName">
                {lawyer ? (
                  <>
                    <Typography variant="subtitle1">{lawyer.full_name
}</Typography>
                    <Typography variant="subtitle2">Lawyer</Typography>
                  </>
                ) : null}
              </div>
            </div>
            <div className="logo">
              {lawyer ? (
                <img src="https://source.unsplash.com/random" alt="logo" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
