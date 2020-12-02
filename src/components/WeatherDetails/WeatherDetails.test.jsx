import React from "react";
import WeatherDetails from "./WeatherDetails";
import { render } from "@testing-library/react";

test("WeatherDetails render", async () => {
  // #region Arrange
  const humidity = 10;
  const win = 20;
  // #endregion

  // #region Action
  const { findByText } = render(
    <WeatherDetails humidity={humidity} win={win} />
  );
  const humidityText = await findByText(/10/);
  const winText = await findByText(/20/);

  // #endregion

  // #region Assert
  expect(humidityText).toHaveTextContent(`Humidity: ${humidity}%`);
  expect(winText).toHaveTextContent(`Win: ${win}km/h`);
  // #endregion
});
