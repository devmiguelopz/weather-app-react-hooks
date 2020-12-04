import React from "react";
import Grid from "@material-ui/core/Grid";
import CityInfo from "./../components/CityInfo";
import Weather from "./../components/Weather";
import WeatherDetails from "./../components/WeatherDetails";
import ForecastChart from "./../components/ForecastChart";
import Forecast from "./../components/Forecast";
import AppFrame from "../components/AppFrame";
import cities from "../data/cities.json";
import useCityPage from "../hooks/useCityPage";
import useCityList from "../hooks/useCityList";
import LinearProgress from "@material-ui/core/LinearProgress";
import { getCountryNameByCountryCode, getIndexCity } from "../utils/library";

const CityPage = ({ data, actions }) => {
  const { allWeather, allChartData, allForecastItemList } = data;

  const { onSetAllWeather, onSetChartData, onSetForecastItemList } = actions;

  const { city, countryCode } = useCityPage(
    allChartData,
    allForecastItemList,
    onSetChartData,
    onSetForecastItemList
  );

  let cityMemo = React.useMemo(() => [{ city, countryCode }], [
    city,
    countryCode,
  ]);

  const cityIndex = getIndexCity(allWeather, city, countryCode);

  useCityList(cityMemo, allWeather, onSetAllWeather, cityIndex);

  const country =
    countryCode && getCountryNameByCountryCode(cities, countryCode);

  return (
    <AppFrame>
      <Grid container justify="space-around" direction="column" spacing={2}>
        <Grid item container xs={12} justify="center" alignItems="flex-end">
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid container item xs={12} justify="center" alignItems="center">
          <Weather
            state={allWeather[cityIndex].data?.state}
            temperature={allWeather[cityIndex].data?.temperature}
          />
          {allWeather[cityIndex].data?.humidity &&
            allWeather[cityIndex].data?.wind && (
              <WeatherDetails
                humidity={allWeather[cityIndex].data.humidity}
                wind={allWeather[cityIndex].data.wind}
              />
            )}
        </Grid>
        <Grid item>
          {!allChartData[`${city}_${countryCode}`] && !allForecastItemList[`${city}_${countryCode}`] && (
            <LinearProgress />
          )}
        </Grid>
        <Grid item>
          {allChartData[`${city}_${countryCode}`] && <ForecastChart data={allChartData[`${city}_${countryCode}`]} />}
        </Grid>
        <Grid item>
          {allForecastItemList[`${city}_${countryCode}`] && (
            <Forecast forecasts={allForecastItemList[`${city}_${countryCode}`]} />
          )}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CityPage;
