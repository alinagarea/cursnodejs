exports.config = module.exports.config = {

    mongoClient : null,
    mongoUrl : "",

};


exports.createOrder = module.exports.createOrder = function createOrder(){

    console.log('Orders create');

}

exports.updateOrder = module.exports.updateOrder = function updateOrder(){

    console.log('Orders update');

}

exports.listOrder = module.exports.listOrder = function listOrder(){

    console.log('Orders list');
    var mongoClient = this.config.mongoClient;
    var mongoUrl = this.config.mongoUrl;
    mongoClient.connect(mongoUrl, function(err, db){
        if (err){
            throw err;
            console.log('Not connected to Db!');
        }

         console.log("Connected to the Db!");

        db.close();

    });

}

exports.getOrder = module.exports.getOrder = function getOrder(){

    console.log('Orders get');

}

exports.deleteOrder = module.exports.deleteOrder = function deleteOrder(){

    console.log('Orders delete');

}