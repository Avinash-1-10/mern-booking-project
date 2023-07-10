import React, { useState, useEffect } from "react";
import axios from "axios";
import BookNewTicket from "../BookNewTicket/BookNewTicket";
import LastTicket from "../LastTicket/LastTicket";
import "./Bookings.css";

const Bookings = () => {
  // state for lastTicket i.e recent booking
  const [lastTicket, setLastTicket] = useState({});
  // state for updating last booking
  const [dataAdded, setDataAdded] = useState(false);
 

  // getting last booking details from api
  useEffect(() => {
    const getTickets = async () => {
      try {
        const response = await axios.get("https://booking-4lm3.onrender.com/api/booking");
        setLastTicket(response.data.latestBooking);
        console.log("Data received:", response.data.latestBooking);
      } catch (error) {
        console.log("Error fetching tickets:", error);
      }
    };

    getTickets();
  }, [dataAdded]);


  // submit new Booking
  const handleSubmit = async (singleTicket) => {
    const { selectedMovie, selectedTime, seats } = singleTicket;
    console.log("handleSubmit Called");

    try {
      const response = await axios.post("https://booking-4lm3.onrender.com/api/booking", {
        movie: selectedMovie,
        slot: selectedTime,
        seats: seats,
      });
      console.log("Ticket submitted successfully:", response.data);
      setDataAdded(!dataAdded);
    } catch (error) {
      console.log("Error submitting ticket:", error);
    }
  };

  useEffect(() => {
    // Store lastTicket in local storage
    localStorage.setItem("lastTicket", JSON.stringify(lastTicket));
  }, [lastTicket]);

  return (
    <div className="bookings">
      <div className="b-left">
        <BookNewTicket handleSubmit={handleSubmit} />
      </div>
      <div className="b-right">
        <LastTicket lastTicket={lastTicket} />
      </div>
    </div>
  );
};

export default Bookings;
