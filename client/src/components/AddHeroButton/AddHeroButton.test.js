import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddHeroButton from "./AddHeroButton";

describe("<AddHeroButton>", () => {
  let wrapper;
  let mockHandleClickFunction;

  beforeEach(() => {
    mockHandleClickFunction = jest.fn();
    wrapper = render(<AddHeroButton handleClick={mockHandleClickFunction} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe("Testing UI elements", () => {
    it("Has the words 'Add a hero' in it", () => {
      const { getByText } = wrapper;
      expect(getByText("Add a hero")).toBeTruthy();
    });

    it("Has an image element representing an icon", () => {
      const { getByAltText } = wrapper;
      expect(getByAltText("add a hero")).toBeTruthy();
    });
  });

  describe("Testing functionality", () => {
    it("Runs handleClick when clicking 'Add a hero'", () => {
      const { getByText } = wrapper;
      fireEvent.click(getByText("Add a hero"));
      expect(mockHandleClickFunction).toHaveBeenCalledTimes(1);
      expect(mockHandleClickFunction).toHaveBeenCalledWith("addHero");
    });

    it("Runs handleClick when clicking on the icon", () => {
      const { getByAltText } = wrapper;
      fireEvent.click(getByAltText("add a hero"));
      expect(mockHandleClickFunction).toHaveBeenCalledTimes(1);
      expect(mockHandleClickFunction).toHaveBeenCalledWith("addHero");
    });

    it("Shouldn't run handleClick when clicking anywhere in the container", () => {
      fireEvent.click(wrapper.container);
      expect(mockHandleClickFunction).not.toHaveBeenCalled();
    });
  });
});
