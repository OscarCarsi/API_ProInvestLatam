'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Inversionistas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idInversionista: {
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellidoPaterno: {
        type: Sequelize.STRING
      },
      apellidoMaterno: {
        type: Sequelize.STRING
      },
      correoElectronico: {
        type: Sequelize.STRING
      },
      telefonoCelular: {
        type: Sequelize.STRING
      },
      fechaNacimiento: {
        type: Sequelize.DATE
      },
      rfc: {
        type: Sequelize.STRING
      },
      calle: {
        type: Sequelize.STRING
      },
      colonia: {
        type: Sequelize.STRING
      },
      codigoPostal: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      municipio: {
        type: Sequelize.STRING
      },
      numeroExterior: {
        type: Sequelize.INTEGER
      },
      numeroInterior: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Inversionistas');
  }
};