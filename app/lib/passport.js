const Jwtstrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt,
  Key = require("./config").SECRET_OR_KEY,
  Models = require("../models");
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = Key;

module.exports = passport => {
  passport.use(
    new Jwtstrategy(opts, async (jwt_payload, done) => {
      const user = await Models.Users.findById(jwt_payload.id, {
        attributes: ["id", "email", "phone", "name", "add", "city", "country"],
        raw: true
      });
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    })
  );
};
