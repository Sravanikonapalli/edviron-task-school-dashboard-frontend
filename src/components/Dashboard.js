import React, { useEffect, useState } from 'react';
import { getTransactions } from '../services/api';
import '../styles/Dashboard.css';  
import { MdOutlineDarkMode } from "react-icons/md";


function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [schoolSearch, setSchoolSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const data = await getTransactions();
        console.log("API Response:", data); 
        setTransactions(data.transactions); 
      } catch (error) {
        console.error("Error loading transactions:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTransactions();
  }, []);

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesStatus = statusFilter ? transaction.gateway === statusFilter : true;
    const matchesDate = dateFilter
      ? new Date(transaction.date).toISOString().split('T')[0] === dateFilter 
      : true;
    const matchesSchool = schoolSearch
      ? transaction.school_id.toString().includes(schoolSearch) 
      : true;
    return matchesStatus && matchesDate && matchesSchool;
  });

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`dashboard-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2 className="dashboard-header">Transactions Overview</h2>

      <button onClick={toggleDarkMode} className="btn btn-toggle">
         <MdOutlineDarkMode size={30}/>            
      </button>

      <div className="dashboard-filters">
        <input
          type="text"
          value={schoolSearch}
          onChange={(e) => setSchoolSearch(e.target.value)}
          placeholder="Search by School ID"
          className="form-control"
        />
        
        <select onChange={(e) => setStatusFilter(e.target.value)} className="form-control">
          <option value="">Filter by Gateway</option>
          <option value="CASHFREE">CASHFREE</option>
          <option value="PHONEPE">PHONEPE</option>
        </select>

        <input
          type="date"
          onChange={(e) => setDateFilter(e.target.value)}  
          className="form-control"
        />
      </div>

      {loading ? <p>Loading transactions...</p> : (
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Collect ID</th>
              <th>School ID</th>
              <th>Gateway</th>
              <th>Order Amount</th>
              <th>Custom Order ID</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction, index) => (
                <tr key={transaction.collect_id || index}> 
                  <td>{transaction.collect_id}</td>
                  <td>{transaction.school_id}</td>
                  <td>{transaction.gateway}</td>
                  <td>{transaction.order_amount}</td>
                  <td>{transaction.custom_order_id}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="5">No transactions found</td></tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Dashboard;
