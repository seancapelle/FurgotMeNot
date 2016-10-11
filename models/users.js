'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('users', {
    users_name: DataTypes.STRING,
    password: DataTypes.STRING,
    user_type: {
           type: DataTypes.CHAR,
           length: 1,
           allowNull: false
       },
    address: DataTypes.STRING,
    location: DataTypes.STRING,
    phone: DataTypes.STRING,
    email_address: DataTypes.STRING,
    zipcode: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        //Owner to Animals = one to many
        // associations can be defined here
        Users.hasMany(models.Animals, {
                  onDelete: "CASCADE",
                  hooks: true,
                  foreignKey: {
                      allowNull: false
                  }
              })
      }
    }
  });
  return Users;
};

// password_hash: {
//            type: DataTypes.CHAR,
//            length: 60,
//            allowNull: false
//        },

