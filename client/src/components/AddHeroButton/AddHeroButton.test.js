import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddHeroButton from "./AddHeroButton";

describe("<AddHeroButton>", () => {
  const mockHandleClickFunction = jest.fn();
  let wrapper;

  beforeEach(() => {
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
      const { getByTestId } = wrapper;
      expect(getByTestId("icon")).toBeTruthy();
    });
  });

  describe("Testing functionality", () => {
    it("Runs handleClick when clicking 'Add a hero'", () => {
      const { getByText } = wrapper;
      fireEvent.click(getByText("Add a hero"));
      expect(mockHandleClickFunction).toHaveBeenCalled();
    });

    it("Runs handleClick when clicking on the icon", () => {
      const { getByTestId } = wrapper;
      fireEvent.click(getByTestId("icon"));
      expect(mockHandleClickFunction).toHaveBeenCalled();
    });
  });
});
