const Product = require('../models/product');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');


const products = [

    new Product({
        imagePath: "https://y.gtimg.cn/music/photo_new/T001R300x300M0000000RHdG1ukDqy.jpg?max_age=2592000",
        title: "League of Legends",
        description: "I love it", 
        price: 40,
    }),

    new Product({
        imagePath: "https://static1.squarespace.com/static/56d725b88a65e2c48c079abf/56d727fbb4ed3b3236511b37/56de3276fd2119d56bf9e739/1462476563995/alienrageunlimited_pc_review.jpg?format=1500w",
        title: "League of Legends",
        description: "Yea, That is for kids", 
        price: 12,    
    }),

   new Product({
        imagePath: "http://imagenesanimadas.co/wp-content/uploads/2018/04/online-games-images-fresh-free-at-addicting.jpg" ,
        title: "DownHill Stunts",
        description: 'Nah, I think okay.!',
        price: 6
   }),

   new Product({
    imagePath: "https://img.bbystatic.com/BestBuy_US/images/products/5834/5834602_sa.jpg" ,
    title: "Dark Souls III",
    description: 'That is super Awesome!',
    price: 32
    
   
   }),

   new Product({
    imagePath: "https://static1.squarespace.com/static/56d725b88a65e2c48c079abf/56d727fbb4ed3b3236511b37/56de3276fd2119d56bf9e739/1462476563995/alienrageunlimited_pc_review.jpg?format=1500w" ,
    title: "Alien Rage",
    description: 'That is not bad',
    price: 15

   }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    console.log("Disconncted from db")
    mongoose.disconnect();
}


