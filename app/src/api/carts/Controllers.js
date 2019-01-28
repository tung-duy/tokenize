const Sequelize = require("sequelize");
const passport = require("passport");
const Joi = require("joi");
const _ = require("lodash");

const Models = require("../../../models");
const sequelize = require("../../../lib/connect");
const Op = Sequelize.Op;

module.exports = {
  getCart: async (req, res, next) => {
    passport.authenticate("jwt", async function(err, user, info) {
      let cartInfo, customer_id;
      const token = req.cookies._mc;

      if (user) {
        customer_id = user.id;

        cartInfo = await Models.orders.findOne({
          where: { [Op.and]: [{ customer_id, status: "pending" }] },
          order: [["createdAt", "DESC"]]
        });
      } else {
        cartInfo = await Models.orders.findOne({
          where: { [Op.and]: [{ session: token, status: "pending" }] },
          order: [["createdAt", "DESC"]]
        });
      }

      if (!cartInfo) return res.json({ carts: [] });

      const cartItems = await Models.itemOder.findAll({
        where: { order_id: cartInfo.id },
        include: [{ model: Models.products }]
      });
      return res.json({ carts: cartItems });
    })(req, res, next);
  },
  addCart: async (req, res, next) => {
    const data = req.body;

    passport.authenticate("jwt", async function(err, user, info) {
      let customer_id, cartInfo;
      const token = req.cookies._mc;
      const product = await Models.products.findById(data.id);

      if (user) {
        customer_id = user.id;

        cartInfo = await Models.orders.findOne({
          where: { [Op.and]: [{ customer_id, status: "pending" }] },
          order: [["createdAt", "DESC"]]
        });
      } else {
        cartInfo = await Models.orders.findOne({
          where: { [Op.and]: [{ session: token, status: "pending" }] },
          order: [["createdAt", "DESC"]]
        });
      }
      let newOrderItems = {
        product_id: product.id,
        quantity: data.qty ? data.qty : 1,
        price: product.price
      };
      if (!cartInfo) {
        await sequelize.transaction(async t => {
          const newOrder = {
            customer_id,
            session: token,
            total: 0,
            status: "pending"
          };

          cartInfo = await Models.orders.create(newOrder, {
            transaction: t
          });
          newOrderItems["order_id"] = cartInfo.id;
          await Models.itemOder.create(newOrderItems);
        });
      } else {
        await sequelize.transaction(async t => {
          const order_item = await Models.itemOder.findOne({
            where: {
              [Op.and]: [{ product_id: product.id }, { order_id: cartInfo.id }]
            }
          });

          if (!order_item) {
            newOrderItems["order_id"] = cartInfo.id;
            await Models.itemOder.create(newOrderItems);
          } else {
            await order_item.update({
              quantity: order_item.quantity + (data.qty ? data.qty : 1)
            });
          }
        });
      }

      const cartItems = await Models.itemOder.findAll({
        where: { order_id: cartInfo.id },
        include: [{ model: Models.products }]
      });

      return res.json({
        message: "Sản phẩm đã được thêm vào giỏ hàng",
        carts: cartItems
      });
    })(req, res, next);
  },
  updateCart: (req, res, next) => {
    const { id } = req.params;
    const data = req.body;

    passport.authenticate("jwt", async function(err, user, info) {
      const order_item = await Models.itemOder.findById(id);
      if (!order_item)
        return res.json(
          { error: "Không tìm thấy sản phẩm trong giỏ hàng" },
          404
        );

      await order_item.update({
        quantity: data.qty
      });
      const cartItems = await Models.itemOder.findAll({
        where: { order_id: order_item.order_id },
        include: [{ model: Models.products }]
      });
      return res.json({
        message: "Cập nhật giỏ hàng thành công",
        carts: cartItems
      });
    })(req, res, next);
  },
  destroy: async (req, res, next) => {
    const { id } = req.params;

    passport.authenticate("jwt", async function(err, user, info) {
      const order_item = await Models.itemOder.findById(id);
      const { order_id } = order_item;

      await order_item.destroy();

      const cartItems = await Models.itemOder.findAll({
        where: { order_id },
        include: [{ model: Models.products }]
      });

      return res.json({
        message: "Xóa thành công",
        carts: cartItems
      });
    })(req, res, next);
  },
  checkout: async (req, res, next) => {
    passport.authenticate("jwt", async function(err, user, info) {
      const { id } = req.params;
      const errors = {};
      const token = req.cookies._mc;
      const { name, email, add, city, country, phone, total } = req.body;
      console.log("Console Log phoen: =================> ");
      console.log(phone);
      const schema = Joi.object().keys({
        name: Joi.string()
          .required()
          .label("Name")
          .error(errs => {
            return errs.map(err => {
              switch (err.type) {
                case "any.empty":
                  if (errors.name == null) {
                    errors.name = `${err.context.label} không được để trống`;
                  }
                  return errors;
                case "any.required":
                  if (errors.name == null) {
                    errors.name = `${err.context.label} không được để trống`;
                  }
                  return errors;
              }
            });
          }),
        add: Joi.string()
          .required()
          .label("Address")
          .error(errs => {
            return errs.map(err => {
              switch (err.type) {
                case "any.empty":
                  if (errors.add == null) {
                    errors.add = `${err.context.label} không được để trống`;
                  }
                  return errors;
                case "any.required":
                  if (errors.add == null) {
                    errors.add = `${err.context.label} không được để trống`;
                  }
                  return errors;
              }
            });
          }),
        city: Joi.string()
          .required()
          .label("City")
          .error(errs => {
            return errs.map(err => {
              switch (err.type) {
                case "any.empty":
                  if (errors.city == null) {
                    errors.city = `${err.context.label} không được để trống`;
                  }
                  return errors;
                case "any.required":
                  if (errors.city == null) {
                    errors.city = `${err.context.label} không được để trống`;
                  }
                  return errors;
              }
            });
          }),
        email: Joi.string()
          .email({ minDomainAtoms: 2 })
          .label("Email")
          .required()
          .error(errs => {
            return errs.map(err => {
              switch (err.type) {
                case "string.email":
                  if (errors.email == null) {
                    errors.email = `${err.context.label} không hợp lệ`;
                  }
                  return errors;
                case "any.required":
                  if (errors.email == null) {
                    errors.email = `${err.context.label} không được để trống`;
                  }
                  return errors;
                case "any.empty":
                  if (errors.email == null) {
                    errors.email = `${err.context.label} không được để trống`;
                  }
                  return errors;
              }
            });
          }),
        phone: Joi.string()
          .regex(
            /^0(32|33|34|35|36|37|38|39|56|58|59|70|76|77|78|79|81|82|83|84|85|86|88|89|90|91|92|93|94|96|97|98|99)[0-9]{7}$/
          )
          .required()
          .label("Phone number")
          .error(errs => {
            return errs.map(err => {
              console.log("Console Log err.type: =================> ");
              console.log(err.type);
              switch (err.type) {
                case "any.empty":
                  if (errors.phone == null) {
                    errors.phone = `${err.context.label} không được để trống`;
                  }
                  return errors;
                case "any.required":
                  if (errors.phone == null) {
                    errors.phone = `${err.context.label} không được để trống`;
                  }
                  return errors;
                case "string.regex.base":
                  if (errors.phone == null) {
                    errors.phone = `${err.context.label} không hợp lệ`;
                  }
                  return errors;
              }
            });
          })
      });

      const result = Joi.validate({ email, name, add, city, phone }, schema, {
        abortEarly: false
      });

      if (result.error != null) {
        return res.status(400).json(errors);
      }
      if (user) {
        customer_id = user.id;

        cartInfo = await Models.orders.findOne({
          where: { [Op.and]: [{ customer_id, status: "pending" }] },
          include: [
            {
              model: Models.itemOder,
              include: [{ model: Models.products }]
            }
          ],
          order: [["createdAt", "DESC"]]
        });
      } else {
        cartInfo = await Models.orders.findOne({
          where: { [Op.and]: [{ session: token, status: "pending" }] },
          order: [["createdAt", "DESC"]],
          include: [
            {
              model: Models.itemOder,
              include: [{ model: Models.products }]
            }
          ]
        });
      }
      if (!cartInfo) {
        errors.message = "Order does not exist";
        errors.ERROR_CODE = "NOT_FOUND";
        return res.status(400).json(errors);
      }
      const orderUpdate = {
        name,
        email,
        add,
        city,
        country,
        phone,
        status: "done",
        total
      };
      await cartInfo.update(orderUpdate);

      return res.json({ message: "Đặt hàng thành công", cartInfo });
    })(req, res, next);
  }
};
