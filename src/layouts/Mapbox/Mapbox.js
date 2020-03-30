import React, { useEffect, useState, useRef } from "react";
// import ReactDOM from "react-dom";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import Marker from "./Marker";
import geojson from "./geojson";
import Home from "../Home/Home";
import mapPin from "./map-pin.png";
import mapLabelLt from "./map-label-lt.png";

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

      map.loadImage(mapPin, (err, img) => {
        if (err) throw err;
        if (!map.hasImage(mapPin)) map.addImage("mapPin", img);
      });

      map.loadImage(mapLabelLt, (err, img) => {
        if (err) throw err;
        if (!map.hasImage(mapLabelLt)) map.addImage("mapLabelLt", img);
      });

      map.on("load", () => {
        setMap(map);
        map.resize();

        map.addSource("points", {
          type: "geojson",
          data: geojson,
        });

        const zoomThreshold = 3.5;

        map.addLayer({
          id: "symbols",
          type: "symbol",
          source: "points",
          maxzoom: zoomThreshold,
          layout: {
            "icon-image": "mapPin",
            "icon-size": 0.3,
          },
        });

        map.addLayer({
          id: "symbols2",
          type: "symbol",
          source: "points",
          minzoom: zoomThreshold,
          layout: {
            "icon-image": "mapLabelLt",
            "icon-size": 0.3,
          },
        });

        map.on("click", "symbols", (e) => {
          map.flyTo({ center: e.features[0].geometry.coordinates, zoom: 6, essential: true });
        });

        map.on("mouseenter", "symbols", () => {
          map.getCanvas().style.cursor = "pointer";
        });

        map.on("mouseleave", "symbols", () => {
          map.getCanvas().style.cursor = "";
        });

        // Renders markers based on geojson data object
        // geojson.features.forEach((marker) => {
        //   const markerContainer = document.createElement("div");
        //   /* eslint-disable react/no-render-return-value */

        //   // const clickHandler = () => console.log("Marker click handler");
        //   const clickHandler = (e) => {
        //     // map.flyTo({
        //     //   center: end,
        //     //   zoom: 9,
        //     //   bearing: 0,
        //     // });
        //     // const features = map.queryRenderedFeatures(e.point);
        //     // console.log(features[0]);
        //   };

        //   const [long, lat] = marker.geometry.coordinates;
        //   // Based on mapbox's implmentation, probably not the most optimal at the moment
        //   const markerEl = ReactDOM.render(
        //     <div>
        //       <Marker long={long} lat={lat} clickHandler={clickHandler} />
        //     </div>,
        //     markerContainer
        //   );
        //   new mapboxgl.Marker(markerEl).setLngLat(marker.geometry.coordinates).addTo(map);
        // });
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
