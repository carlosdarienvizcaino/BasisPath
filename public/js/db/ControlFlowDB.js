
// public/js/db/ControlFlowDB.js

var mongoose = require('mongoose');
var url = require('../db').ControlFlowUrl;

// Create a connection
var connection = mongoose.createConnection(url);

// Get schema from this mongoose instance
var Schema = mongoose.Schema;
// Define a model with this mongoose instance
mongoose.model("ControlFlow_Batch", new Schema({
    codeType: String
}));

// Retrieve model from connection
var BatchModel = connection.model('ControlFlow_Batch');

function save(data){
  
    var batchModel = new BatchModel(data); 
    batchModel.save(function(err){
        if (err) throw err;
        console.log("User saved successfully");
    });
}

module.exports = {
    save : save
}
