import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import "./pay&card.css";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../config/Firebase";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [name, setName] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getFine();
  }, [id]);
  const getFine = async () => {
    const fineRef = doc(db, "collection_UserFine", id);
    const fineData = await getDoc(fineRef);
    if (fineData.exists()) {
        console.log("Document data:", fineData.data());
    } else {
        console.log("No such document!");
    }
};


  console.log("ID from URL:", id);

  // Function to format the card number input
  const handleCardNumberChange = (e) => {
    const input = e.target.value;
    const formattedInput = input
      .replace(/\D/g, "") // Remove non-numeric characters
      .replace(/(\d{4})(?=\d)/g, "$1 "); // Add space after every 4 characters
    setCardNumber(formattedInput);
  };

  // Function to format the expiry date input
  const handleExpiryDateChange = (e) => {
    const input = e.target.value;
    const formattedInput = input
      .replace(/\D/g, "") // Remove non-numeric characters
      .replace(/(\d{2})(\d)/, "$1/$2") // Add "/" after first two digits
      .substring(0, 5); // Limit input length to 5 characters
    setExpiryDate(formattedInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if CVV is not empty
    if (!cvv.trim()) {
      alert("Please enter CVV");
      return;
    }
    // Log entered values
    console.log("Card Number:", cardNumber);
    console.log("Expiry Date:", expiryDate);
    console.log("CVV:", cvv);
    // Reset form fields after submission
    setCardNumber("");
    setExpiryDate("");
    setCVV("");
    setName("");
  };

  return (
    <div className="payment">
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Payment Details
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <div className="visa-card">
            <div className="logoContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="23"
                height="23"
                viewBox="0 0 48 48"
                className="svgLogo"
              >
                <path
                  fill="#ff9800"
                  d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                ></path>
                <path
                  fill="#d50000"
                  d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                ></path>
                <path
                  fill="#ff3d00"
                  d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                ></path>
              </svg>
            </div>
            <div className="number-container">
              <label className="input-label" htmlFor="cardNumber">
                CARD NUMBER
              </label>
              <input
                className="inputstyle"
                id="cardNumber"
                placeholder="XXXX XXXX XXXX XXXX"
                name="cardNumber"
                type="text"
                maxLength="19" // Adjusted maxLength to account for spaces
                value={cardNumber}
                onChange={handleCardNumberChange}
                required
              />
            </div>

            <div className="name-date-cvv-container">
              <div className="name-wrapper">
                <label className="input-label" htmlFor="holderName">
                  CARD HOLDER
                </label>
                <input
                  className="inputstyle"
                  id="holderName"
                  placeholder="NAME"
                  type="text"
                  value={name}
                  maxLength="20"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="expiry-wrapper">
                <label className="input-label" htmlFor="expiry">
                  VALID THRU
                </label>
                <input
                  className="inputstyle"
                  id="expiry"
                  placeholder="MM/YY"
                  type="text"
                  maxLength="5"
                  autoComplete="off"
                  pattern="\d{2}/\d{2}"
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                  required
                />
              </div>
              <div className="cvv-wrapper">
                <label className="input-label" htmlFor="cvv">
                  CVV
                </label>
                <input
                  className="inputstyle"
                  placeholder="***"
                  maxLength="3"
                  id="cvv"
                  type="password"
                  pattern="\d{3}"
                  value={cvv}
                  onChange={(e) => setCVV(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default PaymentPage;
