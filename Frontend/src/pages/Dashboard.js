import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.leftSection}>
          <img src="/logo.png" alt="Logo" style={styles.logo} />
          <div style={styles.branding}>
            <h1 style={styles.brandName}>InvestAssure</h1>
          </div>
        </div>
        <div style={styles.navButtons}>
          <Link to="/about-us" style={styles.navLink}>
            <button style={styles.navButton}>About Us</button>
          </Link>
          <Link to="/investment-search" style={styles.navLink}>
            <button style={styles.navButton}>Investment Search</button>
          </Link>
        </div>
      </div>

      {/* Image and Intro Text */}
      <div style={styles.contentContainer}>
        <img src="/banner-image.png" alt="Banner" style={styles.bannerImage} />
        <div style={styles.introText}>
          <h1 style={styles.welcomeHeading}>Welcome to InvestAssure</h1>
          <p style={styles.subtitle}>Don't guess the risk – Know them!</p>
          <p style={styles.description}>
            InvestAssure uses real-time financial data, news sentiment, and SEC filings to uncover hidden risks in investments.
            With the help of Natural Language Processing, it detects red flags like lawsuits, fraud, or financial instability,
            so you can view risk scores, track alerts, and make informed decisions with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(to right, #58b6a6, white)',
    paddingBottom: '60px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    background: 'linear-gradient(to right, #58b6a6, white)',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '100px',
    height: 'auto',
    marginRight: '15px',
  },
  branding: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  brandName: {
    fontSize: '28px',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    margin: 0,
  },
  navButtons: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navLink: {
    textDecoration: 'none',
    marginLeft: '20px',
  },
  navButton: {
    padding: '10px 20px',
    backgroundColor: '#fff',
    color: '#58b6a6',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: '70px',
    padding: '0 60px',
    flexWrap: 'wrap',
    gap: '40px',
  },
  bannerImage: {
    width: '500px',
    height: 'auto',
    borderRadius: '12px',
  },
  introText: {
    maxWidth: '600px',
    fontFamily: 'Segoe UI, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  welcomeHeading: {
    fontSize: '48px',
    color: '#0f3d3e',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '20px',
    color: '#115e59',
    marginBottom: '25px',
    fontStyle: 'italic',
  },
  description: {
    fontSize: '18px',
    color: '#333',
    lineHeight: '1.7',
  },
};

export default Dashboard;
