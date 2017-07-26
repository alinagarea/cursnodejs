"use strict";

var express = require('express');
var mongo = require('mongodb');
var uuid = require('uuid/v4');

var app = express();
var fs = require("fs");

var mProducts = require('./modules/products');
var mOrders = require('./modules/orders');

//Products
{
    app.put('/products', function (req, res) {

        res.end();

    });

    app.post('/products', function (req, res) {

        res.end();

    });

    app.get('/products', function (req, res) {

        res.end();

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