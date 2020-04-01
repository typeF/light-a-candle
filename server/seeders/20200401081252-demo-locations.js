"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Locations",
      [
        {
          id: 1,
          longitude: -123.1139,
          latitude: 49.2609,
          city: "Vancouver",
          province: "BC",
          country: "Canada",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          longitude: -77.032,
          latitude: 38.913,
          city: "Washington",
          province: "DC",
          country: "USA",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
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
