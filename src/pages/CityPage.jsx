import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CityInfo from "./../components/CityInfo";
import Weather from "./../components/Weather";
import WeatherDetails from "./../components/WeatherDetails";
import ForecastChart from "./../components/ForecastChart";
import Forecast from "./../components/Forecast";
import data from "../data/cityPage.json";

const CityPage = (props) => {
  console.info(data);
  return (
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
  );
};

export default CityPage;
