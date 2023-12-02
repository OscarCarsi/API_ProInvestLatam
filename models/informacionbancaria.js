'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InformacionBancaria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InformacionBancaria.init({
    folioInversion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ContratosInversion',
        key: 'folioInversion',
        as: 'folioInversion',
        update: 'CASCADE'
      },
      primaryKey: true,
    },
    clabeInterbancaria: {
      type: DataTypes.STRING(18),
      allowNull: false,
    },
    cuenta: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    idBanco: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Bancos',
        key: 'idBanco',
        as: 'idBanco',
        update: 'CASCADE'
      }
    }
  }, {
    sequelize,
    modelName: 'InformacionBancaria',
    freezeTableName: true,
    timestamps: false
  });
  return InformacionBancaria;
};