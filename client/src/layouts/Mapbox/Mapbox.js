import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import PropTypes from "prop-types";
import Label from "./Label";
import { getTributesForLocation } from "../../api/tributesApi";
import initMap from "./mapboxInit";

const MapContainer = styled.div`
  height: 100vh;
  position: "absolute";
`;

const Mapbox = ({ handleDrawer, setLocation, setMemorials, mapBoxInstance, geoJsonData, setGeoJsonData }) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!map) initMap({ setMap, mapContainer });
  }, [map]);

  useEffect(() => {
    if (map) {
      document.querySelectorAll(".mapboxgl-marker").forEach((marker) => marker.remove());
      //  Renders markers based on geojson data object
      setTimeout(() => {
        geoJsonData.features.forEach((marker) => {
          const { id, city, province, country, count } = marker.properties;
          const markerContainer = document.createElement("div");

          const clickHandler = (e) => {
            // flyToLabelAndZoom(marker);
            handleDrawer(true);
            setLocation({ city, province, country });
            getTributesForLocation(id).then((res) => {
              setMemorials(res.data);
            });
          };

          //  Based on mapbox's implmentation, probably not the most optimal at the moment
          //  These components cannot read updated state in the Mapbox component
          const labelEl = ReactDOM.render(
            <div data-location={id}>
              <Label background="light" count={count} clickHandler={clickHandler} />
            </div>,
            markerContainer
          );
          new mapboxgl.Marker(labelEl).setLngLat(marker.geometry.coordinates).addTo(map);
        });
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
