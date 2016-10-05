'use strict';
module.exports = function(sequelize, DataTypes) {
  var adoptions = sequelize.define('adoptions', {
    routeName: DataTypes.STRING,
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address:DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users;
};
