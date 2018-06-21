var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy; 

passport.serializeUser(function(user, done) { // store user in  session
    done(null, user,id);

})

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) { // mongoose
        done(err, user);
    });
});

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email', 
    passwordField: 'password', 
    passReqToCallback: true
}, function(req, email, password, done){
    User.findOne({'email': email} ,function(err, user){
        if(err) {
            return done(err); 
        }
        if (user) {
            return done(null, false, {message: 'Email is already in use!'})
        }
        var newUser = new User(); 
        newUser.email = email, 
        newUser.passport = newUser.encryptPassword(password);
            // it wont create a new user, need schema, and bcrypt in user.js 
        newUser.save(function(err, result) {
            if(err) {
                return done(err); 
            }
            return done(null, newUser);
        })
    } );
}));


