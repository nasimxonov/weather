import React from "react";

interface WeatherProps {
  weather: any;
}

const MainWeatherCard: React.FC<WeatherProps> = ({ weather }) => {
  const getWeatherIcon = (main: string) =>
    main === "Clear"
      ? "☀️"
      : main === "Clouds"
      ? "☁️"
      : main === "Rain"
      ? "🌧️"
      : main === "Snow"
      ? "❄️"
      : "🌤️";

  return (
    <div className="weather-card">
      <div className="city-name">{weather.name.toUpperCase()}</div>
      <div className="country-name">{weather.sys.country}</div>
      <div className="weather-icon">
        {getWeatherIcon(weather.weather[0].main)}
      </div>
      <div className="weather-condition">{weather.weather[0].description}</div>
      <div className="main-temp">{Math.round(weather.main.temp)}°C</div>
      <div className="feels-like">
        His qilinish: {Math.round(weather.main.feels_like)}°C
      </div>
      <div className="weather-details">
        <div className="detail-item">💧 Namlik: {weather.main.humidity}%</div>
        <div className="detail-item">🌬️ Shamol: {weather.wind.speed} m/s</div>
        <div className="detail-item">📊 Bosim: {weather.main.pressure} hPa</div>
        <div className="detail-item">
          👁️ Ko`rish: {weather.visibility / 1000} km
        </div>
      </div>
      <div className="sun-times">
        <div className="sun-item">
          🌅 {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
        </div>
        <div className="sun-item">
          🌇 {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default MainWeatherCard;
