'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Animals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      age: {
        type: Sequelize.INTEGER
      },
      routeName: {
        type: Sequelize.STRING
      },
      animals_name: {
        type: Sequelize.STRING
      },
      type_id: {
        type: Sequelize.INTEGER
      },
      breed_id: {
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
    return queryInterface.dropTable('Animals');
  }
};