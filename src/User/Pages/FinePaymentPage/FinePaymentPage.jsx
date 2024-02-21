import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { db } from "../../../config/Firebase";
import "./FinePayment.css";

import img1 from "../../assets/icon/Fine/redLight.png";
import img2 from "../../assets/icon/Fine/OverSpeed.png";
import img3 from "../../assets/icon/Fine/NoParking.png";
import img4 from "../../assets/icon/Fine/helmet.png";
import img5 from "../../assets/icon/Fine/WrecklessDriving.png";
import img6 from "../../assets/icon/Fine/Littering.png";
import img7 from "../../assets/icon/Fine/NoMask.png";
import img8 from "../../assets/icon/Fine/NoSmoking.png";
import img9 from "../../assets/icon/Fine/NoAlcohol.png";
import img10 from "../../assets/icon/Fine/Noise.png";


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
    <div className="payfinecontainer" style={{ padding: "10px 220px " }}>
      <div className="heading">
        <Typography variant="h4">Pay Fine</Typography>
      </div>
      <div className="fines">
        <Grid container spacing={2}>
          <Grid itemxs={12} md={6} lg={4}>
            <div className="finebody">
              <div className="fineHeading">
                <Typography variant="h6">Traffic</Typography>
                <Typography variant="h6">25-11-2024</Typography>
              </div>
              <div className="circle">
                <div className="leftCircle"></div>
                <div className="rightCircle"></div>
              </div>
              <div className="fineContainer">
                <div className="fineImg">
                  <img src={img1} alt="fine img" />
                </div>
                
                <Typography variant="h6">Red light</Typography>
                <Typography variant="subtitle1">Detail</Typography>
                <Typography variant="subtitle1">Amount :</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Pay Fine
                </Button>
              </div>
            </div>
          </Grid>
          <Grid itemxs={12} md={6} lg={4}>
            <div className="finebody">
              <div className="fineHeading">
                <Typography variant="h6">Traffic</Typography>
                <Typography variant="h6">25-11-2024</Typography>
              </div>
              <div className="circle">
                <div className="leftCircle"></div>
                <div className="rightCircle"></div>
              </div>
              <div className="fineContainer">
                <div className="fineImg">
                  <img src={img2} alt="fine img" />
                </div>
                
                <Typography variant="h6">Overspeed</Typography>
                <Typography variant="subtitle1">Detail</Typography>
                <Typography variant="subtitle1">Amount :</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Pay Fine
                </Button>
              </div>
            </div>
          </Grid>
          <Grid itemxs={12} md={6} lg={4} >
            <div className="finebody">
              <div className="fineHeading">
                <Typography variant="h6">Traffic</Typography>
                <Typography variant="h6">25-11-2024</Typography>
              </div>
              <div className="circle">
                <div className="leftCircle"></div>
                <div className="rightCircle"></div>
              </div>
              <div className="fineContainer">
                <div className="fineImg">
                  <img src={img3} alt="fine img" />
                </div>
                
                <Typography variant="h6">Parking</Typography>
                <Typography variant="subtitle1">Detail</Typography>
                <Typography variant="subtitle1">Amount :</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Pay Fine
                </Button>
              </div>
            </div>
          </Grid>
          <Grid itemxs={12} md={6} lg={4}>
            <div className="finebody">
              <div className="fineHeading">
                <Typography variant="h6">Traffic</Typography>
                <Typography variant="h6">25-11-2024</Typography>
              </div>
              <div className="circle">
                <div className="leftCircle"></div>
                <div className="rightCircle"></div>
              </div>
              <div className="fineContainer">
                <div className="fineImg">
                  <img src={img4} alt="fine img" />
                </div>
                
                <Typography variant="h6">No Helmet/Seatbelt </Typography>
                <Typography variant="subtitle1">Detail</Typography>
                <Typography variant="subtitle1">Amount :</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Pay Fine
                </Button>
              </div>
            </div>
          </Grid>
          <Grid itemxs={12} md={6} lg={4}>
            <div className="finebody">
              <div className="fineHeading">
                <Typography variant="h6">Traffic</Typography>
                <Typography variant="h6">25-11-2024</Typography>
              </div>
              <div className="circle">
                <div className="leftCircle"></div>
                <div className="rightCircle"></div>
              </div>
              <div className="fineContainer">
                <div className="fineImg">
                  <img src={img5} alt="fine img" />
                </div>
                
                <Typography variant="h6">rekless driving</Typography>
                <Typography variant="subtitle1">Detail</Typography>
                <Typography variant="subtitle1">Amount :</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Pay Fine
                </Button>
              </div>
            </div>
          </Grid>
          <Grid itemxs={12} md={6} lg={4}>
            <div className="finebody">
              <div className="fineHeading">
                <Typography variant="h6">Environmental Violations</Typography>
                <Typography variant="h6">25-11-2024</Typography>
              </div>
              <div className="circle">
                <div className="leftCircle"></div>
                <div className="rightCircle"></div>
              </div>
              <div className="fineContainer">
                <div className="fineImg">
                  <img src={img6} alt="fine img" />
                </div>
                
                <Typography variant="h6">Littering</Typography>
                <Typography variant="subtitle1">Detail</Typography>
                <Typography variant="subtitle1">Amount :</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Pay Fine
                </Button>
              </div>
            </div>
          </Grid>
          <Grid itemxs={12} md={6} lg={4}>
            <div className="finebody">
              <div className="fineHeading">
                <Typography variant="h6">Health and Safety Violations</Typography>
                <Typography variant="h6">25-11-2024</Typography>
              </div>
              <div className="circle">
                <div className="leftCircle"></div>
                <div className="rightCircle"></div>
              </div>
              <div className="fineContainer">
                <div className="fineImg">
                  <img src={img7} alt="fine img" />
                </div>
                
                <Typography variant="h6">No mask</Typography>
                <Typography variant="subtitle1">Detail</Typography>
                <Typography variant="subtitle1">Amount :</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Pay Fine
                </Button>
              </div>
            </div>
          </Grid>
          <Grid itemxs={12} md={6} lg={4}>
            <div className="finebody">
              <div className="fineHeading">
                <Typography variant="h6">Health and Safety Violations</Typography>
                <Typography variant="h6">25-11-2024</Typography>
              </div>
              <div className="circle">
                <div className="leftCircle"></div>
                <div className="rightCircle"></div>
              </div>
              <div className="fineContainer">
                <div className="fineImg">
                  <img src={img8} alt="fine img" />
                </div>
                
                <Typography variant="h6">Smotking</Typography>
                <Typography variant="subtitle1">Detail</Typography>
                <Typography variant="subtitle1">Amount :</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Pay Fine
                </Button>
              </div>
            </div>
          </Grid>
          <Grid itemxs={12} md={6} lg={4}>
            <div className="finebody">
              <div className="fineHeading">
                <Typography variant="h6">Civil offense</Typography>
                <Typography variant="h6">25-11-2024</Typography>
              </div>
              <div className="circle">
                <div className="leftCircle"></div>
                <div className="rightCircle"></div>
              </div>
              <div className="fineContainer">
                <div className="fineImg">
                  <img src={img9} alt="fine img" />
                </div>
                
                <Typography variant="h6">Drinking</Typography>
                <Typography variant="subtitle1">Detail</Typography>
                <Typography variant="subtitle1">Amount :</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Pay Fine
                </Button>
              </div>
            </div>
          </Grid>
          <Grid itemxs={12} md={6} lg={4}>
            <div className="finebody">
              <div className="fineHeading">
                <Typography variant="h6">Civil offense</Typography>
                <Typography variant="h6">25-11-2024</Typography>
              </div>
              <div className="circle">
                <div className="leftCircle"></div>
                <div className="rightCircle"></div>
              </div>
              <div className="fineContainer">
                <div className="fineImg">
                  <img src={img10} alt="fine img" />
                </div>
                
                <Typography variant="h6">Noise Pollution</Typography>
                <Typography variant="subtitle1">Detail</Typography>
                <Typography variant="subtitle1">Amount :</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Pay Fine
                </Button>
              </div>
            </div>
          </Grid>
          
        </Grid>
      </div>
    </div>
  );
};

export default FinePaymentPage;
