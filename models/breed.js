'use strict';
module.exports = function(sequelize, DataTypes) {
  var breed = sequelize.define('breed', {

    breed_name: DataTypes.STRING,
    

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return breed;
};
