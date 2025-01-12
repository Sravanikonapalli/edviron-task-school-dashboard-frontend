import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import TransactionDetails from './components/TransactionDetails';
import TransactionStatusCheck from './components/TransactionStatusCheck';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>School Payments Dashboard</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transaction-details" element={<TransactionDetails />} />
          <Route path="/transactions-check" element={<TransactionStatusCheck />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
