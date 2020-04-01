const { Location } = require("../sequelize");
const formatPinDataObj = require("../util/locationUtils");

class FakeDb {
  constructor() {
    this.pins = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-123.11934, 49.23966]
          },
          properties: {
            title: "Mapbox",
            count: 6,
            city: "Vancouver",
            province: "BC",
            country: "Canada",
            description: "Vancouver, BC"
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-77.032, 38.913]
          },
          properties: {
            title: "Mapbox",
            count: 111,
            city: "Washington",
            province: "DC",
            country: "USA",
            description: "Washington, D.C."
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-122.414, 37.776]
          },
          properties: {
            title: "Mapbox",
            count: 55,
            city: "San Francisco",
            province: "CA",
            country: "USA",
            description: "San Francisco, California"
          }
        }
      ]
    };
  }

  saveData(pin) {
    this.pins.features.push(pin);
  }
}

const fakeDb = new FakeDb();

module.exports = {
  async getAllPins() {
    try {
      const pins = await Location.findAll();
      // TODO: Get all counts
      const formattedPins = formatPinDataObj(pins, []);
      return formattedPins;
    } catch (err) {
      console.error(`Error fetching pins: ${err}`);
    }
  },

  async savePin(data) {
    console.log("Saving pin...");
    console.log(data);
    await fakeDb.saveData(data);
  }
};
