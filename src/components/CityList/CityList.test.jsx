import React from "react";
import CityList from "./CityList";
import { fireEvent, render } from "@testing-library/react";

const cities = [
  {
    city: "Trujillo",
    country: "Perú",
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
  },
];

test("CityList render", async () => {
  // #region Arrange

  // #endregion

  // #region Action
  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={() => {}} />
  );
  const items = await findAllByRole("listitem");

  // #endregion

  // #region Assert
  expect(items).toHaveLength(cities.length);
  // #endregion
});

test("CityList click on item", async () => {
  // #region Arrange
  const fnClickOnItem = jest.fn();
  // #endregion

  // #region Action
  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnClickOnItem} />
  );
  const items = await findAllByRole("listitem");
  fireEvent.click(items[0]);
  // #endregion

  // #region Assert
  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
  // #endregion
});
