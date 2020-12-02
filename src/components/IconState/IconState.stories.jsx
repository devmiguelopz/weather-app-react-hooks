import { React } from "react";
import IconState from ".";
import "typeface-roboto";
import { stateByName } from "../../utils/config";

const iconStateComponent = {
  title: "IconState",
  component: IconState,
};

export default iconStateComponent;

export const IconStateExample = () => (
  <>
    <IconState state={stateByName.cloud}></IconState>
    <IconState state={stateByName.cloudy}></IconState>
    <IconState state={stateByName.sunny}></IconState>
    <IconState state={stateByName.rain}></IconState>
    <IconState state={stateByName.fog}></IconState>
  </>
);
