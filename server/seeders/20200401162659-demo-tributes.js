"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tributes",
      [
        {
          id: 1,
          locationId: 1,
          firstName: "Shane",
          lastName: "Fisher",
          occupation: "Nurse",
          workplace: "VGH",
          dob: new Date("December 1, 1980"),
          dod: new Date("March 4, 2020"),
          img:
            "data:image/jpeg;base64,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",
          tribute:
            " Curabitur neque tortor, tempor lobortis accumsan at, malesuada vel mauris. Vestibulum nec condimentum ipsum. Maecenas ut metus sodales, feugiat lectus quis, lacinia urna. Fusce viverra varius condimentum. Nunc nec magna gravida urna luctus pulvinar vel ut nisi. Sed commodo pellentesque odio et cursus. Duis magna magna, lobortis sed ligula in, mollis luctus justo.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          locationId: 2,
          firstName: "Wendy",
          lastName: "Watson",
          occupation: "Doctor",
          workplace: "Bellevue Hospital Center",
          img:
            "data:image/jpeg;base64,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",
          dob: new Date("December 1, 1980"),
          dod: new Date("March 5, 2020"),
          img: "",
          tribute:
            " Curabitur neque tortor, tempor lobortis accumsan at, malesuada vel mauris. Vestibulum nec condimentum ipsum. Maecenas ut metus sodales, feugiat lectus quis, lacinia urna. Fusce viverra varius condimentum. Nunc nec magna gravida urna luctus pulvinar vel ut nisi. Sed commodo pellentesque odio et cursus. Duis magna magna, lobortis sed ligula in, mollis luctus justo.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          locationId: 2,
          firstName: "Dustin",
          lastName: "Watson",
          occupation: "Doctor",
          workplace: "UCSF Medical Center",
          img: "",
          dob: new Date("December 1, 1980"),
          dod: new Date("March 17, 2020"),
          tribute:
            "When we lost Dustin, it felt so senseless — like they had gotten the wrong guy. He was the kind of doctor the health care system needs more of. After Dustin gave so much to his patients throughout his career, he wasn't even able to retire and spend more time with his family. He sacrificed himself for the greater cause.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          locationId: 3,
          firstName: "Jack",
          lastName: "Howard",
          occupation: "Nurse",
          workplace: "The Mount Sinai Hospital",
          img: "",
          dob: new Date("December 1, 1980"),
          dod: new Date("March 28, 2020"),
          tribute:
            "When we lost Jack, it felt so senseless — like they had gotten the wrong guy. He was the kind of nurse the health care system needs more of. After Jack gave so much to his patients throughout his career, he wasn't even able to retire and spend more time with his family. He sacrificed himself for the greater cause.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          locationId: 3,
          firstName: "Jenny",
          lastName: "Murphy",
          occupation: "Nurse",
          workplace: "The Mount Sinai Hospital",
          img: "",
          dob: new Date("December 1, 1984"),
          dod: new Date("March 29, 2020"),
          tribute:
            "When we lost Jenny, it felt so senseless — like they had gotten the wrong person. She was the kind of nurse the health care system needs more of. After Jenny gave so much to her patients throughout her career, she wasn't even able to retire and spend more time with her family. She sacrificed herself for the greater cause.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          locationId: 4,
          firstName: "Angel",
          lastName: "Cooper",
          occupation: "Doctor",
          workplace: "The Central Hospital",
          img: "",
          dob: new Date("November 1, 1974"),
          dod: new Date("March 29, 2020"),
          tribute:
            "When we lost Angel, it felt so senseless — like they had gotten the wrong person. She was the kind of doctor the health care system needs more of. After Angel gave so much to her patients throughout her career, she wasn't even able to retire and spend more time with her family. She sacrificed herself for the greater cause.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          locationId: 5,
          firstName: "Shane",
          lastName: "Fischer",
          occupation: "Doctor",
          workplace: "The Coastal Hospital",
          img: "",
          dob: new Date("November 1, 1984"),
          dod: new Date("March 30, 2020"),
          tribute:
            "When we lost Shane, it felt so senseless — like they had gotten the wrong guy. He was the kind of doctor the health care system needs more of. After Shane gave so much to his patients throughout his career, he wasn't even able to retire and spend more time with his family. He sacrificed himself for the greater cause.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          locationId: 6,
          firstName: "Elaine",
          lastName: "Fischer",
          occupation: "Doctor",
          workplace: "The Church Hospital",
          img: "",
          dob: new Date("October 1, 1988"),
          dod: new Date("March 30, 2020"),
          tribute:
            "When we lost Elaine, it felt so senseless — like they had gotten the wrong person. She was the kind of doctor the health care system needs more of. After Elaine gave so much to her patients throughout her career, she wasn't even able to retire and spend more time with her family. She sacrificed herself for the greater cause.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          locationId: 7,
          firstName: "Marco",
          lastName: "Williamson",
          occupation: "Doctor",
          workplace: "General Hospital",
          img: "",
          dob: new Date("October 1, 1982"),
          dod: new Date("April 1, 2020"),
          tribute:
            "When we lost Marco, it felt so senseless — like they had gotten the wrong guy. He was the kind of doctor the health care system needs more of. After Marco gave so much to his patients throughout his career, he wasn't even able to retire and spend more time with his family. He sacrificed himself for the greater cause",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          locationId: 8,
          firstName: "Francesca",
          lastName: "Luca",
          occupation: "Doctor",
          workplace: "Napoli Hospital",
          img: "",
          dob: new Date("June 1, 1976"),
          dod: new Date("April 2, 2020"),
          tribute:
            "When we lost Francesca, it felt so senseless — like they had gotten the wrong person. She was the kind of doctor the health care system needs more of. After Francesca gave so much to her patients throughout her career, she wasn't even able to retire and spend more time with her family. She sacrificed herself for the greater cause.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tributes", null, {});
  },
};
