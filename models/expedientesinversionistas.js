'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExpedientesInversionistas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ExpedientesInversionistas.init({
    idInversionista: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Inversionistas',
        key: 'idInversionista',
        as: 'idInversionista',
        update: 'CASCADE', 
      },
      primaryKey: true
    },
    enlaceBucket: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    idDocumento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'DocumentosExpedienteInversionista',
        key: 'idDocumento',
        as: 'idDocumento',
        update: 'CASCADE', 
      },
      primaryKey: true
    },
    nombreArchivo: {
      type: DataTypes.STRING(70),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'ExpedientesInversionistas',
    freezeTableName: true,
    timestamps: false
  });
  return ExpedientesInversionistas;
};