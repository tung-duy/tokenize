const passport = require("passport");
const Models = require("../../../models");
const key = require("../../../lib/config");

module.exports = {
  getAllProducts: async (req, res, next) => {
    const errors = {};
    const products = await Models.products.findAll({
      order: [["createdAt", "DESC"]],
      limit: 12,
      offset: 0,
      raw: true
    });
    if (products.length <= 0) {
      errors.message = "Product not found";
      errors.ERROR_CODE = "NOT_FOUND";
      return res.json(errors);
    }
    return res.json({ products });
  }
};
