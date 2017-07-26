exports.config = module.exports.config = {

    mongoClient : null,
    mongoUrl : "",

};



exports.createProduct = module.exports.createProduct = function createProduct() {

    console.log('Products create');

}

exports.updateProduct = module.exports.updateProduct = function updateProduct() {

    console.log('Products update');

}

exports.listProduct = module.exports.listProduct = function listProduct() {

    console.log('Products list');

    var mongoClient = this.config.mongoClient;
    var mongoUrl = this.config.mongoUrl;

    mongoClient.connect(mongoUrl, function(err, db){
        if (err){
            throw err;
            console.log('Not connected to Db!');
        }

         console.log("Connected to the Db!");
         var productlist = db.collection("products").find({});

        db.close();

    });

}

exports.getProduct = module.exports.getProduct = function getProduct() {

    console.log('Products get');

}

exports.deleteProduct = module.exports.deleteProduct = function deleteProduct() {

    console.log('Products delete');

}