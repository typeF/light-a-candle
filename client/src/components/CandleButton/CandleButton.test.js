import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CandleButton from "./CandleButton";

describe("<CandleButton>", () => {
  let wrapper;
  let handleClickMockFunction;

  beforeEach(() => {
    handleClickMockFunction = jest.fn();
    wrapper = render(<CandleButton handleClick={handleClickMockFunction} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("Has a candle icon", () => {
    const { getByAltText } = wrapper;
    expect(getByAltText("a candle icon")).toBeTruthy();
  });

  it("Runs handleClick when icon is clicked", () => {
    const { getByAltText } = wrapper;
    fireEvent.click(getByAltText("a candle icon"));
    expect(handleClickMockFunction).toHaveBeenCalled();
  });
});
