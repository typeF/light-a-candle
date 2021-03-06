const { Tribute, Location } = require("../sequelize");

module.exports = {
  async getTributesForLocation(locationId) {
    const tributes = await Tribute.findAll({ where: { locationId } });
    return tributes;
  },

  async saveTribute(data) {
    const { longitude, latitude, city, province, country } = data;

    if (!longitude || !longitude) {
      console.error("Error saving tribute: No coordinates provided");
    }

    const existingLocation = await Location.findAll({
      where: { longitude, latitude },
    });

    let locationId;

    // Create a new location if not already existing
    if (existingLocation.length > 0) {
      locationId = existingLocation[0].dataValues.id;
    } else {
      const newLocation = await Location.create({
        longitude,
        latitude,
        city,
        province,
        country,
      });
      locationId = newLocation.id;
    }

    data.dob = new Date(data.dob);
    data.dod = new Date(data.dod);
    try {
      const tribute = await Tribute.create({ locationId, ...data });
      delete tribute.img;
      return tribute;
    } catch (err) {
      console.error(`Error saving tribute: ${err}`);
    }
  },
};
