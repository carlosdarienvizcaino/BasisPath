
// public/js/db/JavaParserDB.js

var mongoose = require('mongoose');
var url = require('./db').JavaParserUrl;

// Create a connection
var connection = mongoose.createConnection(url);

// Get schema from this mongoose instance
var Schema = mongoose.Schema;
// Define a model with this mongoose instance
mongoose.model("JavaParser_Batch", new Schema({
    batchId  : String,
    status   : String
}));

// Retrieve model from connection
var BatchModel = connection.model('JavaParser_Batch');

function save(data){
  
    var batchModel = new BatchModel(data); 
    batchModel.save(function(err, batch){
        if (err) throw err;
        console.log("User saved successfully: " + batch);
    });
}

module.exports = {
    save : save
}
