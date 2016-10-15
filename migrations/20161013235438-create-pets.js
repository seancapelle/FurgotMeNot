'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      age: {
        type: Sequelize.INTEGER
      },
      pets_name: {
        type: Sequelize.STRING
      },
      genus: {
        type: Sequelize.INTEGER
      },
      breed: {
        type: Sequelize.INTEGER
      },
      users_id: {
        type: Sequelize.INTEGER
      },
      adopted: {
        type: Sequelize.BOOLEAN
      },
      shots: {
        type: Sequelize.BOOLEAN
      },
      fixed: {
        type: Sequelize.BOOLEAN
      },
      kid_friendly: {
        type: Sequelize.BOOLEAN
      },
      cat_friendly: {
        type: Sequelize.BOOLEAN
      },
      dog_friendly: {
        type: Sequelize.BOOLEAN
      },
      food_aggressive: {
        type: Sequelize.BOOLEAN
      },
      house_trained: {
        type: Sequelize.BOOLEAN
      },
      image_one: {
        type: Sequelize.BLOB
      },
      image_two: {
        type: Sequelize.BLOB
      },
      image_three: {
        type: Sequelize.BLOB
      },
      image_four: {
        type: Sequelize.BLOB
      },
      image_five: {
        type: Sequelize.BLOB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Pets');
  }
};