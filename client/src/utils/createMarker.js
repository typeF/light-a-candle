import React from "react";
import ReactDOM from "react-dom";
import Label from "../layouts/Mapbox/Label";
import mapboxgl from "mapbox-gl";
import { getTributesForLocation } from "../api/tributesApi";

export default function createMarker(fns, data) {
  const { map, handleDrawer, setMemorials, setLocation } = fns;
  const { id, city, province, country, longitude, latitude } = data;
  const coords = [longitude, latitude];

  const existingLabel = document.querySelector(`div[data-locationId="${id}"`);

  if (existingLabel) {
    // TODO: Update existing label count +1
    return;
  }
  // console.log(fns);
  // console.log(data);
  // }
  //   const { city, province, country } = data;
  //   const { map, handleDrawer, setMemorials, setLocation } = fns;
  const clickHandler = (e) => {
    flyToLabelAndZoom(map, coords);
    //     handleDrawer(true);
    //     setLocation({ city, province, country });
    //     getTributesForLocation(id).then((res) => {
    //       setMemorials(res.data);
    //     });
  };

  const markerContainer = document.createElement("div");
  console.log("creating new div");
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

// res.features.forEach((marker) => {
//   const { id, city, province, country, count } = marker.properties;
// });
