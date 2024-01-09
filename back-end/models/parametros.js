'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class parametros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  parametros.init({
    espessura: DataTypes.DECIMAL(8,2),
    potencia: DataTypes.DECIMAL(8,2),
    tempo: DataTypes.DECIMAL(8,2),
    pressao: DataTypes.DECIMAL(8,2)
  }, {
    sequelize,
    modelName: 'parametros',
  });
  return parametros;
};