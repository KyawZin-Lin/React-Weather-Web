import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

function Card({ data }) {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (JSON.stringify(data) !== "{}") {
    return (
      <div className="d-flex flex-column gap-2 align-items-center">
        <Clock value={value} />
        <h2>
          {" "}
          {/* <FaCloudShowersHeavy /> */}
          <img
            src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          />
          {Math.trunc(data.main.temp - 273.15)}°C
          {data.name} ,{data.sys.country}
        </h2>
        <p>{data.weather[0].main}</p>
        <p>Humidity:{data.main.humidity}%</p>
        <p>Visibility:{data.visibility / 1000}km</p>
      </div>
    );
  } else {
    return (
      <div className="d-flex flex-column gap-2 align-items-center">
        <p>Loading Data ...</p>
      </div>
    );
  }
}

export default Card;
