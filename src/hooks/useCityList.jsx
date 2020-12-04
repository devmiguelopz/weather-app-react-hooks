import { useState, useEffect } from "react";
import axios from "axios";
import getAllWeather from "../utils/transform/getAllWeather";

const useCityList = (cities, allWeather, onSetAllWeather, indexCity = null) => {
  const [error, setError] = useState(null);
  useEffect(() => {
    const usingDataApi = [];
    const allWeatherPromise = [];
    cities.forEach((weather, index) => {
      allWeather[indexCity === null ? index : indexCity].data
        ? usingDataApi.push(true)
        : usingDataApi.push(false);

      usingDataApi[index] ||
        allWeatherPromise.push(
          axios.get(
            `${process.env.REACT_APP_API_URL_OPEN_WEATHER_MAP}weather?q=${weather.city},${weather.countryCode}&appid=${process.env.REACT_APP_API_KEY_OPEN_WEATHER_MAP}`
          )
        );
    });
    if (usingDataApi.every((e) => e === false)) {
      async function executePromiseAllWeather() {
        try {
          const result = await Promise.all(allWeatherPromise);
          onSetAllWeather(getAllWeather(result, cities));
        } catch (error) {
          if (error.response) {
            setError(
              "An error has occurred on the weather server, please retry"
            );
          } else if (error.request) {
            setError("Check your internet connection, please retry");
          } else {
            setError("Error loading data, please retry");
          }
        }
      }
      error || executePromiseAllWeather();
    }
  }, [error, cities, allWeather, onSetAllWeather, indexCity]);
  return { error, setError };
};

export default useCityList;
