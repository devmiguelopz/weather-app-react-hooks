import React from "react";
import Forecast from "./";
import { render } from "@testing-library/react";
import { stateByName } from "../../utils/config";

test("Forecast render", async () => {
  // #region Arrange
  const forecasts = [
    { hour: 10, state: stateByName.cloud, temperature: 20, weekDay: "Monday" },
    { hour: 10, state: stateByName.fog, temperature: 20, weekDay: "Tuesday" },
    {
      hour: 10,
      state: stateByName.cloudy,
      temperature: 20,
      weekDay: "Wednesday",
    },
    { hour: 10, state: stateByName.rain, temperature: 20, weekDay: "Thursday" },
  ];
  // #endregion

  // #region Action
  const { findAllByTestId } = render(
    <Forecast forecasts={forecasts}></Forecast>
  );
  const forecastItems = await findAllByTestId("forecastItem-item-container");
  // #endregion

  // #region Assert
  expect(forecastItems).toHaveLength(forecasts.length);
  // #endregion
});
