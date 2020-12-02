import { React } from "react";
import Weather from ".";
import "typeface-roboto";

const weatherComponent = {
  title: "Weather",
  component: Weather,
};

export default weatherComponent;

export const WeatherExample = () => (
  <>
    <Weather temperature={10} state={"cloud"}></Weather>
    <Weather temperature={10} state={"rain"}></Weather>
  </>
);
