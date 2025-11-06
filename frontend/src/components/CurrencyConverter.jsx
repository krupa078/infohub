import React, { useState } from 'react';
import axios from 'axios';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(100);
  const [result, setResult] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const convert = async () => {
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const res = await axios.get(`https://infohub-pzbw.onrender.com/api/currency?amount=${amount}`);
      setResult(res.data);
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to fetch conversion.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">INR → USD / EUR</h2>
      <div className="mb-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-1 border rounded"
          min="0"
        />
        <button onClick={convert} className="ml-2 px-3 py-1 bg-gray-100 rounded">Convert</button>
      </div>

      {isLoading && <div>Converting...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {result && (
        <div>
          <p><strong>INR:</strong> {result.amountINR}</p>
          <p><strong>USD:</strong> {result.usd}</p>
          <p><strong>EUR:</strong> {result.eur}</p>
          <p><small>Rates date: {result.ratesSourceDate}</small></p>
        </div>
      )}
    </div>
  );
}
