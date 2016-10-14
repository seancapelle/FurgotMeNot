'use strict';
module.exports = function(sequelize, DataTypes) {
  var Pets = sequelize.define('Pets', {
    age: DataTypes.INTEGER,
    pets_name: DataTypes.STRING,
    genus_id: DataTypes.INTEGER,
    breed_id: DataTypes.INTEGER,
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
        Pets.belongsTo(models.users, {
                  onDelete: "CASCADE",
                  foreignKey: {
                    allowNull: false
                  }
          })
      }
    }
  });
  return Pets;
};
