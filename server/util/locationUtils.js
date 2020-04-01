function formatPinDataObj(pins, counts) {
  const fakeCounts = [
    { id: 2, count: 55 },
    { id: 3, count: 111 },
    { id: 4, count: 3 }
  ];
  // type: "FeatureCollection",
  // features: [
  //   {
  //     type: "Feature",
  //     geometry: {
  //       type: "Point",
  //       coordinates: [-123.11934, 49.23966]
  //     },
  //     properties: {
  //       title: "Mapbox",
  //       count: 6,
  //       city: "Vancouver",
  //       province: "BC",
  //       country: "Canada",
  //       description: "Vancouver, BC"
  //     }
  //   },

  const updatedPins = pins.map(pin => {
    const { id, longitude, latitude } = pin;
    const countObj = fakeCounts.find(count => count.id === id);
    if (!countObj) {
      console.error("Could not find matching countObj for pin");
      return;
    }
    pin.dataValues.count = countObj.count;
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [longitude, latitude]
      },
      properties: pin
    };
  });

  return {
    type: "FeatureCollection",
    features: updatedPins
  };
}

module.exports = formatPinDataObj;
