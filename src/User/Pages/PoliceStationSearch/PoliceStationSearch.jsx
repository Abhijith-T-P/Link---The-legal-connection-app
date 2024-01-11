import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { db } from "../../../config/Firebase";

const PoliceStationSearch = () => {
  const [districts, setDistricts] = useState([]);
  const [places, setPlaces] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [policeStations, setPoliceStations] = useState([]);

  useEffect(() => {
    // Fetch the list of districts from the database
    const fetchDistricts = async () => {
      const districtsRef = collection(db, "districts");
      const districtsSnapshot = await getDocs(districtsRef);
      const districtsList = districtsSnapshot.docs.map((doc) => doc.data().name);
      setDistricts(districtsList);
    };

    fetchDistricts();
  }, []);

  const fetchPlaces = async (district) => {
    const placesRef = collection(db, "places");
    const placesQuery = query(placesRef, where("district", "==", district));
    const placesSnapshot = await getDocs(placesQuery);
    const placesList = placesSnapshot.docs.map((doc) => doc.data().name);
    setPlaces(placesList);
  };

  const fetchPoliceStations = async () => {
    // Perform a query to fetch police stations based on selected district and place
    // Adjust this part based on your database structure
    const policeStationsRef = collection(db, "police_stations");
    const queryRef = query(
      policeStationsRef,
      where("district", "==", selectedDistrict),
      where("place", "==", selectedPlace)
    );

    const policeStationsSnapshot = await getDocs(queryRef);
    const stationsList = policeStationsSnapshot.docs.map((doc) => doc.data().name);
    setPoliceStations(stationsList);
  };

  useEffect(() => {
    if (selectedDistrict) {
      fetchPlaces(selectedDistrict);
    }
  }, [selectedDistrict]);

  useEffect(() => {
    if (selectedDistrict && selectedPlace) {
      fetchPoliceStations();
    }
  }, []);

  return (
    <div>
      <Typography variant="h4">Search Police Station</Typography>

      <FormControl fullWidth margin="normal">
        <InputLabel id="district-label">Select District</InputLabel>
        <Select
          labelId="district-label"
          id="district-select"
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          label="Select District"
        >
          {districts.map((district) => (
            <MenuItem key={district} value={district}>
              {district}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedDistrict && (
        <FormControl fullWidth margin="normal">
          <InputLabel id="place-label">Select Place</InputLabel>
          <Select
            labelId="place-label"
            id="place-select"
            value={selectedPlace}
            onChange={(e) => setSelectedPlace(e.target.value)}
            label="Select Place"
          >
            {places.map((place) => (
              <MenuItem key={place} value={place}>
                {place}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {selectedDistrict && selectedPlace && (
        <div>
          <Typography variant="h5">Police Stations in {selectedPlace}, {selectedDistrict}</Typography>
          {policeStations.length === 0 ? (
            <Typography>No police stations found.</Typography>
          ) : (
            <ul>
              {policeStations.map((station) => (
                <li key={station}>{station}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default PoliceStationSearch;
