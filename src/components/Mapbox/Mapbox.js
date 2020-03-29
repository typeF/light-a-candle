import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapContainer = styled.div`
  height: 100vh;
  position: "absolute";
`;

const Mapbox = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiZG9udHNwYW0iLCJhIjoiY2s4Y25iNDYzMDNlbzNmbm43MDdobmlnZCJ9.167qFehboZ6tkqbVSVg0sg";
    /* eslint-disable no-shadow */
    const initMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        // style: "mapbox://styles/katju/ck8b3bittOqkp1jmopgc349xb",
        center: [-123.1207, 49.2827], // longitude, latitude
        zoom: 5,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();

        new mapboxgl.Marker({
          draggable: true,
        })
          .setLngLat([-123.1207, 49.2827])
          .addTo(map);
      });
    };

    if (!map) initMap({ setMap, mapContainer });
  }, [map]);

  /* eslint-disable no-return-assign */
  return <MapContainer ref={(el) => (mapContainer.current = el)} />;
};

export default Mapbox;
