const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var User = mongoose.model('User');

passport.use(
    new localStrategy(
        {
            usernameField: 'email'
        },
        (username, password, done) => {
            User.findOne({ email: username }, (err, user) => {
                if (err) {
                    return done(err);
                } else if (!user) {
                    // unknown user
                    return done(null, false, { message: 'No user found with given email id.' });
                } else if (!user.verifyPassword(password)) {
                    // wrong password check
                    return done(null, false, { message: 'Wrong password' });
                } else {
                    return done(null, user);
                }
            });
        }
    )
);
