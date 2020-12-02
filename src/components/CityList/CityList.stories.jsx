import { React } from "react";
import CityList from "./CityList";
import "typeface-roboto";
import { action } from "@storybook/addon-actions";
import data from "../../data/cities.json";

const cityComponent = {
  title: "CityList",
  component: CityList,
};

export default cityComponent;

export const CityListExample = () => (
  <>
    <CityList cities={data} onClickCity={action("click on city")}></CityList>
  </>
);
