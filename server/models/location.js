"use strict";
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    "Location",
    {
      longitude: DataTypes.FLOAT,
      latitude: DataTypes.FLOAT,
      city: DataTypes.STRING,
      province: DataTypes.STRING,
      country: DataTypes.STRING
    },
    {}
  );
  Location.associate = function (models) {
    Location.hasMany(models.Tribute);
  };
  return Location;
};
