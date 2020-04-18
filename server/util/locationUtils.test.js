const { formatPinDataObj } = require("./locationUtils");

const pins = [
  { id: 1, longitude: 101, latitude: 201, dataValues: { id: 1, longitude: 101, latitude: 201 } },
  { id: 2, longitude: 102, latitude: 202, dataValues: { id: 2, longitude: 102, latitude: 202 } },
  { id: 3, longitude: 103, latitude: 203, dataValues: { id: 3, longitude: 103, latitude: 203 } },
  { id: 4, longitude: 104, latitude: 204, dataValues: { id: 4, longitude: 104, latitude: 204 } },
  { id: 5, longitude: 105, latitude: 205, dataValues: { id: 5, longitude: 105, latitude: 205 } },
  { id: 6, longitude: 106, latitude: 206, dataValues: { id: 6, longitude: 106, latitude: 206 } },
];

const rawCountArray = [
  {
    locationId: 1,
    totalTributes: 1,
    dataValues: {
      locationId: 1,
      totalTributes: 1,
    },
  },
  {
    locationId: 2,
    totalTributes: 2,
    dataValues: {
      locationId: 2,
      totalTributes: 2,
    },
  },
  {
    locationId: 3,
    totalTributes: 3,
    dataValues: {
      locationId: 3,
      totalTributes: 3,
    },
  },
  {
    locationId: 4,
    totalTributes: 4,
    dataValues: {
      locationId: 4,
      totalTributes: 4,
    },
  },
  {
    locationId: 5,
    totalTributes: 5,
    dataValues: {
      locationId: 5,
      totalTributes: 5,
    },
  },
];

describe("formatPinDataObj", () => {
  const result = formatPinDataObj(pins, rawCountArray);

  it("should return a formatted object given proper inputs", () => {
    expect(result).toHaveProperty("type");
    expect(result).toHaveProperty("features");
    expect(result.features[0].properties.id).toBe(1);
    expect(result.features[1].properties.id).toBe(2);
    expect(result.features[2].properties.id).toBe(3);
    expect(result.features[3].properties.id).toBe(4);
    expect(result.features[4].properties.id).toBe(5);
  });

  it("should only return pins that had a matching count Obj", () => {
    expect(result.features.length).toBe(5);
  });
});
