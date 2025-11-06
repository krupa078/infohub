import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function QuoteGenerator() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const fetchQuote = async () => {
    setLoading(true);
    setErr('');
    try {
      const res = await axios.get('/api/quote');
      setQuote(res.data);
    } catch (error) {
      setErr(error?.response?.data?.error || 'Failed to fetch quote.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Motivational Quote</h2>
      {loading && <div>Loading quote...</div>}
      {err && <div style={{ color: 'red' }}>{err}</div>}
      {quote && (
        <blockquote style={{ fontStyle: 'italic' }}>
          “{quote.text}” — <strong>{quote.author || 'Unknown'}</strong>
        </blockquote>
      )}
      <div className="mt-2">
        <button onClick={fetchQuote} className="px-3 py-1 bg-gray-100 rounded">New Quote</button>
      </div>
    </div>
  );
}
