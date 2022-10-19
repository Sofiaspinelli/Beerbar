'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products.belongsTo(models.categories,{
        as: 'category',
        foreignKey: 'categoria_id'
      }),
      products.belongsTo(models.types,{
        as: 'tipos',
        foreignKey: 'type_id'
      }),
      products.hasMany(models.images,{
        as: 'imagenes',
        foreignKey: 'products_id',
        onDelete:'cascade'
      })
      products.hasMany(models.carts,{
        as: 'carritoProducts',
        foreignKey: 'products_id',
      })
    }
  }
  products.init({
    nombre: DataTypes.STRING,
    marca: DataTypes.STRING,
    type_id: DataTypes.INTEGER,
    detalle: DataTypes.STRING,
    categoria_id: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    descuento: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    vendidos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products',
    timestamps: true
  });
  return products;
};