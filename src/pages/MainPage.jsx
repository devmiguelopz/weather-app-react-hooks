import React from "react";
import { useHistory } from "react-router-dom";
import CityList from "./../components/CityList";
import data from "./../data/cities.json";

const MainPage = (props) => {
  const history = useHistory();

  const onClickHandler = () => {
    history.push("/city");
  };

  return (
    <div>
      <h2>Cities list</h2>
      <CityList cities={data} onClickCity={onClickHandler}></CityList>
    </div>
  );
};

export default MainPage;
