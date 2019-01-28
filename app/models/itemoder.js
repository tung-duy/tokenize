"use strict";
module.exports = (sequelize, DataTypes) => {
  const itemOder = sequelize.define(
    "itemOder",
    {
      quantity: DataTypes.INTEGER,
      order_id: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER
    },
    {}
  );
  itemOder.associate = function(models) {
    // associations can be defined here
    itemOder.belongsTo(models.products, { foreignKey: "product_id" });
    itemOder.belongsTo(models.orders, { foreignKey: "order_id" });
  };
  return itemOder;
};
