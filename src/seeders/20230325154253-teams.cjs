'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('teams', [
      { id: 1, groupId: 3},
      { id: 2, groupId: 1},
      { id: 3, groupId: 9},
      { id: 4, groupId: 4},
      { id: 5, groupId: 2},
      { id: 6, groupId: 9},
      { id: 7, groupId: 12},
      { id: 8, groupId: 2},
      { id: 9, groupId: 2},
      { id: 10, groupId: 1},
      { id: 11, groupId: 1},
      { id: 12, groupId: 8},
      { id: 13, groupId: 11},
      { id: 14, groupId: 11},
      { id: 15, groupId: 6},
      { id: 16, groupId: 5},
      { id: 17, groupId: 9},
      { id: 18, groupId: 3},
      { id: 19, groupId: 4},
      { id: 20, groupId: 5},
      { id: 21, groupId: 11},
      { id: 22, groupId: 8},
      { id: 23, groupId: 6},
      { id: 24, groupId: 4},
      { id: 25, groupId: 10},
      { id: 26, groupId: 8},
      { id: 27, groupId: 6},
      { id: 28, groupId: 5},
      { id: 29, groupId: 3},
      { id: 30, groupId: 10},
      { id: 31, groupId: 7},
      { id: 32, groupId: 12},
      { id: 33, groupId: 12},
      { id: 34, groupId: 7},
      { id: 35, groupId: 7},
      { id: 36, groupId: 10}
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('teams', null, {});
  }
};
