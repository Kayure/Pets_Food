'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tamanhoRefeicao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tamanhoRefeicao.init({
    tamanho: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tamanhoRefeicao',
  });
  return tamanhoRefeicao;
};