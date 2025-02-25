'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'product_type');
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('Products', 'product_type', {
      type: Sequelize.STRING,
      allowNull: true
    });
  }
}; 