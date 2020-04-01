const Sequelize = require("sequelize");
const CandleModel = require("./models/candle");
const LocationModel = require("./models/location");
const TributeModel = require("./models/tribute");

const sequelize = new Sequelize(
  "postgres://postgres:123@localhost:5432/candle"
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Established connection with database");
  })
  .catch(err => {
    console.error(`Error with connection: ${err}`);
  });

const Candle = CandleModel(sequelize, Sequelize);
const Location = LocationModel(sequelize, Sequelize);
const Tribute = TributeModel(sequelize, Sequelize);

module.exports = {
  Candle,
  Location,
  Tribute
};
