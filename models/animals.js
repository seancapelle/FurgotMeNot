'use strict';
module.exports = function(sequelize, DataTypes) {
  var Animals = sequelize.define('Animals', {
    age: DataTypes.INTEGER,
    routeName: DataTypes.STRING,
    animals_name: DataTypes.STRING,
    type_id: DataTypes.INTEGER,
    breed_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER,
    adopted: DataTypes.BOOLEAN,
    shots: DataTypes.BOOLEAN,
    fixed: DataTypes.BOOLEAN,
    kid_friendly: DataTypes.BOOLEAN,
    cat_friendly: DataTypes.BOOLEAN,
    dog_friendly: DataTypes.BOOLEAN,
    food_aggressive: DataTypes.BOOLEAN,
    house_trained: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Animals;
};