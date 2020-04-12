import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputComponent from "./InputComponent";

// eslint-disable-next-line react/prop-types
const TestInputComponentWrapperComponent = ({ containerCustomStyles, label, placeholder, type }) => {
  const [value, setValue] = React.useState("");
  return (
    <InputComponent
      value={value}
      setValue={setValue}
      containerCustomStyles={containerCustomStyles}
      label={label}
      placeholder={placeholder}
      type={type}
    />
  );
};

describe("<InputComponent>", () => {
  let wrapper;
  const placeholder = "Test Placeholder";
  const inputElementTestId = "input-element";

  beforeEach(() => {
    wrapper = render(<TestInputComponentWrapperComponent />);
  });

  afterEach(() => {
    cleanup();
  });

  describe("UI Tests", () => {
    test("Doesn't have a label by default", () => {
      expect(wrapper.queryByTestId("input-label")).toBeNull();
    });

    test("Has a label depending on the 'label' prop passed", () => {
      wrapper.rerender(<TestInputComponentWrapperComponent label="Test Label" />);
      expect(wrapper.queryByText("Test Label")).toBeTruthy();
    });

    test("Doesn't have a placeholder by default", () => {
      expect(wrapper.queryByTestId(inputElementTestId).placeholder).toBeFalsy();
    });

    test("Has a placeholder depending on the 'placeholder' prop passed", () => {
      wrapper.rerender(<TestInputComponentWrapperComponent placeholder={placeholder} />);
      expect(wrapper.queryByTestId(inputElementTestId).placeholder).toEqual(placeholder);
    });

    test("Has an <input> element by default, of type 'text'", () => {
      const input = wrapper.queryByTestId(inputElementTestId);
      expect(input.tagName).toEqual("INPUT");
      expect(input.type).toEqual("text");
    });

    test("Has a <textarea> element if type 'textarea' is given", () => {
      wrapper.rerender(<TestInputComponentWrapperComponent type="textarea" />);
      const input = wrapper.queryByTestId(inputElementTestId);
      expect(input.tagName).toEqual("TEXTAREA");
    });

    test("Container div will receive 'customStyles' prop", () => {
      const customStyles = { backgroundColor: "#777", fontSize: "75px" };
      wrapper.rerender(<TestInputComponentWrapperComponent containerCustomStyles={customStyles} />);
      expect(wrapper.queryByTestId("input-container")).toHaveStyle("background-color: #777; font-size: 75px");
    });
  });

  describe("Function Tests", () => {
    test("if type is 'email', input is only valid if user types valid email", async () => {
      const { getByPlaceholderText, rerender } = wrapper;
      rerender(<TestInputComponentWrapperComponent type="email" placeholder={placeholder} />);
      const input = getByPlaceholderText(placeholder);
      await userEvent.type(input, "john");
      expect(input).toBeInvalid();
      await userEvent.type(input, "@example.com");
      expect(input).toBeValid();
    });

    test("if type is 'number', user can only type numbers", async () => {
      const { getByPlaceholderText, rerender } = wrapper;
      rerender(<TestInputComponentWrapperComponent type="number" placeholder={placeholder} />);
      const input = getByPlaceholderText(placeholder);
      await userEvent.type(input, "Hello World"); // INFO: Ideally user should be able to type "1A2B3C" and expect "123"; see issue: https://github.com/testing-library/user-event/issues/191
      expect(input.value).toEqual("");
      await userEvent.type(input, "123");
      expect(input.value).toEqual("123");
    });
  });
});
