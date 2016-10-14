'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Breeds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      size: {
        type: Sequelize.
      },
      breed_name: {
        type: Sequelize.STRING
      },
      genus_id: {
        type: Sequelize.INTEGER
      },
      energy: {
        type: Sequelize.STRING
      },
      group: {
        type: Sequelize.STRING
      },
      characteristics: {
        type: Sequelize.STRING
      },
      breed_id: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Breeds');
  }
};