'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tribute = sequelize.define('Tribute', {
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    picture: DataTypes.TEXT,
    dob: DataTypes.DATE,
    dod: DataTypes.DATE,
    tribute: DataTypes.STRING,
    title: DataTypes.STRING,
    workplace: DataTypes.STRING,
    city: DataTypes.STRING,
    province: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  Tribute.associate = function(models) {
    // associations can be defined here
  };
  return Tribute;
};