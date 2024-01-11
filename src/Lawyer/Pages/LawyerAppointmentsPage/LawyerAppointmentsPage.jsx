import React, { useState, useEffect } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

const LawyerAppointmentsPage = ({ lawyerId }) => {
  // Assume you have a function to fetch the lawyer's appointments
  const fetchAppointments = async () => {
    // Your logic to fetch appointments from the database based on the lawyerId
    // Example: const appointments = await getLawyerAppointments(lawyerId);
    // Set the appointments state with the fetched data
    // setAppointments(appointments);
  };

  useEffect(() => {
    // Fetch lawyer's appointments when the component mounts
    fetchAppointments();
  }, []);

  // Assume appointments is an array of appointment objects with properties like appointmentId and clientName
  const appointments = [
    { appointmentId: 1, clientName: "Client 1" },
    { appointmentId: 2, clientName: "Client 2" },
    { appointmentId: 3, clientName: "Client 3" },
    // Add more appointments as needed
  ];

  const handleAcceptAppointment = (appointmentId) => {
    // Your logic to handle accepting the appointment
    // Example: acceptAppointment(appointmentId);
    // After accepting, you may want to update the state or refetch appointments
    // fetchAppointments();
  };

  const handleRejectAppointment = (appointmentId) => {
    // Your logic to handle rejecting the appointment
    // Example: rejectAppointment(appointmentId);
    // After rejecting, you may want to update the state or refetch appointments
    // fetchAppointments();
  };

  const acceptedAppointments = appointments.filter(
    (appointment) => appointment.isAccepted
  );

  return (
    <div className="LawyerAppointmentsPage">
      <Typography variant="h4">Appointments</Typography>

      {appointments.length > 0 ? (
        <List>
          {appointments.map((appointment) => (
            <ListItem key={appointment.appointmentId}>
              <ListItemText primary={appointment.clientName} />
              {!appointment.isAccepted && (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAcceptAppointment(appointment.appointmentId)}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleRejectAppointment(appointment.appointmentId)}
                  >
                    Reject
                  </Button>
                </>
              )}
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="subtitle1">No appointments available.</Typography>
      )}

      {acceptedAppointments.length > 0 && (
        <div>
          <Typography variant="h5">Accepted Appointments</Typography>
          <List>
            {acceptedAppointments.map((acceptedAppointment) => (
              <ListItem key={acceptedAppointment.appointmentId}>
                <ListItemText primary={acceptedAppointment.clientName} />
              </ListItem>
            ))}
          </List>
        </div>
      )}
    </div>
  );
};

export default LawyerAppointmentsPage;
