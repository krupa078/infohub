import React, { useEffect, useState } from "react";
import axios from "axios";

export default function WeatherModule() {
  const [city, setCity] = useState("Mumbai");
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (selectedCity = city) => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`/api/weather?city=${encodeURIComponent(selectedCity)}`);
      setData(res.data);
    } catch (err) {
      setError(err?.response?.data?.error || "Failed to fetch weather.");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Current Weather</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="p-1 border rounded"
          style={{ marginRight: "5px" }}
        />
        <button type="submit" className="px-3 py-1 bg-gray-100 rounded">
          Search
        </button>
      </form>

      {isLoading && <div>Loading weather...</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
      {data && (
        <div>
          <p><strong>City:</strong> {data.city}</p>
          <p><strong>Temp (°C):</strong> {data.tempC}</p>
          <p><strong>Condition:</strong> {data.description}</p>
          <button onClick={() => fetchWeather(data.city)} className="mt-2 px-3 py-1 bg-gray-100 rounded">
            Refresh
          </button>
        </div>
      )}
    </div>
  );
}
