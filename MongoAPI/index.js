"use strict";

var express = require('express');
var mongo = require('mongodb');
var uuid = require('uuid/v4');

var app = express();
var fs = require("fs");

// var Mongourl = "mongodb://<alinagarea>:<pinkfloyd147>@ds123193.mlab.com:23193/training_nodejs"
var mongoUrl = "mongodb://alinagarea:pinkfloyd147@ds123193.mlab.com:23193/training_nodejs"
var mongoClient = mongo.mongoClient;

var mProducts = require('./modules/products');
mProducts.config.mongoClient = mongoClient;
mProducts.config.mongoUrl = mongoUrl;

var mOrders = require('./modules/orders');
mOrders.config.mongoClient = mongoClient;
mOrders.config.mongoUrl = mongoUrl;
//Products
{
    app.put('/products', function (req, res) {

        res.end();

    });

    app.post('/products', function (req, res) {

        res.end();

    });

    app.get('/products', function (req, res) {

        var products = mProducts.listProduct();
    
        res.end(JSON.stringify(products));


    });

    app.delete('/products', function (req, res) {

        res.end();

    });

}

//Orders
{
    app.put('/orders', function (req, res) {

        res.end();

    });

    app.post('/orders', function (req, res) {

        res.end();

    });

    app.get('/orders', function (req, res) {

        res.end();

    });

    app.delete('/orders', function (req, res) {

        res.end();

    });
}



app.listen(8081, function () {

    console.log("Mongo app listening at");

})