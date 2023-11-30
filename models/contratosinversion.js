'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContratosInversion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ContratosInversion.init({
    direccionIp: DataTypes.STRING,
    contrato: DataTypes.TEXT,
    idInversionista: DataTypes.INTEGER,
    idTipo: DataTypes.INTEGER,
    idOrigen: DataTypes.INTEGER,
    folioInversion: DataTypes.STRING,
    fecha: DataTypes.DATE,
    importe: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'ContratosInversion',
  });
  return ContratosInversion;
};