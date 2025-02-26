'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Layout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Layout.init({
    order: DataTypes.INTEGER,
    banner_id: DataTypes.INTEGER,
    show: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Layout',
  });
  return Layout;
};