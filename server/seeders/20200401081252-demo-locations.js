"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Locations",
      [
        {
          longitude: -123.11934,
          latitude: 49.23966,
          city: "Vancouver",
          province: "BC",
          country: "Canada",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          longitude: -77.032,
          latitude: 38.913,
          city: "Washington",
          province: "DC",
          country: "USA",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          longitude: -122.414,
          latitude: 37.776,
          city: "San Franciso",
          province: "CA",
          country: "USA",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Locations", null, {});
  }
};
