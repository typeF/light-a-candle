import React from "react";
import { render } from "@testing-library/react";
import CandleIcon from "./CandleIcon";

describe("<CandleIcon>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<CandleIcon />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("Contains 'a candle icon' image", () => {
    const { getByAltText } = wrapper;
    expect(getByAltText("a candle icon")).toBeTruthy();
  });

  it("Defaults to image size of 50px * 50px", () => {
    const { getByAltText } = wrapper;
    const image = getByAltText("a candle icon");
    expect(image).toHaveStyle(`height: 50px`);
    expect(image).toHaveStyle(`width: 50px`);
  });

  test("Able to resize image with `size` prop", () => {
    const size = "75px";
    const { getByAltText, rerender } = wrapper;
    rerender(<CandleIcon size={size} />);
    const image = getByAltText("a candle icon");
    expect(image).toHaveStyle(`height: ${size}`);
    expect(image).toHaveStyle(`width: ${size}`);
  });
});
