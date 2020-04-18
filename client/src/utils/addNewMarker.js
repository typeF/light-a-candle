const addNewMarker = ({ geoJsonData, setGeoJsonData, data }) => {
  const { locationId, city, province, country, longitude, latitude } = data;
  const newGeoJsonDataArray = Object.assign({}, geoJsonData);
  const existingLabel = document.querySelector(`div[data-location="${locationId}"`);

  if (existingLabel) {
    const featureIndex = geoJsonData.features.findIndex((feature) => feature.properties.id === locationId);
    const newCount = parseInt(newGeoJsonDataArray.features[featureIndex].properties.count);
    newGeoJsonDataArray.features[featureIndex].properties.count = (newCount + 1).toString();
    setGeoJsonData(newGeoJsonDataArray);
    return;
  }

  const markerData = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [longitude, latitude],
    },
    properties: {
      id: locationId,
      longitude,
      latitude,
      city,
      province,
      country,
      count: "1",
    },
  };

  newGeoJsonDataArray.features.push(markerData);

  setGeoJsonData(newGeoJsonDataArray);
};

export default addNewMarker;
