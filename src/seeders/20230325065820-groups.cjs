'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('groups', [
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
      { id: 3, name: 'C' },
      { id: 4, name: 'D' },
      { id: 5, name: 'E' },
      { id: 6, name: 'F' },
      { id: 7, name: 'G' },
      { id: 8, name: 'H' },
      { id: 9, name: 'I' },
      { id: 10, name: 'J' },
      { id: 11, name: 'K' },
      { id: 12, name: 'L' }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('groups', null, {});
  }
};
