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
    folioInversion: DataTypes.STRING,
    clabeInterbancaria: DataTypes.STRING,
    cuenta: DataTypes.STRING,
    idBanco: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'InformacionBancaria',
  });
  return InformacionBancaria;
};