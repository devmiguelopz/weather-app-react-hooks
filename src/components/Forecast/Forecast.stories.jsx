import { React } from "react";
import Forecast from ".";
import "typeface-roboto";
import { stateByName } from "../../utils/config";

const forecastComponent = {
  title: "Forecast",
  component: Forecast,
};

export default forecastComponent;

const forecasts = [
  { hour: 10, state: stateByName.cloud, temperature: 20, weekDay: "Monday" },
  { hour: 10, state: stateByName.fog, temperature: 20, weekDay: "Tuesday" },
  {
    hour: 10,
    state: stateByName.cloudy,
    temperature: 20,
    weekDay: "Wednesday",
  },
  { hour: 10, state: stateByName.rain, temperature: 20, weekDay: "Thursday" },
];

export const ForecastExample = () => (
  <>
    <Forecast forecasts={forecasts}></Forecast>
  </>
);
