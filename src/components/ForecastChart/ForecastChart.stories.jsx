import { React } from "react";
import ForecastChart from ".";
import "typeface-roboto";
import data from '../../data/chart.json'

const forecastChartComponent = {
  title: "ForecastChart",
  component: ForecastChart,
};

export default forecastChartComponent;

export const ForecastChartExample = () => (
  <>
    <ForecastChart data = {data}></ForecastChart>
  </>
);
