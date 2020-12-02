import React from "react";
import WeatherDetails from "./WeatherDetails";
import { render } from "@testing-library/react";

test("WeatherDetails render", async () => {
  // #region Arrange
  const humidity = 10;
  const wind = 20;
  // #endregion

  // #region Action
  const { findByText } = render(
    <WeatherDetails humidity={humidity} wind={wind} />
  );
  const humidityText = await findByText(/10/);
  const windText = await findByText(/20/);

  // #endregion

  // #region Assert
  expect(humidityText).toHaveTextContent(`Humidity: ${humidity}%`);
  expect(windText).toHaveTextContent(`Wind: ${wind}km/h`);
  // #endregion
});
