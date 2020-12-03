import { React } from "react";
import WeatherDetails from ".";
import "typeface-roboto";

const weatherDetailsComponent = {
  title: "WeatherDetails",
  component: WeatherDetails,
};

export default weatherDetailsComponent;

export const WeatherDetailsExample = () => (
  <>
    <WeatherDetails humidity={20} wind={10}></WeatherDetails>
  </>
);
