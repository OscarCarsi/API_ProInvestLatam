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
    direccionIp: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    contrato: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    idInversionista: {
      type:DataTypes.INTEGER, 
      allowNull: false,
      references: {
        model: 'Inversionistas',
        key: 'idInversionista',
        as: 'idInversionista',
        update: 'CASCADE'
      }
    },
    idTipo: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TiposInversion',
        key: 'idTipo',
        as: 'idTipo',
        update: 'CASCADE'
      },
    },
    idOrigen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'OrigenesInversion',
        key: 'idOrigen',
        as: 'idOrigen',
        update: 'CASCADE'
      }
    },
    folioInversion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    importe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'ContratosInversion',
  });
  return ContratosInversion;
};