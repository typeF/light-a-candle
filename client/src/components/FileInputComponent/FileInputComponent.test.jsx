import React from "react";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FileInputComponent from "./FileInputComponent";

describe("<FileInputComponent>", () => {
  let wrapper;
  let handleFileUploadMockFn;
  const fileId = "test-file-input-component-id";
  let accept;

  beforeEach(() => {
    handleFileUploadMockFn = jest.fn();
    accept = [];
    wrapper = render(<FileInputComponent accept={accept} fileId={fileId} handleFileUpload={handleFileUploadMockFn} />);
  });

  afterEach(cleanup);

  describe("UI Tests", () => {
    it("Has a label text of '+' by default", () => {
      const { getByLabelText } = wrapper;
      expect(getByLabelText("+")).toBeTruthy();
    });

    it("Has a custom label text depending on what is passed to its children", () => {
      const { rerender, getByLabelText, queryByLabelText } = wrapper;
      rerender(
        <FileInputComponent accept={accept} fileId={fileId} handleFileUpload={handleFileUploadMockFn}>
          Hello World
        </FileInputComponent>
      );
      expect(queryByLabelText("+")).toBeNull();
      expect(getByLabelText("Hello World")).toBeTruthy();
    });

    test("The input component is not visible and does not take any space in the screen", () => {
      const { getByLabelText } = wrapper;
      expect(getByLabelText("+")).toHaveStyle("position: absolute; visibility: hidden;");
    });

    test("The label's style will change according to any custom styles we pass down", () => {
      const { getByText, rerender } = wrapper;
      const customLabelStyle = {
        color: "blue",
        width: "50px",
      };
      rerender(
        <FileInputComponent
          accept={accept}
          fileId={fileId}
          handleFileUpload={handleFileUploadMockFn}
          customLabelStyle={customLabelStyle}
        />
      );
      expect(getByText("+")).toHaveStyle("color: blue; width: 50px;");
    });
  });

  describe("Function Tests", () => {
    it("Only accepts the file types passed to it", () => {
      accept = [".png", ".jpg"];
      const { rerender, getByLabelText } = wrapper;
      rerender(<FileInputComponent accept={accept} fileId={fileId} handleFileUpload={handleFileUploadMockFn} />);
      expect(getByLabelText("+")).toHaveAttribute("accept", ".png,.jpg");
    });

    it("Does not have 'multiple' attribute to disallow multiple file selection by default", () => {
      // FIXME: This doesn't actually test a user selecting a file
      const { getByLabelText } = wrapper;
      expect(getByLabelText("+")).not.toHaveAttribute("multiple");
    });

    it("Has 'multiple' attribute if 'multiple' props is passed", () => {
      // FIXME: This doesn't actually test a user selecting multiple files
      const { rerender, getByLabelText } = wrapper;
      rerender(
        <FileInputComponent accept={accept} fileId={fileId} handleFileUpload={handleFileUploadMockFn} multiple />
      );
      expect(getByLabelText("+")).toHaveAttribute("multiple");
    });

    /*
    // INFO: Unable to get this test to work as clicking on the input will not fire onChange.
    // Will need to do more research about how to test file uploads.
    test("Clicking on the label button calls the `handleFileUpload` function", () => {
      const { getByLabelText } = wrapper;
      userEvent.click(getByLabelText("+"));
      console.log(getByLabelText("+"));
      expect(handleFileUploadMockFn).toHaveBeenCalledTimes(1);
    });
    */
  });
});
