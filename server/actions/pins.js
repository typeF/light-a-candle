const { Location, Tribute, sequelize } = require("../sequelize");
const { formatPinDataObj } = require("../util/locationUtils");

module.exports = {
  async getAllPins() {
    try {
      const pins = await Location.findAll();
      const tributeCounts = await Tribute.findAll({
        attributes: ["locationId", [sequelize.fn("COUNT", sequelize.col("locationId")), "totalTributes"]],
        group: ["locationId"],
      });
      const formattedPins = formatPinDataObj(pins, tributeCounts);
      return formattedPins;
    } catch (err) {
      console.error(`Error fetching pins: ${err}`);
    }
  },
};
