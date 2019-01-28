module.exports = __baseUrl = __dirname;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
var cookieParser = require("cookie-parser");

const config = require("./lib/config");
const routers = require("./src/routers");
const checkSession = require("./lib/middleware");

// Setting express static file
app.use(express.static("public"));

// Setting view engine ejs
app.set("views", config.VIEWS);
app.set("view engine", config.VIEW_ENGINE);

//CORS
// app.use(
//   cors({
//     origin: "*"
//   })
// );

app.use(function(req, res, next) {
  res.setHeader(
    "Access-Control-Expose-Headers",
    "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Origin", "http://tungduy.com");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  return next();
});
// Setting body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());

app.use(checkSession);
// require routers
app.use("/", routers);

// Passport initialize
app.use(passport.initialize());
// Passport config
require("./lib/passport")(passport);

// Test connection
// const sequelize = require("./lib/connect");
app.listen(config.PORT, () => {
  console.log("Server running on port " + config.PORT);
});
