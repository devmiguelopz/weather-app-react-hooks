import { React } from "react";
import ForecastItem from ".";
import "typeface-roboto";

const forecastItemComponent = {
  title: "ForecastItem",
  component: ForecastItem,
};

export default forecastItemComponent;

export const ForecastItemExample = () => (
  <>
    <ForecastItem
      hour={10}
      state={"sunny"}
      temperature={23}
      weekDay={"Monday"}
    ></ForecastItem>
  </>
);
