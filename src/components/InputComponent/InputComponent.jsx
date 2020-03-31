import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div(({ customStyles }) => ({
  "background-color": "black",
  "border-bottom": "1px solid white",
  display: "flex",
  ...customStyles,
}));

const Input = styled.input`
  background-color: inherit;
  border: 0;
  color: white;
  flex: 1;
  margin: 4px 0;
  outline: 0;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const TextArea = styled.textarea`
  background-color: inherit;
  border: 0;
  color: white;
  flex: 1;
  font-family: Arial, sans-serif;
  margin: 4px 0;
  min-height: 35px;
  max-height: 200px;
  outline: 0;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const InputComponent = ({ containerCustomStyles, placeholder, value, setValue, type }) => {
  /*
    INFO: This is a work in progress. Designed for simple text inputs only.
    Feel free to adjust as needs arise (ie. textarea, dropdowns, etc.)
  */

  const textAreaAutoGrow = (e) => {
    const element = e.target;
    element.style.height = "5px";
    element.style.height = `${element.scrollHeight}px`;
    setValue(element.value);
  };

  return (
    <Container customStyles={containerCustomStyles}>
      {type === "textarea" ? (
        <TextArea placeholder={placeholder} value={value} onChange={textAreaAutoGrow} />
      ) : (
        <Input type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
      )}
    </Container>
  );
};

InputComponent.propTypes = {
  containerCustomStyles: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "email", "password", "tel", "textarea"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setValue: PropTypes.func.isRequired,
};

InputComponent.defaultProps = {
  containerCustomStyles: {},
  placeholder: "",
  type: "text",
};

export default InputComponent;
