import React, { useState } from 'react';
import WeatherModule from './components/WeatherModule';
import CurrencyConverter from './components/CurrencyConverter';
import QuoteGenerator from './components/QuoteGenerator';

export default function App() {
  const [activeTab, setActiveTab] = useState('Weather');

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white shadow p-6 rounded">
        <h1 className="text-2xl font-bold mb-4">InfoHub</h1>

        <div className="flex gap-2 mb-4">
          {['Weather', 'Currency', 'Quote'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div>
          {activeTab === 'Weather' && <WeatherModule />}
          {activeTab === 'Currency' && <CurrencyConverter />}
          {activeTab === 'Quote' && <QuoteGenerator />}
        </div>
      </div>
    </div>
  );
}
