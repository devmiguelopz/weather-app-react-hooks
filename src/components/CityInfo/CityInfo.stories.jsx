import { React } from "react";
import CityInfo from "./CityInfo";
import "typeface-roboto";

const cityComponent = {
  title: "CityInfo",
  component: CityInfo,
};

export default cityComponent;

export const CityInfoExample = () => (
  <>
    <CityInfo city={"Trujillo"} country={"Perú"}></CityInfo>
  </>
);
