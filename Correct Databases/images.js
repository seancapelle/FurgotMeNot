'use strict';
module.exports = function(sequelize, DataTypes) {
  var Images = sequelize.define('Images', {
    image_id: DataTypes.BLOB,
    pet_id: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Images;
};
