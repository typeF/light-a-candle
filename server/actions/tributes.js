const { Tribute } = require("../sequelize");
class FakeDb {
  constructor() {
    this.data = [
      {
        id: 1,
        img:
          "https://vignette.wikia.nocookie.net/spongebob/images/c/c2/GreenDoctor.png",
        name: "Shane Fisher",
        title: "Nurse",
        workplace: "Bellevue Hospital Center",
        city: "New York",
        province: "NY",
        country: "USA",
        dob: new Date("December 1, 1980"),
        dod: "2020/03/10",
        date_died: Date.now() - 10 * 86400000,
        tribute:
          " Curabitur neque tortor, tempor lobortis accumsan at, malesuada vel mauris. Vestibulum nec condimentum ipsum. Maecenas ut metus sodales, feugiat lectus quis, lacinia urna. Fusce viverra varius condimentum. Nunc nec magna gravida urna luctus pulvinar vel ut nisi. Sed commodo pellentesque odio et cursus. Duis magna magna, lobortis sed ligula in, mollis luctus justo."
      },
      {
        name: "Wendy Watson",
        occupation: "Doctor",
        img: `https://randomuser.me/api/portraits/thumb/men/${1}.jpg`,
        date_died: Date.now() - 10 * 86400000
      },
      {
        name: "Dustin Watson",
        occupation: "Doctor",
        img: `https://randomuser.me/api/portraits/thumb/men/${2}.jpg`,
        date_died: Date.now() - 13 * 86400000
      },
      {
        name: "Shane Fisher",
        occupation: "Nurse",
        img: `https://randomuser.me/api/portraits/thumb/men/${3}.jpg`,
        date_died: Date.now() - 25 * 86400000
      }
    ];

    this.tributes = [];
  }

  getTributesInLocation(searchParams) {
    return this.data;
  }

  saveData(tribute) {
    this.tributes.push(tribute);
  }
}

const fakeDb = new FakeDb();

module.exports = {
  async getTribute(tributeId) {
    const tribute = await fakeDb.data;
    return tribute[0];
  },

  async getTributesForLocation(searchParams) {
    const realTributes = await Tribute.findAll();
    console.log(JSON.stringify(realTributes));
    const tribute = await fakeDb.getTributesInLocation(searchParams);
    return tribute;
  },

  async saveTribute(data) {
    console.log("Saving tribute...");
    console.log(data);
    await fakeDb.saveData(data);
  }
};
