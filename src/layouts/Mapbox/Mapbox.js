import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Marker from "./Marker";
import geojson from "./geojson";
import Home from "../Home/Home";

const MapContainer = styled.div`
  height: 100vh;
  position: "absolute";
`;

const Mapbox = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1Ijoia2F0ZWp1IiwiYSI6ImNqcXZoMjEzMzB2YjI0M2s4M244a3oxZHoifQ.jwSC6ztYKL8MXQJ0yPZ2vQ";
    /* eslint-disable no-shadow */
    const initMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/kateju/ck8b3bitt0qkp1jmopgc349xb",
        center: [-123.1207, 49.2827], // longitude, latitude
        zoom: 3,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();

        // Renders markers based on geojson data object
        geojson.features.forEach((marker) => {
          const markerContainer = document.createElement("div");
          /* eslint-disable react/no-render-return-value */

          const clickHandler = () => console.log("Marker click handler");

          // Based on mapbox's implmentation, probably not the most optimal at the moment
          const markerEl = ReactDOM.render(
            <div>
              <Marker clickHandler={clickHandler} />
            </div>,
            markerContainer
          );
          new mapboxgl.Marker(markerEl).setLngLat(marker.geometry.coordinates).addTo(map);
        });
      });
    };

    if (!map) initMap({ setMap, mapContainer });
  }, [map]);

  /* eslint-disable no-return-assign */
  return (
    <div>
      <Home />
      <MapContainer ref={(el) => (mapContainer.current = el)} />
    </div>
  );
};

export default Mapbox;
