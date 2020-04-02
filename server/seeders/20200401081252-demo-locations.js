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
          updatedAt: new Date(),
        },
        {
          id: 2,
          longitude: -77.032,
          latitude: 38.913,
          city: "Washington",
          province: "DC",
          country: "USA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          longitude: -122.414,
          latitude: 37.776,
          city: "San Franciso",
          province: "CA",
          country: "USA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          longitude: -74.006,
          latitude: 40.7128,
          city: "New York",
          province: "NY",
          country: "USA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          longitude: 12.4964,
          latitude: 41.9028,
          city: "Rome",
          province: "Provincia di Roma",
          country: "Italy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          longitude: -0.1278,
          latitude: 51.5074,
          city: "London",
          province: "England",
          country: "UK",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          longitude: 2.1734,
          latitude: 41.3851,
          city: "Barcelona",
          province: "Catalonia",
          country: "Spain",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          longitude: -79.3832,
          latitude: 43.6532,
          city: "Toronto",
          province: "ON",
          country: "Canada",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Locations", null, {});
  },
};
