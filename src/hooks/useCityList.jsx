import { useState, useEffect } from "react";
import axios from "axios";
import getAllWeather from "../utils/transform/getAllWeather";

const useCityList = (cities) => {
  const [allWeather, setAllWeather] = useState([...cities]);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.info("useEffect");
    const allWeatherPromise = cities.map((weather) =>
      axios.get(
        `${process.env.REACT_APP_API_URL_OPEN_WEATHER_MAP}weather?q=${weather.city},${weather.countryCode}&appid=${process.env.REACT_APP_API_KEY_OPEN_WEATHER_MAP}`
      )
    );
    async function executePromiseAllWeather() {
      try {
        const result = await Promise.all(allWeatherPromise);
        setAllWeather(getAllWeather(result, cities));
      } catch (error) {
        if (error.response) {
          setError("An error has occurred on the weather server, please retry");
        } else if (error.request) {
          setError("Check your internet connection, please retry");
        } else {
          setError("Error loading data, please retry");
        }
      }
    }
    error || executePromiseAllWeather();
  }, [error, cities]);
  return { allWeather, error, setError };
};

export default useCityList;
