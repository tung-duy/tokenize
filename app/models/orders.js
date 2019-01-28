"use strict";
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define(
    "orders",
    {
      customer_id: DataTypes.INTEGER,
      status: DataTypes.STRING,
      session: DataTypes.STRING,
      total: DataTypes.INTEGER,
      name: DataTypes.STRING,
      add: DataTypes.STRING,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      email: DataTypes.STRING
    },
    {}
  );
  orders.associate = function(models) {
    // associations can be defined here
    orders.hasMany(models.itemOder, { foreignKey: "order_id" });
  };
  return orders;
};
