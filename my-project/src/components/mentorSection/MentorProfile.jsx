// MentorProfile.jsx
import React, { useState } from 'react';

function MentorProfile({ name, expertise, bio }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=" bg-emerald-700 shadow-md p-6 rounded-lg">
      <h2 className="text-5xl text-white font-bold mb-2">{name}</h2>
      <p className="text-sm text-white mb-4">{expertise}</p>
      <p className="text-white">{bio}</p>
      <button onClick={openModal} className="bg-blue-800 text-white px-4 py-2 rounded-lg mt-4 inline-block">View Details</button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 max-w-lg rounded-lg">
            <h3 className="text-xl font-bold mb-4">Mentor Details</h3>
            <p>Name: {name}</p>
            <p>Expertise: {expertise}</p>
            <p>Bio: {bio}</p>
            <button onClick={closeModal} className="bg-blue-800 text-white px-4 py-2 rounded-lg mt-4">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MentorProfile;


