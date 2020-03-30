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

const Marker = ({ clickHandler, long, lat }) => {
  return <MarkerDiv className="marker" data-latitude={lat} data-longitude={long} onClick={(e) => clickHandler(e)} />;
};

Marker.propTypes = {
  clickHandler: PropTypes.func,
  lat: PropTypes.number,
  long: PropTypes.number,
};

Marker.def = {
  clickHandler: PropTypes.func,
};

Marker.defaultProps = {
  clickHandler: () => {},
  long: 0,
  lat: 0,
};

export default Marker;
