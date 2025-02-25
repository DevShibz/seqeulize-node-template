'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'password', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('Users', 'profile_picture_url', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('Users', 'gender', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('Users', 'dob', {
      type: Sequelize.DATEONLY
    });
    await queryInterface.addColumn('Users', 'contact_no', {
      type: Sequelize.STRING
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'password');
    await queryInterface.removeColumn('Users', 'profile_picture_url');
    await queryInterface.removeColumn('Users', 'gender');
    await queryInterface.removeColumn('Users', 'dob');
    await queryInterface.removeColumn('Users', 'contact_no');
  }
};