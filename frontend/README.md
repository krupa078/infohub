# 📘 InfoHub — ByteXL Coding Challenge

## 🧭 Objective
The goal of **InfoHub** is to demonstrate full-stack web development skills by building a **single-page application (SPA)** that integrates three utilities:

1. 🌦 **Real-Time Weather Display**
2. 💱 **Currency Converter (INR → USD / EUR)**
3. 💬 **Motivational Quote Generator**

This project is built using **React (Frontend)** and **Node.js + Express (Backend)**, connected through REST APIs.

---

## 🏗️ Project Structure
INFOHUB/
│
├── README.md → Project Documentation
│
├── backend/ → Node.js + Express Backend
│ ├── server.js → API Endpoints (Weather, Currency, Quotes)
│ ├── .env → API Key and Config
│ ├── package.json
│ └── ...
│
└── frontend/ → React Frontend (Vite)
├── src/
│ ├── components/
│ │ ├── WeatherModule.jsx
│ │ ├── CurrencyConverter.jsx
│ │ └── QuoteGenerator.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── vite.config.js
└── package.json

yaml
Copy code

---

## ⚙️ Technologies Used

| Layer | Technology | Purpose |
|-------|-------------|----------|
| Frontend | React (Vite) | SPA, UI Components |
| Styling | CSS / Tailwind | Responsive Design |
| Backend | Node.js + Express | API Server |
| HTTP Client | Axios | Data Fetching |
| APIs | OpenWeather, Frankfurter, Local Quotes | External Integrations |
| Deployment | Vercel / Render | Hosting Platform |

---

## 🌦 APIs Used

| Feature | API | Endpoint |
|----------|------|-----------|
| Weather | [OpenWeatherMap](https://openweathermap.org/api) | `/api/weather?city=Hyderabad` |
| Currency | [Frankfurter.app](https://www.frankfurter.app) | `/api/currency?amount=100` |
| Quotes | Local Mock Data | `/api/quote` |

---

## ⚡ How to Run the Project

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/infohub.git
cd infohub
2️⃣ Setup Backend
bash
Copy code
cd backend
npm install
Create a .env file:

ini
Copy code
OPENWEATHER_API_KEY=your_openweather_api_key_here
WEATHER_CITY=Mumbai
PORT=3001
Start backend:

bash
Copy code
npm run dev
➡️ Server runs at: http://localhost:3001

3️⃣ Setup Frontend
bash
Copy code
cd ../frontend
npm install
npm run dev
➡️ Frontend runs at: http://localhost:5173

Make sure your vite.config.js includes:

js
Copy code
server: {
  proxy: {
    '/api': 'http://localhost:3001',
  },
}
💻 Features Overview
🌦 Weather Module
Fetches real-time weather using OpenWeatherMap API

Allows users to search any city dynamically

Displays city name, temperature, and condition

Includes a Refresh button to update instantly

💱 Currency Converter
Converts INR → USD and EUR using Frankfurter API

Handles invalid inputs gracefully

Displays converted values with rate date

💬 Quote Generator
Shows random motivational quotes from local data

“New Quote” button generates another instantly

🧭 Navigation
Simple tabbed interface (Weather / Currency / Quote)

SPA (no page reloads)

Loading and error messages neatly displayed

🧪 API Endpoints
Endpoint	Description
/api/health	Backend health check
/api/weather?city=Mumbai	Returns weather data
/api/currency?amount=100	Converts INR to USD/EUR
/api/quote	Returns a random quote

💾 Example API Output
Weather

json
Copy code
{ "city": "Mumbai", "tempC": 29.9, "description": "smoke" }
Currency

json
Copy code
{ "amountINR": 100, "usd": 1.19, "eur": 1.10, "ratesSourceDate": "2025-11-06" }
Quote

json
Copy code
{ "text": "The future depends on what you do today.", "author": "Mahatma Gandhi" }
🚀 Deployment
🌐 Backend
Deployed using Render / Railway

🌐 Frontend
Deployed using Vercel

If deployed separately, update frontend API calls:

js
Copy code
axios.get('https://your-backend-domain/api/weather');
🎥 Submission Details
📁 Google Drive Folder

Contains:

Source_Code/ (frontend + backend + README.md)

Demo_Video.mp4

Set access: “Anyone with the link”

📅 Deadline: 7 PM, 6th November 2025

🎯 Goal: Demonstrate integration, structure, and functionality

👨‍💻 Developed By
Name: Kona Krupamani
College/Batch: 2024 Passout
Role: Full Stack Developer (ByteXL InfoHub Challenge)

✅ Status
🟢 Project Completed and Tested Successfully
🌦 Weather • 💱 Currency • 💬 Quotes — all modules functional
🚀 Ready for Submission to ByteXL