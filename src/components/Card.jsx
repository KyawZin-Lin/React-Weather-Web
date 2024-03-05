import React from "react";
import { FaCloudShowersHeavy, FaCloudversify } from "react-icons/fa";

function Card({ data }) {
  if (JSON.stringify(data) !== "{}") {
    return (
      <div className="d-flex flex-column gap-2 align-items-center">
        <p>Jan 26,10:22am</p>
        <h2>
          {" "}
          {/* <FaCloudShowersHeavy /> */}
          <img
            src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          />
          {Math.trunc(data.main.temp-273.15)}°C
          
          {data.name} ,{data.sys.country}
        </h2>
        <p>
          {data.weather[0].main}
        </p>
        <p>Humidity:{data.main.humidity}%</p>
        <p>Visibility:{data.visibility/1000}km</p>
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
