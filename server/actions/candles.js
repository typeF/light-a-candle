const { Candle } = require("../sequelize");

module.exports = {
  async getAllCandles() {
    try {
      const candles = await Candle.findAll({ limit: 200 });
      return candles;
    } catch (err) {
      console.err(`Error fetching candles: ${err}`);
    }
  },

  async saveCandle(candleData) {
    if (!candleData.name || !candleData.message) {
      console.log("Candle is missing fields!");
      return;
    }
    try {
      const candle = await Candle.create(candleData);
      return candle;
      console.log(`Saved candle: ${JSON.stringify(candle)}`);
    } catch (err) {
      console.log(`Error fetching candles: ${err}`);
    }
  },
};
