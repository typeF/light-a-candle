'use strict';
module.exports = (sequelize, DataTypes) => {
  const Candle = sequelize.define('Candle', {
    name: DataTypes.STRING,
    message: DataTypes.STRING
  }, {});
  Candle.associate = function(models) {
    // associations can be defined here
  };
  return Candle;
};