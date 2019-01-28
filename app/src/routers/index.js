const express = require("express");
const router = express.Router();
const routerApi = require("../api");
const authController = require("../api/Auth/Controllers");

router.use("/api/products", routerApi.productRouters);
router.use("/api/carts", routerApi.cartRouters);

router.post("/login", authController.Login);

module.exports = router;
