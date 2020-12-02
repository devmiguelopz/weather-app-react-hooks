import React from "react";
import ForecastItem from "./";
import { render } from "@testing-library/react";
import { stateByName } from "../../utils/config";

test("ForecastItem render", async () => {
  // #region Arrange
  const hour = 20;
  const temperature = 10;
  const weekDay = "Monday";
  // #endregion

  // #region Action
  const { findByText } = render(
    <ForecastItem
      hour={hour}
      state={stateByName.cloud}
      temperature={temperature}
      weekDay={weekDay}
    />
  );
  const weekDayText = await findByText(weekDay);
  const hourText = await findByText(hour);
  const temperatureText = await findByText(/10/);

  // #endregion

  // #region Assert
  expect(hourText).toHaveTextContent(hour);
  expect(temperatureText).toHaveTextContent(`${temperature} °`);
  expect(weekDayText).toHaveTextContent(weekDay);
  // #endregion
});
