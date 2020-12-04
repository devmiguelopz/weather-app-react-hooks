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
import { getCountryNameByCountryCode } from "../utils/library";

const CityPage = (props) => {
  const { data, forecastItemList, city, countryCode } = useCityPage();
  let cityMemo = React.useMemo(() => [{ city, countryCode }], [
    city,
    countryCode,
  ]);
  const { allWeather } = useCityList(cityMemo);
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
            state={allWeather[0].data?.state}
            temperature={allWeather[0].data?.temperature}
          />
          {allWeather[0].data?.humidity && allWeather[0].data?.wind && (
            <WeatherDetails
              humidity={allWeather[0].data.humidity}
              wind={allWeather[0].data.wind}
            />
          )}
        </Grid>
        <Grid item>
          {!data.length > 0 && !forecastItemList.length > 0 && (
            <LinearProgress />
          )}
        </Grid>
        <Grid item>{data.length > 0 && <ForecastChart data={data} />}</Grid>
        <Grid item>
          {forecastItemList.length > 0 && (
            <Forecast forecasts={forecastItemList} />
          )}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CityPage;
