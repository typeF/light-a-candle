import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Icon = styled.img`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
`;

function CandleIcon({ size }) {
  return <Icon size={size} src="/candle-icon.svg" alt="a candle icon" />;
}

CandleIcon.propTypes = {
  size: PropTypes.string,
};

CandleIcon.defaultProps = {
  size: "50px",
};

export default CandleIcon;
