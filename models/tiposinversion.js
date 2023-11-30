'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TiposInversion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TiposInversion.init({
    idTipo: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      unique: true, 
      autoIncrement: true, 
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT(200),
      allowNull: false,
    },
    rendimiento: {
      type: DataTypes.DECIMAL, 
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'TiposInversion',
  });
  return TiposInversion;
};