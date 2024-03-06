import React, { useState, useEffect } from "react";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { db } from "../../../config/Firebase";
import "../mainpadding.css";

const PoliceStationSearch = () => {
  const [distList, setDistList] = useState([]);
  const [dist, setDist] = useState("");
  const [placesList, setPlacesList] = useState([]);
  const [places, setPlaces] = useState([]);
  const [station, setStation] = useState([]);

  useEffect(() => {
    district();
  }, []);

  const district = async () => {
    const getDist = await getDocs(collection(db, "districts"));
    const filteredDist = getDist.docs.map((dist) => ({
      ...dist.data(),
      did: dist.id,
    }));
    console.log(filteredDist);
    setDistList(filteredDist);
  };

  const place = async (dist) => {
    setDist(dist);
    // Clear placesList when district changes
    setPlacesList([]);
  console.log("did ",dist);
    const queryplace = query(collection(db, "Place"), where("District", "==", dist));
    
    const placedata = await getDocs(queryplace);
    const filteredPlace = placedata.docs.map((place, key) => ({
      pid: place.id,
      ...place.data(),
    }));
    console.log("Places list ",filteredPlace);
    setPlacesList(filteredPlace);
  };
  
  useEffect(() => {
    if (places.length > 0) {
      getPoliceStation();
    }
  }, [places]); // Only call getPoliceStation when places state changes
  
  const getPoliceStation = async () => {
    console.log("place id :" ,places);
    const queryPolice = query(collection(db, "PoliceStationPoliceStation"), where("placeId", "==", places));
    const stationList = await getDocs(queryPolice);
    const filteredStation = stationList.docs.map((station, key) => ({
      ...station.data(),
      sid: station.id,
    }));
    console.log("Ps : ",filteredStation);
    setStation(filteredStation);
  };
  
  return (
    <div className="maincontainer">
      <Typography variant="h4">Search Police Station</Typography>

      <FormControl fullWidth margin="normal">
        <InputLabel id="district-label">Select District</InputLabel>
        <Select
          labelId="district-label"
          id="district-select"
          value={dist}
          onChange={(e) => place(e.target.value)}
          label="Select District"
        >
          {distList.map((row, key) => (
            <MenuItem key={key} value={row.did}>
              {row.district}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel id="district-label">Select Place</InputLabel>
        <Select
          labelId="Place-label"
          id="Place-select"
          value={places}
          onChange={(e) => setPlaces(e.target.value)}
          label="Select Place"
        >
          {placesList.map((row, key) => (
            <MenuItem key={key} value={row.pid}>
              {row.Place}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="policeStation">
  {station.map((stationData, key) => (
    <div key={key}>
      <Typography variant="h6">{stationData.stationName}</Typography>
      <Typography>{stationData.address}</Typography>
      <Typography>Phone: {stationData.phone}</Typography>
    </div>
  ))}
</div>
    </div>
  );
};

export default PoliceStationSearch;
