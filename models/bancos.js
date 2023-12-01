'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bancos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bancos.init({
    idBanco: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      allowNull: false
    },
    banco: {
      type: DataTypes.STRING(70),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Bancos',
    freezeTableName: true,
    timestamps: false
  });
  return Bancos;
};