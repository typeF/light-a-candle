import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import "mapbox-gl/dist/mapbox-gl.css";
import PropTypes from "prop-types";
import initMap from "./mapboxInit";
import createMarkers from "./createMarkers";

const MapContainer = styled.div`
  height: 100vh;
  position: "absolute";
`;

const Mapbox = ({ handleDrawer, setLocation, setMemorials, mapBoxInstance, geoJsonData, setGeoJsonData }) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  const addMarkers = createMarkers({ handleDrawer, setLocation, setMemorials });

  useEffect(() => {
    if (!map) initMap({ setMap, mapContainer, setGeoJsonData, addMarkers });
  }, [map]);

  useEffect(() => {
    if (map) {
      document.querySelectorAll(".mapboxgl-marker").forEach((marker) => marker.remove());
      // Needs a setTimeout to not render regular markers, not sure why
      setTimeout(() => {
        addMarkers(map)(geoJsonData);
      }, 0);
    }
  }, [geoJsonData]);

  /* eslint-disable no-return-assign */
  return (
    <div>
      <MapContainer ref={(el) => (mapContainer.current = el)} />
    </div>
  );
};

Mapbox.propTypes = {
  handleDrawer: PropTypes.func,
  setLocation: PropTypes.func,
  setMemorial: PropTypes.func,
};

Mapbox.defaultProps = {
  handleDrawer: () => {},
  setLocation: () => {},
  setMemorial: () => {},
};
export default Mapbox;
