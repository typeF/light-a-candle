function formatPinDataObj(pins, rawCountArray) {
  const fakeCounts = [
    { id: 2, count: 55 },
    { id: 3, count: 111 },
    { id: 4, count: 3 }
  ];

  const counts = buildCountArray(rawCountArray);

  const updatedPins = pins.map(pin => {
    const { id, longitude, latitude } = pin;
    const countObj = counts.find(count => count.locationId === id);
    if (!countObj) {
      console.error("Could not find matching countObj for pin");
      return;
    }
    pin.dataValues.count = countObj.totalTributes;
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

function buildCountArray(countsObj) {
  return countsObj.map(count => {
    const { locationId, totalTributes } = count.dataValues;
    return {
      locationId,
      totalTributes
    };
  });
}

module.exports = formatPinDataObj;
