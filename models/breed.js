'use strict';
module.exports = function(sequelize, DataTypes) {
  var Breed = sequelize.define('Breed', {
    size: DataTypes.STRING,
    breed_name: DataTypes.STRING,
    genus_id: DataTypes.INTEGER,
    energy: DataTypes.STRING,
    group: DataTypes.STRING,
    characteristics: DataTypes.STRING,
    breed_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Breed.belongsTo(models.genus, {
        //           onDelete: "CASCADE",
        //           foreignKey: {
        //           allowNull: false
        //           }
        // })
      }
    }
  });
  return Breed;
};
