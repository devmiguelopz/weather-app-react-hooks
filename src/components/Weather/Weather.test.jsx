import React from "react";
import Weather from "./Weather";
import { render } from "@testing-library/react";
import {stateByName} from '../../utils/config'

test("Weather render", async () => {
  // #region Arrange
  const temperature = 10;
  // #endregion

  // #region Action
  const { findByRole } = render(
    <Weather temperature={temperature} state={stateByName.rain} />
  );
  const heading = await findByRole("heading");

  // #endregion

  // #region Assert
  expect(heading).toHaveTextContent(temperature);

  // #endregion
});
