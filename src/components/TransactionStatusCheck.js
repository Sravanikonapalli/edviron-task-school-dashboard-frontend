import React, { useState } from 'react';
import { getTransactionStatus } from '../services/api';

function TransactionStatusCheck() {
  const [customOrderId, setCustomOrderId] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckStatus = () => {
    setLoading(true);
    getTransactionStatus(customOrderId)
      .then(data => setStatus(data.status))
      .catch(error => console.error("Error checking status:", error))
      .finally(() => setLoading(false));
  };

  return (
    <div className="container mt-3">
      <h2>Check Transaction Status</h2>
      <input
        type="text"
        value={customOrderId}
        onChange={(e) => setCustomOrderId(e.target.value)}
        placeholder="Enter Custom Order ID"
        className="form-control mb-3"
      />
      <button onClick={handleCheckStatus} className="btn btn-primary mb-3">
        Check Status
      </button>
      {loading ? <p>Checking status...</p> : status && <p>Status: {status}</p>}
    </div>
  );
}

export default TransactionStatusCheck;
