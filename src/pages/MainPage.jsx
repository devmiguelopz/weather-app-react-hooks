import { Paper } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CityList from "./../components/CityList";
import data from "./../data/cities.json";

const MainPage = (props) => {
  const history = useHistory();

  const onClickHandler = () => {
    history.push("/city");
  };

  return (
    <AppFrame>
      <Paper elevation={5}>
        <CityList cities={data} onClickCity={onClickHandler}></CityList>
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
