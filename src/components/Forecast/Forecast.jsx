import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ForecastItem from "../ForecastItem";
import { stateByNameList } from "../../utils/config";

const renderForecastItem = (forecast) => {
  const { hour, state, temperature, weekDay } = forecast;
  return (
    <Grid
      data-testid={"forecastItem-item-container"}
      item
      key={`${weekDay}_${hour}`}
    >
      <ForecastItem
        hour={hour}
        state={state}
        temperature={temperature}
        weekDay={weekDay}
      />
    </Grid>
  );
};

const Forecast = ({ forecasts }) => {
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        {forecasts.map((forecast) => renderForecastItem(forecast))}
      </Grid>
    </div>
  );
};

Forecast.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      weekDay: PropTypes.string.isRequired,
      hour: PropTypes.number.isRequired,
      state: PropTypes.oneOf(stateByNameList).isRequired,
      temperature: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Forecast;
