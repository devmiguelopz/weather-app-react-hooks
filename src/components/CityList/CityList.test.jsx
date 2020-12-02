import React from "react";
import CityList from "./CityList";
import { fireEvent, render } from "@testing-library/react";
import data from "../../data/cities.json";

test("CityList render", async () => {
  // #region Arrange

  // #endregion

  // #region Action
  const { findAllByRole } = render(
    <CityList cities={data} onClickCity={() => {}} />
  );
  const items = await findAllByRole("button");

  // #endregion

  // #region Assert
  expect(items).toHaveLength(data.length);
  // #endregion
});

test("CityList click on item", async () => {
  // #region Arrange
  const fnClickOnItem = jest.fn();
  // #endregion

  // #region Action
  const { findAllByRole } = render(
    <CityList cities={data} onClickCity={fnClickOnItem} />
  );
  const items = await findAllByRole("button");
  fireEvent.click(items[0]);
  // #endregion

  // #region Assert
  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
  // #endregion
});
