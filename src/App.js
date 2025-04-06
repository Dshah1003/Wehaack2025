import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Trending from './pages/Trending';
import AboutUs from './pages/AboutUs'; // ✅ Import your new AboutUs page
import InvestmentSearch from './pages/InvestmentSearch'; // ✅ Import your new InvestmentSearch page

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/investment-search" element={<InvestmentSearch />} /> {/* ✅ Correct route for InvestmentSearch */}
        <Route path="/about-us" element={<AboutUs />} /> {/* ✅ Add route for About Us */}
      </Routes>
    </div>
  );
}

export default App;
