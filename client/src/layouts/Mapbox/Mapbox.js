import React, { useEffect, useRef, useMemo } from "react";
import styled from "styled-components";
import "mapbox-gl/dist/mapbox-gl.css";
import PropTypes from "prop-types";
import initMap from "./mapboxInit";
import createMarkers from "./createMarkers";

const MapContainer = styled.div`
  height: 100vh;
  position: "absolute";
`;

const Mapbox = ({ handleDrawer, setLocation, setMemorials, geoJsonData, setGeoJsonData }) => {
  const map = useRef(null);
  const mapContainer = useRef(null);
  const setMap = (mapInstance) => {
    map.current = mapInstance;
  };

  const addMarkers = useMemo(() => {
    return createMarkers({ handleDrawer, setLocation, setMemorials });
  }, [handleDrawer, setLocation, setMemorials]);

  useEffect(() => {
    if (!map.current) initMap({ setMap, mapContainer, setGeoJsonData, addMarkers });
  }, [addMarkers, setGeoJsonData]);

  useEffect(() => {
    if (map.current) {
      document.querySelectorAll(".mapboxgl-marker").forEach((marker) => marker.remove());
      // Needs a setTimeout to render markers properly otherwise
      // mapbox will use their default marker styling, not sure why
      setTimeout(() => {
        addMarkers(map.current)(geoJsonData);
        // Refreshes map
        map.current.getSource("points").setData(geoJsonData);
      }, 0);
    }
  }, [geoJsonData, addMarkers, setGeoJsonData]);

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
