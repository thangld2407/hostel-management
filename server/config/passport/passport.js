const Account = require('../../models/account');
const bcrypt = require('bcrypt')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

function verifyPassword(account, password) {
    return bcrypt.compareSync(password, account.password);
}

passport.use(new LocalStrategy(
    function (username, password, done) {
        Account.findOne({
                username: username
            },
            function (err, account) {
                if (err) {
                    return done(err)
                }
                if (!account) {
                    return done(null, false)
                }
                if (!verifyPassword(account, password)) {
                    return done(null, false);
                }
                return done(null, account)
            }
        )
    }
))

passport.serializeUser((account, done) => {
    return done(null, account._id.toString());
  });
  
  passport.deserializeUser((account, done) => {
    return done(null, account);
  });