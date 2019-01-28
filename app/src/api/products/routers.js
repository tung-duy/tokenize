const express = require("express");
const router = express.Router();
const passport = require("passport");
const Controllers = require("./Controllers");

router.get("/", Controllers.getAllProducts);

module.exports = router;
