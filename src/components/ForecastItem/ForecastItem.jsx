import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { IconContext } from "react-icons";
import IconState from "../IconState";
import { stateByNameList } from "../../utils/config";

const ForecastItem = ({ weekDay, hour, state, temperature }) => {
  return (
    <div>
      <Grid container justify="center" alignItems="center" direction="column">
        <Grid item>
          <Typography>{weekDay}</Typography>
        </Grid>
        <Grid item >
          <Typography>{hour}</Typography>
        </Grid>
        <Grid item >
          <IconContext.Provider value={{ size: "5rem" }}>
            <IconState state={state}></IconState>
          </IconContext.Provider>
        </Grid>
        <Grid item >
          <Typography>{temperature} °</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  state: PropTypes.oneOf(stateByNameList).isRequired,
  temperature: PropTypes.number.isRequired,
};

export default ForecastItem;
