import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import geojson from "./geojson";
import Label from "./Label";
import mapPin from "./Marker/map-pin.png";
import getTributesForLocation from "../../api/tributesApi";
import getPinGeoJson from "../../api/locationApi";

const MapContainer = styled.div`
  height: 100vh;
  position: "absolute";
`;

const Mapbox = ({ handleDrawer, setLocation, setMemorials }) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  // const geojson =  getPinGeoJson().then((res) => {
  //   // console.log(res);
  //   return res;
  // });

  const url = "http://localhost:4000/location/pins";

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1Ijoia2F0ZWp1IiwiYSI6ImNqcXZoMjEzMzB2YjI0M2s4M244a3oxZHoifQ.jwSC6ztYKL8MXQJ0yPZ2vQ";

    // ! Everything in here can set the state but can only get the INITIAL state
    // ! It will not retrieve updated state values
    /* eslint-disable no-shadow */
    const initMap = ({ setMap, mapContainer }) => {
      const defaultZoom = 3;
      const zoomThreshold = 3.5;

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

      const flyToLabelAndZoom = (feature) => {
        map.flyTo({
          center: feature.geometry.coordinates,
          offset: [0, -220], // [x, y] pixels
          speed: 0.7,
          zoom: 6,
          essential: true,
        });
      };

      const getTributes = async (searchParams) => {
        return await getTributesForLocation(searchParams);
      };

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

        // map.on("sourcedata", () => {
        //   if (map.getSource("points") && map.isSourceLoaded("points")) {
        //     console.log("source loaded");
        //     const features = map.querySourceFeatures("points");
        //     console.log(features);
        //   }
        // });

        // Renders markers based on geojson data object
        getPinGeoJson().then((res) => {
          res.features.forEach((marker) => {
            const { city, province, country } = marker.properties;
            const markerContainer = document.createElement("div");

            const clickHandler = (e) => {
              flyToLabelAndZoom(marker);
              // const features = map.queryRenderedFeatures(e.point);
              handleDrawer(true);
              setLocation({ city, province, country });
              getTributes({ city, province, country }).then((res) => setMemorials(res.data));
            };

            // Based on mapbox's implmentation, probably not the most optimal at the moment
            // These components cannot read updated state in the Mapbox component
            /* eslint-disable react/no-render-return-value */
            const labelEl = ReactDOM.render(
              <div>
                <Label background="light" count={marker.properties.count} clickHandler={clickHandler} />
              </div>,
              markerContainer
            );
            new mapboxgl.Marker(labelEl).setLngLat(marker.geometry.coordinates).addTo(map);
          });
        });

        map.on("zoom", () => {
          toggleLabels();
        });
      });
    };

    if (!map) initMap({ setMap, mapContainer });
  }, [map]);

  /* eslint-disable no-return-assign */
  return (
    <div>
      <MapContainer ref={(el) => (mapContainer.current = el)} />
    </div>
  );
};

export default Mapbox;
