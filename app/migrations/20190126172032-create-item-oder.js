"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("itemOders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      order_id: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint("itemOders", ["order_id"], {
      type: "foreign key",
      name: "fk_orderItem_order_order_id",
      references: {
        table: "orders",
        field: "id"
      }
    });
    await queryInterface.addConstraint("itemOders", ["product_id"], {
      type: "foreign key",
      name: "fk_orderItem_Products_product_id",
      references: {
        table: "products",
        field: "id"
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("itemOders");
  }
};
