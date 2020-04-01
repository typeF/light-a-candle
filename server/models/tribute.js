"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tribute = sequelize.define(
    "Tribute",
    {
      firstName: DataTypes.STRING,
      middleName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      img: DataTypes.TEXT,
      dob: DataTypes.DATE,
      dod: DataTypes.DATE,
      tribute: DataTypes.STRING(3000),
      occupation: DataTypes.STRING,
      workplace: DataTypes.STRING
    },
    {}
  );
  Tribute.associate = function (models) {
    Tribute.belongsTo(models.Location);
  };
  return Tribute;
};
