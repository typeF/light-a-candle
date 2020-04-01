class FakeDb {
  constructor() {
    this.data = [
      { id: 1, name: "Wendy", message: "Thank you!" },
      { id: 2, name: "Jack", message: "Keep it up!" },
      { id: 3, name: "Bob Shane", message: "You are all heroes!!!!" },
    ];
  }

  saveData(candle) {
    this.data.push(candle);
  }
}

const fakeDb = new FakeDb();

module.exports = {
  async getAllCandles() {
    const allCandles = await fakeDb.data;
    return allCandles;
  },

  async saveCandle(candle) {
    console.log("Saving candle...");
    console.log(candle);
    await fakeDb.saveData(candle);
  },
};
