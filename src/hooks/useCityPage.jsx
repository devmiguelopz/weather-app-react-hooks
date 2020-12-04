import { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import getChartData from "../utils/transform/getChartData";
import getForecastItemList from "../utils/transform/getForecastItemList";


const useCityPage = () => {
  const [data, setData] = useState([]);
  const [forecastItemList, setForecastItemList] = useState([]);
  const { city, countryCode } = useParams();
  useEffect(() => {
    const getForecast = async () => {
      const url = `${process.env.REACT_APP_API_URL_OPEN_WEATHER_MAP}forecast?q=${city},${countryCode}&appid=${process.env.REACT_APP_API_KEY_OPEN_WEATHER_MAP}`;
      try {
        const { data } = await Axios.get(url);
        setData(getChartData(data));
        setForecastItemList(getForecastItemList(data));
      } catch (error) {
        console.log(error);
      }
    };

    getForecast();
  }, [city, countryCode]);

  return { data, forecastItemList, city, countryCode };
};

export default useCityPage;
