import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../config/Firebase";


const PermitApprovalPage = () => {
  const [permitRequests, setPermitRequests] = useState([]);

  useEffect(() => {
    // Fetch permit requests from the database
    const fetchPermitRequests = async () => {
      const permitRequestsRef = collection(db, "permitRequests");
      const permitRequestsSnapshot = await getDocs(permitRequestsRef);
      const permitRequestsList = permitRequestsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPermitRequests(permitRequestsList);
    };

    fetchPermitRequests();
  }, []);

  const handleDecision = async (permitId, decision) => {
    try {
      // Update the permit request status in the database
      const permitRef = doc(db, "permitRequests", permitId);
      await updateDoc(permitRef, { status: decision });

      // Refresh the permit requests list
      const updatedPermitRequests = permitRequests.map((permit) =>
        permit.id === permitId ? { ...permit, status: decision } : permit
      );
      setPermitRequests(updatedPermitRequests);
    } catch (error) {
      console.error("Error updating permit request status:", error);
    }
  };

  return (
    <div style={{ padding: "10px 220px" }}>
      <Typography variant="h4">Permit Approval</Typography>

      {permitRequests.length === 0 ? (
        <Typography variant="body1">No permit requests available.</Typography>
      ) : (
        permitRequests.map((permit) => (
          <Card key={permit.id} sx={{ marginTop: 2 }}>
            <CardContent>
              <Typography variant="h6">
                Permit Type: {permit.permitType}
              </Typography>
              <Typography>Applicant Name: {permit.applicantName}</Typography>
              <Typography>
                Applicant Address: {permit.applicantAddress}
              </Typography>
              <Typography>Reason: {permit.reason}</Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleDecision(permit.id, "approved")}
              >
                Approve
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDecision(permit.id, "rejected")}
              >
                Reject
              </Button>
            </CardActions>
          </Card>
        ))
      )}
    </div>
  );
};

export default PermitApprovalPage;
