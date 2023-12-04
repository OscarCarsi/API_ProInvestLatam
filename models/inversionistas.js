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
    empresaTrabajo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    gradoAcademico: {
      type: DataTypes.STRING(13),
      allowNull: false,
    },
    calle: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50]
      },
      allowNull: true,
    },
    colonia: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50]
      },
      allowNull: true,
    },
    codigoPostal: {
      type: DataTypes.STRING,
      
      allowNull: true,
    },
    estado: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50]
      },
      allowNull: true,
    },
    municipio: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 50]
      }
    },
    numeroExterior: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    numeroInterior: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    profesion: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Inversionistas',
    freezeTableName: true,
    timestamps: false
  });
  return Inversionistas;
};