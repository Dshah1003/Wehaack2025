import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
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
          <Link to="/dashboard" style={styles.navLink}>
            <button style={styles.navButton}>Dashboard</button>
          </Link>
          <Link to="/investment-search" style={styles.navLink}>
            <button style={styles.navButton}>Investment Search</button>
          </Link>
        </div>
      </div>

      {/* About Us Content */}
      <div style={styles.textBox}>
        <h2 style={styles.heading}>About Us</h2>
        <p style={styles.paragraph}>
          We’re a team of student developers who experienced firsthand how overwhelming investing can be. 
          When one of us tried researching an investment, we hit a wall of complex information that we did not understand. 
          That frustration showed us a bigger problem: while risk information exists through financial advisors, SEC filings, and market reports, 
          truly understanding it requires hours of analysis and financial expertise, putting everyday investors at a disadvantage. 
          We created InvestAssure to change that, because everyone deserves to invest with confidence, not guesswork.
        </p>
        <p style={styles.paragraph}>
          Our platform analyzes real-time SEC filings, news sentiment, and market data using natural language processing 
          to uncover hidden risks like fraud, lawsuits, and financial instability. We translate these insights into simple 
          risk scores and plain-English explanations, giving you the analysis without the complexity. 
          Try InvestAssure today and help us build a fairer financial future.
        </p>

        {/* Team Section */}
        <h2 style={styles.teamHeading}>Meet The Team</h2>
        <div style={styles.teamContainer}>
          <div style={styles.profileBox}>
            <img src="/person1.jpg" alt="Vikyatha Komandla" style={styles.teamImage} />
            <p style={styles.name}>Vikyatha Komandla</p>
            <a href="https://www.linkedin.com/in/vikyatha-ko" target="_blank" rel="noopener noreferrer" style={styles.link}>
              LinkedIn
            </a>
          </div>
          <div style={styles.profileBox}>
            <img src="/person2.jpg" alt="Jahnavi Dhulipalla" style={styles.teamImage} />
            <p style={styles.name}>Jahnavi Dhulipalla</p>
            <a href="https://www.linkedin.com/in/jahnavi-dhulipalla-b60b60166/" target="_blank" rel="noopener noreferrer" style={styles.link}>
              LinkedIn
            </a>
          </div>
          <div style={styles.profileBox}>
            <img src="/person3.png" alt="Nowsin Anzum Mozumder" style={styles.teamImage} />
            <p style={styles.name}>Nowsin Anzum Mozumder</p>
            <a href="https://www.linkedin.com/in/nowsinanzummozumder" target="_blank" rel="noopener noreferrer" style={styles.link}>
              LinkedIn
            </a>
          </div>
          <div style={styles.profileBox}>
            <img src="/person4.jpg" alt="Drashti Shah" style={styles.teamImage} />
            <p style={styles.name}>Drashti Shah</p>
            <a href="https://www.linkedin.com/in/drashti-shah-08796b325/" target="_blank" rel="noopener noreferrer" style={styles.link}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #f0fdfa, #e0f2f1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    background: 'linear-gradient(to right, #58b6a6, white)',
    width: '100%',
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
  textBox: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    maxWidth: '900px',
    fontFamily: 'Segoe UI, sans-serif',
    lineHeight: '1.7',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#0f3d3e',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '20px',
  },
  teamHeading: {
    fontSize: '28px',
    marginTop: '40px',
    color: '#0f3d3e',
    fontWeight: 'bold',
  },
  teamContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginTop: '30px',
    gap: '30px',
  },
  profileBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '180px',
  },
  teamImage: {
    width: '180px',
    height: '180px',
    borderRadius: '16px',
    objectFit: 'cover',
    border: '2px solid #ccc',
    marginBottom: '10px',
  },
  name: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '6px 0',
    color: '#0f3d3e',
  },
  link: {
    fontSize: '14px',
    color: '#0077b5',
    textDecoration: 'none',
  },
};

export default AboutUs;
