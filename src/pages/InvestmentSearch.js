import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InvestmentSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [investmentType, setInvestmentType] = useState('');
  const [companyData, setCompanyData] = useState({
    companyName: 'Company XYZ',
    fraudRiskScore: '30%',
    marketVolatility: '15%',
    liquidityRisk: '10%',
    riskScore: '85%',
    suggestedActions: 'Diversify portfolio, reduce exposure to high-risk assets',
    sentiment: 'Neutral',
    headlines: [
      "Company XYZ hits new high in Q1",
      "Regulatory changes expected to impact market",
      "Analysts predict strong growth ahead"
    ]
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleInvestmentTypeChange = (e) => {
    setInvestmentType(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Search Query:', searchQuery);
    console.log('Selected Investment Type:', investmentType);
  };

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
          <Link to="/dashboard" style={styles.navLink}>
            <button style={styles.navButton}>Dashboard</button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.contentContainer}>
        <h2 style={styles.pageTitle}>Investment Search</h2>

        {/* Search and Dropdown Container */}
        <div style={styles.searchContainer}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Type your investment search..."
            style={styles.searchInput}
          />

          <select
            value={investmentType}
            onChange={handleInvestmentTypeChange}
            style={styles.dropdown}
          >
            <option value="">Type</option>
            <option value="Stock">Stock</option>
            <option value="ETF">ETF</option>
            <option value="Real Estate">Real Estate</option>
          </select>

          <button onClick={handleSubmit} style={styles.submitButton}>
            Submit
          </button>
        </div>

        {/* Risk and Company Info Container */}
        <div style={styles.riskContainer}>
          {/* Risk Diagram */}
          <div style={styles.diagram}>
            <div style={styles.riskLabel}>Risk Diagram</div>
            <div style={styles.riskBar}>
              <div
                style={{
                  ...styles.riskBarFill,
                  width: companyData.riskScore,
                }}
              ></div>
            </div>
            <div style={styles.riskPercentage}>{companyData.riskScore}</div>

            {/* Top Headlines (moved here) */}
            <div style={styles.headlinesSection}>
              <h3 style={styles.headlinesTitle}>Top Headlines</h3>
              <ul style={styles.headlinesList}>
                {companyData.headlines.map((headline, index) => (
                  <li key={index} style={styles.headlineItem}>{headline}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* White Gradient Box for Company Info */}
          <div style={styles.companyInfoBox}>
            <div style={styles.companyInfo}>
              <h3 style={styles.companyName}>{companyData.companyName}</h3>
              <div style={styles.companyDetails}>
                <div><strong>Fraud Risk Score:</strong> {companyData.fraudRiskScore}</div>
                <div><strong>Market Volatility:</strong> {companyData.marketVolatility}</div>
                <div><strong>Liquidity Risk:</strong> {companyData.liquidityRisk}</div>
              </div>
            </div>

            {/* Analyze Data */}
            <div style={styles.analyzeData}>
              <h4>Analyze Data</h4>
              <div><strong>Risk Score:</strong> {companyData.riskScore}</div>
              <div><strong>Suggested Actions:</strong> {companyData.suggestedActions}</div>
              <div><strong>Sentiment:</strong> {companyData.sentiment}</div>
            </div>
          </div>
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
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px',
    padding: '0 40px',
    textAlign: 'center',
  },
  pageTitle: {
    fontSize: '36px',
    color: '#0f3d3e',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  searchContainer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    padding: '10px',
    fontSize: '16px',
    width: '300px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    outline: 'none',
  },
  dropdown: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    marginLeft: '20px',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  submitButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#58b6a6',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    marginLeft: '20px',
    cursor: 'pointer',
  },
  riskContainer: {
    display: 'flex',
    marginTop: '40px',
    justifyContent: 'space-between',
    width: '80%',
    alignItems: 'flex-start',
  },
  diagram: {
    width: '45%',
    textAlign: 'center',
  },
  riskLabel: {
    fontSize: '18px',
    color: '#0f3d3e',
    marginBottom: '10px',
  },
  riskBar: {
    width: '100%',
    height: '30px',
    backgroundColor: '#ddd',
    borderRadius: '5px',
    overflow: 'hidden',
    marginBottom: '10px',
  },
  riskBarFill: {
    height: '100%',
    backgroundColor: '#0f3d3e',
  },
  riskPercentage: {
    fontSize: '20px',
    color: '#0f3d3e',
  },
  companyInfoBox: {
    width: '45%',
    background: 'linear-gradient(to bottom right, #f7f9fc, #e0f7fa)',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    textAlign: 'left',
  },
  companyInfo: {
    marginBottom: '20px',
  },
  companyName: {
    fontSize: '24px',
    color: '#0f3d3e',
    fontWeight: 'bold',
  },
  companyDetails: {
    fontSize: '16px',
    color: '#0f3d3e',
    marginTop: '10px',
  },
  analyzeData: {
    fontSize: '16px',
    color: '#0f3d3e',
    marginTop: '20px',
  },
  headlinesSection: {
    marginTop: '30px',
    padding: '20px',
    background: 'linear-gradient(to bottom right, #ffffff, #e8f5f6)',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    textAlign: 'left',
  },
  headlinesTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#0f3d3e',
    marginBottom: '10px',
  },
  headlinesList: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    fontSize: '15px',
    color: '#333',
  },
  headlineItem: {
    marginBottom: '6px',
  },
};

export default InvestmentSearch;
