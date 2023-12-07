import React, { useState } from 'react';

const BookingForm = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  // Replace this with actual form handling logic
  const handleClassSelection = (classId) => {
    setSelectedClass(classId);
  };

  const handleBooking = () => {
    // Implement booking logic
    console.log(`Booking class with ID ${selectedClass}`);
  };

  return (
    <div>
      <h2>Book a Class</h2>
      {/* Render class list here */}
      <button onClick={() => handleClassSelection(1)}>Book Introduction to Web Development</button>
      <button onClick={() => handleClassSelection(2)}>Book Yoga for Beginners</button>

      {/* Display selected class information */}
      {selectedClass && <p>Selected Class ID: {selectedClass}</p>}

      {/* Booking button */}
      <button onClick={handleBooking} disabled={!selectedClass}>
        Book Now
      </button>
    </div>
  );
};

export default BookingForm;
