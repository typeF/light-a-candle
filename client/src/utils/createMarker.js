import React from "react";
import ReactDOM from "react-dom";
import Label from "../layouts/Mapbox/Label";
import mapboxgl from "mapbox-gl";
import { getTributesForLocation } from "../api/tributesApi";

// Ugly but it works. Don't judge me.
export default function createMarker(fns, data) {
  const { map, handleDrawer, setMemorials, setLocation } = fns;
  const { locationId, city, province, country, longitude, latitude } = data;
  const coords = [longitude, latitude];

  const existingLabel = document.querySelector(`div[data-location="${locationId}"`);

  if (existingLabel) {
    // TODO: Update existing label count +1
    return;
  }

  const clickHandler = (e) => {
    flyToLabelAndZoom(map, coords);
    handleDrawer(true);
    setLocation({ city, province, country });
    getTributesForLocation(locationId).then((res) => {
      setMemorials(res.data);
    });
  };

  const markerContainer = document.createElement("div");
  const labelEl = ReactDOM.render(
    <div>
      <Label background="light" count="1" clickHandler={clickHandler} />
    </div>,
    markerContainer
  );
  new mapboxgl.Marker(labelEl).setLngLat(coords).addTo(map);
}

const flyToLabelAndZoom = (map, coords) => {
  map.flyTo({
    center: coords,
    offset: [0, -220], // [x, y] pixels
    speed: 0.7,
    zoom: 6,
    essential: true,
  });
};
