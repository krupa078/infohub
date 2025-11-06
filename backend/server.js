// server/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

/**
 * 🧠 Local Quote Data (can replace later with real API)
 */
const QUOTES = [
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "Do something today that your future self will thank you for.", author: "Unknown" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
];

/**
 * 🗨️ Quote API
 * Route: /api/quote
 */
app.get('/api/quote', (req, res) => {
  try {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    return res.json(QUOTES[randomIndex]);
  } catch (err) {
    console.error('Quote error:', err.message);
    return res.status(500).json({ error: "Could not fetch quote." });
  }
});

/**
 * 🌦️ Weather API
 * Route: /api/weather
 * Requires: OPENWEATHER_API_KEY in .env
 */
app.get('/api/weather', async (req, res) => {
  try {
    const city = req.query.city || process.env.WEATHER_CITY || 'Mumbai';
    const key = process.env.OPENWEATHER_API_KEY;

    if (!key) {
      return res.status(500).json({ error: "OpenWeather API key not configured." });
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${key}&units=metric`;
    const resp = await axios.get(url);
    const data = resp.data;

    const simplified = {
      city: data.name,
      tempC: data.main?.temp,
      description: data.weather && data.weather[0] ? data.weather[0].description : 'N/A'
    };

    return res.json(simplified);
  } catch (err) {
    console.error('Weather API error:', err.response?.data || err.message);
    return res.status(500).json({ error: "Could not fetch weather data." });
  }
});

/**
 * 💱 Currency Conversion API
 * Route: /api/currency?amount=100
 * Uses Frankfurter.app (no API key required)
 */
app.get('/api/currency', async (req, res) => {
  try {
    const amount = parseFloat(req.query.amount) || 1;
    const url = `https://api.frankfurter.app/latest?from=INR&to=USD,EUR`;
    const resp = await axios.get(url);
    const rates = resp.data?.rates;

    if (!rates || !rates.USD || !rates.EUR) {
      return res.status(500).json({ error: "Currency API returned no rates." });
    }

    const usd = +(amount * rates.USD).toFixed(4);
    const eur = +(amount * rates.EUR).toFixed(4);

    return res.json({
      amountINR: amount,
      usd,
      eur,
      ratesSourceDate: resp.data.date,
    });
  } catch (err) {
    console.error('Currency API error:', err.response?.data || err.message);
    return res.status(500).json({ error: "Could not fetch currency data." });
  }
});

/**
 * 🔍 Health Check
 * Route: /api/health
 */
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

/**
 * 🚀 Start Server
 */
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
