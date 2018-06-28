var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');

var Product = require('../models/product');


/* GET home page. */

router.get('/', function(req, res, next) {
  Product.find(null,  function (err, docs) {   // find product from database 
   // console.log("Finding docs: ", docs);
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
    //check if the car propoty exist, otherwise, it will create a empty object
    var cart = new Cart(req.session.cart ? req.session.cart: {});

    Product.findById(productId, function(err, product) {
        if(err) {
            return res.redirect('/');
        }
        cart.add(product, product.id);
        req.session.cart = cart; 
        console.log('************',req.session.cart);
        res.redirect('/');
    });
});

router.get('/shopping-cart', function(req, res, next) {
    if(!req.session.cart) {
        return res.render('shop/shopping-cart', {products: null});
    }
    var cart = new Cart(req.session.cart);
    res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice })
})


router.get('/checkout', function(req, res, next) {
    if(!req.session.cart) {
        res.redirect('shop/checkout');
    }
    var cart = new Cart(req.session.cart); // ????????????????????????????????
    res.render('shop/checkout', {totalPrice: cart.totalPrice})   
})
module.exports = router;
