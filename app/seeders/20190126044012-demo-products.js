"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Product name 1",
          image: "product-image.png",
          price: 800000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Product name 2",
          image: "product-image-2.png",
          price: 800000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Product name 3",
          image: "product-image-3.png",
          price: 599000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Product name 4",
          image: "product-image-4.png",
          price: 290000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Product name 5",
          image: "product-image-5.png",
          price: 1999000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Product name 6",
          image: "product-image-6.png",
          price: 6880000,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  }
};
