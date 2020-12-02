import { React } from "react";
import Forecast from ".";
import "typeface-roboto";
import data from "../../data/forecast.json";

const forecastComponent = {
  title: "Forecast",
  component: Forecast,
};

export default forecastComponent;

export const ForecastExample = () => (
  <>
    <Forecast forecasts={data}></Forecast>
  </>
);
