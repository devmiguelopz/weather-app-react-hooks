import React from "react";
import PropTypes from "prop-types";
import { stateByNameList, stateByName } from "../../utils/config";
import {
  WiCloud,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiRain,
  WiSnow,
  WiRainMix,
  WiThunderstorm,
} from "react-icons/wi";

const stateByNameMap = {
  [stateByName.cloud]: WiCloud,
  [stateByName.cloudy]: WiDayCloudy,
  [stateByName.fog]: WiDayFog,
  [stateByName.sunny]: WiDaySunny,
  [stateByName.rain]: WiRain,
  [stateByName.clouds]: WiDayCloudy,
  [stateByName.clear]: WiDaySunny,
  [stateByName.snow]: WiSnow,
  [stateByName.drizzle]: WiRainMix,
  [stateByName.thunderstorm]: WiThunderstorm,
};

const IconState = ({ state }) => {
  const IconState = stateByNameMap[state];
  return <IconState></IconState>;
};

IconState.propTypes = {
  state: PropTypes.oneOf(stateByNameList).isRequired,
};

export default IconState;
