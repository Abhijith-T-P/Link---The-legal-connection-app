import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { db } from "../../../config/Firebase";
import './FinePayment.css';

const FinePaymentPage = () => {
  const [fineAmount, setFineAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  const handleSubmit = async () => {
    try {
      // Add fine payment details to the database
      await db.collection("fine_payments").add({
        fineAmount,
        paymentMethod,
        cardNumber,
        expiryDate,
        cvc,
        timestamp: new Date(),
      });

      // Reset form after submission
      setFineAmount("");
      setPaymentMethod("");
      setCardNumber("");
      setExpiryDate("");
      setCvc("");

      alert("Fine payment successful!");
    } catch (error) {
      console.error("Error processing fine payment:", error.message);
      alert("Error processing fine payment. Please try again.");
    }
  };

  return (
    <div className="payfinecontainer">
      <Typography variant="h4">Pay Fine</Typography>

      <TextField
        label="Fine Amount"
        variant="outlined"
        fullWidth
        margin="normal"
        value={fineAmount}
        onChange={(e) => setFineAmount(e.target.value)}
      />

      <TextField
        label="Payment Method"
        variant="outlined"
        fullWidth
        margin="normal"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      />

      <TextField
        label="Card Number"
        variant="outlined"
        fullWidth
        margin="normal"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />

      <TextField
        label="Expiry Date"
        variant="outlined"
        fullWidth
        margin="normal"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
      />

      <TextField
        label="CVC"
        variant="outlined"
        fullWidth
        margin="normal"
        value={cvc}
        onChange={(e) => setCvc(e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Pay Fine
      </Button>
    </div>
  );
};

export default FinePaymentPage;
