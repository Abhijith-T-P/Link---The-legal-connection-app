import React, { useState } from "react";
import { TextField, Typography, CircularProgress } from "@mui/material";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../config/Firebase";
import "./FineUser.css";
const FineUser = () => {
  const [userId, setUserId] = useState("");
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUserDetails = async (id) => {
    try {
      setLoading(true);
      const userDocRef = collection(db, "collection_user");
      const uquery = query(userDocRef, where("user_Id", "==", id));
      const userDocSnapshot = await getDocs(uquery);

      const userDetail = userDocSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserDetails(userDetail);
      console.log(userDetail);
      console.log(id);
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUserIdChange = (e) => {
    const value = e.target.value;
    setUserId(value);
    if (value.length === 10) {
      fetchUserDetails(value);
    } else {
      setUserDetails([]);
    }
  };

  return (
    <div className="FineUser" style={{ padding: "10px 220px" }}>
      <div className="heading">
        <Typography variant="h3">Search User</Typography>
      </div>
      <div className="search">
        <TextField
          label="User ID"
          variant="outlined"
          type="number"
          value={userId}
          onChange={handleUserIdChange}
        />
      </div>
      <div className="hr"></div>
      <div className="detail">
        {loading && <CircularProgress />}
        {!loading && userDetails.length === 0 && (
          <Typography variant="body1">User Details</Typography>
        )}
        {!loading &&
          userDetails.length > 0 &&
          userDetails.map((user) => (
                <div className="card">
            <div key={user.id} className="user">

              <div className="image">
                {user.user_photo && (
                    <img src={user.user_photo} alt="User Photo" />
                    )}
                {!user.user_photo && <div>No photo available</div>}
              </div>
              <div className="details">
                <Typography variant="h5">{user.user_name}</Typography>
                <Typography variant="h6">{user.user_dob}</Typography>
                <Typography variant="h6">{user.user_address}</Typography>
                <Typography variant="h6">{user.user_mobile}</Typography>
                <Typography variant="h6">{user.user_email}</Typography>
                <Typography variant="h6">{user.user_gender}</Typography>
              </div>
                    </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FineUser;
