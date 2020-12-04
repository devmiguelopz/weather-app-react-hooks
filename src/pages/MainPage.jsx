import { Paper } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CityList from "./../components/CityList";
import cities from "./../data/cities.json";

const MainPage = ({ actions,data }) => {
  const history = useHistory();

  const onClickHandler = (city, countryCode) => {
    history.push(`/city/${countryCode}/${city}`);
  };

  return (
    <AppFrame>
      <Paper elevation={5}>
        <CityList
          data={data}
          cities={cities}
          onClickCity={onClickHandler}
          actions={actions}
        ></CityList>
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
