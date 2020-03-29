import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import markerImg from "./map-pin.svg";

const markerSize = "30px";

const MarkerDiv = styled.div`
  background-image: url(${markerImg});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  cursor: pointer;
  height: ${markerSize};
  width: ${markerSize};
`;

const Marker = ({ clickHandler }) => {
  return <MarkerDiv className="marker" onClick={() => clickHandler()} />;
};

Marker.propTypes = {
  clickHandler: PropTypes.func,
};

Marker.def = {
  clickHandler: PropTypes.func,
};

Marker.defaultProps = {
  clickHandler: () => {},
};

export default Marker;
