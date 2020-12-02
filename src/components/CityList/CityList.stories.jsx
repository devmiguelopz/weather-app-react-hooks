import { React } from "react";
import CityList from "./CityList";
import "typeface-roboto";
import { action } from "@storybook/addon-actions";

const cityComponent = {
  title: "CityList",
  component: CityList,
};

export default cityComponent;

const cities = [
  {
    city: "Trujillo",
    country: "Perú",
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
  },
];

export const CityListExample = () => (
  <>
    <CityList cities={cities} onClickCity={action("click on city")}></CityList>
  </>
);
