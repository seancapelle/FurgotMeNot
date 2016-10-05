'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    users_name: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING,
    location: DataTypes.STRING,
    phone: DataTypes.STRING,
    email_address: DataTypes.STRING,
    zipcode: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Users;
};