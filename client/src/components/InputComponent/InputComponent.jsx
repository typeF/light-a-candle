import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { lilac } from "../../fixtures/colors";
import { fontFamily } from "../../fixtures/typography";

const Container = styled.div(({ customStyles }) => ({
  "border-bottom": "1px solid #d9cdf0",
  display: "flex",
  "flex-direction": "column",
  ...customStyles,
}));

const Label = styled.p`
  color: ${lilac};
  font-family: "Noto Sans", serif;
  margin: 0;
`;

const Input = styled.input`
  background-color: inherit;
  border: 0;
  color: ${lilac};
  flex: 1;
  margin: 4px 0;
  outline: 0;
  font-size: 1.6rem;
  font-family: ${(props) => props.fontFamily || '"Noto Sans", serif'};

  &::placeholder {
    color: ${lilac};
  }
`;

const TextArea = styled.textarea`
  background-color: inherit;
  border: 0;
  color: ${lilac};
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

const InputComponent = ({ containerCustomStyles, label, placeholder, value, setValue, type }) => {
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
      {label && <Label>{label}</Label>}
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
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "email", "password", "tel", "textarea", "date"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setValue: PropTypes.func.isRequired,
};

InputComponent.defaultProps = {
  containerCustomStyles: {},
  label: "",
  placeholder: "",
  type: "text",
};

export default InputComponent;
