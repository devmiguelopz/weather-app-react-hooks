import React from "react";
import ForecastChart from ".";
import { render } from "@testing-library/react";
import data from "../../data/chart.json";

test("ForecastChart render", async () => {
  // #region Arrange
  const GRAPHIC_COUNT = 1;
  // #endregion
  // #region Action
  const { findAllByTestId } = render(
    <ForecastChart data={data}></ForecastChart>
  );
  const forecastChart = await findAllByTestId("forecastChart-container");
  // #endregion
  // #region Assert
  expect(forecastChart).toHaveLength(GRAPHIC_COUNT);

  // #endregion
});
