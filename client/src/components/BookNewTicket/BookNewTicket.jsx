import React, { useState } from "react";
import { movies, slots } from "../../data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./BookNewTicket.css";

const BookNewTicket = ({ handleSubmit }) => {

  // states for booking related data
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [seats, setSeats] = useState({
    A1: 0,
    A2: 0,
    A3: 0,
    A4: 0,
    D1: 0,
    D2: 0,
  });
 
  // handleChange function for move tracking movie
  const handleMovieClick = (movie) => {
    if (selectedMovie === movie) {
      setSelectedMovie(null);
    } else {
      setSelectedMovie(movie);
    }
  };

  // handlechange function for tracking slots
  const handleTimeClick = (time) => {
    if (selectedTime === time) {
      setSelectedTime(null);
    } else {
      setSelectedTime(time);
    }
  };
//  handlechange function for tracking seats
  const handleSeatChange = (e) => {
    setSeats({ ...seats, [e.target.name]: e.target.value });
  };

  // booking info object
  const singleTicket = {
    selectedMovie,
    selectedTime,
    seats,
  };
 
  // toastify function
  const notify = () => toast.error("Fill All Details!");
  const submit = () => {
    if (
      !selectedMovie ||
      !selectedTime ||
      !Object.values(seats).some((seat) => seat > 0)
    ) {
      notify();
    } else {
      handleSubmit(singleTicket);
      setSelectedMovie(null);
      setSelectedTime(null);
      setSeats({
        A1: 0,
        A2: 0,
        A3: 0,
        A4: 0,
        D1: 0,
        D2: 0,
      })
    }
  };

  return (
    <>
      <div className="book-section">
        <h2 className="book-title">Select a Movie</h2>
        <ToastContainer />
        <div className="movie-row">
          {movies.map((movie, index) => (
            <div
              className={`movie-column ${
                selectedMovie === movie ? "movie-column-selected" : ""
              }`}
              onClick={() => handleMovieClick(movie)}
              key={index}
            >
              {movie}
            </div>
          ))}
        </div>
      </div>
      <div className="book-section">
        <h2 className="book-title">Select a Time Slot</h2>
        <div className="movie-row">
          {slots.map((time, index) => (
            <div
              className={`slot-column ${
                selectedTime === time ? "slot-column-selected" : ""
              }`}
              onClick={() => handleTimeClick(time)}
              key={index}
            >
              {time}
            </div>
          ))}
        </div>
      </div>
      <div className="book-section">
        <h2 className="book-title">Select the seats</h2>
        <div className="movie-row">
          <div
            className={`seat-column ${seats.A1 > 0 && "seat-column-selected"}`}
          >
            <label>Type A1</label>
            <input
              type="number"
              min="0"
              name="A1"
              value={seats.A1}
              onChange={handleSeatChange}
            />
          </div>
          <div
            className={`seat-column ${seats.A2 > 0 && "seat-column-selected"}`}
          >
            <label>Type A2</label>
            <input
              type="number"
              min="0"
              name="A2"
              value={seats.A2}
              onChange={handleSeatChange}
            />
          </div>
          <div
            className={`seat-column ${seats.A3 > 0 && "seat-column-selected"}`}
          >
            <label>Type A3</label>
            <input
              type="number"
              min="0"
              name="A3"
              value={seats.A3}
              onChange={handleSeatChange}
            />
          </div>
          <div
            className={`seat-column ${seats.A4 > 0 && "seat-column-selected"}`}
          >
            <label>Type A4</label>
            <input
              type="number"
              min="0"
              name="A4"
              value={seats.A4}
              onChange={handleSeatChange}
            />
          </div>
          <div
            className={`seat-column ${seats.D1 > 0 && "seat-column-selected"}`}
          >
            <label>Type D1</label>
            <input
              type="number"
              min="0"
              name="D1"
              value={seats.D1}
              onChange={handleSeatChange}
            />
          </div>
          <div
            className={`seat-column ${seats.D2 > 0 && "seat-column-selected"}`}
          >
            <label>Type D2</label>
            <input
              type="number"
              min="0"
              name="D2"
              value={seats.D2}
              onChange={handleSeatChange}
            />
          </div>
        </div>
      </div>
      <div className="button-container">
        <button onClick={submit}>Book Now</button>
      </div>
    </>
  );
};

export default BookNewTicket;
