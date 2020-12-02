import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { IconContext } from "react-icons";
import IconState from "../IconState";
import { stateByNameList } from "../../utils/config";

const Weather = ({ temperature, state }) => {
  return (
    <div>
      <IconContext.Provider value={{ size: "5rem" }}>
        <IconState state={state}></IconState>
      </IconContext.Provider>
      <Typography display="inline" variant="h3">
        {temperature}
      </Typography>
    </div>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.oneOf(stateByNameList).isRequired,
};

export default Weather;
