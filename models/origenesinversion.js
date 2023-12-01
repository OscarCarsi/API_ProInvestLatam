'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrigenesInversion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ContratosInversion, { foreignKey: 'idOrigen' });
    }
  }
  OrigenesInversion.init({
    idOrigen: {
      type:DataTypes.INTEGER, 
      primaryKey: true, 
      unique: true, 
      autoIncrement: true, 
      allowNull: false
    },
    nombreOrigen: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'OrigenesInversion',
    freezeTableName: true,
    timestamps: false
  });
  return OrigenesInversion;
};