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
      this.belongsTo(models.TiposInversion, { foreignKey: 'idTipo' });
      this.belongsTo(models.OrigenesInversion, { foreignKey: 'idOrigen' });
    }
  }
  ContratosInversion.init({
    direccionIp: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    contrato: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    idInversionista: {
      type:DataTypes.INTEGER, 
      allowNull: true,
      references: {
        model: 'Inversionistas',
        key: 'idInversionista',
        as: 'idInversionista',
        update: 'CASCADE'
      }
    },
    idTipo: {
      type:DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TiposInversion',
        key: 'idTipo',
        as: 'idTipo',
        update: 'CASCADE'
      },
    },
    idOrigen: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
      type: DataTypes.STRING,
      allowNull: true,
    },
    importe: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    plazoAnios: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ultimaActualizacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    smsVerificacion: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    correoVerificacion: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'ContratosInversion',
    freezeTableName: true,
    timestamps: false
  });
  return ContratosInversion;
};