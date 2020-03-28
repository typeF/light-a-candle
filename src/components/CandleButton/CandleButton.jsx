import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  display: block;
  background-color: grey;
  width: 100px;
  height: 50px;
  border-radius: 100px;
  margin-bottom: 30px;
`;

function CandleButton({ handleClick }) {
  return <Button onClick={handleClick}>+</Button>;
}

CandleButton.propTypes = {
  handleClick: PropTypes.func,
};

CandleButton.defaultTypes = {};
export default CandleButton;
