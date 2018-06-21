var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require ('passport');

var Product = require('../models/product');


var csrfProtection = csrf(); 
router.use(csrfProtection);


/* GET home page. */

router.get('/', function(req, res, next) {
  Product.find(null,  function (err, docs) {   // find product from database 
    console.log("Finding docs: ", docs);
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks }); 
  }); // products are showing to the clients on screen

});

router.get('/user/signup', function(req, res, next ){
    res.render('user/signup', {csrfToken: req.csrfToken()}); // middleware to protect the sign up
      // only click this button that can be worked. 
});

router.post('/user/signup', passport.authenticate('local.signup',{
    successRedirect: '/user/profile', 
    failureRedirect: '/user/signup', 
    failureFlash: true
}));

router.get('/user/profile', function(req, res, next) {
    res.render('user/profile');
})
module.exports = router;
