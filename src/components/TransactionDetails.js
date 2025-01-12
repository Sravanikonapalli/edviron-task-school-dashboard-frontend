import React, { useState, useEffect } from 'react';
import { getTransactionsBySchool } from '../services/api';

function TransactionDetails() {
  const [schoolId, setSchoolId] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (schoolId) {
      setLoading(true);
      getTransactionsBySchool(schoolId)
        .then(data => setTransactions(data.transactions))
        .catch(error => console.error("Error loading school transactions:", error))
        .finally(() => setLoading(false));
    }
  }, [schoolId]);

  return (
    <div className="transaction-details-container">
      <h2 className="transaction-details-header">Transactions by School</h2>

      <input
        type="text"
        value={schoolId}
        onChange={(e) => setSchoolId(e.target.value)}
        placeholder="Enter School ID"
        className="form-control transaction-input"
      />

      {loading ? <p>Loading transactions...</p> : (
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Collect ID</th>
              <th>School ID</th>
              <th>Gateway</th>
              <th>Order Amount</th>
              <th>Transaction Amount</th>
              <th>Status</th>
              <th>Custom Order ID</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.collect_id}>
                <td>{transaction.collect_id}</td>
                <td>{transaction.school_id}</td>
                <td>{transaction.gateway}</td>
                <td>{transaction.order_amount}</td>
                <td>{transaction.transaction_amount}</td>
                <td>{transaction.status}</td>
                <td>{transaction.custom_order_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TransactionDetails;
