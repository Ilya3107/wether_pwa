import React from "react";
import { fetchWeather } from "./api/fetchWeather";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "./redux/slices/querySlice.js";
import { setWeather } from "./redux/slices/weatherSlice.js";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.queri.query);
  const weather = useSelector((state) => state.weather.weather);
  // console.log(weather);

  // const [weather, setWeather] = React.useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      dispatch(setWeather(data));
      dispatch(setQuery(""));
      console.log(weather);
    }
  };
  return (
    <div className="main-container">
      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(event) => {
          dispatch(setQuery(event.target.value));
        }}
        onKeyUp={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
