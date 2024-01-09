'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('parametros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      espessura: {
        type: Sequelize.DECIMAL(8,2)
      },
      potencia: {
        type: Sequelize.DECIMAL(8,2)
      },
      tempo: {
        type: Sequelize.DECIMAL(8,2)
      },
      pressao: {
        type: Sequelize.DECIMAL(8,2)
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('parametros');
  }
};