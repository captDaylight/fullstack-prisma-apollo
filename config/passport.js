const passport = require('passport');
const LocalStrategy = require('passport-local');

module.exports = (db) => {
  passport.use('localLogin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, async (email, password, done) => {
    const user = await db.query.user({ where: { email } });

    // check that user pass is correct

    // return user
  });
}
