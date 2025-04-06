import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You can use axios to fetch data from your API

const Trending = () => {
  const [trends, setTrends] = useState([]); // State to store the fetched trends
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  // Fetch trending data from the backend API
  useEffect(() => {
    // Replace 'your_api_endpoint_here' with your actual backend API endpoint
    axios.get('http://localhost:5001/api/trends')
      .then(response => {
        setTrends(response.data); // Update state with fetched trends
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(err => {
        setError('Failed to load trends. Please try again later.');
        setLoading(false); // Set loading to false in case of an error
      });
  }, []); // Empty dependency array ensures it only runs once when component mounts

  if (loading) {
    return <div>Loading trends...</div>; // Show loading message while fetching data
  }

  if (error) {
    return <div>{error}</div>; // Show error message if API request fails
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Trending News</h2>
      <div style={styles.trendsList}>
        {trends.map((trend, index) => (
          <div key={index} style={styles.trendItem}>
            <h3 style={styles.trendTitle}>{trend.title}</h3>
            <p style={styles.trendDescription}>{trend.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f4f4f9',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  trendsList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  trendItem: {
    width: '80%',
    maxWidth: '800px',
    backgroundColor: 'white',
    padding: '15px',
    marginBottom: '15px',
    borderRadius: '8px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  },
  trendTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
  },
  trendDescription: {
    fontSize: '16px',
    color: '#555',
    marginTop: '10px',
  },
};

export default Trending;
