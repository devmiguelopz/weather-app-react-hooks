import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const WeatherDetails = ({ humidity, win }) => {
  return (
    <>
      <Typography>Humidity: {humidity}%</Typography>
      <Typography>Win: {win}km/h</Typography>
    </>
  );
};

WeatherDetails.propTypes = {
  humidity: PropTypes.number.isRequired,
  win: PropTypes.number.isRequired,
};

export default WeatherDetails;
