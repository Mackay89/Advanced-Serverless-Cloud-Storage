import React from 'react';
import Navbar from '../components/Navbar';
import FileUploader from '../components/FileUploader';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h1>Your Dashboard</h1>
        <FileUploader />
      </div>
    </>
  );
};

export default Dashboard;

