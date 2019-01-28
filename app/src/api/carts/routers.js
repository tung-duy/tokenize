const express = require("express");
const router = express.Router();
// const passport = require("passport");
const Controllers = require("./Controllers");

router.post("/", Controllers.addCart);
router.put("/:id", Controllers.updateCart);
router.delete("/:id", Controllers.destroy);
router.get("/", Controllers.getCart);
router.post("/checkout", Controllers.checkout);
module.exports = router;
