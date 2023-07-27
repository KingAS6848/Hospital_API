const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const Doctor = require("../models/doctor");

console.log("Inside JWT Configuration");

// JWT strategy options
let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "hospital",
};

// Configuring the JWT strategy for passport
passport.use(
  new JWTStrategy(opts, (jwtPayload, done) => {
    Doctor.findById(jwtPayload._id)
      .then((doctor) => {
        if (doctor) return done(null, doctor); 
        else return done(null, false); 
      })
      .catch((err) => {
        console.log("Error finding doctor from JWT:", err);
        return done(err, false);
      });
  })
);

module.exports = passport;
