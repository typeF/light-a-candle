"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Candles",
      [
        {
          id: 1,
          name: "Alexa",
          message: "Thank you so much !",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: "Frank",
          message: "You will all be forever missed",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: "Benard",
          message: "Thank you for saving my family. You are all heroes",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Candles", null, {});
  }
};
