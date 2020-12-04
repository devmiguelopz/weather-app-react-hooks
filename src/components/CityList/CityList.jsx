import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Alert from "@material-ui/lab/Alert";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import useCityList from "../../hooks/useCityList";

const renderCityInfo = (onClickCity) => (city) => {
  const { city: currentCity, country, countryCode, data } = city;
  return (
    <ListItem
      button
      key={`${currentCity}-${countryCode}`}
      onClick={() => onClickCity(currentCity, countryCode)}
    >
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={9}>
          <CityInfo city={currentCity} country={country}></CityInfo>
        </Grid>
        <Grid item xs={12} md={3}>
          <Weather
            temperature={data?.temperature}
            state={data?.state}
          ></Weather>
        </Grid>
      </Grid>
    </ListItem>
  );
};

const CityList = ({ cities, onClickCity, actions, data }) => {
  const { onSetAllWeather } = actions;
  const { allWeather } = data;
  const { error, setError } = useCityList(cities, allWeather, onSetAllWeather);
  return (
    <div>
      {error && (
        <Alert onClose={() => setError(null)} severity="error">
          {error}
        </Alert>
      )}
      <List>{allWeather.map((city) => renderCityInfo(onClickCity)(city))}</List>
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
  actions: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default CityList;
