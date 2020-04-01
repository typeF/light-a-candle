const { Location, Tribute, sequelize } = require("../sequelize");
const formatPinDataObj = require("../util/locationUtils");

module.exports = {
  async getAllPins() {
    try {
      const pins = await Location.findAll();
      const tributeCounts = await Tribute.findAll({
        attributes: [
          "locationId",
          [sequelize.fn("COUNT", sequelize.col("locationId")), "totalTributes"]
        ],
        group: ["locationId"]
      });
      // console.log(weirdObj);
      // TODO: Get all counts
      const formattedPins = formatPinDataObj(pins, tributeCounts);
      console.log(formattedPins.features[1].properties);
      return formattedPins;
    } catch (err) {
      console.error(`Error fetching pins: ${err}`);
    }
  }
};
