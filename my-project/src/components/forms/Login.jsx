import React, { useState } from 'react';
import StudentLogin from './Studentlogin';
import CompanyLogin from './Companylogin';
import MentorLogin from './Mentorlogin';

const FormTabs = () => {
  const [activeTab, setActiveTab] = useState('student');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-2">
      <h2 className="flex justify-center my-5 text-4xl font-bold">Login Form</h2>
      <div className="flex justify-center">
        <button
          className={`px-6 py-2 border-2 rounded-sm ${
            activeTab === 'student' ? 'bg-gradient-to-r from-fuchsia-800 to-pink-600 text-white' : 'bg-white'
          }`}
          onClick={() => handleTabChange('student')}
        >
          Student
        </button>
        <button
          className={`px-6 py-2 border-2 rounded-sm ${
            activeTab === 'company' ? 'bg-gradient-to-r from-fuchsia-800 to-pink-600 text-white' : 'bg-white'
          }`}
          onClick={() => handleTabChange('company')}
        >
          Company
        </button>
        <button
          className={`px-6 py-2 border-2 rounded-sm ${
            activeTab === 'mentor' ? 'bg-gradient-to-r from-fuchsia-800 to-pink-600 text-white' : 'bg-white'
          }`}
          onClick={() => handleTabChange('mentor')}
        >
          Mentor
        </button>
      </div>
      <div className="mt-4">
        {activeTab === 'student' && <StudentLogin />}
        {activeTab === 'company' && <CompanyLogin />}
        {activeTab === 'mentor' && <MentorLogin />}
      </div>
    </div>
  );
};

export default FormTabs;
