// AppointmentPage.jsx
import React, { useState } from 'react';

function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle appointment submission logic here
    console.log('Appointment scheduled for:', selectedDate, selectedTime);
    window.alert("appointment scheduled")
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      
      <main>
        <section className=" bg-emerald-700 shadow-md p-6 rounded-lg">
          <h2 className="text-6xl font-bold text-white mb-4">Schedule Appointment</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="date" className="block   text-white mb-2">Select Date:</label>
              <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="border border-gray-300 rounded-md py-2 px-4 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="time" className="block text-sm  text-white mb-2">Select Time:</label>
              <input
                type="time"
                id="time"
                value={selectedTime}
                onChange={handleTimeChange}
                className="border border-gray-300 rounded-md py-2 px-4 w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
            >
              Schedule Appointment
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default AppointmentPage;

