"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Candles",
      [
        {
          id: 1,
          name: "Kate",
          message: "Thank you so much! <3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Frank",
          message: "You will all be forever missed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Benard",
          message: "Thank you for saving my family. You are all heroes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Jackson",
          message: "Difficult time needs people of you!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "Juan",
          message: "Muchas gracias!!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: "Matsumoto",
          message: "どうもありがとうございます",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: "Pierre",
          message: "merci beaucoup, mes héros",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          name: "Vladimir",
          message: "спасибо большое, мои герои",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          name: "Mariana",
          message: "muito obrigado, meus heróis",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          name: "Marco",
          message: "Grazie mille, miei eroi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          name: "Nanshan",
          message: "谢谢你们!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          name: "Elias",
          message: "Danke euch allen!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Candles", null, {});
  },
};
