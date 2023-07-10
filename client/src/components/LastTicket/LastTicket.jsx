import React from "react";
import "./LastTicket.css";

const LastTicket = ({ lastTicket }) => {
  // condtional rendering on basis of lastTicket 
  if (!lastTicket || !lastTicket.seats) {
    return <div className="ticket">No previous booking found</div>;
  }

  return (
    <div className="ticket">
      <h2>Last Booking Details:</h2>
      <b>Seats: </b>
      {Object.entries(lastTicket.seats).map(([seat, value]) => (
        <p key={seat}>
          <b>{seat}: </b>
          {value}
        </p>
      ))}
      <p>
        <b>Slot: </b>
        {lastTicket.slot}
      </p>
      <p>
        <b>Movie: </b>
        {lastTicket.movie}
      </p>
    </div>
  );
};

export default LastTicket;
