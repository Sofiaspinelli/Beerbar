'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      carts.belongsTo(models.users,{
        as: 'carritoUsers',
        foreignKey: 'users_id',
      })
      carts.belongsTo(models.products,{
        as: 'carritoProducts',
        foreignKey: 'products_id',
      })
    }
  }
  carts.init({
    users_id: DataTypes.INTEGER,
    products_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'carts',
    timestamps: true
  });
  return carts;
};