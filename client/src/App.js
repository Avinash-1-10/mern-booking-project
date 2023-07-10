import React from "react";
import Navbar from "./components/navbar/Navbar";
import Bookings from "./components/Bookings/Bookings";

const App = () => {

  return (
    <div>
      {/* Navbar component */}
      <Navbar />
      {/* Booking component */}
      <Bookings />
    </div>
  );
};

export default App;
