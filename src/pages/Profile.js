import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Profile = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Sample data for the user profile
  const fullName = 'John Doe';
  const username = 'johndoe123';
  const email = 'johndoe@example.com';
  const phoneNumber = '+1234567890';

  return (
    <div style={styles.container}>
      {/* New Navigation Bar */}
      <div style={styles.navBar}>
        <button style={styles.navButton} onClick={() => navigate('/dashboard')}> {/* Left arrow button */}
          &#8592; {/* This is the left arrow symbol */}
        </button>
        <button style={styles.navButton}>Trending</button>
        <button style={styles.navButton}>Sign Out</button>
      </div>

      <h2 style={styles.greeting}>Hi, {username}! Here are your details:</h2>

      {/* Profile Details */}
      <div style={styles.profileContainer}>
        <div style={styles.profileItem}>
          <span style={styles.profileLabel}>Full Name:</span>
          <span style={styles.profileValue}>{fullName}</span>
        </div>
        <div style={styles.profileItem}>
          <span style={styles.profileLabel}>Username:</span>
          <span style={styles.profileValue}>{username}</span>
        </div>
        <div style={styles.profileItem}>
          <span style={styles.profileLabel}>Email:</span>
          <span style={styles.profileValue}>{email}</span>
        </div>
        <div style={styles.profileItem}>
          <span style={styles.profileLabel}>Phone Number:</span>
          <span style={styles.profileValue}>{phoneNumber}</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f4f4f9',
  },
  navBar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#58b6a6', // Background color for the navbar
    padding: '15px 0',
    fontSize: '18px',
    color: 'white',
  },
  navButton: {
    padding: '10px 20px',
    backgroundColor: '#58b6a6',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  greeting: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  profileItem: {
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    maxWidth: '600px',
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  },
  profileLabel: {
    fontSize: '16px',
    color: '#333',
    fontWeight: 'bold',
  },
  profileValue: {
    fontSize: '16px',
    color: '#555',
  },
};

export default Profile;
