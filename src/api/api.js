import axios  from "axios";

export const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5"
});

export const apiKey="4a6da1d0d4c09b63e8165181d1772391"