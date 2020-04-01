import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CandleIcon from "../CandleIcon/CandleIcon";

const Button = styled.button`
  background-color: grey;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  margin: 0;
  margin-bottom: 30px;
  border: 0;
  display: flex;
  justify-content: center;
`;

function CandleButton({ handleClick }) {
  return (
    <Button onClick={() => handleClick(true)}>
      <CandleIcon size="50px" />
    </Button>
  );
}

CandleButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CandleButton;
