import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  display: block;
  background-color: grey;
  width: 100px;
  height: 50px;
  border-radius: 100px;
  margin: 0 auto;
  margin-bottom: 30px;
`;
function CandleButton({ handleClick }) {
  return <Button onClick={() => handleClick(true)}>+</Button>;
}

CandleButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CandleButton;
