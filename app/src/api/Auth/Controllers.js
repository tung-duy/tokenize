const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Sequelize = require("sequelize");

const Op = Sequelize.Op;
const Models = require("../../../models");
const key = require("../../../lib/config");

module.exports = {
  Login: async (req, res) => {
    const errors = {};
    const sessionID = req.cookies._mc;
    const { email, password } = req.body;
    const schema = Joi.object().keys({
      email: Joi.string()
        .email({ minDomainAtoms: 2 })
        .label("Email")
        .error(errs => {
          return errs.map(err => {
            switch (err.type) {
              case "string.email":
                if (errors.email == null) {
                  errors.email = `${err.context.label} không hợp lệ`;
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
      password: Joi.string()
        .min(3)
        .max(12)
        .label("Mật khẩu")
        .error(errs => {
          return errs.map(err => {
            switch (err.type) {
              case "string.max":
                if (errors.password == null) {
                  errors.password = `${
                    err.context.label
                  } không được vượt quá 12 ký tự`;
                }
                return errors;
              case "any.empty":
                if (errors.password == null) {
                  errors.password = `${err.context.label} không được để trống`;
                }
                return errors;
              case "string.min":
                if (errors.password == null) {
                  errors.password = `${
                    err.context.label
                  } không được ít hơn 6 ký tự`;
                }
                return errors;
            }
          });
        })
    });

    const result = Joi.validate({ email, password }, schema, {
      abortEarly: false
    });

    if (result.error != null) {
      return res.status(400).json(errors);
    }

    const user = await Models.Users.findOne({ where: { email }, raw: true });

    if (user == null) {
      errors.email = "User does not exist!";
      errors.status = false;
      return res.status(401).json(errors);
    }
    const mk = bcrypt.compareSync(password, user.password);
    if (!mk) {
      errors.password = "Password is incorrect!";
      errors.status = false;
      return res.status(401).json(errors);
    }

    const payload = {
      id: user.id,
      email: user.email
    };
    const cartInfoSession = await Models.orders.findOne({
      where: { [Op.and]: [{ session: sessionID }, { status: "pending" }] },
      include: [
        {
          model: Models.itemOder
        }
      ],
      order: [["createdAt", "DESC"]]
    });
    const cartInfoUser = await Models.orders.findOne({
      where: { [Op.and]: [{ customer_id: user.id }, { status: "pending" }] },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Models.itemOder
        }
      ]
    });
    if (cartInfoUser && cartInfoSession) {
      cartInfoSession.itemOders.map(s_item => {
        cartInfoUser.itemOders.map(u_item => {
          if (s_item.product_id === u_item.product_id) {
            u_item.update({
              quantity: u_item.quantity + s_item.quantity
            });
            s_item.destroy();
            return;
          }
        });
        if (s_item) {
          s_item.update({
            order_id: cartInfoUser.id
          });
        }
      });

      cartInfoSession.destroy();
    }

    if (!cartInfoUser && cartInfoSession) {
      cartInfoSession.update({
        customer_id: user.id
      });
    }
    return jwt.sign(
      payload,
      key.SECRET_OR_KEY,
      { expiresIn: 60 * 60 },
      (err, token) => {
        return res.json({
          success: true,
          token: "Bearer " + token
        });
      }
    );
  }
};
