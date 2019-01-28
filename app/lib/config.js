const path = require("path");
const __baseUrl = require("../server");

module.exports = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  VIEWS: path.join(__baseUrl, "templates"),
  VIEW_ENGINE: "ejs",
  SECRET_OR_KEY: "Tung Duy Developer"
};
