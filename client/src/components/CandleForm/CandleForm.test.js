import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CandleForm from "./CandleForm";

describe("<CandleForm>", () => {
  let wrapper;
  let handleCloseMockFn;
  let handleSubmitMockFn;

  beforeEach(() => {
    handleCloseMockFn = jest.fn();
    handleSubmitMockFn = jest.fn();
    wrapper = render(<CandleForm handleClose={handleCloseMockFn} handleSubmit={handleSubmitMockFn} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe("Testing UI components", () => {
    it("Has a 'Your Name' input", () => {
      const { getByLabelText } = wrapper;
      expect(getByLabelText("Your Name")).toBeTruthy();
    });

    it("Has a 'Message' input", () => {
      const { getByLabelText } = wrapper;
      expect(getByLabelText("Message")).toBeTruthy();
    });

    it("Has a close 'X' button", () => {
      const { getByTestId } = wrapper;
      expect(getByTestId("close-form-button")).toBeTruthy();
    });

    it("Has a submit 'Candle icon'", () => {
      const { getByAltText } = wrapper;
      expect(getByAltText("a candle icon")).toBeTruthy();
    });
  });

  describe("Test Form functionality", () => {
    let submitButton;
    let nameInput;
    let messageInput;

    beforeEach(() => {
      const { getByLabelText, getByTestId } = wrapper;
      submitButton = getByTestId("candle-form-submit-button");
      nameInput = getByLabelText("Your Name");
      messageInput = getByLabelText("Message");
    });

    afterEach(() => {
      submitButton = undefined;
      nameInput = undefined;
      messageInput = undefined;
    });

    test("Clicking on close 'X' button runs close function", () => {
      userEvent.click(wrapper.getByTestId("close-form-button"));
      expect(handleCloseMockFn).toHaveBeenCalledTimes(1);
    });

    test("Candle submit button is disabled on load", () => {
      expect(submitButton).toBeDisabled();
      userEvent.click(submitButton);
      expect(handleSubmitMockFn).not.toHaveBeenCalled();
    });

    test("Candle submit button is disabled if only name is filled", async () => {
      await userEvent.type(nameInput, "John Doe");
      expect(nameInput).toHaveAttribute("value", "John Doe");
      expect(submitButton).toBeDisabled();
    });

    test("Candle submit button is disabled if only message is filled", async () => {
      await userEvent.type(messageInput, "You are the best!");
      expect(messageInput).toHaveAttribute("value", "You are the best!");
      expect(submitButton).toBeDisabled();
    });

    test("Candle submit button is enabled if both name and message are filled", async () => {
      await userEvent.type(nameInput, "John Doe");
      await userEvent.type(messageInput, "Thanks!");
      expect(nameInput).toHaveAttribute("value", "John Doe");
      expect(messageInput).toHaveAttribute("value", "Thanks!");
      expect(submitButton).not.toBeDisabled();
    });

    test("Candle submit button runs submit function if clicked when enabled", async () => {
      await userEvent.type(nameInput, "Jane Doe");
      await userEvent.type(messageInput, "Love");
      expect(submitButton).not.toBeDisabled();
      userEvent.click(submitButton);
      expect(handleSubmitMockFn).toHaveBeenCalledTimes(1);
    });
  });
});
