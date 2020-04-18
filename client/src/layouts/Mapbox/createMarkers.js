import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import { getTributesForLocation } from "../../api/tributesApi";
import Label from "./Label";
import toggleLabelVisibility from "./mapBoxUtils/toggleLabelVisibility";

const createMarkers = (clickHandler) => {
  const { handleDrawer, setLocation, setMemorials } = clickHandler;

  return (map) => {
    const flyToLabelAndZoom = (feature) => {
      map.flyTo({
        center: feature.geometry.coordinates,
        offset: [0, -220], // [x, y] pixels
        speed: 0.7,
        zoom: 6,
        essential: true,
      });
    };

    return (data) => {
      data.features.forEach((marker) => {
        const { id, city, province, country, count } = marker.properties;
        const markerContainer = document.createElement("div");

        const clickHandler = (e) => {
          flyToLabelAndZoom(marker);
          handleDrawer(true);
          setLocation({ city, province, country });
          getTributesForLocation(id).then((res) => {
            setMemorials(res.data);
          });
        };

        // Based on mapbox's implmentation, probably not the most optimal at the moment
        // These components cannot read updated state in the Mapbox component
        /* eslint-disable react/no-render-return-value */
        const labelEl = ReactDOM.render(
          <div data-location={id}>
            <Label count={count} clickHandler={clickHandler} />
          </div>,
          markerContainer
        );
        new mapboxgl.Marker(labelEl).setLngLat(marker.geometry.coordinates).addTo(map);
      });
      toggleLabelVisibility(map.getZoom(), 3.5);
    };
  };
};

export default createMarkers;
