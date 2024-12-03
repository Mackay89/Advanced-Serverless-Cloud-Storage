import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <h1>Welcome to Advanced Cloud Storage</h1>
        <p>Upload and manage your files securely in the cloud.</p>
      </div>
    </>
  );
};

export default Home;

