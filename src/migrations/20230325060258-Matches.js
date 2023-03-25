'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('matches', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      hour: {
        type: Sequelize.TIME,
        allowNull: false
      },
      pointsTeam1: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      pointsTeam2: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      teamId1: {
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      teamId2: {
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('matches');
  }
};
