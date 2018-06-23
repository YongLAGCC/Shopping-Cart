var express = require('express');
var router = express.Router();
var Cart = require('../models/product');

var Product = require('../models/product');




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


router.get('/add-to-cart/:id', function(req, res, next){
    var productId = req.params.id;
    var cart = new cart(req.session.cart ? req.session.cart: {items: {}});

    Product.findById(productId, function(err, product) {
        if(err) {
            return res.redirect('/');
        }
        cart.add(product, product.id);
        req.session.cart = cart;  
        console.log(req.session.cart);
        req.redirect('/');
    })
});

module.exports = router;
