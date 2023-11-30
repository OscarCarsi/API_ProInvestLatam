'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CredencialesAdministrador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CredencialesAdministrador.init({
    usuario: DataTypes.STRING,
    contrasena: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CredencialesAdministrador',
  });
  return CredencialesAdministrador;
};