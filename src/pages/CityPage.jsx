import React from "react";
import Grid from "@material-ui/core/Grid";
import CityInfo from "./../components/CityInfo";
import Weather from "./../components/Weather";
import WeatherDetails from "./../components/WeatherDetails";
import ForecastChart from "./../components/ForecastChart";
import Forecast from "./../components/Forecast";
import data from "../data/cityPage.json";
import AppFrame from "../components/AppFrame";

const CityPage = (props) => {
  return (
    <AppFrame>
      <Grid container justify="space-around" direction="column" spacing={2}>
        <Grid item container xs={12} justify="center" alignItems="flex-end">
          <CityInfo city={data.city} country={data.country} />
        </Grid>
        <Grid container item xs={12} justify="center" alignItems="center">
          <Weather state={data.state} temperature={data.temperature} />
          <WeatherDetails humidity={data.humidity} wind={data.wind} />
        </Grid>
        <Grid item>
          <ForecastChart data={data.Chart} />
        </Grid>
        <Grid item>
          <Forecast forecasts={data.Forecast} />
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CityPage;
