import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import { stateByName } from "../../utils/config";

const renderCityInfo = (onClickCity) => (city) => {
  const { city: currentCity, country } = city;
  return (
    <li key={currentCity} onClick={onClickCity}>
      <Grid container justify="center" alignItems="flex-start">
        <Grid item xs={12} md={8}>
          <CityInfo city={currentCity} country={country}></CityInfo>
        </Grid>
        <Grid item xs={12} md={4}>
          <Weather temperature={10} state={stateByName.sunny}></Weather>
        </Grid>
      </Grid>
    </li>
  );
};

const CityList = ({ cities, onClickCity }) => {
  return (
    <div>
      <ul>{cities.map((city) => renderCityInfo(onClickCity)(city))}</ul>
    </div>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
