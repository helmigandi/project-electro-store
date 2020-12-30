'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerGadget extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CustomerGadget.init({
    GadgetId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    description: DataTypes.STRING,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CustomerGadget',
  });
  return CustomerGadget;
};