import { useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import getChartData from "../utils/transform/getChartData";
import getForecastItemList from "../utils/transform/getForecastItemList";

const useCityPage = (allChartData, allForecastItemList, actions) => {
  const { city, countryCode } = useParams();
  useEffect(() => {
    const getForecast = async () => {
      const url = `${process.env.REACT_APP_API_URL_OPEN_WEATHER_MAP}forecast?q=${city},${countryCode}&appid=${process.env.REACT_APP_API_KEY_OPEN_WEATHER_MAP}`;
      try {
        const { data } = await Axios.get(url);

        actions({
          type: "SET_CHART_DATA",
          payload: { [`${city}_${countryCode}`]: getChartData(data) },
        });
        actions({
          type: "SET_FORECAST_ITEM_LIST",
          payload: { [`${city}_${countryCode}`]: getForecastItemList(data) },
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (
      !allChartData[`${city}_${countryCode}`] &&
      !allForecastItemList[`${city}_${countryCode}`]
    ) {
      getForecast();
    }
  }, [city, countryCode, actions, allChartData, allForecastItemList]);

  return { city, countryCode };
};

export default useCityPage;
