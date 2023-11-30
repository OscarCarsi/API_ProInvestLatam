'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inversionistas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Inversionistas.init({
    idInversionista: {
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
    apellidoPaterno: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    apellidoMaterno: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    correoElectronico: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    telefonoCelular: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    fechaNacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rfc: {
      type: DataTypes.STRING(13),
      allowNull: false,
    },
    calle: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    colonia: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    codigoPostal: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    municipio: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    numeroExterior: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    numeroInterior: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'Inversionistas',
  });
  return Inversionistas;
};