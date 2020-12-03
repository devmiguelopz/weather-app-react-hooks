import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import convertUnits from "convert-units";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Alert from "@material-ui/lab/Alert";
import CityInfo from "../CityInfo";
import Weather from "../Weather";

const renderCityInfo = (onClickCity) => (city) => {
  const { city: currentCity, country, countryCode, data } = city;
  return (
    <ListItem
      button
      key={`${currentCity}-${countryCode}`}
      onClick={onClickCity}
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

const CityList = ({ cities, onClickCity }) => {
  const [allWeather, setAllWeather] = useState([...cities]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const allWeatherPromise = allWeather.map((weather) =>
      axios.get(
        `${process.env.REACT_APP_API_URL_OPEN_WEATHER_MAP}?q=${weather.city},${weather.countryCode}&appid=${process.env.REACT_APP_API_KEY_OPEN_WEATHER_MAP}`
      )
    );
    async function executePromiseAllWeather() {
      console.info("Una vez!!!!");
      try {
        const result = (await Promise.all(allWeatherPromise)).map(
          ({ data: weather }, index) =>
            Object.assign(allWeather[index], {
              data: {
                temperature: +convertUnits(weather.main.temp)
                  .from("K")
                  .to("C")
                  .toFixed(0),
                state: weather.weather[0].main.toLowerCase(),
              },
            })
        );
        setAllWeather(result);
      } catch (error) {
        if (error.response) {
          setError("An error has occurred on the weather server, please retry");
        } else if (error.request) {
          setError("Check your internet connection, please retry");
        } else {
          setError("Error loading data, please retry");
        }
      }
    }
    error || executePromiseAllWeather();
  }, [error]);
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
};

export default CityList;
