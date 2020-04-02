import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div(({ customStyles }) => ({
  "border-bottom": "1px solid #d9cdf0",
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
  font-size: 1.6rem;

  &::placeholder {
    color: #d9cdf0;
  }
`;

const TextArea = styled.textarea`
  background-color: inherit;
  border: 0;
  color: #d9cdf0;
  flex: 1;
  font-family: "Noto Sans", serif;
  margin: 4px 0;
  min-height: 35px;
  max-height: 200px;
  outline: 0;

  &::placeholder {
    color: #d9cdf0;
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
  // eslint-disable-line react/forbid-prop-types
  containerCustomStyles: PropTypes.object,
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
