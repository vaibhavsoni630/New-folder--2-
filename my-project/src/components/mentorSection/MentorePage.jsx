// MentorPage.js
import React from 'react';
import MentorProfile from './MentorProfile';
import Appointment from './Appointment'


function MentorPage() {
    return (
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold text-gray-800">Roomity</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MentorProfile name="John Doe" expertise="Web Development" bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." />
            {/* Add more MentorProfile components */}
            <Appointment/>
          </section>
        </main>
      </div>
    );
  }
  
  export default MentorPage;
