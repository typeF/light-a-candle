import mapboxgl from "mapbox-gl";
import server from "../../api/config";
import mapPin from "./Marker/map-pin.png";
import getPinGeoJson from "../../api/locationApi";

const url = `${server}/location`;
const defaultZoom = 3;
const zoomThreshold = 3.5;

const initMap = ({ setMap, mapContainer, setGeoJsonData, addMarkers }) => {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

  const map = new mapboxgl.Map({
    container: mapContainer.current,
    style: "mapbox://styles/kateju/ck8b3bitt0qkp1jmopgc349xb",
    center: [-123.1207, 49.2827], // longitude, latitude
    zoom: defaultZoom,
  });

  /* eslint-disable react/no-this-in-sfc  */
  // Used to manage zoom state within Mapbox component
  class Zoom {
    constructor(prevZoom) {
      this.prevZoom = prevZoom;
    }

    setPrevZoom(zoom) {
      this.prevZoom = zoom;
    }
  }

  const zoom = new Zoom(defaultZoom);

  const toggleLabels = () => {
    const currentZoom = map.getZoom();
    const { prevZoom } = zoom;
    // Shows/hides labels only if we're changing over zoom level that's passed the threshold
    const crossedThreshold =
      !(prevZoom > zoomThreshold && currentZoom > zoomThreshold) ||
      !(prevZoom > zoomThreshold && currentZoom > zoomThreshold);
    zoom.setPrevZoom(currentZoom);
    if (crossedThreshold) {
      const labels = document.getElementsByClassName("label");
      Array.prototype.forEach.call(labels, (label) => {
        const isLabelLight = label.classList.contains("label-light");
        if (currentZoom <= zoomThreshold) {
          label.classList.add("hidden");
          return;
        }

        if (isLabelLight) {
          label.classList.remove("hidden");
        }
      });
    }
  };

  map.loadImage(mapPin, (err, img) => {
    if (err) throw err;
    if (!map.hasImage(mapPin)) map.addImage("mapPin", img);
  });

  map.on("load", () => {
    setMap(map);
    map.resize();

    map.addSource("points", {
      type: "geojson",
      data: url,
    });

    map.addLayer({
      id: "pins",
      type: "symbol",
      source: "points",
      maxzoom: zoomThreshold,
      layout: {
        "icon-image": "mapPin",
        "icon-size": 0.3,
        "icon-anchor": "bottom",
      },
    });

    map.on("click", "pins", (e) => {
      map.flyTo({
        center: e.features[0].geometry.coordinates,
        offset: [0, -220], // [x, y] pixels
        speed: 0.7,
        zoom: 6,
        essential: true,
      });
    });

    map.on("mouseenter", "pins", () => {
      map.getCanvas().style.cursor = "pointer";
    });

    map.on("mouseleave", "pins", () => {
      map.getCanvas().style.cursor = "";
    });

    // Renders markers based on geojson data object
    getPinGeoJson().then((data) => {
      setGeoJsonData(data);
      addMarkers(map)(data);
    });

    map.on("zoom", () => {
      toggleLabels();
    });
  });
};

export default initMap;
