import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div(({ customStyles }) => ({
  "background-color": "black",
  "border-bottom": "1px solid red",
  display: "flex",
  ...customStyles,
}));

const InputBox = styled.input`
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

const InputComponent = ({ containerCustomStyles, placeholder, value, setValue, type }) => {
  return (
    <Container customStyles={containerCustomStyles}>
      <InputBox type={type} placeholder={placeholder} value={value} onChange={setValue} />
    </Container>
  );
};

InputComponent.propTypes = {
  containerCustomStyles: PropTypes.object, // eslint-disable-line
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "email", "password", "tel"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setValue: PropTypes.func.isRequired,
};

InputComponent.defaultProps = {
  containerCustomStyles: {},
  placeholder: "",
  type: "text",
};

export default InputComponent;
