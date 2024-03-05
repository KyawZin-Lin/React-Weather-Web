import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";
import Card from "./components/Card";
import { api, apiKey } from "./api/api";

function App() {
  const [city, setCity] = useState("Yangon");
  const [data, setData] = useState({});
  const fetchWeatherApi = async function (searchKey) {
    if (searchKey !== undefined) {
      setCity(searchKey);
    }
    const res = await api.get(`weather?q=${city}&appid=${apiKey}`);
    setData(res.data);
  };

  useEffect(() => {
    fetchWeatherApi();
  }, [city]);

  // fetchWeatherApi();
  // console.log(data);
  return (
    <div className="d-flex mw-100 min-vh-100 justify-content-center align-items-center">
      <div className=" w-75 shadow-lg bg-light gap-4">
        <Form fetchWeather={fetchWeatherApi} />
        <Card data={data} />
      </div>
    </div>
  );
}

export default App;
