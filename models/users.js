'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    users_name: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address: DataTypes.INTEGER,
    location: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email_address: DataTypes.STRING,
    zipcode: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Users.hasMany(models.pets, {
                 onDelete: "CASCADE",
                 hooks: true,
                 foreignKey: {
                 allowNull: false
      }
    }
  });
  return Users;
};
