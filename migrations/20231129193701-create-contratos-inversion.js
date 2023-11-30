'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ContratosInversions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      direccionIp: {
        type: Sequelize.STRING
      },
      contrato: {
        type: Sequelize.TEXT
      },
      idInversionista: {
        type: Sequelize.INTEGER
      },
      idTipo: {
        type: Sequelize.INTEGER
      },
      idOrigen: {
        type: Sequelize.INTEGER
      },
      folioInversion: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
      },
      importe: {
        type: Sequelize.DECIMAL
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
    await queryInterface.dropTable('ContratosInversions');
  }
};