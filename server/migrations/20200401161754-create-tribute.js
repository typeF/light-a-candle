"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Tributes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      locationId: {
        references: {
          model: {
            tableName: "Locations"
          },
          key: "id"
        },
        type: Sequelize.INTEGER,
        allowNull: false
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      middleName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      img: {
        type: Sequelize.TEXT
      },
      dob: {
        type: Sequelize.DATE,
        allowNull: false
      },
      dod: {
        type: Sequelize.DATE,
        allowNull: false
      },
      tribute: {
        type: Sequelize.STRING(3000),
        allowNull: false
      },
      occupation: {
        type: Sequelize.STRING,
        allowNull: false
      },
      workplace: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Tributes");
  }
};
