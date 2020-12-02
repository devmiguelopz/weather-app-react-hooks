import React from "react";
import { render } from "@testing-library/react";
import CityInfo from "./CityInfo";

test("CityInfo render", async () => {

  // #region Arrange
  const city = "Trujillo";
  const country = "Perú";
  // #endregion

  // #region Action
  const { findAllByRole } = render(
    <CityInfo city={city} country={country} />
  );
  const headings = await findAllByRole("heading");
  // #endregion

  // #region Assert
  expect(headings[0]).toHaveTextContent(city);
  expect(headings[1]).toHaveTextContent(country);
  // #endregion
});

