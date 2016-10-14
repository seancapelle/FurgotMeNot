'use strict';
module.exports = function(sequelize, DataTypes) {
  var Genus = sequelize.define('Genus', {
    Genus_id: DataTypes.INTEGER,
    species: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Genus;
};