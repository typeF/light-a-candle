class FakeDb {
  constructor() {
    this.data = {
      id: 1,
      img: "https://vignette.wikia.nocookie.net/spongebob/images/c/c2/GreenDoctor.png",
      name: "Shane Fisher",
      title: "Nurse",
      workplace: "Bellevue Hospital Center",
      city: "New York",
      province: "NY",
      country: "USA",
      dob: "1970/01/02",
      dod: "2020/03/10",
      tribute:
        " Curabitur neque tortor, tempor lobortis accumsan at, malesuada vel mauris. Vestibulum nec condimentum ipsum. Maecenas ut metus sodales, feugiat lectus quis, lacinia urna. Fusce viverra varius condimentum. Nunc nec magna gravida urna luctus pulvinar vel ut nisi. Sed commodo pellentesque odio et cursus. Duis magna magna, lobortis sed ligula in, mollis luctus justo.",
    };

    this.tributes = [];
  }

  saveData(tribute) {
    this.tributes.push(tribute);
  }
}

const fakeDb = new FakeDb();

module.exports = {
  async getTribute(tributeId) {
    const tribute = await fakeDb.data;
    return tribute;
  },

  async saveTribute(data) {
    await fakeDb.saveData(data);
  },
};
