const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  // let my cookie be (or not be) here
  let mc = req.cookies._mc;
  // if not make it
  if (!mc) {
    // crude id gen for now
    let id =
      Math.random()
        .toString(36)
        .substr(2) + new Date().getTime().toString();

    res.cookie("_mc", id, { maxAge: 1000 * 60 * 60, httpOnly: true });

    req.cookies._mc = id;
  }

  return next();
};
