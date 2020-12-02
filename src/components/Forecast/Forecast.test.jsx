import React from "react";
import Forecast from "./";
import { render } from "@testing-library/react";
import data from "../../data/forecast.json";

test("Forecast render", async () => {
  // #region Arrange

  // #endregion

  // #region Action
  const { findAllByTestId } = render(<Forecast forecasts={data}></Forecast>);
  const forecastItems = await findAllByTestId("forecastItem-item-container");
  // #endregion

  // #region Assert
  expect(forecastItems).toHaveLength(data.length);
  // #endregion
});
